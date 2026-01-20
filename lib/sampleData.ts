import { Property, PropertySearchResponse } from './types';

// Sample property data for development and fallback
const sampleProperties: Property[] = [
  {
    id: 'sample-1',
    mlsNumber: 'MLS-2024-001',
    address: {
      street: '1234 Oak Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94102',
      fullAddress: '1234 Oak Street, San Francisco, CA 94102',
    },
    price: 1250000,
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 2400,
    lotSize: 5000,
    yearBuilt: 2015,
    propertyType: 'Single Family',
    status: 'active',
    description: 'Beautiful modern home in the heart of San Francisco. This stunning property features an open floor plan, updated kitchen with granite countertops, and a spacious master suite. The home includes a private backyard perfect for entertaining. Located in a desirable neighborhood with excellent schools nearby.',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
    ],
    coordinates: {
      lat: 37.7749,
      lng: -122.4194,
    },
    listingDate: '2024-01-15',
    daysOnMarket: 12,
    pricePerSquareFoot: 521,
    garage: 2,
    stories: 2,
  },
  {
    id: 'sample-2',
    mlsNumber: 'MLS-2024-002',
    address: {
      street: '5678 Maple Avenue',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90028',
      fullAddress: '5678 Maple Avenue, Los Angeles, CA 90028',
    },
    price: 895000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1800,
    lotSize: 3500,
    yearBuilt: 2018,
    propertyType: 'Condo',
    status: 'active',
    description: 'Stylish contemporary condo with city views. Features include hardwood floors, updated appliances, and a private balcony. Building amenities include a fitness center, pool, and 24-hour security. Perfect for professionals or first-time buyers.',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    ],
    coordinates: {
      lat: 34.0522,
      lng: -118.2437,
    },
    listingDate: '2024-01-20',
    daysOnMarket: 8,
    pricePerSquareFoot: 497,
    garage: 1,
    stories: 1,
  },
  {
    id: 'sample-3',
    mlsNumber: 'MLS-2024-003',
    address: {
      street: '9012 Pine Drive',
      city: 'San Diego',
      state: 'CA',
      zip: '92101',
      fullAddress: '9012 Pine Drive, San Diego, CA 92101',
    },
    price: 1650000,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 3200,
    lotSize: 8000,
    yearBuilt: 2020,
    propertyType: 'Single Family',
    status: 'active',
    description: 'Luxury home with ocean views. This stunning property features a chef\'s kitchen, wine cellar, and infinity pool. The master suite includes a spa-like bathroom and walk-in closet. Smart home technology throughout. Located in an exclusive gated community.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    ],
    coordinates: {
      lat: 32.7157,
      lng: -117.1611,
    },
    listingDate: '2024-01-10',
    daysOnMarket: 18,
    pricePerSquareFoot: 516,
    garage: 3,
    stories: 2,
  },
  {
    id: 'sample-4',
    mlsNumber: 'MLS-2024-004',
    address: {
      street: '3456 Elm Court',
      city: 'San Francisco',
      state: 'CA',
      zip: '94110',
      fullAddress: '3456 Elm Court, San Francisco, CA 94110',
    },
    price: 750000,
    bedrooms: 2,
    bathrooms: 1.5,
    squareFeet: 1500,
    lotSize: 2500,
    yearBuilt: 2012,
    propertyType: 'Townhouse',
    status: 'pending',
    description: 'Charming townhouse in a quiet neighborhood. Recently renovated with new flooring, paint, and fixtures. Features a private patio and attached garage. Close to parks, shopping, and public transportation.',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    ],
    coordinates: {
      lat: 37.7749,
      lng: -122.4194,
    },
    listingDate: '2024-01-05',
    daysOnMarket: 25,
    pricePerSquareFoot: 500,
    garage: 1,
    stories: 2,
  },
  {
    id: 'sample-5',
    mlsNumber: 'MLS-2024-005',
    address: {
      street: '7890 Cedar Lane',
      city: 'Oakland',
      state: 'CA',
      zip: '94601',
      fullAddress: '7890 Cedar Lane, Oakland, CA 94601',
    },
    price: 650000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 2000,
    lotSize: 4000,
    yearBuilt: 2010,
    propertyType: 'Single Family',
    status: 'active',
    description: 'Spacious family home with a large backyard. Features include a modern kitchen, formal dining room, and family room with fireplace. The property includes a detached garage and workshop. Great for families looking for space and privacy.',
    images: [
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
    ],
    coordinates: {
      lat: 37.8044,
      lng: -122.2711,
    },
    listingDate: '2024-01-18',
    daysOnMarket: 10,
    pricePerSquareFoot: 325,
    garage: 2,
    stories: 1,
  },
  {
    id: 'sample-6',
    mlsNumber: 'MLS-2024-006',
    address: {
      street: '2345 Birch Boulevard',
      city: 'San Jose',
      state: 'CA',
      zip: '95110',
      fullAddress: '2345 Birch Boulevard, San Jose, CA 95110',
    },
    price: 1100000,
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 2800,
    lotSize: 6000,
    yearBuilt: 2019,
    propertyType: 'Single Family',
    status: 'active',
    description: 'Modern home in tech hub area. Features include smart home automation, solar panels, and energy-efficient design. Open concept living with high ceilings and natural light. Backyard includes built-in BBQ and fire pit area.',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
    ],
    coordinates: {
      lat: 37.3382,
      lng: -121.8863,
    },
    listingDate: '2024-01-12',
    daysOnMarket: 15,
    pricePerSquareFoot: 393,
    garage: 2,
    stories: 2,
  },
];

// Get sample listings with optional filters
export function getSampleListings(filters: {
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: string;
  city?: string;
  state?: string;
  status?: string;
  page?: number;
  limit?: number;
} = {}): PropertySearchResponse {
  let filtered = [...sampleProperties];

  // Apply filters
  if (filters.minPrice !== undefined) {
    filtered = filtered.filter((p) => p.price >= filters.minPrice!);
  }
  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.price <= filters.maxPrice!);
  }
  if (filters.bedrooms !== undefined) {
    filtered = filtered.filter((p) => p.bedrooms >= filters.bedrooms!);
  }
  if (filters.bathrooms !== undefined) {
    filtered = filtered.filter((p) => p.bathrooms >= filters.bathrooms!);
  }
  if (filters.propertyType) {
    filtered = filtered.filter((p) => 
      p.propertyType.toLowerCase().includes(filters.propertyType!.toLowerCase())
    );
  }
  if (filters.city) {
    filtered = filtered.filter((p) => 
      p.address.city.toLowerCase().includes(filters.city!.toLowerCase())
    );
  }
  if (filters.state) {
    filtered = filtered.filter((p) => 
      p.address.state.toLowerCase() === filters.state!.toLowerCase()
    );
  }
  if (filters.status) {
    filtered = filtered.filter((p) => p.status === filters.status);
  }

  // Pagination
  const page = filters.page || 1;
  const limit = filters.limit || 20;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginated = filtered.slice(startIndex, endIndex);

  return {
    properties: paginated,
    total: filtered.length,
    page,
    limit,
    totalPages: Math.ceil(filtered.length / limit),
  };
}

// Get sample listing by ID
export function getSampleListingById(id: string): Property | null {
  return sampleProperties.find((p) => p.id === id) || null;
}
