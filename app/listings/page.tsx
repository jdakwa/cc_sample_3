import { Suspense } from "react"
import { PropertyCard } from "@/components/real-estate/PropertyCard"
import { getListings } from "@/lib/repliers"
import { type PropertySearchFilters } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { ListingsClient } from "./ListingsClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Property Search - IDX Pro",
  description: "Search thousands of properties with advanced filters. Find your dream home today.",
}

interface ListingsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ListingsPage({ searchParams }: ListingsPageProps) {
  // Await searchParams (Next.js 16+ requires this)
  const params = await searchParams
  
  // Parse search params into filters
  const filters: PropertySearchFilters = {
    minPrice: params.minPrice ? Number(params.minPrice) : undefined,
    maxPrice: params.maxPrice ? Number(params.maxPrice) : undefined,
    bedrooms: params.bedrooms ? Number(params.bedrooms) : undefined,
    bathrooms: params.bathrooms ? Number(params.bathrooms) : undefined,
    propertyType: params.propertyType as string | undefined,
    city: params.city as string | undefined,
    state: params.state as string | undefined,
    zip: params.zip as string | undefined,
    status: (params.status as string) || "active",
    sortBy: (params.sortBy as any) || undefined,
    page: params.page ? Number(params.page) : 1,
    limit: 20,
  }

  // Remove undefined values
  Object.keys(filters).forEach((key) => {
    if (filters[key as keyof PropertySearchFilters] === undefined) {
      delete filters[key as keyof PropertySearchFilters]
    }
  })

  const results = await getListings(filters)

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Property Search</h1>
        <p className="mt-2 text-muted-foreground">
          Find your perfect property from our extensive listings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Suspense fallback={<div>Loading filters...</div>}>
            <ListingsClient initialFilters={filters} initialResults={results} />
          </Suspense>
        </div>

        {/* Results */}
        <div className="lg:col-span-3">
          {results.properties.length > 0 ? (
            <>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing {results.properties.length} of {results.total} properties
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {results.properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              {/* Pagination */}
              {results.totalPages > 1 && (
                <div className="mt-8 flex justify-center gap-2">
                  {Array.from({ length: results.totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={filters.page === page ? "default" : "outline"}
                        asChild
                      >
                        <a
                          href={`/listings?${new URLSearchParams({
                            ...params,
                            page: page.toString(),
                          } as any).toString()}`}
                        >
                          {page}
                        </a>
                      </Button>
                    )
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No properties found matching your criteria.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your filters or search again.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
