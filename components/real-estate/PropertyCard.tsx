import Link from "next/link"
import Image from "next/image"
import { Property } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Square, MapPin } from "lucide-react"
import { formatPrice as formatPriceUtil, formatAddress, normalizeImageUrl } from "@/lib/repliers"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  // Get image URL, ensuring it's a valid absolute URL for Next.js Image component
  const imageUrl = property.images && Array.isArray(property.images) && property.images.length > 0
    ? normalizeImageUrl(
        typeof property.images[0] === "string" 
          ? property.images[0] 
          : (property.images[0] as any)?.url
      )
    : "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop";

  const statusColors = {
    active: "bg-emerald-600",
    pending: "bg-amber-500",
    sold: "bg-slate-500",
    off_market: "bg-slate-400",
  }

  return (
    <Link href={`/listings/${property.id}`}>
      <Card className="group overflow-hidden transition-all property-card-shadow cursor-pointer h-full border border-slate-200 bg-white rounded-xl">
        <div className="relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden bg-slate-100">
          <Image
            src={imageUrl}
            alt={formatAddress(property.address)}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
            <Badge
              className={`${statusColors[property.status] || "bg-slate-500"} text-white font-medium px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs uppercase tracking-wide shadow-lg`}
            >
              {property.status === "active"
                ? "For Sale"
                : property.status === "pending"
                  ? "Pending"
                  : property.status === "sold"
                    ? "Sold"
                    : "Off Market"}
            </Badge>
          </div>
          {property.daysOnMarket && property.daysOnMarket < 7 && (
            <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
              <Badge className="bg-primary text-white font-medium px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs uppercase tracking-wide shadow-lg">New</Badge>
            </div>
          )}
        </div>
        <CardContent className="p-4 sm:p-5">
          <div className="space-y-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {formatPriceUtil(property.price)}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 flex items-center gap-1.5 mt-2 font-medium">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400 flex-shrink-0" />
                <span className="line-clamp-1">{property.address.street}</span>
              </p>
              <p className="text-xs sm:text-sm text-slate-500 ml-4 sm:ml-5 line-clamp-1">
                {property.address.city}, {property.address.state} {property.address.zip}
              </p>
            </div>

            <div className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-1 sm:gap-1.5 font-medium">
                <Bed className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-500" />
                <span>{property.bedrooms} <span className="text-slate-500 font-normal hidden xs:inline">bd</span></span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 font-medium">
                <Bath className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-500" />
                <span>{property.bathrooms} <span className="text-slate-500 font-normal hidden xs:inline">ba</span></span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 font-medium">
                <Square className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-500" />
                <span>
                  {property.squareFeet.toLocaleString()} <span className="text-slate-500 font-normal hidden xs:inline">sqft</span>
                </span>
              </div>
            </div>

            {property.propertyType && (
              <div className="pt-2">
                <span className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-slate-700 bg-slate-100 rounded-md">
                  {property.propertyType}
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
