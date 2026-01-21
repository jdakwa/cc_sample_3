// Fictional Brokerage Data
// Replace placeholder image URLs with your AI-generated agent photos

export interface Agent {
  id: string
  name: string
  title: string
  specialty: string[]
  bio: string
  phone: string
  email: string
  image: string
  socialMedia?: {
    linkedin?: string
    instagram?: string
    facebook?: string
  }
  stats?: {
    propertiesSold?: number
    yearsExperience?: number
    clientsSatisfied?: number
  }
}

export interface BrokerageInfo {
  name: string
  tagline: string
  description: string
  mission: string
  founded: number
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
  contact: {
    phone: string
    email: string
    hours: string
  }
  stats: {
    propertiesSold: string
    yearsInBusiness: number
    teamMembers: number
    citiesServed: number
  }
}

export const brokerageInfo: BrokerageInfo = {
  name: "Sterling & Associates Realty",
  tagline: "Where Luxury Meets Legacy",
  description: "Sterling & Associates Realty is a premier boutique real estate firm specializing in luxury residential properties. With decades of combined experience, our team of dedicated professionals provides unparalleled service to discerning clients seeking exceptional homes in the finest neighborhoods.",
  mission: "Our mission is to redefine the luxury real estate experience by combining cutting-edge technology, market expertise, and personalized service. We believe every client deserves white-glove treatment and access to the most exclusive properties on the market.",
  founded: 2010,
  address: {
    street: "2500 Pacific Coast Highway, Suite 300",
    city: "Newport Beach",
    state: "CA",
    zip: "92663"
  },
  contact: {
    phone: "(949) 555-0123",
    email: "info@sterlingrealty.com",
    hours: "Monday - Saturday: 9AM - 7PM, Sunday: 10AM - 5PM"
  },
  stats: {
    propertiesSold: "$2.5B+",
    yearsInBusiness: 14,
    teamMembers: 25,
    citiesServed: 15
  }
}

