# TagOff - Premium Streetwear E-Commerce Platform

## Overview

TagOff is a modern, minimalist e-commerce platform for luxury streetwear brands. Built with Next.js 15, React 19, and TypeScript, it features a clean design inspired by premium streetwear retailers with the signature Tiffany Blue (#0ABAB5) accent color.

## Design System

### Color Palette
- **Primary Background**: Pure White (#FFFFFF)
- **Signature Accent**: Tiffany Blue (#0ABAB5)
- **Text**: Black (#000000)
- **Muted Gray**: Light Gray (#F8F9FA)
- **Borders**: Subtle Gray (#E5E5E5)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Heading Weights**: 700-800 (Bold/Extra Bold)
- **Body Weight**: 400 (Regular)
- **Heading Sizes**: 48px (h1) down to 16px (h6)

### Layout
- **Container Max Width**: 1400px
- **Section Padding**: 80px desktop / 40px mobile
- **Grid System**: 12-column responsive grid
- **Border Radius**: 6px (minimal rounded corners)

## Features Implemented

### Core Pages

1. **Homepage (/)**
   - Hero section with TagOff logo (Tag in white, Off in Tiffany Blue)
   - Slogan: "Streetwear. Redefined."
   - Featured product preview cards
   - Brand statement section
   - Smooth fade-in animations

2. **Shop Page (/shop)**
   - Responsive product grid (1/2/3 columns)
   - Product cards with hover effects
   - Quick add to cart functionality
   - Stock indicators
   - Product filtering by brand, size, and color

3. **Product Detail Page (/product/[id])**
   - Large product image display
   - Detailed product information
   - Product specifications (size, color, category)
   - Add to cart functionality
   - Related products section
   - Stock availability indicator

4. **Shopping Cart (/cart)**
   - Cart item list with thumbnails
   - Quantity adjustment controls (+/-)
   - Remove item functionality
   - Order summary with totals
   - Free shipping indicator
   - Empty cart state
   - Persistent cart (localStorage)

5. **Checkout Page (/checkout)**
   - Multi-section checkout form
   - Contact information section
   - Shipping address fields
   - Payment method selection (Card/PayPal)
   - Secure payment form (Visa, Mastercard, PayPal)
   - Order summary sidebar
   - Form validation
   - Processing state

6. **Terms & Conditions (/terms)**
   - Legal information page
   - Clean typography
   - Structured content sections

7. **Contact Page (/contact)**
   - Contact information cards
   - Contact form with validation
   - Email and live chat options

### Components

#### Layout Components
- **Header**: Fixed navigation with logo, menu, and cart icon (with item count badge)
- **Footer**: Brand info, quick links, social media icons (Instagram, TikTok)

#### Product Components
- **Product Card**: Hover effects, quick add button, stock indicators
- **Product Grid**: Responsive layout for shop and related products

### State Management
- **Cart Context**: Global shopping cart state with localStorage persistence
- **Cart Actions**: Add to cart, remove from cart, update quantity, clear cart
- **Real-time Updates**: Cart count badge updates automatically

### Product Data
**Initial Products:**

1. **Palace Pertex Opaque Balaclava Puffer Jacket**
   - Brand: Palace
   - Price: €1,100
   - Size: S
   - Color: Black
   - Category: Outerwear

2. **Broken Planet Puffer Jacket**
   - Brand: Broken Planet
   - Price: €400
   - Size: S
   - Color: Black
   - Category: Outerwear

## Technical Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **React**: 19.1.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4.x + Custom CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Notifications**: Sonner (toast notifications)
- **State Management**: React Context API
- **Data Persistence**: localStorage

## Animations & Interactions

- **Hero Section**: Staggered fade-in animations
- **Product Cards**: Hover lift effect with shadow transition
- **Buttons**: Smooth hover states with color transitions
- **Cart Badge**: Bounce animation when items added
- **Smooth Scrolling**: Page-level smooth scroll behavior
- **Form Focus**: Tiffany Blue ring on input focus

## Responsive Design

- **Mobile**: Single column layout, hamburger menu, optimized touch targets (44px minimum)
- **Tablet**: 2-column product grid, simplified navigation
- **Desktop**: Full 3-column grid, expanded navigation, enhanced hover effects

## Key Design Decisions

1. **Minimalist Aesthetic**: Clean white background with strategic use of Tiffany Blue for accents
2. **Typography Hierarchy**: Bold Inter font creates clear visual structure
3. **Generous Spacing**: 80px section padding creates premium feel
4. **Subtle Animations**: Fade-ins and hover effects enhance UX without distraction
5. **Component Reusability**: Header/Footer shared across all pages
6. **Persistent Cart**: localStorage ensures cart survives page refreshes
7. **Real-time Feedback**: Toast notifications for user actions
8. **Accessibility**: Focus visible states, semantic HTML, ARIA labels

## File Structure

```
src/
├── app/
│   ├── cart/page.tsx
│   ├── checkout/page.tsx
│   ├── contact/page.tsx
│   ├── product/[id]/page.tsx
│   ├── shop/page.tsx
│   ├── terms/page.tsx
│   ├── page.tsx (homepage)
│   ├── layout.tsx
│   └── globals.css
├── components/
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
└── lib/
    ├── data/
    │   └── products.ts
    ├── store/
    │   └── cart-context.tsx
    └── types/
        └── product.ts
```

## Future Enhancements

The codebase is architected to support:
- User authentication and accounts
- Wishlist functionality
- Product search and advanced filtering
- Size guide modals
- Product reviews and ratings
- Multiple product images
- Image zoom functionality
- Order history tracking
- Email notifications
- Admin dashboard for product management
- Real payment gateway integration (Stripe, PayPal)
- Inventory management system
- Multi-language support

## Brand Identity

**TagOff** represents premium streetwear with a modern, minimalist approach. The brand combines:
- **Luxury**: High-end product curation and clean design
- **Urban**: Streetwear culture and contemporary aesthetics
- **Accessibility**: User-friendly interface and clear navigation
- **Trust**: Secure checkout and transparent policies

The signature Tiffany Blue (#0ABAB5) creates a distinctive brand identity that stands out in the streetwear market while maintaining sophistication.

## Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server runs on port 4006: http://localhost:4006

## Notes

- Product images use placeholder text due to this being a demonstration
- Payment processing is simulated (no real transactions)
- All product data is currently static in `/src/lib/data/products.ts`
- Cart data persists in browser localStorage
- Forms are client-side validated only

---

**TagOff** - Streetwear. Redefined.
