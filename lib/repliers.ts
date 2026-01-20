import { Property, PropertySearchFilters, PropertySearchResponse } from './types';

const REPLIERS_API_BASE = process.env.NEXT_PUBLIC_REPLIERS_API_URL || 'https://api.repliers.io';
const REPLIERS_API_KEY = process.env.REPLIERS_API_KEY;

if (!REPLIERS_API_KEY) {
  console.warn('REPLIERS_API_KEY is not set. API calls will fail.');
}

interface RepliersApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: Record<string, string>;
}

async function repliersApiRequest<T>(
  endpoint: string,
  options: RepliersApiOptions = {}
): Promise<T> {
  const { method = 'GET', body, headers = {} } = options;

  const url = `${REPLIERS_API_BASE}${endpoint}`;
  
  const requestHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    ...headers,
  };

  // Repliers API uses 'auth-api-key' header (not Authorization Bearer)
  if (REPLIERS_API_KEY) {
    requestHeaders['auth-api-key'] = REPLIERS_API_KEY;
  }

  const config: RequestInit = {
    method,
    headers: requestHeaders,
  };

  if (body && method !== 'GET') {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      // Handle 401 errors gracefully when API key is not set (expected in development)
      if (response.status === 401 && !REPLIERS_API_KEY) {
        // Silently throw special error - will be handled by calling functions
        throw new Error('UNAUTHORIZED_NO_KEY');
      }
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.message || `API request failed: ${response.status} ${response.statusText}`;
      // Don't log 401 errors when API key is missing (expected in development)
      if (!(response.status === 401 && !REPLIERS_API_KEY)) {
        console.error('Repliers API Error:', errorMessage);
      }
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    // Re-throw UNAUTHORIZED_NO_KEY to be handled by calling functions
    if (error instanceof Error && error.message === 'UNAUTHORIZED_NO_KEY') {
      throw error;
    }
    // Only log if API key is set (to avoid noise in development)
    if (REPLIERS_API_KEY) {
      console.error('Repliers API Error:', error);
    }
    throw error;
  }
}

// Get all listings with optional filters
export async function getListings(
  filters: PropertySearchFilters = {}
): Promise<PropertySearchResponse> {
  try {
    // Build query parameters
    const params = new URLSearchParams();
    
    if (filters.minPrice) params.append('minPrice', filters.minPrice.toString());
    if (filters.maxPrice) params.append('maxPrice', filters.maxPrice.toString());
    if (filters.bedrooms) params.append('bedrooms', filters.bedrooms.toString());
    if (filters.bathrooms) params.append('bathrooms', filters.bathrooms.toString());
    if (filters.minSquareFeet) params.append('minSquareFeet', filters.minSquareFeet.toString());
    if (filters.maxSquareFeet) params.append('maxSquareFeet', filters.maxSquareFeet.toString());
    if (filters.propertyType) params.append('propertyType', filters.propertyType);
    if (filters.city) params.append('city', filters.city);
    if (filters.state) params.append('state', filters.state);
    if (filters.zip) params.append('zip', filters.zip);
    if (filters.status) params.append('status', filters.status);
    if (filters.sortBy) params.append('sortBy', filters.sortBy);
    if (filters.page) params.append('page', filters.page.toString());
    if (filters.limit) params.append('limit', filters.limit.toString());

    const queryString = params.toString();
    const endpoint = `/listings${queryString ? `?${queryString}` : ''}`;

    const response = await repliersApiRequest<PropertySearchResponse>(endpoint);
    return response;
  } catch (error) {
    // Handle UNAUTHORIZED_NO_KEY silently (expected in development)
    if (error instanceof Error && error.message === 'UNAUTHORIZED_NO_KEY') {
      // Return empty response without logging
      return {
        properties: [],
        total: 0,
        page: 1,
        limit: 20,
        totalPages: 0,
      };
    }
    // Only log if API key is set (to avoid noise in development)
    if (REPLIERS_API_KEY) {
      console.error('Error fetching listings:', error);
    }
    // Return empty response on error
    return {
      properties: [],
      total: 0,
      page: 1,
      limit: 20,
      totalPages: 0,
    };
  }
}

// Get single listing by ID
export async function getListingById(id: string): Promise<Property | null> {
  try {
    const listing = await repliersApiRequest<Property>(`/listings/${id}`);
    return listing;
  } catch (error) {
    // Only log if API key is set (to avoid noise in development)
    if (REPLIERS_API_KEY) {
      console.error('Error fetching listing:', error);
    }
    return null;
  }
}

// Get listing images
export async function getListingImages(id: string): Promise<string[]> {
  try {
    const images = await repliersApiRequest<string[]>(`/listings/${id}/images`);
    return images;
  } catch (error) {
    // Only log if API key is set (to avoid noise in development)
    if (REPLIERS_API_KEY) {
      console.error('Error fetching listing images:', error);
    }
    return [];
  }
}

// Submit lead inquiry
export async function submitInquiry(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId?: string;
  type: 'buyer' | 'seller';
}): Promise<{ success: boolean; message?: string }> {
  try {
    const response = await repliersApiRequest<{ success: boolean; message?: string }>(
      '/inquiries',
      {
        method: 'POST',
        body: data,
      }
    );
    return response;
  } catch (error) {
    // Only log if API key is set (to avoid noise in development)
    if (REPLIERS_API_KEY) {
      console.error('Error submitting inquiry:', error);
    }
    return { success: false, message: 'Failed to submit inquiry' };
  }
}

// Helper function to format price
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}

// Helper function to format address
export function formatAddress(address: Property['address']): string {
  if (address.fullAddress) return address.fullAddress;
  return `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
}
