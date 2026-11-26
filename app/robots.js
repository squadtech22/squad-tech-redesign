import { serviceLandings } from '../src/data/serviceLandings'

// Landing pages marked `indexable` are public SEO pages; the rest stay blocked as ad-only pages.
const indexableLandings = Object.keys(serviceLandings).filter((slug) => serviceLandings[slug].indexable)

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      // The more specific /lp/<slug> allow wins over the /lp/ disallow
      allow: ['/', ...indexableLandings.map((slug) => `/lp/${slug}`)],
      disallow: ['/thank-you', '/lp/'],
    },
    sitemap: 'https://squadtechsol.com/sitemap.xml',
  }
}
