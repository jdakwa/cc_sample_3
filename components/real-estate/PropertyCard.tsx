import Link from "next/link"
import Image from "next/image"
import { Property } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Square, MapPin } from "lucide-react"
import { formatPrice as formatPriceUtil, formatAddress } from "@/lib/repliers"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const imageUrl =
    property.images && property.images.length > 0
      ? typeof property.images[0] === "string"
        ? property.images[0]
        : property.images[0]?.url || "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop"
      : "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop"

  const statusColors = {
    active: "bg-green-500",
    pending: "bg-yellow-500",
    sold: "bg-gray-500",
    off_market: "bg-gray-400",
  }

  return (
    <Link href={`/listings/${property.id}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg cursor-pointer h-full">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={imageUrl}
            alt={formatAddress(property.address)}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4">
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
          </div>
          {property.daysOnMarket && property.daysOnMarket < 7 && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary text-white">New</Badge>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-semibold text-primary">
                {formatPriceUtil(property.price)}
              </h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <MapPin className="h-3 w-3" />
                {property.address.street}, {property.address.city}
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4" />
                <span>{property.bedrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                <span>{property.bathrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Square className="h-4 w-4" />
                <span>
                  {property.squareFeet.toLocaleString()} sq ft
                </span>
              </div>
            </div>

            {property.propertyType && (
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                {property.propertyType}
              </p>
            )}

            {property.mlsNumber && (
              <p className="text-xs text-muted-foreground">
                MLS: {property.mlsNumber}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
