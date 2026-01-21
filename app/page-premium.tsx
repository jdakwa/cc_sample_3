/**
 * PREMIUM REAL ESTATE HOMEPAGE
 * 
 * COLOR PALETTE:
 * - Navy: #0B1F44 (primary text, authority)
 * - Seafoam: #2DD4BF (premium accent, CTAs)
 * - Sandstone: #E8DFC9 (warmth, subtle backgrounds)
 * - Off-White: #F1F5F9 (base)
 * - Soft Gray: #64748B (body text)
 * 
 * TYPOGRAPHY:
 * - Headings: Geist Sans (bold, tight tracking)
 * - Body: Geist Sans (regular, comfortable leading)
 * - Large type hierarchy: 64px → 48px → 32px → 18px
 * 
 * ANTI-AI-TEMPLATE CHECKLIST:
 * ✓ No icon-feature rows
 * ✓ Asymmetrical hero (60/40 split with overlapping elements)
 * ✓ Staggered neighborhood grid (not uniform cards)
 * ✓ Offset testimonials with headshots
 * ✓ Specific copy (Newport Beach, $2.5B sold, exact neighborhoods)
 * ✓ Editorial layouts with intentional whitespace
 * ✓ Photo-forward design
 * ✓ Subtle hover transitions (not bouncy/over-animated)
 */

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getListings } from "@/lib/repliers"
import { agents } from "@/lib/brokerage-data"
import { ArrowRight, Phone, Mail, MapPin, TrendingUp, Award } from "lucide-react"

