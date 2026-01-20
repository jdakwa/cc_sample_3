import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-4 sm:px-6">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold text-primary">IDX Pro</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
              Your trusted partner in real estate. Find your dream home or sell
              your property with confidence.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm sm:text-base font-semibold">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/listings"
                  className="text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  Search Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm sm:text-base font-semibold">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/listings"
                  className="text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  Buyer Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  Seller Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  Market Analysis
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm sm:text-base font-semibold">Contact</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="font-medium mr-2">Email:</span>
                <a href="mailto:info@idxpro.com" className="hover:text-primary transition-colors">
                  info@idxpro.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Phone:</span>
                <a href="tel:5551234567" className="hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <span className="font-medium">Hours:</span> Mon-Fri 9am-6pm
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 border-t pt-6 sm:pt-8 px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} IDX Pro. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
              <span>Built by</span>
              <Link
                href="https://craftycode.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline transition-colors"
              >
                CraftyCode
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
