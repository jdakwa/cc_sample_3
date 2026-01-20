import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart } from "lucide-react"

export const metadata = {
  title: "About Us - IDX Pro",
  description: "Learn about IDX Pro and our commitment to helping you find your perfect home.",
}

export default function AboutPage() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About IDX Pro</h1>
          <p className="text-lg text-muted-foreground">
            Your trusted partner in real estate
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-muted-foreground leading-relaxed">
            At IDX Pro, we understand that buying or selling a home is one of the
            most significant decisions you'll make. That's why we've built a
            platform that makes the process seamless, transparent, and stress-free.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Our mission is to connect you with your dream property through
            innovative technology, comprehensive listings, and personalized service.
            Whether you're a first-time homebuyer, looking to upgrade, or ready to
            sell, we're here to guide you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To revolutionize the real estate experience by providing
                cutting-edge tools and exceptional service that empowers our
                clients to make informed decisions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Values</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Integrity, transparency, and client satisfaction are at the core
                of everything we do. We believe in building lasting relationships
                based on trust and results.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Expertise</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                With years of experience in the real estate industry, our team
                brings deep market knowledge and a commitment to excellence.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Team</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our dedicated professionals are here to support you throughout
                your real estate journey, providing expert guidance and
                personalized attention.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle>Why Choose IDX Pro?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  Comprehensive property listings with detailed information and
                  high-quality images
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  Advanced search and filtering tools to find exactly what you're
                  looking for
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  Expert guidance from experienced real estate professionals
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  Transparent process with clear communication every step of the way
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  Cutting-edge technology for a modern, seamless experience
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
