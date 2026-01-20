import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, TrendingUp, FileText, Calculator, Users, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Services - IDX Pro",
  description: "Comprehensive real estate services for buyers and sellers.",
}

export default function ServicesPage() {
  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive real estate solutions tailored to your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Property Search</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Browse thousands of properties with our advanced search tools.
              Filter by price, location, size, and more to find your perfect
              home.
            </p>
            <Link href="/listings">
              <Button variant="outline" size="sm">
                Search Properties
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Buyer Services</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Expert guidance throughout your home buying journey. From property
              tours to closing, we're with you every step of the way.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 mb-4">
              <li>• Property viewings and tours</li>
              <li>• Market analysis and pricing</li>
              <li>• Negotiation support</li>
              <li>• Closing assistance</li>
            </ul>
            <Link href="/contact">
              <Button variant="outline" size="sm">
                Get Started
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Seller Services</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Maximize your property's value with our comprehensive seller
              services. Professional marketing and expert negotiation to get you
              the best price.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 mb-4">
              <li>• Home valuation</li>
              <li>• Professional photography</li>
              <li>• Marketing and promotion</li>
              <li>• Negotiation expertise</li>
            </ul>
            <Link href="/contact">
              <Button variant="outline" size="sm">
                Request Valuation
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Home Valuation</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Get an accurate estimate of your home's market value. Our
              comprehensive analysis considers recent sales, market trends, and
              property features.
            </p>
            <Link href="/contact">
              <Button variant="outline" size="sm">
                Get Valuation
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Market Analysis</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Stay informed with detailed market reports and trends. Understand
              local market conditions to make informed decisions.
            </p>
            <Link href="/contact">
              <Button variant="outline" size="sm">
                Request Report
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Consultation</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Schedule a one-on-one consultation with our experts. Get answers
              to your questions and personalized advice for your situation.
            </p>
            <Link href="/contact">
              <Button variant="outline" size="sm">
                Schedule Consultation
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle>Ready to Get Started?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Whether you're buying or selling, our team is here to help. Contact
            us today to learn more about how we can assist with your real estate
            needs.
          </p>
          <div className="flex gap-4">
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
            <Link href="/listings">
              <Button variant="outline">Browse Properties</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
