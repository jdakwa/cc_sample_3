import Link from "next/link"
import { brokerageInfo } from "@/lib/brokerage-data"

export function Footer() {
  return (
    <footer className="border-t bg-navy text-white">
      <div className="container py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-4 sm:px-6">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white leading-tight">Sterling & Associates</span>
              <span className="text-xs text-seafoam tracking-wider font-semibold">REALTY</span>
            </div>
            <p className="text-sm sm:text-base text-sandstone leading-relaxed max-w-sm">
              {brokerageInfo.tagline}
            </p>
            <div className="text-sm text-off-white/80">
              <p>Licensed Real Estate Brokerage</p>
              <p>Est. {brokerageInfo.founded}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm sm:text-base font-semibold text-white">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/listings"
                  className="text-off-white/80 hover:text-seafoam transition-colors inline-block"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-off-white/80 hover:text-seafoam transition-colors inline-block"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-off-white/80 hover:text-seafoam transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-off-white/80 hover:text-seafoam transition-colors inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-off-white/80 hover:text-seafoam transition-colors inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm sm:text-base font-semibold text-white">Specialties</h4>
            <ul className="space-y-2.5 text-sm text-off-white/80">
              <li>Luxury Estates</li>
              <li>Waterfront Properties</li>
              <li>Investment Properties</li>
              <li>Relocation Services</li>
              <li>First-Time Buyers</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm sm:text-base font-semibold text-white">Contact</h4>
            <ul className="space-y-2.5 text-sm text-off-white/80">
              <li>
                <p className="text-xs text-sandstone mb-1">Address</p>
                <p>{brokerageInfo.address.street}</p>
                <p>{brokerageInfo.address.city}, {brokerageInfo.address.state} {brokerageInfo.address.zip}</p>
              </li>
              <li>
                <p className="text-xs text-sandstone mb-1">Email</p>
                <a href={`mailto:${brokerageInfo.contact.email}`} className="hover:text-seafoam transition-colors">
                  {brokerageInfo.contact.email}
                </a>
              </li>
              <li>
                <p className="text-xs text-sandstone mb-1">Phone</p>
                <a href={`tel:${brokerageInfo.contact.phone.replace(/\D/g, '')}`} className="hover:text-seafoam transition-colors">
                  {brokerageInfo.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 border-t border-seafoam/20 pt-6 sm:pt-8 px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-4">
            <p className="text-xs sm:text-sm text-off-white/70 text-center sm:text-left">
              © {new Date().getFullYear()} {brokerageInfo.name}. All rights reserved.
            </p>
            <p className="text-xs text-off-white/60">
              DRE# 01234567 | Equal Housing Opportunity
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
