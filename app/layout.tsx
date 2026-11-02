import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = {
 ...pageMetadata("Landscaping & Pest Control in Statesville, NC | Mooe’s", "Local lawn care, landscaping, pest control and wildlife removal in Statesville, Mooresville and Iredell County, NC. Call 704-500-6475 for a quote.", "/"),
 metadataBase: new URL("https://www.mooeslandscapingandpest.com"),
 applicationName: "Mooe’s Landscaping & Pest Control",
 robots: { index: true, follow: true },
 icons: {icon:[{url:"/icon.png",sizes:"1024x1024",type:"image/png"}],apple:[{url:"/apple-icon.png",sizes:"1024x1024",type:"image/png"}]}
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
  legalName: "Mooe’s Landscaping LLC",
  logo: "https://www.mooeslandscapingandpest.com/company-logo.png",
  email: "mooelandscaping@gmail.com",
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
        <a className="skip-link" href="#main-content">Skip to content</a>
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
              <a href="/contact" className="nav-link nav-cta">
                Get a Quote
              </a>
            </nav>
          </div>
        </header>

        <main id="main-content" className="site-main">{children}</main>

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
                  <a href="mailto:mooelandscaping@gmail.com">
                    mooelandscaping@gmail.com
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

          <nav aria-label="Legal" className="container" style={{display:"flex",gap:"1.5rem",flexWrap:"wrap",marginTop:"1.25rem",textDecoration:"underline"}}><a href="/privacy-policy">Privacy Policy</a><a href="/terms-of-service">Terms of Service</a></nav>
          <div className="footer-bottom">
            © {new Date().getFullYear()} Mooe&apos;s Landscaping &amp; Pest
            Control. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
