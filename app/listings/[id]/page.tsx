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
    <div className="container py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold">{formatPrice(property.price)}</h1>
            <p className="text-lg text-muted-foreground mt-1 flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {formatAddress(property.address)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              className={`${statusColors[property.status] || "bg-gray-500"} text-white`}
            >
              {property.status === "active"
                ? "Available"
                : property.status === "pending"
                  ? "Pending"
                  : property.status === "sold"
                    ? "Sold"
                    : "Off Market"}
            </Badge>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 gap-2">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
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
              <div className="grid grid-cols-4 gap-2">
                {images.slice(1, 5).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square overflow-hidden rounded-lg bg-muted"
                  >
                    <Image
                      src={img}
                      alt={`${formatAddress(property.address)} - Image ${idx + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 25vw, 16vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Property Details */}
          <Card>
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Bedrooms</p>
                    <p className="text-lg font-semibold">{property.bedrooms}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Bathrooms</p>
                    <p className="text-lg font-semibold">{property.bathrooms}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Square className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Square Feet</p>
                    <p className="text-lg font-semibold">
                      {property.squareFeet.toLocaleString()}
                    </p>
                  </div>
                </div>
                {property.lotSize && (
                  <div className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Lot Size</p>
                      <p className="text-lg font-semibold">
                        {property.lotSize.toLocaleString()} sq ft
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <Separator className="my-6" />

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {property.yearBuilt && (
                  <div>
                    <p className="text-sm text-muted-foreground">Year Built</p>
                    <p className="text-lg font-semibold">{property.yearBuilt}</p>
                  </div>
                )}
                {property.propertyType && (
                  <div>
                    <p className="text-sm text-muted-foreground">Property Type</p>
                    <p className="text-lg font-semibold">{property.propertyType}</p>
                  </div>
                )}
                {property.mlsNumber && (
                  <div>
                    <p className="text-sm text-muted-foreground">MLS Number</p>
                    <p className="text-lg font-semibold">{property.mlsNumber}</p>
                  </div>
                )}
                {property.daysOnMarket !== undefined && (
                  <div>
                    <p className="text-sm text-muted-foreground">Days on Market</p>
                    <p className="text-lg font-semibold">{property.daysOnMarket}</p>
                  </div>
                )}
                {property.pricePerSquareFoot && (
                  <div>
                    <p className="text-sm text-muted-foreground">Price/sq ft</p>
                    <p className="text-lg font-semibold">
                      ${property.pricePerSquareFoot.toFixed(2)}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          {property.description && (
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-line">
                  {property.description}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Similar Properties */}
          {similarProperties.properties.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <div className="space-y-6">
          {/* Lead Form */}
          <Card>
            <CardHeader>
              <CardTitle>Interested in this property?</CardTitle>
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
          <Card>
            <CardHeader>
              <CardTitle>Quick Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="font-medium">{formatAddress(property.address)}</p>
              </div>
              {property.mlsNumber && (
                <div>
                  <p className="text-sm text-muted-foreground">MLS Number</p>
                  <p className="font-medium">{property.mlsNumber}</p>
                </div>
              )}
              {property.listingDate && (
                <div>
                  <p className="text-sm text-muted-foreground">Listed</p>
                  <p className="font-medium">
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
