"use client"

import { useState } from "react"
import { PropertySearchFilters } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PropertyFiltersProps {
  filters: PropertySearchFilters
  onFiltersChange: (filters: PropertySearchFilters) => void
  onSearch: () => void
  totalResults?: number
}

export function PropertyFilters({
  filters,
  onFiltersChange,
  onSearch,
  totalResults,
}: PropertyFiltersProps) {
  const [localFilters, setLocalFilters] = useState<PropertySearchFilters>(filters)

  const updateFilter = (key: keyof PropertySearchFilters, value: any) => {
    const newFilters = { ...localFilters, [key]: value }
    setLocalFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearFilter = (key: keyof PropertySearchFilters) => {
    const newFilters = { ...localFilters }
    delete newFilters[key]
    setLocalFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearAllFilters = () => {
    const cleared: PropertySearchFilters = {}
    setLocalFilters(cleared)
    onFiltersChange(cleared)
  }

  const hasActiveFilters = Object.keys(filters).length > 0

  return (
    <Card className="shadow-sm sticky top-24">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base sm:text-lg">Search Filters</CardTitle>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-xs h-8 px-2"
            >
              Clear All
            </Button>
          )}
        </div>
        {totalResults !== undefined && (
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            {totalResults} properties found
          </p>
        )}
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Price Range */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Price Range</Label>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Min"
              value={localFilters.minPrice || ""}
              onChange={(e) =>
                updateFilter("minPrice", e.target.value ? Number(e.target.value) : undefined)
              }
              className="text-sm"
            />
            <Input
              type="number"
              placeholder="Max"
              value={localFilters.maxPrice || ""}
              onChange={(e) =>
                updateFilter("maxPrice", e.target.value ? Number(e.target.value) : undefined)
              }
              className="text-sm"
            />
          </div>
        </div>

        {/* Bedrooms */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Bedrooms</Label>
          <Select
            value={localFilters.bedrooms?.toString() || "all"}
            onValueChange={(value) =>
              updateFilter("bedrooms", value === "all" ? undefined : Number(value))
            }
          >
            <SelectTrigger className="text-sm">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bathrooms */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Bathrooms</Label>
          <Select
            value={localFilters.bathrooms?.toString() || "all"}
            onValueChange={(value) =>
              updateFilter("bathrooms", value === "all" ? undefined : Number(value))
            }
          >
            <SelectTrigger className="text-sm">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Property Type */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Property Type</Label>
          <Select
            value={localFilters.propertyType || "all"}
            onValueChange={(value) =>
              updateFilter("propertyType", value === "all" ? undefined : value)
            }
          >
            <SelectTrigger className="text-sm">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any</SelectItem>
              <SelectItem value="House">House</SelectItem>
              <SelectItem value="Condo">Condo</SelectItem>
              <SelectItem value="Townhouse">Townhouse</SelectItem>
              <SelectItem value="Apartment">Apartment</SelectItem>
              <SelectItem value="Land">Land</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* City */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">City</Label>
          <Input
            placeholder="Enter city"
            value={localFilters.city || ""}
            onChange={(e) => updateFilter("city", e.target.value || undefined)}
            className="text-sm"
          />
        </div>

        {/* State */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">State</Label>
          <Input
            placeholder="Enter state"
            value={localFilters.state || ""}
            onChange={(e) => updateFilter("state", e.target.value || undefined)}
            className="text-sm"
          />
        </div>

        {/* Sort By */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Sort By</Label>
          <Select
            value={localFilters.sortBy || "default"}
            onValueChange={(value) =>
              updateFilter("sortBy", value === "default" ? undefined : (value as any))
            }
          >
            <SelectTrigger className="text-sm">
              <SelectValue placeholder="Default" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="price_asc">Price: Low to High</SelectItem>
              <SelectItem value="price_desc">Price: High to Low</SelectItem>
              <SelectItem value="date_desc">Newest First</SelectItem>
              <SelectItem value="square_feet_desc">Largest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={onSearch} className="w-full mt-6 shadow-sm">
          Apply Filters
        </Button>
      </CardContent>
    </Card>
  )
}
