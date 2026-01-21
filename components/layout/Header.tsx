"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { brokerageInfo } from "@/lib/brokerage-data"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 sm:h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold text-navy leading-tight">Sterling & Associates</span>
            <span className="text-[10px] sm:text-xs text-seafoam tracking-wider font-semibold">REALTY</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all",
              pathname === "/" 
                ? "text-primary after:w-full font-semibold" 
                : "hover:text-primary after:w-0 hover:after:w-full"
            )}
          >
            Home
          </Link>
          <Link
            href="/listings"
            className={cn(
              "text-sm font-medium transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all",
              pathname?.startsWith("/listings")
                ? "text-primary after:w-full font-semibold" 
                : "hover:text-primary after:w-0 hover:after:w-full"
            )}
          >
            Properties
          </Link>
          <Link
            href="/team"
            className={cn(
              "text-sm font-medium transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all",
              pathname === "/team"
                ? "text-primary after:w-full font-semibold" 
                : "hover:text-primary after:w-0 hover:after:w-full"
            )}
          >
            Our Team
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all",
              pathname === "/about"
                ? "text-primary after:w-full font-semibold" 
                : "hover:text-primary after:w-0 hover:after:w-full"
            )}
          >
            About
          </Link>
          <Link
            href="/services"
            className={cn(
              "text-sm font-medium transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all",
              pathname === "/services"
                ? "text-primary after:w-full font-semibold" 
                : "hover:text-primary after:w-0 hover:after:w-full"
            )}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all",
              pathname === "/contact"
                ? "text-primary after:w-full font-semibold" 
                : "hover:text-primary after:w-0 hover:after:w-full"
            )}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex items-center gap-2">
            <a 
              href={`tel:${brokerageInfo.contact.phone.replace(/\D/g, '')}`}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 hover:border-primary hover:bg-primary/5 transition-all group"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4 text-slate-600 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href={`mailto:${brokerageInfo.contact.email}`}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 hover:border-primary hover:bg-primary/5 transition-all group"
              aria-label="Email us"
            >
              <Mail className="h-4 w-4 text-slate-600 group-hover:text-primary transition-colors" />
            </a>
          </div>
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
              className={cn(
                "text-sm font-medium transition-colors px-4 py-3 rounded-lg",
                pathname === "/"
                  ? "text-primary bg-primary/10 font-semibold"
                  : "hover:text-primary hover:bg-slate-100"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/listings"
              className={cn(
                "text-sm font-medium transition-colors px-4 py-3 rounded-lg",
                pathname?.startsWith("/listings")
                  ? "text-primary bg-primary/10 font-semibold"
                  : "hover:text-primary hover:bg-slate-100"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Properties
            </Link>
            <Link
              href="/team"
              className={cn(
                "text-sm font-medium transition-colors px-4 py-3 rounded-lg",
                pathname === "/team"
                  ? "text-primary bg-primary/10 font-semibold"
                  : "hover:text-primary hover:bg-slate-100"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors px-4 py-3 rounded-lg",
                pathname === "/about"
                  ? "text-primary bg-primary/10 font-semibold"
                  : "hover:text-primary hover:bg-slate-100"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className={cn(
                "text-sm font-medium transition-colors px-4 py-3 rounded-lg",
                pathname === "/services"
                  ? "text-primary bg-primary/10 font-semibold"
                  : "hover:text-primary hover:bg-slate-100"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors px-4 py-3 rounded-lg",
                pathname === "/contact"
                  ? "text-primary bg-primary/10 font-semibold"
                  : "hover:text-primary hover:bg-slate-100"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 px-4 border-t border-slate-200 md:hidden">
              <div className="space-y-2">
                <a 
                  href={`tel:${brokerageInfo.contact.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{brokerageInfo.contact.phone}</span>
                </a>
                <a 
                  href={`mailto:${brokerageInfo.contact.email}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{brokerageInfo.contact.email}</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
