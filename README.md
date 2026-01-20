# IDX Pro - Real Estate Website

A modern, professional real estate website built with Next.js 16, TypeScript, and Tailwind CSS, integrated with the Repliers API for property listings.

## Features

- 🏠 **Property Search & Listings** - Advanced search with filters (price, bedrooms, bathrooms, property type, location)
- 📱 **Responsive Design** - Mobile-first approach with beautiful UI on all devices
- 🖼️ **Property Details** - Comprehensive property pages with image galleries and detailed information
- 📝 **Lead Capture** - Forms for buyer inquiries and seller valuations
- ⚡ **Performance** - Optimized images, fast loading, and smooth animations
- 🎨 **Modern UI** - Built with shadcn/ui components and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Forms**: React Hook Form with Zod validation
- **API Integration**: Repliers API

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Repliers API credentials (optional for development)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cc_sample_3
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Repliers API credentials:
```env
NEXT_PUBLIC_REPLIERS_API_URL=https://api.repliers.io
REPLIERS_API_KEY=your_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── (marketing)/       # Marketing pages
│   ├── listings/          # Property listings pages
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── contact/            # Contact page
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   └── real-estate/      # Real estate specific components
├── lib/                   # Utility functions and API clients
│   ├── repliers.ts       # Repliers API client
│   ├── types.ts          # TypeScript types
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Repliers API Integration

The site integrates with the Repliers API for property data. The API client is located in `lib/repliers.ts` and handles:

- Fetching property listings with filters
- Getting individual property details
- Submitting lead inquiries

### API Configuration

Update your `.env.local` file with your Repliers API credentials. The API key is kept secure on the server side and never exposed to the client.

## Features Overview

### Homepage
- Hero section with search CTA
- Quick search filters
- Featured property listings
- Trust indicators

### Property Search
- Advanced filtering (price, bedrooms, bathrooms, type, location)
- Sort options
- Grid/list view
- Pagination

### Property Details
- High-quality image gallery
- Comprehensive property information
- Similar properties
- Lead capture form

### Lead Capture
- Buyer inquiry forms
- Seller valuation requests
- Form validation
- Success/error handling

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

Make sure to set all environment variables in your deployment platform.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_REPLIERS_API_URL` | Repliers API base URL | Yes |
| `REPLIERS_API_KEY` | Repliers API key | Yes |
| `NEXT_PUBLIC_SITE_URL` | Your site URL | Yes |

## Development

### Running in Development Mode

```bash
npm run dev
```

### Building for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Customization

### Branding

- Update colors in `app/globals.css`
- Replace logo in `components/layout/Header.tsx`
- Update footer content in `components/layout/Footer.tsx`

### Styling

The site uses Tailwind CSS with custom theme variables. Modify colors and styles in:
- `app/globals.css` - Global styles and theme
- `components/ui/*` - Component styles

## Support

For issues or questions, please contact the development team.

## License

This project is proprietary software for IDX Pro.

---

Built with ❤️ by [CraftyCode](https://craftycode.dev)
