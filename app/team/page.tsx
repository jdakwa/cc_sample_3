import { agents, brokerageInfo } from "@/lib/brokerage-data"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Linkedin, Instagram, Facebook, Award, Users, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `Our Team - ${brokerageInfo.name}`,
  description: `Meet the exceptional real estate professionals at ${brokerageInfo.name}`,
}

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 sm:py-24 lg:py-32 border-b border-slate-200">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center mb-6 px-4 py-2 bg-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-full backdrop-blur-sm">
              {brokerageInfo.stats.teamMembers}+ Expert Agents
            </div>
            <h1 className="font-bold tracking-tight text-slate-900 mb-6">
              Meet Our Team
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Our award-winning team of real estate professionals brings decades of combined experience 
              and an unwavering commitment to helping you achieve your real estate goals.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {agents.map((agent) => (
              <Card key={agent.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links - Show on Hover */}
                  {agent.socialMedia && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {agent.socialMedia.linkedin && (
                        <a
                          href={agent.socialMedia.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {agent.socialMedia.instagram && (
                        <a
                          href={agent.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                      )}
                      {agent.socialMedia.facebook && (
                        <a
                          href={agent.socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                        >
                          <Facebook className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Name & Title */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{agent.name}</h3>
                      <p className="text-sm text-primary font-semibold">{agent.title}</p>
                    </div>

                    {/* Stats */}
                    {agent.stats && (
                      <div className="grid grid-cols-3 gap-3 py-3 border-y border-slate-100">
                        {agent.stats.propertiesSold && (
                          <div className="text-center">
                            <div className="text-xl font-bold text-primary">{agent.stats.propertiesSold}+</div>
                            <div className="text-[10px] text-slate-600 uppercase tracking-wide">Sold</div>
                          </div>
                        )}
                        {agent.stats.yearsExperience && (
                          <div className="text-center">
                            <div className="text-xl font-bold text-primary">{agent.stats.yearsExperience}</div>
                            <div className="text-[10px] text-slate-600 uppercase tracking-wide">Years</div>
                          </div>
                        )}
                        {agent.stats.clientsSatisfied && (
                          <div className="text-center">
                            <div className="text-xl font-bold text-primary">{agent.stats.clientsSatisfied}+</div>
                            <div className="text-[10px] text-slate-600 uppercase tracking-wide">Clients</div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Bio */}
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {agent.bio}
                    </p>

                    {/* Specialties */}
                    {agent.specialty && agent.specialty.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {agent.specialty.slice(0, 2).map((spec, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-2.5 py-1 text-xs font-medium text-primary bg-primary/10 rounded-md"
                          >
                            {spec}
                          </span>
                        ))}
                        {agent.specialty.length > 2 && (
                          <span className="inline-block px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-md">
                            +{agent.specialty.length - 2} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Contact */}
                    <div className="space-y-2 pt-2">
                      <a
                        href={`tel:${agent.phone}`}
                        className="flex items-center gap-2 text-sm text-slate-700 hover:text-primary transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span>{agent.phone}</span>
                      </a>
                      <a
                        href={`mailto:${agent.email}`}
                        className="flex items-center gap-2 text-sm text-slate-700 hover:text-primary transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        <span className="truncate">{agent.email}</span>
                      </a>
                    </div>

                    {/* CTA Button */}
                    <Link href={`/contact?agent=${agent.id}`} className="block">
                      <Button className="w-full mt-2">
                        Contact {agent.name.split(' ')[0]}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="container px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Can't Decide? We'll Match You
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Not sure which agent is right for you? Contact us and we'll pair you with 
            the perfect specialist for your unique needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-8 py-6 h-auto text-base font-semibold">
              Get Matched with an Agent
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
