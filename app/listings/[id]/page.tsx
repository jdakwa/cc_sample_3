import { notFound } from "next/navigation"
import Image from "next/image"
import { getListingById, formatPrice, formatAddress } from "@/lib/repliers"
import { PropertyCard } from "@/components/real-estate/PropertyCard"
import { LeadForm } from "@/components/real-estate/LeadForm"
import { getListings } from "@/lib/repliers"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Home,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import type { Metadata } from "next"

interface PropertyDetailPageProps {
  params: { id: string }
}

export async function generateMetadata({
  params,
}: PropertyDetailPageProps): Promise<Metadata> {
  const property = await getListingById(params.id)
  
  if (!property) {
    return {
      title: "Property Not Found - IDX Pro",
    }
  }

  return {
    title: `${formatPrice(property.price)} - ${formatAddress(property.address)} | IDX Pro`,
    description: property.description || `View details for this ${property.propertyType} in ${property.address.city}, ${property.address.state}. ${property.bedrooms} bedrooms, ${property.bathrooms} bathrooms, ${property.squareFeet.toLocaleString()} sq ft.`,
  }
}

export default async function PropertyDetailPage({
  params,
}: PropertyDetailPageProps) {
  const property = await getListingById(params.id)

  if (!property) {
    notFound()
  }

  // Get similar properties (same city or similar price range)
  const similarProperties = await getListings({
    city: property.address.city,
    status: "active",
    limit: 4,
  })

  const images =
    property.images && property.images.length > 0
      ? property.images.map((img) =>
          typeof img === "string" ? img : img.url
        )
      : ["https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop"]

  const statusColors = {
    active: "bg-green-500",
    pending: "bg-yellow-500",
    sold: "bg-gray-500",
    off_market: "bg-gray-400",
  }

  return (
    <div className="container py-6 sm:py-8 lg:py-10 px-4 sm:px-6">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{formatPrice(property.price)}</h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mt-2 flex items-center gap-1.5">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="line-clamp-2">{formatAddress(property.address)}</span>
            </p>
          </div>
          <div className="flex items-center gap-2 self-end sm:self-start">
            <Badge
              className={`${statusColors[property.status] || "bg-gray-500"} text-white text-xs sm:text-sm px-3 py-1`}
            >
              {property.status === "active"
                ? "Available"
                : property.status === "pending"
                  ? "Pending"
                  : property.status === "sold"
                    ? "Sold"
                    : "Off Market"}
            </Badge>
            <Button variant="outline" size="icon" className="h-9 w-9 sm:h-10 sm:w-10">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 gap-2 sm:gap-3">
            <div className="relative aspect-video overflow-hidden rounded-lg sm:rounded-xl bg-muted shadow-md">
              <Image
                src={images[0]}
                alt={formatAddress(property.address)}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {images.slice(1, 5).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square overflow-hidden rounded-md sm:rounded-lg bg-muted shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <Image
                      src={img}
                      alt={`${formatAddress(property.address)} - Image ${idx + 2}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 25vw, 16vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Property Details */}
          <Card className="shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl">Property Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Bed className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Bedrooms</p>
                    <p className="text-base sm:text-lg font-semibold">{property.bedrooms}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Bath className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Bathrooms</p>
                    <p className="text-base sm:text-lg font-semibold">{property.bathrooms}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Square className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Square Feet</p>
                    <p className="text-base sm:text-lg font-semibold">
                      {property.squareFeet.toLocaleString()}
                    </p>
                  </div>
                </div>
                {property.lotSize && (
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Home className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Lot Size</p>
                      <p className="text-base sm:text-lg font-semibold">
                        {property.lotSize.toLocaleString()} sq ft
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <Separator className="my-4 sm:my-6" />

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {property.yearBuilt && (
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Year Built</p>
                    <p className="text-base sm:text-lg font-semibold">{property.yearBuilt}</p>
                  </div>
                )}
                {property.propertyType && (
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Property Type</p>
                    <p className="text-base sm:text-lg font-semibold">{property.propertyType}</p>
                  </div>
                )}
                {property.mlsNumber && (
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">MLS Number</p>
                    <p className="text-base sm:text-lg font-semibold break-all">{property.mlsNumber}</p>
                  </div>
                )}
                {property.daysOnMarket !== undefined && (
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Days on Market</p>
                    <p className="text-base sm:text-lg font-semibold">{property.daysOnMarket}</p>
                  </div>
                )}
                {property.pricePerSquareFoot && (
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Price/sq ft</p>
                    <p className="text-base sm:text-lg font-semibold">
                      ${property.pricePerSquareFoot.toFixed(2)}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          {property.description && (
            <Card className="shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl">Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground whitespace-pre-line leading-relaxed">
                  {property.description}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Similar Properties */}
          {similarProperties.properties.length > 0 && (
            <div className="pt-4">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Similar Properties</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {similarProperties.properties
                  .filter((p) => p.id !== property.id)
                  .slice(0, 4)
                  .map((p) => (
                    <PropertyCard key={p.id} property={p} />
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          {/* Lead Form */}
          <Card className="shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-base sm:text-lg">Interested in this property?</CardTitle>
            </CardHeader>
            <CardContent>
              <LeadForm
                propertyId={property.id}
                propertyAddress={formatAddress(property.address)}
                type="buyer"
              />
            </CardContent>
          </Card>

          {/* Quick Info */}
          <Card className="shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-base sm:text-lg">Quick Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Address</p>
                <p className="text-sm sm:text-base font-medium">{formatAddress(property.address)}</p>
              </div>
              {property.mlsNumber && (
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">MLS Number</p>
                  <p className="text-sm sm:text-base font-medium break-all">{property.mlsNumber}</p>
                </div>
              )}
              {property.listingDate && (
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">Listed</p>
                  <p className="text-sm sm:text-base font-medium">
                    {new Date(property.listingDate).toLocaleDateString()}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
