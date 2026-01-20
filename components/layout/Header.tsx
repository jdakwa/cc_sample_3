"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 sm:h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold text-primary">IDX Pro</span>
            <span className="text-[10px] sm:text-xs text-muted-foreground tracking-wider">Real Estate</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className="text-sm font-medium transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Home
          </Link>
          <Link
            href="/listings"
            className="text-sm font-medium transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Search Properties
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/listings" className="hidden md:block">
            <Button variant="outline" size="sm" className="font-medium shadow-sm hover:shadow transition-all">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background/98 backdrop-blur">
          <nav className="container flex flex-col space-y-1 py-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary px-4 py-3 rounded-lg hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/listings"
              className="text-sm font-medium transition-colors hover:text-primary px-4 py-3 rounded-lg hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Search Properties
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary px-4 py-3 rounded-lg hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium transition-colors hover:text-primary px-4 py-3 rounded-lg hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary px-4 py-3 rounded-lg hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 px-4 md:hidden">
              <Link href="/listings" className="block">
                <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  <Search className="mr-2 h-4 w-4" />
                  Search Properties
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
