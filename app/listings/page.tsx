import { Suspense } from "react"
import { PropertyCard } from "@/components/real-estate/PropertyCard"
import { getListings } from "@/lib/repliers"
import { type PropertySearchFilters } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { ListingsClient } from "./ListingsClient"
import type { Metadata } from "next"
import { Search } from "lucide-react"

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
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-8 sm:py-12 lg:py-16">
        <div className="container px-4 sm:px-6">
          <h1 className="font-bold tracking-tight text-slate-900">Property Search</h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-slate-600">
            Discover exceptional homes tailored to your lifestyle
          </p>
        </div>
      </div>
      <div className="container py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Suspense fallback={<div className="bg-white rounded-xl p-6 border border-slate-200">Loading filters...</div>}>
            <ListingsClient initialFilters={filters} initialResults={results} />
          </Suspense>
        </div>

        {/* Results */}
        <div className="lg:col-span-3">
            {results?.properties && results.properties.length > 0 ? (
              <>
                <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs sm:text-sm font-medium text-slate-700">
                    <span className="text-primary font-bold text-sm sm:text-base">{results.total.toLocaleString()}</span> properties found
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Showing {results.properties.length} results
                  </p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
                  {results.properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>

              {/* Pagination */}
              {results.totalPages > 1 && (
                <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2">
                  {Array.from({ length: results.totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={filters.page === page ? "default" : "outline"}
                        size="sm"
                        asChild
                        className="min-w-[2.5rem] shadow-sm"
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
            <div className="text-center py-16 sm:py-20 bg-white rounded-2xl border border-slate-200 shadow-sm px-4">
              <div className="max-w-md mx-auto">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-100 mb-4 sm:mb-6">
                  <Search className="h-7 w-7 sm:h-8 sm:w-8 text-slate-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
                  No Properties Found
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-2">
                  We couldn't find any properties matching your criteria.
                </p>
                <p className="text-xs sm:text-sm text-slate-500">
                  Try adjusting your filters or broadening your search.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}
