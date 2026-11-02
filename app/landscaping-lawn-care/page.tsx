import { ServiceSchema } from "../components/ServiceSchema";
import { pageMetadata } from "../../lib/seo";
import Image from "next/image";

export const metadata = pageMetadata("Lawn Care & Landscaping in Statesville, NC | Mooe’s", "Mowing, mulch, pine straw, aeration, overseeding and seasonal cleanups for homes and businesses in Statesville and Iredell County. Request a quote.", "/landscaping-lawn-care");

export default function LandscapingLawnCarePage() {
  return (
    <div className="section">
      <div className="container">
        <ServiceSchema name="Landscaping and lawn care" path="/landscaping-lawn-care" />
        <nav aria-label="Breadcrumb" style={{fontSize:"0.9rem",marginBottom:"1rem"}}><a href="/">Home</a> / Landscaping and lawn care</nav>
        <h1 className="section-title">Lawn Care &amp; Landscaping in Statesville, NC</h1>
        <p className="section-intro">
          From weekly mowing to full landscape makeovers, we help homeowners and
          businesses in Iredell County keep their properties sharp, clean, and healthy
          all year long.
        </p>

        {/* Full-size mower hero image */}
        <div className="landscape-hero">
          <Image
            src="/mower-striping.jpg"
            alt="Bobcat mower creating clean stripes on a lawn maintained by Mooe's Landscaping"
            width={1400}
            height={900}
            sizes="(max-width: 768px) 100vw, 1100px"
            className="landscape-hero-img"
          />
        </div>

        {/* Mowing highlight section */}
        <section className="mower-highlight">
          <div className="mower-copy">
            <h2 className="section-title">Weekly &amp; Bi-Weekly Mowing</h2>
            <p className="section-intro">
              Consistent mowing is the foundation of a great lawn. We run
              commercial Bobcat equipment with sharp blades, clean cuts, and even
              patterns that leave your yard looking professionally maintained every
              single visit.
            </p>

            <ul className="mower-list">
              <li>Weekly or bi-weekly mowing schedules</li>
              <li>Trimming, edging where needed, and full cleanup every visit</li>
              <li>Premium striping patterns your neighbors will notice</li>
              <li>Fast communication via call or text</li>
              <li>Residential and small commercial properties</li>
            </ul>

            <div className="hero-actions" style={{ marginTop: "1rem" }}>
              <a href="/contact" className="btn btn-primary">
                Get a Mowing Quote
              </a>
              <a href="tel:17045006475" className="btn btn-secondary">
                Call or Text 704-500-6475
              </a>
            </div>
          </div>

          <div className="mower-gallery">
            <div className="mower-photo">
              <Image
                src="/stripes-lawn.jpg"
                alt="Striped lawn maintained by Mooe's Landscaping"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className="mower-photo-img"
              />
            </div>
            <div className="mower-photo">
              <Image
                src="/mower-striping.jpg"
                alt="Bobcat mower used by Mooe's Landscaping"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className="mower-photo-img"
              />
            </div>
          </div>
        </section>

        {/* Other landscaping services */}
        <div className="grid" style={{ marginTop: "2.5rem" }}>
          <div className="card">
            <h2>Mulch, Pine Straw &amp; Bed Maintenance</h2>
            <p>
              Fresh mulch or pine straw instantly cleans up your beds and helps retain
              moisture for plants. We edge, prep, weed, and install the right product
              and depth for your landscape.
            </p>
          </div>

          <div className="card">
            <h2>Landscape Installs &amp; Renovations</h2>
            <p>
              Full landscape transformations including shrubs, privacy plantings,
              decorative rock, and custom-designed bed layouts.
            </p>
          </div>

          <div className="card">
            <h2>Seasonal Cleanups</h2>
            <p>
              Fall leaf cleanup, storm debris, and full-property cleanups for overgrown
              yards or neglected spaces.
            </p>
          </div>

          <div className="card">
            <h2>Drainage &amp; Problem Areas</h2>
            <p>
              We fix erosion, soggy spots, and poor drainage using grading,
              channeling, French drains, and soil correction.
            </p>
          </div>

          <div className="card">
            <h2>Commercial &amp; HOA Properties</h2>
            <p>
              Reliable, clean, and consistent service for small commercial properties
              and HOAs that need dependable landscape care.
            </p>
          </div>
        </div>

        {/* CTA */}
        <section className="section" style={{ paddingTop: "2rem" }}>
          <div className="container">
            <h2 className="section-title">Ready for a Better Yard?</h2>
            <p className="section-intro">
              Whether you need weekly mowing or a full landscape revamp, we’re here to
              help your property look its best.
            </p>
            <div className="hero-actions">
              <a href="/contact" className="btn btn-primary">
                Request a Free Quote
              </a>
              <a href="tel:17045006475" className="btn btn-secondary">
                Call or Text 704-500-6475
              </a>
            </div>
          </div>
        </section>
<section className="service-details"><h2>Seasonal Lawn Care for Iredell County</h2><p>In addition to mowing and landscape maintenance, we offer core aeration, overseeding, fertilization, leaf removal and gutter cleaning. Tell us about thin turf, heavy leaf buildup or overgrown beds so we can quote the work your property needs.</p><h2>Landscaping &amp; Lawn Care Questions</h2><details><summary>What is included in a mowing visit?</summary><p>Our mowing service includes cutting the lawn, trimming, edging where needed and blowing clippings from hard surfaces. Your quote confirms the service area and visit frequency.</p></details><details><summary>Can you quote aeration and overseeding?</summary><p>Yes. We quote based on lawn size, access and the work requested. Share your property address and the areas you want seeded when you <a href="/contact">request a lawn care quote</a>.</p></details><details><summary>Do you maintain commercial properties?</summary><p>We provide grounds maintenance for residential and commercial properties. Contact us to review mowing areas, landscape beds, seasonal work and the service schedule.</p></details><p>Based in Statesville and serving <a href="/service-area">Iredell County communities</a>. We also offer <a href="/pest-control">pest control</a> and <a href="/wildlife-removal">wildlife removal</a>.</p></section>
      </div>
    </div>
  );
}
