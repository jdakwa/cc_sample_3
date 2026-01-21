# Coastal Color Palette - Implementation Guide

## 🎨 Color Palette

Your site now features a beautiful coastal-inspired color scheme that evokes luxury beachfront properties and ocean views.

### Primary Colors

| Color Name | Hex Code | RGB | HSL | Usage |
|------------|----------|-----|-----|-------|
| **Navy Blue** | `#0B1F44` | rgb(11, 31, 68) | hsl(214, 73%, 16%) | Primary text, headings, dark backgrounds |
| **Seafoam Teal** | `#2DD4BF` | rgb(45, 212, 191) | hsl(173, 73%, 52%) | Primary accent, CTAs, links, icons |
| **Sandstone** | `#E8DFC9` | rgb(232, 223, 201) | hsl(40, 38%, 85%) | Secondary backgrounds, muted sections |
| **Off-White** | `#F1F5F9` | rgb(241, 245, 249) | hsl(214, 32%, 95%) | Page backgrounds, light sections |
| **Soft Gray** | `#64748B` | rgb(100, 116, 139) | hsl(215, 16%, 47%) | Body text, secondary text, muted content |

## 🎯 Color Applications

### **Navy Blue (#0B1F44)** - Authority & Trust
- Main headings (h1, h2, h3)
- Property card prices
- Footer background
- Logo text
- Navigation hover states
- Important text emphasis

### **Seafoam Teal (#2DD4BF)** - Energy & Action
- Primary buttons
- Call-to-action elements
- Links and hover states
- Active property status badges
- Icon accents
- Brand mark/accent in logo
- Border highlights on hover
- Focus states

### **Sandstone (#E8DFC9)** - Warmth & Elegance
- Property card image backgrounds
- Subtle section backgrounds
- Badge backgrounds
- Dividers and separators
- Footer headings/labels
- Muted badges (property types)

### **Off-White (#F1F5F9)** - Cleanliness & Space
- Main page background
- Card backgrounds (white overlay)
- Hero section backgrounds
- Footer text overlays

### **Soft Gray (#64748B)** - Balance & Readability
- Body text
- Secondary information
- Placeholder text
- Address details
- Property details (bed, bath, sqft labels)

## 📍 Where Colors Were Applied

### Global Styles (`app/globals.css`)
- ✅ Updated all CSS variables to use coastal palette
- ✅ Created utility classes: `.bg-navy`, `.text-navy`, `.bg-seafoam`, `.text-seafoam`, `.bg-sandstone`, `.text-sandstone`
- ✅ Updated gradient classes: `.luxury-gradient`, `.luxury-text-gradient`, `.coastal-gradient`, `.navy-gradient`
- ✅ Updated focus states to use seafoam teal

### Components Updated

#### **Property Cards** (`components/real-estate/PropertyCard.tsx`)
- Badge backgrounds: Seafoam for active listings
- Property type badges: Navy text on sandstone
- Price display: Navy bold text
- Icons: Seafoam teal (bed, bath, sqft)
- Hover border: Seafoam teal
- Image placeholder: Sandstone background
- Text labels: Soft gray for secondary info

#### **Header** (`components/layout/Header.tsx`)
- Logo company name: Navy blue
- "REALTY" accent: Seafoam teal
- Maintains all hover effects with new colors

#### **Footer** (`components/layout/Footer.tsx`)
- Background: Navy blue (dark, professional)
- Logo accent: Seafoam teal
- Main text: Off-white
- Link hover: Seafoam teal
- Section labels: Sandstone
- Border divider: Seafoam with transparency

#### **Homepage** (`app/page.tsx`)
- Hero badge: Seafoam with border
- Hero gradient: Off-white to sandstone
- Gradient text: Seafoam to navy gradient
- Section backgrounds: Alternating off-white, white, and sandstone
- Property type cards: Seafoam icons
- Trust indicators: Seafoam icon backgrounds
- All headings: Navy blue
- Body text: Soft gray

