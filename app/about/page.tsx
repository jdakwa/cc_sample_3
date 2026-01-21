import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Shield, Sparkles, TrendingUp } from "lucide-react"
import { brokerageInfo, companyValues, testimonials } from "@/lib/brokerage-data"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection, AnimatedCounter } from "@/components/about/AnimatedSection"

export const metadata = {
  title: `About ${brokerageInfo.name}`,
  description: brokerageInfo.description,
}

export default function AboutPage() {
  const iconMap = {
    shield: Shield,
    heart: Heart,
    chart: TrendingUp,
    sparkles: Sparkles
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-off-white via-white to-sandstone/30 py-16 sm:py-24 lg:py-32 border-b border-sandstone overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-seafoam/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container px-4 sm:px-6 relative z-10">
          <AnimatedSection>
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center justify-center mb-6 px-4 py-2 bg-seafoam/10 text-seafoam text-xs sm:text-sm font-semibold rounded-full backdrop-blur-sm border border-seafoam/20 animate-fade-in">
                Est. {brokerageInfo.founded}
              </div>
              <h1 className="font-bold tracking-tight text-navy mb-6 animate-fade-in-up">
                {brokerageInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl text-seafoam font-semibold mb-8 animate-fade-in-up delay-200">
                {brokerageInfo.tagline}
              </p>
              <p className="text-base sm:text-lg text-soft-gray leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-300">
                {brokerageInfo.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-sandstone">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0}>
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-seafoam mb-2 transition-transform duration-300 group-hover:scale-110">
                  <AnimatedCounter value={brokerageInfo.stats.propertiesSold} />
                </div>
                <div className="text-sm sm:text-base text-soft-gray">In Sales</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-seafoam mb-2 transition-transform duration-300 group-hover:scale-110">
                  <AnimatedCounter value={brokerageInfo.stats.yearsInBusiness} suffix="+" />
                </div>
                <div className="text-sm sm:text-base text-soft-gray">Years in Business</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-seafoam mb-2 transition-transform duration-300 group-hover:scale-110">
                  <AnimatedCounter value={brokerageInfo.stats.teamMembers} suffix="+" />
                </div>
                <div className="text-sm sm:text-base text-soft-gray">Team Members</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-seafoam mb-2 transition-transform duration-300 group-hover:scale-110">
                  <AnimatedCounter value={brokerageInfo.stats.citiesServed} suffix="+" />
                </div>
                <div className="text-sm sm:text-base text-soft-gray">Cities Served</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-off-white to-white">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="font-bold tracking-tight text-navy mb-4">Our Mission</h2>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-8 sm:p-12 text-center">
                  <div className="inline-block mb-6 w-16 h-1 bg-gradient-to-r from-seafoam to-navy rounded-full group-hover:w-24 transition-all duration-500"></div>
                  <p className="text-lg sm:text-xl text-navy leading-relaxed">
                    {brokerageInfo.mission}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-bold tracking-tight text-navy mb-4">Our Core Values</h2>
              <p className="text-base sm:text-lg text-soft-gray max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {companyValues.map((value, index) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap] || Heart
              return (
                <AnimatedSection key={index} delay={index * 100}>
                  <Card className="border-2 border-sandstone hover:border-seafoam transition-all duration-500 hover:shadow-2xl group cursor-pointer h-full">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-seafoam/20 to-seafoam/5 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Icon className="h-8 w-8 text-seafoam group-hover:text-seafoam transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-seafoam transition-colors">{value.title}</h3>
                      <p className="text-sm text-soft-gray leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-sandstone/20">
        <div className="container px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-bold tracking-tight text-navy mb-4">What Our Clients Say</h2>
              <p className="text-base sm:text-lg text-soft-gray max-w-2xl mx-auto">
                Don't just take our word for it
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer h-full bg-white">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full transition-transform duration-500 group-hover:scale-110 group-hover:ring-2 group-hover:ring-seafoam"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-navy group-hover:text-seafoam transition-colors">{testimonial.name}</div>
                        <div className="text-sm text-soft-gray">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span 
                          key={i} 
                          className="text-yellow-400 transition-all duration-300 group-hover:scale-110"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-navy leading-relaxed text-sm sm:text-base group-hover:text-soft-gray transition-colors">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-navy via-navy to-navy/95 text-white relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>
        
        <div className="container px-4 sm:px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-seafoam">Ready to Find Your Dream Home?</h2>
            <p className="text-lg sm:text-xl mb-8 text-seafoam max-w-2xl mx-auto">
              Let our experienced team guide you through every step of your real estate journey
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/team">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="w-full sm:w-auto px-8 py-6 h-auto text-base font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                >
                  Meet Our Team
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-6 h-auto text-base font-semibold bg-seafoam hover:bg-seafoam/90 text-white border-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