// Team Members - Replace image URLs with AI-generated photos
export const agents: Agent[] = [
  {
    id: "1",
    name: "Victoria Sterling",
    title: "Founder & Principal Broker",
    specialty: ["Luxury Estates", "Waterfront Properties", "Investment Properties"],
    bio: "With over 20 years of experience in luxury real estate, Victoria founded Sterling & Associates with a vision to provide exceptional service to high-net-worth individuals. Her deep market knowledge and extensive network have made her one of the region's most trusted advisors.",
    phone: "(949) 555-0124",
    email: "victoria@sterlingrealty.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop", // Replace with AI-generated photo
    socialMedia: {
      linkedin: "https://linkedin.com/in/victoriasterling",
      instagram: "https://instagram.com/victoriasterling"
    },
    stats: {
      propertiesSold: 450,
      yearsExperience: 20,
      clientsSatisfied: 380
    }
  },
  {
    id: "2",
    name: "Marcus Chen",
    title: "Senior Real Estate Advisor",
    specialty: ["Modern Architecture", "Luxury Condos", "First-Time Buyers"],
    bio: "Marcus brings a fresh perspective to luxury real estate with his background in architecture and design. His keen eye for quality construction and innovative spaces helps clients find homes that are both beautiful and valuable investments.",
    phone: "(949) 555-0125",
    email: "marcus@sterlingrealty.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop", // Replace with AI-generated photo
    socialMedia: {
      linkedin: "https://linkedin.com/in/marcuschen",
      instagram: "https://instagram.com/marcuschen.realtor"
    },
    stats: {
      propertiesSold: 280,
      yearsExperience: 12,
      clientsSatisfied: 245
    }
  },
  {
    id: "3",
    name: "Sophia Rodriguez",
    title: "Luxury Property Specialist",
    specialty: ["Coastal Properties", "Celebrity Homes", "International Clients"],
    bio: "Fluent in three languages and with connections across the globe, Sophia specializes in serving international buyers seeking premier California properties. Her white-glove service and cultural sensitivity make her the go-to agent for discerning global clients.",
    phone: "(949) 555-0126",
    email: "sophia@sterlingrealty.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop", // Replace with AI-generated photo
    socialMedia: {
      linkedin: "https://linkedin.com/in/sophiarodriguez",
      instagram: "https://instagram.com/sophiarodriguez.luxury"
    },
    stats: {
      propertiesSold: 320,
      yearsExperience: 15,
      clientsSatisfied: 290
    }
  },
  {
    id: "4",
    name: "James Wellington",
    title: "Executive Real Estate Broker",
    specialty: ["Historic Estates", "Ranch Properties", "Land Development"],
    bio: "James brings old-school charm to modern real estate. With deep roots in California real estate and extensive knowledge of historic properties, he's the trusted advisor for clients seeking timeless elegance and character-rich estates.",
    phone: "(949) 555-0127",
    email: "james@sterlingrealty.com",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", // Replace with AI-generated photo
    socialMedia: {
      linkedin: "https://linkedin.com/in/jameswellington"
    },
    stats: {
      propertiesSold: 390,
      yearsExperience: 25,
      clientsSatisfied: 340
    }
  },
  {
    id: "5",
    name: "Emma Thompson",
    title: "Senior Associate",
    specialty: ["Family Homes", "Relocation Services", "New Construction"],
    bio: "Emma's warm personality and meticulous attention to detail make her the perfect guide for families finding their dream home. She specializes in understanding her clients' lifestyles and matching them with communities where they'll thrive.",
    phone: "(949) 555-0128",
    email: "emma@sterlingrealty.com",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", // Replace with AI-generated photo
    socialMedia: {
      linkedin: "https://linkedin.com/in/emmathompson",
      instagram: "https://instagram.com/emma.realestate",
      facebook: "https://facebook.com/emmathompson.realtor"
    },
    stats: {
      propertiesSold: 210,
      yearsExperience: 8,
      clientsSatisfied: 195
    }
  },
  {
    id: "6",
    name: "David Park",
    title: "Investment Property Specialist",
    specialty: ["Investment Analysis", "Commercial-to-Residential", "Portfolio Management"],
    bio: "With an MBA in finance and a passion for real estate, David helps investors build and manage profitable property portfolios. His data-driven approach and market insights have generated exceptional returns for his clients.",
    phone: "(949) 555-0129",
    email: "david@sterlingrealty.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", // Replace with AI-generated photo
    socialMedia: {
      linkedin: "https://linkedin.com/in/davidpark"
    },
    stats: {
      propertiesSold: 175,
      yearsExperience: 10,
      clientsSatisfied: 140
    }
  }
]

export const companyValues = [
  {
    title: "Integrity First",
    description: "We operate with unwavering honesty and transparency in every transaction.",
    icon: "shield"
  },
  {
    title: "Client-Centric",
    description: "Your goals are our priority. We tailor our approach to your unique needs.",
    icon: "heart"
  },
  {
    title: "Market Expertise",
    description: "Deep local knowledge and data-driven insights guide every decision.",
    icon: "chart"
  },
  {
    title: "Innovation",
    description: "We leverage cutting-edge technology to provide superior service.",
    icon: "sparkles"
  }
]

export const testimonials = [
  {
    name: "Robert & Jennifer Mitchell",
    role: "Luxury Home Buyers",
    content: "Victoria and her team at Sterling & Associates made our dream home a reality. Their professionalism, market knowledge, and attention to detail were exceptional. We couldn't be happier!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Catherine Williams",
    role: "Investment Property Client",
    content: "David's expertise in investment properties has been invaluable. He helped us build a portfolio that's exceeded our expectations. Truly a trusted advisor.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop"
  },
  {
    name: "Michael Zhang",
    role: "First-Time Home Buyer",
    content: "Marcus made buying our first home stress-free and exciting. His patience and expertise guided us every step of the way. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop"
  }
]
