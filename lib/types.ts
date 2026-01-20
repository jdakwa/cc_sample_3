// Repliers API Types
export interface PropertyAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  fullAddress?: string;
}

export interface PropertyCoordinates {
  lat: number;
  lng: number;
}

export interface PropertyImage {
  url: string;
  thumbnail?: string;
  caption?: string;
}

export interface Property {
  id: string;
  mlsNumber: string;
  address: PropertyAddress;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  lotSize?: number;
  yearBuilt?: number;
  propertyType: string;
  status: 'active' | 'pending' | 'sold' | 'off_market';
  description: string;
  images: PropertyImage[] | string[];
  coordinates?: PropertyCoordinates;
  listingDate?: string;
  daysOnMarket?: number;
  pricePerSquareFoot?: number;
  // Additional fields
  garage?: number;
  stories?: number;
  lotType?: string;
  schoolDistrict?: string;
  [key: string]: any; // For additional Repliers fields
}

export interface PropertySearchFilters {
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  minSquareFeet?: number;
  maxSquareFeet?: number;
  propertyType?: string;
  city?: string;
  state?: string;
  zip?: string;
  status?: string;
  sortBy?: 'price_asc' | 'price_desc' | 'date_desc' | 'square_feet_desc';
  page?: number;
  limit?: number;
}

export interface PropertySearchResponse {
  properties: Property[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId?: string;
  propertyAddress?: string;
  type: 'buyer' | 'seller';
}
