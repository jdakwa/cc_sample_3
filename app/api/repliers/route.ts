import { NextRequest, NextResponse } from "next/server"
import { getListings, getListingById } from "@/lib/repliers"

// Proxy route for Repliers API to keep API keys secure
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const action = searchParams.get("action")
    const id = searchParams.get("id")

    if (action === "listing" && id) {
      // Get single listing
      const listing = await getListingById(id)
      if (!listing) {
        return NextResponse.json(
          { error: "Listing not found" },
          { status: 404 }
        )
      }
      return NextResponse.json(listing)
    }

    if (action === "listings") {
      // Get listings with filters
      const filters: any = {}
      
      const minPrice = searchParams.get("minPrice")
      const maxPrice = searchParams.get("maxPrice")
      const bedrooms = searchParams.get("bedrooms")
      const bathrooms = searchParams.get("bathrooms")
      const propertyType = searchParams.get("propertyType")
      const city = searchParams.get("city")
      const state = searchParams.get("state")
      const zip = searchParams.get("zip")
      const status = searchParams.get("status")
      const sortBy = searchParams.get("sortBy")
      const page = searchParams.get("page")
      const limit = searchParams.get("limit")

      if (minPrice) filters.minPrice = Number(minPrice)
      if (maxPrice) filters.maxPrice = Number(maxPrice)
      if (bedrooms) filters.bedrooms = Number(bedrooms)
      if (bathrooms) filters.bathrooms = Number(bathrooms)
      if (propertyType) filters.propertyType = propertyType
      if (city) filters.city = city
      if (state) filters.state = state
      if (zip) filters.zip = zip
      if (status) filters.status = status
      if (sortBy) filters.sortBy = sortBy
      if (page) filters.page = Number(page)
      if (limit) filters.limit = Number(limit)

      const results = await getListings(filters)
      return NextResponse.json(results)
    }

    return NextResponse.json(
      { error: "Invalid action parameter" },
      { status: 400 }
    )
  } catch (error) {
    console.error("Repliers API proxy error:", error)
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    )
  }
}
