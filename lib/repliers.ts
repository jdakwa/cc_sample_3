import { Property, PropertySearchFilters, PropertySearchResponse } from './types';
import { getSampleListings, getSampleListingById } from './sampleData';

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

  // Repliers API authentication - uses REPLIERS-API-KEY header
  if (REPLIERS_API_KEY) {
    requestHeaders['REPLIERS-API-KEY'] = REPLIERS_API_KEY;
  }

  const config: RequestInit = {
    method,
    headers: requestHeaders,
  };

  // For POST/PUT/PATCH requests, include body (even if empty object)
  if (method !== 'GET' && body !== undefined) {
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

// Transform Repliers API listing to our Property format
function transformRepliersListing(listing: any): Property {
  return {
    id: listing.mlsNumber || listing.resource || String(listing.listPrice || Math.random()),
    mlsNumber: listing.mlsNumber || '',
    address: {
      street: listing.address?.streetNumber 
        ? `${listing.address.streetNumber} ${listing.address.streetName || ''} ${listing.address.streetSuffix || ''}`.trim()
        : listing.address?.streetName || '',
      city: listing.address?.city || '',
      state: listing.address?.state || '',
      zip: listing.address?.zip || '',
      fullAddress: listing.address?.addressKey || undefined,
    },
    price: listing.listPrice || 0,
    bedrooms: listing.details?.numBedrooms || 0,
    bathrooms: listing.details?.numBathrooms || 0,
    squareFeet: parseInt(listing.details?.sqft || '0') || 0,
    lotSize: listing.lot?.squareFeet || listing.lot?.size ? parseInt(String(listing.lot.size)) : undefined,
    yearBuilt: listing.details?.yearBuilt ? parseInt(String(listing.details.yearBuilt)) : undefined,
    propertyType: listing.details?.propertyType || listing.class || '',
    status: listing.status === 'A' ? 'active' : listing.status === 'P' ? 'pending' : listing.status === 'S' ? 'sold' : 'off_market',
    description: listing.details?.description || '',
    images: Array.isArray(listing.images) 
      ? listing.images.map((img: any) => {
          const imgUrl = typeof img === 'string' ? img : (img?.url || img || '');
          // Convert relative image paths to absolute URLs
          if (imgUrl && typeof imgUrl === 'string' && imgUrl.trim().length > 0) {
            // If it's already an absolute URL, use it
            if (imgUrl.startsWith('http://') || imgUrl.startsWith('https://')) {
              return imgUrl;
            }
            // Repliers images - convert relative paths to absolute URLs
            // Note: Actual CDN URL may need to be configured via env variable
            const cdnBase = process.env.NEXT_PUBLIC_REPLIERS_CDN_URL || 'https://cdn.repliers.io';
            // Remove leading slash if present, then add it back with CDN base
            const cleanPath = imgUrl.startsWith('/') ? imgUrl.slice(1) : imgUrl;
            return `${cdnBase}/${cleanPath}`;
          }
          return '';
        }).filter((url: string) => url && url.length > 0)
      : [],
    coordinates: listing.map?.latitude && listing.map?.longitude
      ? {
          lat: listing.map.latitude,
          lng: listing.map.longitude,
        }
      : undefined,
    listingDate: listing.listDate,
    daysOnMarket: listing.daysOnMarket || listing.simpleDaysOnMarket,
    pricePerSquareFoot: listing.listPrice && listing.details?.sqft 
      ? Math.round(listing.listPrice / parseInt(listing.details.sqft))
      : undefined,
    garage: listing.details?.numGarageSpaces,
    ...listing, // Include all other fields
  };
}

// Get all listings with optional filters
// Repliers API uses POST for listing searches
export async function getListings(
  filters: PropertySearchFilters = {}
): Promise<PropertySearchResponse> {
  try {
    // Build request body for POST request
    const body: Record<string, any> = {};
    
    if (filters.minPrice !== undefined) body.minPrice = filters.minPrice;
    if (filters.maxPrice !== undefined) body.maxPrice = filters.maxPrice;
    if (filters.bedrooms !== undefined) body.bedrooms = filters.bedrooms;
    if (filters.bathrooms !== undefined) body.bathrooms = filters.bathrooms;
    if (filters.minSquareFeet !== undefined) body.minSquareFeet = filters.minSquareFeet;
    if (filters.maxSquareFeet !== undefined) body.maxSquareFeet = filters.maxSquareFeet;
    if (filters.propertyType) body.propertyType = filters.propertyType;
    if (filters.city) body.city = filters.city;
    if (filters.state) body.state = filters.state;
    if (filters.zip) body.zip = filters.zip;
    if (filters.status) body.status = filters.status;
    if (filters.sortBy) body.sortBy = filters.sortBy;
    if (filters.page !== undefined) body.page = filters.page;
    if (filters.limit !== undefined) body.pageSize = filters.limit;

    // Use POST method for listing search
    // Send empty object if no filters to ensure POST request is made
    const response = await repliersApiRequest<{
      listings?: any[];
      count?: number;
      page?: number;
      pageSize?: number;
      numPages?: number;
    }>(
      '/listings',
      {
        method: 'POST',
        body: Object.keys(body).length > 0 ? body : {},
      }
    );

    // Transform Repliers API response to our format
    const listings = response.listings || [];
    const transformedProperties = listings.map(transformRepliersListing);

    return {
      properties: transformedProperties,
      total: response.count || 0,
      page: response.page || 1,
      limit: response.pageSize || filters.limit || 20,
      totalPages: response.numPages || 0,
    };
  } catch (error) {
    // Handle UNAUTHORIZED_NO_KEY silently (expected in development)
    if (error instanceof Error && error.message === 'UNAUTHORIZED_NO_KEY') {
      // Fall back to sample data when API key is not set
      console.log('Using sample data (API key not configured)');
      return getSampleListings(filters);
    }
    // Only log if API key is set (to avoid noise in development)
    if (REPLIERS_API_KEY) {
      console.error('Error fetching listings:', error);
      // Fall back to sample data on error if API key is set
      console.log('Falling back to sample data due to API error');
      return getSampleListings(filters);
    }
    // Fall back to sample data when API key is not set
    console.log('Using sample data (API key not configured)');
    return getSampleListings(filters);
  }
}

// Get single listing by ID
export async function getListingById(id: string): Promise<Property | null> {
  try {
    const listing = await repliersApiRequest<Property>(`/listings/${id}`);
    return listing;
  } catch (error) {
    // Handle UNAUTHORIZED_NO_KEY silently (expected in development)
    if (error instanceof Error && error.message === 'UNAUTHORIZED_NO_KEY') {
      // Fall back to sample data when API key is not set
      console.log('Using sample data (API key not configured)');
      return getSampleListingById(id);
    }
    // Only log if API key is set (to avoid noise in development)
    if (REPLIERS_API_KEY) {
      console.error('Error fetching listing:', error);
      // Fall back to sample data on error if API key is set
      console.log('Falling back to sample data due to API error');
      return getSampleListingById(id);
    }
    // Fall back to sample data when API key is not set
    console.log('Using sample data (API key not configured)');
    return getSampleListingById(id);
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

// Helper function to normalize image URL (convert relative to absolute)
export function normalizeImageUrl(imgUrl: string | undefined | null): string {
  if (!imgUrl || typeof imgUrl !== 'string' || imgUrl.trim().length === 0) {
    return "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop";
  }
  
  // If it's already an absolute URL, use it
  if (imgUrl.startsWith('http://') || imgUrl.startsWith('https://')) {
    return imgUrl;
  }
  
  // Convert relative path to absolute URL
  const cdnBase = process.env.NEXT_PUBLIC_REPLIERS_CDN_URL || 'https://cdn.repliers.io';
  const cleanPath = imgUrl.startsWith('/') ? imgUrl.slice(1) : imgUrl;
  return `${cdnBase}/${cleanPath}`;
}