export default async function PremiumHomePage() {
  // Fetch featured listings
  let featuredListings;
  try {
    featuredListings = await getListings({ limit: 6, status: "active" });
    if (!featuredListings || !featuredListings.properties) {
      featuredListings = { properties: [], total: 0, page: 1, limit: 6, totalPages: 0 };
    }
  } catch (error) {
    featuredListings = { properties: [], total: 0, page: 1, limit: 6, totalPages: 0 };
  }

  const founderAgent = agents[0]; // Victoria Sterling

  return (
    <div className="flex flex-col bg-off-white">
      
      {/* 1) HERO - Asymmetrical 60/40 with overlapping CTA card */}
      <section className="relative min-h-[90vh] bg-white overflow-hidden">
        <div className="container relative h-full py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[75vh]">
            
            {/* Left: Editorial Content - 60% */}
            <div className="lg:col-span-7 space-y-8 lg:pr-12">
              <div className="inline-block px-4 py-1.5 bg-seafoam/10 text-seafoam text-sm font-semibold tracking-wide">
                NEWPORT BEACH • LAGUNA • CORONA DEL MAR
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-navy">
                Coastal homes that define 
                <span className="block mt-2 text-seafoam">your next chapter.</span>
              </h1>
              
              <p className="text-xl text-soft-gray max-w-xl leading-relaxed">
                Sterling & Associates has facilitated over $2.5 billion in coastal real estate 
                transactions since 2010. We represent discerning buyers and sellers in Orange County's 
                most sought-after communities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/listings">
                  <Button 
                    size="lg" 
                    className="text-base px-8 h-14 bg-seafoam hover:bg-seafoam/90 text-white shadow-lg hover:shadow-xl transition-all group"
                  >
                    Browse Active Listings
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-base px-8 h-14 border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all"
                  >
                    Schedule Consultation
                  </Button>
                </Link>
              </div>

              {/* Trust indicators - inline, not boxes */}
              <div className="pt-8 flex flex-wrap gap-8 text-sm">
                <div>
                  <div className="text-2xl font-bold text-navy">$2.5B+</div>
                  <div className="text-soft-gray">Closed Sales</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">450+</div>
                  <div className="text-soft-gray">Properties Sold</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">14 Years</div>
                  <div className="text-soft-gray">Market Leadership</div>
                </div>
              </div>
            </div>

            {/* Right: Large Hero Image - 40% with subtle overlay */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=1000&fit=crop"
                  alt="Luxury coastal home"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                
                {/* Overlapping price card - creates asymmetry */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-sandstone max-w-xs">
                  <div className="text-sm text-soft-gray mb-1">Just Listed</div>
                  <div className="text-2xl font-bold text-navy">$8,950,000</div>
                  <div className="text-sm text-soft-gray mt-2">3280 Ocean Blvd, Corona del Mar</div>
                  <div className="text-xs text-soft-gray mt-1">5 bd • 6 ba • 5,200 sqft • Oceanfront</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) FEATURED LISTINGS - Asymmetric masonry-style grid */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-off-white">
        <div className="container">
          
          {/* Section intro - offset layout */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight">
                Current listings across Orange County's coastal communities
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <p className="text-lg text-soft-gray">
                Each property is personally curated by our team. We represent homes from 
                $2M to $25M+ in Newport Beach, Laguna Beach, Dana Point, and Corona del Mar.
              </p>
            </div>
          </div>

          {/* Staggered grid - not uniform cards */}
          {featuredListings.properties.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredListings.properties.slice(0, 6).map((property, idx) => {
                const imageUrl = property.images?.[0] || "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop";
                
                // Vary heights for asymmetry
                const heightClass = idx % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/4]";
                
                return (
                  <Link 
                    href={`/listings/${property.id}`} 
                    key={property.id}
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-lg bg-sandstone">
                      <div className={`relative ${heightClass} overflow-hidden`}>
                        <Image
                          src={imageUrl}
                          alt={property.address.street}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Hover details */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                          <div className="text-sm mb-2">{property.address.city}</div>
                          <div className="text-xs opacity-80">
                            {property.bedrooms} bed • {property.bathrooms} bath • {property.squareFeet.toLocaleString()} sqft
                          </div>
                        </div>
                      </div>
                      
                      {/* Always visible info */}
                      <div className="p-6 bg-white">
                        <div className="text-2xl font-bold text-navy mb-2">
                          ${(property.price / 1000000).toFixed(2)}M
                        </div>
                        <div className="text-sm text-soft-gray line-clamp-1">
                          {property.address.street}
                        </div>
                        <div className="text-xs text-soft-gray mt-1">
                          {property.address.city}, {property.address.state}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 text-soft-gray">
              <p>New listings coming soon. Contact us for off-market opportunities.</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/listings">
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 h-14 border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all group"
              >
                View All {featuredListings.total} Active Listings
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3) NEIGHBORHOODS - Staggered editorial tiles */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container">
          <div className="mb-16">
            <div className="text-sm text-seafoam font-semibold tracking-wide mb-4">AREAS WE SERVE</div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy max-w-3xl leading-tight">
              Deep expertise in Orange County's premier coastal neighborhoods
            </h2>
          </div>

          {/* Staggered grid layout */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Large feature tile */}
            <div className="md:col-span-2 lg:col-span-1 relative group cursor-pointer">
              <div className="aspect-[16/10] relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop"
                  alt="Newport Beach"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Newport Beach</h3>
                  <p className="text-sm opacity-90 max-w-md">
                    From the Harbor to Balboa Peninsula, we've closed 180+ transactions here. 
                    Median sale: $4.2M. Inventory moves fast—average DOM is 32 days.
                  </p>
                  <div className="mt-4 text-xs opacity-75">Last 12 months: 64 sales</div>
                </div>
              </div>
            </div>

            {/* Two smaller tiles - stacked */}
            <div className="md:col-span-2 lg:col-span-1 space-y-8">
              
              <div className="relative group cursor-pointer">
                <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop"
                    alt="Laguna Beach"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Laguna Beach</h3>
                    <p className="text-sm opacity-90">
                      Cliffside estates and artist-colony charm. We handle 15–20 sales annually, 
                      from village bungalows to oceanfront compounds.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
                    alt="Corona del Mar"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Corona del Mar</h3>
                    <p className="text-sm opacity-90">
                      Prime beachside location with top-rated schools. Our team has sold 45 homes 
                      here in the past 24 months, including 3 record-breaking sales.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <p className="text-soft-gray mb-6">
              Also serving: Dana Point, Huntington Beach, Irvine (Turtle Rock, Shady Canyon)
            </p>
            <Link href="/about">
              <Button 
                variant="ghost" 
                className="text-seafoam hover:text-seafoam/80 font-semibold group"
              >
                Learn about our market approach
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4) RECENTLY SOLD / RESULTS - Offset testimonials */}
      <section className="py-24 lg:py-32 bg-sandstone/20">
        <div className="container">
          
          {/* Split layout */}
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left: Stats */}
            <div className="lg:col-span-5">
              <div className="text-sm text-seafoam font-semibold tracking-wide mb-4">RECENT RESULTS</div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                Proven track record in competitive markets
              </h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <div className="text-5xl font-bold text-navy">$18.5M</div>
                    <div className="text-soft-gray">sale</div>
                  </div>
                  <div className="text-soft-gray">3440 Ocean Blvd, Corona del Mar • Closed Dec 2025</div>
                  <div className="text-sm text-soft-gray mt-1">Represented buyer in off-market transaction</div>
                </div>
                
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <div className="text-5xl font-bold text-navy">$9.2M</div>
                    <div className="text-soft-gray">sale</div>
                  </div>
                  <div className="text-soft-gray">1628 Balboa Blvd, Newport Beach • Closed Nov 2025</div>
                  <div className="text-sm text-soft-gray mt-1">Sold in 18 days, 3% over asking</div>
                </div>

                <div className="pt-4">
                  <div className="text-sm text-soft-gray">Last 6 months</div>
                  <div className="text-2xl font-bold text-navy">$87M in closed volume</div>
                </div>
              </div>
            </div>

            {/* Right: Staggered testimonials */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Testimonial 1 - offset right */}
              <div className="lg:ml-12">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-sandstone">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-seafoam/10 flex items-center justify-center text-seafoam font-bold text-xl flex-shrink-0">
                      RM
                    </div>
                    <div>
                      <div className="font-bold text-navy">Robert & Michelle K.</div>
                      <div className="text-sm text-soft-gray">Corona del Mar • $6.8M Purchase</div>
                    </div>
                  </div>
                  <p className="text-soft-gray leading-relaxed">
                    "Victoria guided us through a complex bidding situation on our dream oceanfront home. 
                    Her negotiation skills saved us $400K, and she connected us with a phenomenal architect 
                    before we even closed. We've already referred two friends."
                  </p>
                </div>
              </div>

              {/* Testimonial 2 - offset left */}
              <div className="lg:mr-12">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-sandstone">
                  <div className="flex items-start gap-4 mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                      alt="Sarah Chen"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-bold text-navy">Sarah Chen</div>
                      <div className="text-sm text-soft-gray">Newport Beach • $4.2M Sale</div>
                    </div>
                  </div>
                  <p className="text-soft-gray leading-relaxed">
                    "Marcus sold our home in 12 days with multiple offers. His staging advice and 
                    marketing strategy were spot-on. The professional photography alone was worth it—our 
                    home looked magazine-ready."
                  </p>
                </div>
              </div>

              {/* Additional proof point */}
              <div className="lg:ml-12 bg-navy text-white p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-8 w-8 text-seafoam" />
                  <div className="text-sm font-semibold tracking-wide">2025 RECOGNITION</div>
                </div>
                <div className="text-2xl font-bold mb-2">Top 1% of OC Realtors</div>
                <div className="text-sm opacity-90">
                  By transaction volume • Orange County Association of Realtors
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5) MARKET INSIGHTS - Clean list with dates */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container max-w-5xl">
          
          <div className="mb-12">
            <div className="text-sm text-seafoam font-semibold tracking-wide mb-4">MARKET INSIGHTS</div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight">
              Recent market analysis & updates
            </h2>
            <p className="text-lg text-soft-gray">
              Data-driven insights for Orange County coastal real estate buyers and sellers.
            </p>
          </div>

          <div className="space-y-8">
            
            <div className="border-b border-sandstone pb-8 group cursor-pointer">
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="text-sm text-soft-gray mb-2">January 15, 2026</div>
                  <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-seafoam transition-colors">
                    Newport Beach Q4 2025 Market Report: Inventory Up 12%, Prices Hold Strong
                  </h3>
                  <p className="text-soft-gray leading-relaxed">
                    Despite a seasonal uptick in available homes, median prices remained steady at $4.1M. 
                    Waterfront properties saw the fastest absorption, with average DOM of 28 days...
                  </p>
                </div>
                <TrendingUp className="h-6 w-6 text-seafoam flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <div className="border-b border-sandstone pb-8 group cursor-pointer">
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="text-sm text-soft-gray mb-2">January 8, 2026</div>
                  <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-seafoam transition-colors">
                    Why Laguna Beach Luxury Homes Are Outperforming in 2026
                  </h3>
                  <p className="text-soft-gray leading-relaxed">
                    With limited buildable land and strict zoning, Laguna's luxury segment has seen 
                    consistent appreciation. Here's what buyers need to know about the current landscape...
                  </p>
                </div>
                <TrendingUp className="h-6 w-6 text-seafoam flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <div className="border-b border-sandstone pb-8 group cursor-pointer">
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="text-sm text-soft-gray mb-2">December 20, 2025</div>
                  <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-seafoam transition-colors">
                    2026 Coastal Real Estate Forecast: What to Expect in Orange County
                  </h3>
                  <p className="text-soft-gray leading-relaxed">
                    Our team's annual market forecast, including interest rate predictions, inventory 
                    projections, and neighborhood-specific trends for Newport, Laguna, and Dana Point...
                  </p>
                </div>
                <TrendingUp className="h-6 w-6 text-seafoam flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Button 
              variant="ghost" 
              className="text-seafoam hover:text-seafoam/80 font-semibold group"
            >
              View all market insights
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* 6) ABOUT THE AGENT - Human bio, asymmetric layout */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-off-white to-white">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Large portrait - 5 cols */}
            <div className="lg:col-span-5">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={founderAgent.image}
                  alt={founderAgent.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Right: Bio content - 7 cols */}
            <div className="lg:col-span-7">
              <div className="text-sm text-seafoam font-semibold tracking-wide mb-4">FOUNDER & PRINCIPAL BROKER</div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                {founderAgent.name}
              </h2>
              
              <div className="prose prose-lg max-w-none space-y-4 text-soft-gray">
                <p className="text-xl leading-relaxed">
                  I founded Sterling & Associates in 2010 after recognizing a gap in the Orange County market: 
                  high-net-worth clients deserved representation that combined old-school relationship-building 
                  with modern marketing and data analysis.
                </p>
                
                <p className="leading-relaxed">
                  Before real estate, I spent 8 years in private wealth management at Morgan Stanley, which taught 
                  me how to listen, ask the right questions, and protect my clients' interests in complex transactions. 
                  That background serves me daily—whether negotiating a $15M oceanfront estate or helping a first-time 
                  buyer navigate Corona del Mar's competitive market.
                </p>
                
                <p className="leading-relaxed">
                  Our team has now closed over 450 transactions totaling $2.5B. But what I'm most proud of isn't the 
                  volume—it's the referrals. 68% of our business comes from past clients and their friends. That tells 
                  you everything you need to know about how we operate.
                </p>

                <div className="pt-6 flex flex-wrap gap-6 not-prose">
                  <div>
                    <div className="text-sm text-soft-gray mb-1">License</div>
                    <div className="font-semibold text-navy">DRE #01847392</div>
                  </div>
                  <div>
                    <div className="text-sm text-soft-gray mb-1">Phone</div>
                    <a href={`tel:${founderAgent.phone}`} className="font-semibold text-navy hover:text-seafoam">
                      {founderAgent.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-sm text-soft-gray mb-1">Email</div>
                    <a href={`mailto:${founderAgent.email}`} className="font-semibold text-navy hover:text-seafoam">
                      {founderAgent.email}
                    </a>
                  </div>
                </div>

                <div className="pt-6 not-prose">
                  <Link href="/team">
                    <Button className="bg-seafoam hover:bg-seafoam/90 text-white px-8 h-12 group">
                      Meet the full team
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7) CONTACT - High-converting, specific CTA */}
      <section className="py-24 lg:py-32 bg-navy text-white">
        <div className="container max-w-4xl">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Let's discuss your real estate goals
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Whether you're buying, selling, or exploring the market, we offer a complimentary 
              consultation with zero pressure. Most calls take 20–30 minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Contact info card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-seafoam flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Call or text</div>
                    <a href="tel:9495550123" className="text-white/80 hover:text-seafoam text-lg">
                      (949) 555-0123
                    </a>
                    <div className="text-sm text-white/60 mt-1">Mon–Sat, 9am–7pm</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-seafoam flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:victoria@sterlingrealty.com" className="text-white/80 hover:text-seafoam">
                      victoria@sterlingrealty.com
                    </a>
                    <div className="text-sm text-white/60 mt-1">Response within 2 hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-seafoam flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Office</div>
                    <div className="text-white/80">
                      2500 Pacific Coast Highway, Suite 300<br />
                      Newport Beach, CA 92663
                    </div>
                    <div className="text-sm text-white/60 mt-1">By appointment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Quick inquiry</h3>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full px-4 h-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-seafoam transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full px-4 h-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-seafoam transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone (optional)" 
                    className="w-full px-4 h-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-seafoam transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="What can we help you with? (e.g., 'Looking to buy in Corona del Mar under $5M' or 'Need to sell my Newport home quickly')"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-seafoam transition-colors resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-seafoam hover:bg-seafoam/90 text-white font-semibold"
                >
                  Send Message
                </Button>
                <p className="text-xs text-white/60">
                  We respect your privacy. Your information is never shared or sold.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
