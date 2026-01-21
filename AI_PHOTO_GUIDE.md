# Guide to Adding AI-Generated Agent Photos

This guide will help you replace the placeholder agent photos with AI-generated images.

## Where to Add AI-Generated Photos

All agent photos are configured in: **`lib/brokerage-data.ts`**

## Current Agents and Their Photo URLs

### 1. Victoria Sterling - Founder & Principal Broker
- **Current URL**: `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2`
- **Character**: Professional woman in her 40s-50s, confident, sophisticated
- **Suggested AI Prompt**: "Professional headshot of a confident businesswoman in her 40s with dark hair, wearing a blazer, corporate office background, luxury real estate broker, high-end professional photography, warm lighting, approachable but sophisticated expression"

### 2. Marcus Chen - Senior Real Estate Advisor
- **Current URL**: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e`
- **Character**: Modern professional man in his 30s-40s, architecture background
- **Suggested AI Prompt**: "Professional headshot of an Asian man in his 30s, clean-cut, wearing modern business attire, architectural background, real estate professional, high-end photography, natural lighting, confident smile"

### 3. Sophia Rodriguez - Luxury Property Specialist
- **Current URL**: `https://images.unsplash.com/photo-1580489944761-15a19d654956`
- **Character**: Sophisticated woman in her 30s-40s, international, multilingual
- **Suggested AI Prompt**: "Professional headshot of a Latina woman in her 30s, elegant and sophisticated, designer business attire, luxury office setting, international luxury real estate agent, studio photography, warm professional smile"

### 4. James Wellington - Executive Real Estate Broker
- **Current URL**: `https://images.unsplash.com/photo-1500648767791-00dcc994a43e`
- **Character**: Distinguished man in his 50s, classic style, old-school charm
- **Suggested AI Prompt**: "Professional headshot of a distinguished man in his 50s with salt-and-pepper hair, wearing classic suit and tie, traditional executive style, luxury real estate broker, high-end portrait photography, confident and trustworthy"

### 5. Emma Thompson - Senior Associate
- **Current URL**: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80`
- **Character**: Warm, approachable woman in her 30s, family-focused
- **Suggested AI Prompt**: "Professional headshot of a friendly woman in her 30s with blonde hair, approachable and warm smile, business casual attire, natural outdoor lighting, family-focused real estate agent, authentic and personable"

### 6. David Park - Investment Property Specialist
- **Current URL**: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d`
- **Character**: Sharp professional man in his 30s, analytical, finance background
- **Suggested AI Prompt**: "Professional headshot of an Asian man in his 30s, sharp and analytical appearance, modern business attire with glasses, contemporary office setting, investment real estate specialist, confident and intelligent expression"

## Recommended AI Photo Generators

### 1. **Midjourney** (Best Quality)
- Website: https://midjourney.com
- Best for: Highly realistic professional headshots
- Cost: $10-60/month
- Tips: Use `--ar 4:5` for vertical portrait, `--style raw` for realism

### 2. **Leonardo.ai**
- Website: https://leonardo.ai
- Best for: Good balance of quality and ease of use
- Cost: Free tier available, $12-48/month for premium
- Tips: Use "PhotoReal" mode for headshots

### 3. **DALL-E 3** (via ChatGPT Plus)
- Website: https://chat.openai.com
- Best for: Easy access if you already have ChatGPT Plus
- Cost: $20/month (ChatGPT Plus)
- Tips: Very detailed prompts work best

### 4. **Stable Diffusion** (Free, Local)
- Website: https://stability.ai
- Best for: Complete control, no monthly costs
- Cost: Free (requires technical setup)
- Tips: Use professional headshot models/checkpoints

## Image Specifications

- **Aspect Ratio**: 4:5 (portrait orientation) or 1:1 (square)
- **Minimum Resolution**: 800x1000 pixels
- **Recommended**: 1200x1500 pixels for crisp display
- **Format**: JPG or PNG
- **File Size**: Optimize to under 500KB using tools like TinyPNG

## How to Replace Photos

### Method 1: Using External URLs (Easiest)

