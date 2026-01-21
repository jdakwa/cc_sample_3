import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/real-estate/PropertyCard"
import { getListings } from "@/lib/repliers"
import { Search, Home, TrendingUp, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default async function HomePage() {
  // Fetch featured listings (first 4 properties)
  let featuredListings;
  try {
    featuredListings = await getListings({ limit: 4, status: "active" });
    // Ensure featuredListings is always a valid object
    if (!featuredListings || !featuredListings.properties) {
      featuredListings = {
        properties: [],
        total: 0,
        page: 1,
        limit: 4,
        totalPages: 0,
      };
    }
  } catch (error) {
    // Fallback to empty response on error
    featuredListings = {
      properties: [],
      total: 0,
      page: 1,
      limit: 4,
      totalPages: 0,
    };
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-off-white via-white to-sandstone/30 py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyREQ0QkYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAgMGgtMnYtMmgydjJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        <div className="container relative">
          <div className="mx-auto max-w-5xl text-center px-4 sm:px-6">
            <div className="inline-flex items-center justify-center mb-6 px-4 py-2 bg-seafoam/10 text-seafoam text-xs sm:text-sm font-semibold rounded-full backdrop-blur-sm border border-seafoam/20">
              Coastal Luxury Living
            </div>
            <h1 className="font-bold tracking-tight text-navy leading-[1.1]">
              Discover Your
              <span className="block mt-2 sm:mt-3 luxury-text-gradient">Perfect Home</span>
            </h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl leading-relaxed text-soft-gray max-w-3xl mx-auto">
              Explore exclusive properties and coastal estates with our comprehensive search tools and expert guidance.
            </p>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/listings" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all">
                  <Search className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Browse Properties
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 h-auto font-semibold border-2 hover:bg-slate-50 transition-all">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-sandstone">
        <div className="container">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-bold text-navy mb-3 sm:mb-4">Search by Property Type</h2>
              <p className="text-sm sm:text-base text-soft-gray">Find your ideal home in our curated collection</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Link href="/listings?propertyType=House" className="group">
                <Card className="border-2 border-sandstone hover:border-seafoam transition-all duration-300 hover:shadow-xl h-full">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-seafoam/10 text-seafoam mb-4 group-hover:bg-seafoam group-hover:text-white transition-all duration-300">
                      <Home className="h-7 w-7 sm:h-8 sm:w-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">Houses</h3>
                    <p className="text-xs sm:text-sm text-soft-gray">Single-family homes</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/listings?propertyType=Condo" className="group">
                <Card className="border-2 border-sandstone hover:border-seafoam transition-all duration-300 hover:shadow-xl h-full">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-seafoam/10 text-seafoam mb-4 group-hover:bg-seafoam group-hover:text-white transition-all duration-300">
                      <Home className="h-7 w-7 sm:h-8 sm:w-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">Condos</h3>
                    <p className="text-xs sm:text-sm text-soft-gray">Modern condominiums</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/listings?propertyType=Townhouse" className="group">
                <Card className="border-2 border-sandstone hover:border-seafoam transition-all duration-300 hover:shadow-xl h-full">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-seafoam/10 text-seafoam mb-4 group-hover:bg-seafoam group-hover:text-white transition-all duration-300">
                      <Home className="h-7 w-7 sm:h-8 sm:w-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">Townhouses</h3>
                    <p className="text-xs sm:text-sm text-soft-gray">Multi-level living</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      {featuredListings?.properties && featuredListings.properties.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-off-white to-white">
          <div className="container">
            <div className="mb-8 sm:mb-12 lg:mb-16 text-center px-4 sm:px-6">
              <h2 className="font-bold tracking-tight text-navy mb-3 sm:mb-4">Featured Properties</h2>
              <p className="text-sm sm:text-base lg:text-lg text-soft-gray max-w-2xl mx-auto">
                Handpicked coastal homes and exclusive listings curated for discerning buyers
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 px-4 sm:px-6">
              {featuredListings.properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            <div className="mt-8 sm:mt-12 text-center px-4 sm:px-6">
              <Link href="/listings">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-5 sm:py-6 h-auto text-sm sm:text-base font-semibold border-2 hover:bg-white transition-all">
                  View All Properties
                  <TrendingUp className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Trust Indicators */}
      <section className="py-12 sm:py-16 lg:py-20 bg-sandstone/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-seafoam/20 to-seafoam/5 mb-4 sm:mb-6 transition-transform hover:scale-110 border border-seafoam/20">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-seafoam" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-navy">Trusted Service</h3>
              <p className="text-sm sm:text-base text-soft-gray leading-relaxed max-w-sm mx-auto">
                Decades of expertise guiding clients through seamless real estate transactions with integrity
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-seafoam/20 to-seafoam/5 mb-4 sm:mb-6 transition-transform hover:scale-110 border border-seafoam/20">
                <Search className="h-8 w-8 sm:h-10 sm:w-10 text-seafoam" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-navy">Advanced Search</h3>
              <p className="text-sm sm:text-base text-soft-gray leading-relaxed max-w-sm mx-auto">
                Sophisticated filtering and AI-powered recommendations to match your unique preferences
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-seafoam/20 to-seafoam/5 mb-4 sm:mb-6 transition-transform hover:scale-110 border border-seafoam/20">
                <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-seafoam" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-navy">Market Insights</h3>
              <p className="text-sm sm:text-base text-soft-gray leading-relaxed max-w-sm mx-auto">
                Real-time data and expert analysis to help you make informed investment decisions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