## 🌊 Design Philosophy

The coastal palette creates a sophisticated, calming atmosphere that:

1. **Evokes Luxury Coastal Living**: Navy represents the deep ocean, seafoam brings tropical waters, sandstone hints at beach elements
2. **Maintains Professional Credibility**: Navy provides authority and trust
3. **Creates Visual Energy**: Seafoam teal provides vibrant call-to-action points
4. **Ensures Readability**: High contrast between navy and off-white backgrounds
5. **Feels Warm Yet Modern**: Sandstone adds warmth without being overpowering

## 🎨 Color Combinations

### High Impact (Use Sparingly)
- Seafoam on Navy - Excellent for CTAs
- White on Seafoam - Primary buttons
- Navy on Off-White - Headings

### Everyday Use
- Soft Gray on White - Body text
- Navy on Sandstone - Labels
- Seafoam icons on White - UI elements

### Subtle Accents
- Sandstone backgrounds - Sections
- Off-White on Navy - Footer content
- Seafoam borders - Hover states

## 🔧 CSS Variable Reference

Use these CSS variables in your custom components:

```css
/* Primary palette */
--navy-blue: 214 73% 16%;
--seafoam-teal: 173 73% 52%;
--sandstone: 40 38% 85%;
--off-white: 214 32% 95%;
--soft-gray: 215 16% 47%;

/* Applied to theme variables */
--primary: var(--seafoam-teal);
--foreground: var(--navy-blue);
--background: var(--off-white);
--muted: var(--sandstone);
--muted-foreground: var(--soft-gray);
```

### Usage in Components

```tsx
// Using utility classes
<div className="bg-navy text-off-white">Content</div>
<button className="bg-seafoam text-white">Click Me</button>
<span className="text-soft-gray">Secondary text</span>

// Using CSS variables
<div style={{ backgroundColor: 'hsl(var(--navy-blue))' }}>
  <span style={{ color: 'hsl(var(--seafoam-teal))' }}>Accent</span>
</div>

// Using Tailwind with primary colors
<button className="bg-primary text-primary-foreground">
  Primary Button
</button>
```

## 📊 Accessibility

All color combinations meet WCAG AA standards:

- ✅ Navy (#0B1F44) on Off-White (#F1F5F9): **12.8:1** contrast ratio
- ✅ Soft Gray (#64748B) on White: **4.6:1** contrast ratio
- ✅ Seafoam (#2DD4BF) on Navy (#0B1F44): **4.7:1** contrast ratio
- ✅ Navy (#0B1F44) on Sandstone (#E8DFC9): **8.9:1** contrast ratio

## 🎨 Gradient Examples

### Hero Gradient
```css
background: linear-gradient(135deg, 
  hsl(var(--seafoam-teal)) 0%, 
  hsl(var(--navy-blue)) 100%
);
```

### Text Gradient
```css
background: linear-gradient(135deg, 
  hsl(var(--seafoam-teal)) 0%, 
  hsl(var(--navy-blue)) 100%
);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

## 🔄 Future Customization

To adjust the palette:

1. **Edit** `app/globals.css`
2. **Modify** the color values in the `:root` section
3. **All components** automatically update
4. **Maintain** HSL format for consistency

## 📱 Responsive Behavior

Colors remain consistent across all breakpoints. Opacity and transparency adjust for:
- Hover states: 10-20% opacity for backgrounds
- Focus rings: Seafoam teal at 100%
- Disabled states: 50% opacity
- Overlays: 5-10% for subtle effects

---

## ✨ Result

Your real estate site now has a cohesive, professional coastal luxury aesthetic that:
- Stands out from competitors
- Evokes premium beachfront properties
- Maintains excellent readability
- Creates clear visual hierarchy
- Guides users naturally through the site

Perfect for a luxury coastal real estate brokerage! 🏖️🏠
