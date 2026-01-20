import { NextRequest, NextResponse } from 'next/server';
import { getSampleListings, getSampleListingById } from '@/lib/sampleData';

// API route for sample property data
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const action = searchParams.get('action');
    const id = searchParams.get('id');

    if (action === 'listing' && id) {
      // Get single listing
      const listing = getSampleListingById(id);
      if (!listing) {
        return NextResponse.json(
          { error: 'Listing not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(listing);
    }

    if (action === 'listings' || !action) {
      // Get listings with filters
      const filters: any = {};
      
      const minPrice = searchParams.get('minPrice');
      const maxPrice = searchParams.get('maxPrice');
      const bedrooms = searchParams.get('bedrooms');
      const bathrooms = searchParams.get('bathrooms');
      const propertyType = searchParams.get('propertyType');
      const city = searchParams.get('city');
      const state = searchParams.get('state');
      const status = searchParams.get('status');
      const page = searchParams.get('page');
      const limit = searchParams.get('limit');

      if (minPrice) filters.minPrice = Number(minPrice);
      if (maxPrice) filters.maxPrice = Number(maxPrice);
      if (bedrooms) filters.bedrooms = Number(bedrooms);
      if (bathrooms) filters.bathrooms = Number(bathrooms);
      if (propertyType) filters.propertyType = propertyType;
      if (city) filters.city = city;
      if (state) filters.state = state;
      if (status) filters.status = status;
      if (page) filters.page = Number(page);
      if (limit) filters.limit = Number(limit);

      const results = getSampleListings(filters);
      return NextResponse.json(results);
    }

    return NextResponse.json(
      { error: 'Invalid action. Use "listings" or "listing?id=..."' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Sample data API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
