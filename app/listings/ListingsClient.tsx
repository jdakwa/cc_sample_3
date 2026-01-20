"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PropertyFilters } from "@/components/real-estate/PropertyFilters"
import { PropertySearchFilters, PropertySearchResponse } from "@/lib/types"

interface ListingsClientProps {
  initialFilters: PropertySearchFilters
  initialResults: PropertySearchResponse
}

export function ListingsClient({
  initialFilters,
  initialResults,
}: ListingsClientProps) {
  const router = useRouter()
  const [filters, setFilters] = useState<PropertySearchFilters>(initialFilters)

  const handleFiltersChange = (newFilters: PropertySearchFilters) => {
    setFilters(newFilters)
  }

  const handleSearch = () => {
    const params = new URLSearchParams()
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        params.append(key, value.toString())
      }
    })

    router.push(`/listings?${params.toString()}`)
  }

  return (
    <PropertyFilters
      filters={filters}
      onFiltersChange={handleFiltersChange}
      onSearch={handleSearch}
      totalResults={initialResults.total}
    />
  )
}
