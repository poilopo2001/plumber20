# Roadmap: Plombier Pro Luxembourg Website

## Phase 1: Project Setup & Configuration
- [x] Initialize Next.js project with TypeScript
- [ ] Configure environment variables (.env)
  - MONGODB_URI
  - OPENROUTER_API_KEY
  - NEXT_PUBLIC_SITE_URL
  - NEXT_PUBLIC_SITE_NAME
- [ ] Set up MongoDB connection
- [ ] Configure OpenRouter API integration
- [ ] Set up SEO components and metadata

## Phase 2: Static Pages (Priority)
- [ ] Homepage (/)
  - Company presentation
  - Services overview
  - Contact information
- [ ] About Us (/about)
- [ ] Contact (/contact)
- [ ] Services Overview (/services)

## Phase 3: Dynamic Pages & SSR Implementation
### Location-Service Based Pages
- [ ] Create dynamic routes for Luxembourg quarters and services
  - `/[quartier]/[service]` (e.g., `/bonnevoie/debouchage-canalisation`)
  - MongoDB collections:
    - Quarters list (Luxembourg neighborhoods)
    - Services list (plumbing tasks)
    - Generated content (cached responses)
  - OpenRouter API integration:
    - Generate location-specific service content
    - Handle content regeneration triggers
    - Implement content caching strategy
  - SEO Optimizations:
    - Dynamic metadata generation
    - Structured data for local services
    - Location-specific keywords

### Supporting Pages
- [ ] Create quartier index pages
  - `/[quartier]` (lists all services available in the quarter)
- [ ] Create service index pages
  - `/services` (overview of all plumbing services)
  - Service categories and descriptions

## Phase 4: SEO & Performance
- [ ] Implement French metadata for all pages
- [ ] Set up sitemap.xml generation
- [ ] Configure robots.txt
- [ ] Implement structured data (Schema.org)
- [ ] Set up French meta descriptions and titles

## Phase 5: Content Generation System
- [ ] Create MongoDB schemas for:
  - Quarters
  - Services
  - Generated content
- [ ] Implement OpenRouter API content generation
  - Content generation triggers
  - Content caching strategy
  - Error handling

## Phase 6: Testing & Launch
- [ ] Performance testing
- [ ] SEO audit
- [ ] Content review
- [ ] Launch preparation

## Technical Stack
- Next.js (App Router)
- TypeScript
- MongoDB
- OpenRouter API
- TailwindCSS

## Notes
- All content will be in French
- Focus on SEO optimization
- Use SSR for dynamic pages
- Cache generated content when possible
- Ensure mobile responsiveness