1. Generate your AI photos using any of the tools above
2. Upload to an image hosting service:
   - **Imgur** (https://imgur.com) - Free, simple
   - **Cloudinary** (https://cloudinary.com) - Free tier, CDN
   - **Your own hosting** - Best for production
3. Copy the direct image URL
4. Open `lib/brokerage-data.ts`
5. Replace the image URL for each agent:

```typescript
{
  id: "1",
  name: "Victoria Sterling",
  // ... other fields ...
  image: "YOUR_NEW_IMAGE_URL_HERE",
}
```

### Method 2: Using Local Files (Production-Ready)

1. Generate your AI photos
2. Save them in `/public/team/` folder (create if doesn't exist):
   - `/public/team/victoria-sterling.jpg`
   - `/public/team/marcus-chen.jpg`
   - `/public/team/sophia-rodriguez.jpg`
   - etc.
3. Update `lib/brokerage-data.ts`:

```typescript
{
  id: "1",
  name: "Victoria Sterling",
  image: "/team/victoria-sterling.jpg",
}
```

## Tips for Best Results

### AI Prompt Best Practices

1. **Be Specific**: Include age range, ethnicity, hair color, clothing style
2. **Lighting**: Specify "professional studio lighting" or "natural window light"
3. **Background**: "Blurred office background" or "neutral grey backdrop"
4. **Expression**: "Warm professional smile" or "confident expression"
5. **Quality Keywords**: "professional headshot photography", "high-end portrait", "8k", "sharp focus"

### Consistency Tips

- Use the same AI model for all agents for consistent quality
- Keep the same aspect ratio for all photos
- Use similar lighting styles (all studio or all natural)
- Maintain consistent background styles
- Similar distance/framing for all portraits

### Example Full Prompt Template

```
Professional corporate headshot of a [AGE] year old [ETHNICITY] [GENDER] 
with [HAIR_DESCRIPTION], wearing [CLOTHING], [BACKGROUND_DESCRIPTION], 
luxury real estate professional, studio lighting, 
high-end portrait photography, confident [EXPRESSION], 
sharp focus, 8k quality, professional headshot style
```

## Testing Your Photos

After replacing the images:

1. Run `npm run dev`
2. Navigate to http://localhost:3000/team
3. Check that:
   - All images load correctly
   - Aspect ratios look consistent
   - No CORS errors in console
   - Images are crisp on desktop and mobile

## Customizing Agent Information

You can also customize each agent's:
- Name
- Title
- Specialty areas
- Bio
- Contact information
- Social media links
- Statistics (properties sold, years of experience)

All of this is in `lib/brokerage-data.ts`.

## Adding More Agents

To add new team members:

1. Open `lib/brokerage-data.ts`
2. Add a new object to the `agents` array:

```typescript
{
  id: "7", // Increment the ID
  name: "Your Agent Name",
  title: "Agent Title",
  specialty: ["Specialty 1", "Specialty 2"],
  bio: "Agent bio text...",
  phone: "(949) 555-0130",
  email: "agent@sterlingrealty.com",
  image: "/team/your-agent.jpg",
  socialMedia: {
    linkedin: "https://linkedin.com/in/youragent"
  },
  stats: {
    propertiesSold: 150,
    yearsExperience: 5,
    clientsSatisfied: 120
  }
}
```

3. Generate an AI photo for the new agent
4. Save to `/public/team/` or use external URL
5. The agent will automatically appear on the /team page

## Need Help?

- Check the browser console for any image loading errors
- Verify image URLs are publicly accessible
- Test images in private/incognito mode
- Make sure Next.js is configured to allow external image domains in `next.config.ts` if using external URLs

## Changing the Brokerage Name

To customize the brokerage name throughout the site:

1. Open `lib/brokerage-data.ts`
2. Update the `brokerageInfo` object:
   - `name`: Company name
   - `tagline`: Company slogan
   - `description`: About text
   - `address`: Physical address
   - `contact`: Phone/email

The changes will automatically update in:
- Header/Footer
- About page
- Team page
- Meta tags/SEO
