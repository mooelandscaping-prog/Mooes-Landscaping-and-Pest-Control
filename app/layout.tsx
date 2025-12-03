import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Mooe's Landscaping & Pest Control | Landscaping, Lawn Care & Pest Control in Iredell County NC",
  description:
    "Mooe's Landscaping & Pest Control provides lawn mowing, landscaping, pest control, wildlife removal, and moisture solutions for homes and businesses in Statesville, Mooresville, Troutman, Harmony, Olin and Iredell County, NC.",
  alternates: {
    canonical: "https://www.mooeslandscapingandpest.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.mooeslandscapingandpest.com/",
    title:
      "Mooe's Landscaping & Pest Control | Landscaping, Lawn Care & Pest Control in Iredell County NC",
    description:
      "Local, family-run landscaping, lawn care, pest control, wildlife removal, and moisture solutions serving Statesville, Mooresville, Troutman, Harmony, Olin and surrounding Iredell County communities.",
  },
};

// --------- LocalBusiness JSON-LD (SEO schema) ----------
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.mooeslandscapingandpest.com/#local-business",
  name: "Mooe's Landscaping and Pest Control",
  url: "https://www.mooeslandscapingandpest.com/",
  image: [
    "https://www.mooeslandscapingandpest.com/hero-landscape.jpg",
    "https://www.mooeslandscapingandpest.com/mower-striping.jpg",
    "https://www.mooeslandscapingandpest.com/hero-wildlife.jpg",
  ],
  telephone: "+1-704-500-6475",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "160 Mount Hermon Road",
    addressLocality: "Statesville",
    addressRegion: "NC",
    postalCode: "28625",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Statesville" },
    { "@type": "City", name: "Mooresville" },
    { "@type": "City", name: "Troutman" },
    { "@type": "City", name: "Harmony" },
    { "@type": "City", name: "Olin" },
    { "@type": "AdministrativeArea", name: "Iredell County" },
  ],
  hasMap:
    "https://www.google.com/maps/place/?q=place_id:ChIJAQDkzThFUYgRBI3i8xS9geU",
  description:
    "Local, family-operated landscaping, lawn care, pest control, wildlife removal, and moisture solutions for homes and businesses in Iredell County, North Carolina.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "7",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-004M1FRK8T"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-004M1FRK8T');
          `}
        </Script>

        {/* JSON-LD LocalBusiness schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="site-body">
        <header className="site-header">
          <div className="container header-inner">
            <div>
              <div className="logo-main">Mooe&apos;s</div>
              <span className="logo-sub">Landscaping &amp; Pest Control</span>
            </div>

            <nav className="nav">
              <a href="/" className="nav-link">
                Home
              </a>
              <a href="/landscaping-lawn-care" className="nav-link">
                Landscaping &amp; Lawn Care
              </a>
              <a href="/pest-control" className="nav-link">
                Pest Control
              </a>
              <a href="/wildlife-removal" className="nav-link">
                Wildlife Removal
              </a>
              <a href="/service-area" className="nav-link">
                Service Area
              </a>
              <a href="/Contact" className="nav-link nav-cta">
                Get a Quote
              </a>
            </nav>
          </div>
        </header>

        <main className="site-main">{children}</main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <div>
              <div className="footer-logo">
                Mooe&apos;s Landscaping &amp; Pest Control
              </div>
              <div>
                Call or Text: <a href="tel:17045006475">704-500-6475</a>
              </div>

              <div className="footer-contact" style={{ marginTop: "0.35rem" }}>
                <div>
                  General Inquiries:{" "}
                  <a href="mailto:mooeslandscaping@gmail.com">
                    mooeslandscaping@gmail.com
                  </a>
                </div>
                <div>
                  Sales (Landscaping &amp; Lawn Care):{" "}
                  <a href="mailto:betty@mooeslandscapingandpest.com">
                    betty@mooeslandscapingandpest.com
                  </a>
                </div>
                <div>
                  Pest &amp; Wildlife:{" "}
                  <a href="mailto:jmooesr@mooeslandscapingandpest.com">
                    jmooesr@mooeslandscapingandpest.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} Mooe&apos;s Landscaping &amp; Pest
            Control. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
