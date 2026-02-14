# Aesthetic Medicine Blog

A Next.js-based blog for aesthetic medicine in Munich, featuring SEO-optimized content, patient reviews, and practice listings.

## Features

- **SEO-Optimized**: Structured data, schema markup, internal linking.
- **Responsive Design**: Tailwind CSS, mobile-first.
- **Content Management**: Blog posts, FAQs, author pages.
- **Patient Resources**: Reviews, photos, Q&A.
- **Practice Listings**: Verified doctors in Munich.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- SEO: Schema.org, Open Graph

## Getting Started

1. Clone the repo: `git clone https://github.com/kingsleyym/aint-my-cloud.git`
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
4. Open http://localhost:3000

## Build & Deploy

- Build: `npm run build`
- Start: `npm run start`
- Deploy to Vercel/Netlify.

## Content Structure

- `/` - Home with hero, features, testimonials, newsletter.
- `/blog` - Blog listing.
- `/blog/[slug]` - Individual posts with TOC.
- `/faq` - FAQ hub.
- `/practices` - Practice listings.
- `/author/[slug]` - Author bio pages.

## SEO & Schema

- Article schema for posts.
- FAQPage for FAQ.
- LocalBusiness for practices.
- Breadcrumb navigation.

## Future Enhancements

- CMS integration (e.g., Strapi).
- User authentication for reviews.
- Multilingual support.
- Advanced analytics.

## Contributing

1. Fork the repo.
2. Create a feature branch.
3. Commit changes.
4. Push and create PR.

## License

MIT License.