import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/real-estate/PropertyCard"
import { getListings } from "@/lib/repliers"
import { Search, Home, TrendingUp, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default async function HomePage() {
  // Fetch featured listings (first 4 properties)
  const featuredListings = await getListings({ limit: 4, status: "active" })

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Find Your Dream Home
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Search thousands of properties, from cozy condos to luxury estates.
              Your perfect home is just a click away.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link href="/listings">
                <Button size="lg" className="text-lg px-8">
                  <Search className="mr-2 h-5 w-5" />
                  Search Properties
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Quick Search</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/listings?propertyType=House">
                    <Button variant="outline" className="w-full h-20 flex-col">
                      <Home className="h-6 w-6 mb-2" />
                      Houses
                    </Button>
                  </Link>
                  <Link href="/listings?propertyType=Condo">
                    <Button variant="outline" className="w-full h-20 flex-col">
                      <Home className="h-6 w-6 mb-2" />
                      Condos
                    </Button>
                  </Link>
                  <Link href="/listings?propertyType=Townhouse">
                    <Button variant="outline" className="w-full h-20 flex-col">
                      <Home className="h-6 w-6 mb-2" />
                      Townhouses
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      {featuredListings.properties.length > 0 && (
        <section className="py-16">
          <div className="container">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Featured Properties</h2>
              <p className="mt-2 text-muted-foreground">
                Discover our handpicked selection of premium properties
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredListings.properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/listings">
                <Button variant="outline" size="lg">
                  View All Properties
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
              <p className="text-muted-foreground">
                Years of experience helping buyers and sellers navigate the real
                estate market
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Search</h3>
              <p className="text-muted-foreground">
                Powerful filters to help you find exactly what you're looking for
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
              <p className="text-muted-foreground">
                Stay informed with the latest market trends and property values
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
