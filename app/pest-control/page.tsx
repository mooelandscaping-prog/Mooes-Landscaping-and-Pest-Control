import { ServiceSchema } from "../components/ServiceSchema";
import { pageMetadata } from "../../lib/seo";
import Image from "next/image";

export const metadata = pageMetadata("Pest Control in Statesville & Iredell County, NC | Mooe’s", "Quarterly pest control, rodent control, mosquito treatments and crawlspace vapor barriers in Statesville, Mooresville and Iredell County. Get a quote.", "/pest-control");

export default function PestControlPage() {
  return (
    <div className="section">
      <div className="container">
        <ServiceSchema name="Pest control and crawlspace moisture services" path="/pest-control" />
        <nav aria-label="Breadcrumb" style={{fontSize:"0.9rem",marginBottom:"1rem"}}><a href="/">Home</a> / Pest control and crawlspace moisture services</nav>
        <h1 className="section-title">Pest Control in Statesville &amp; Iredell County</h1>
        <p className="section-intro">
          Ants, roaches, spiders, rodents, and moisture issues in the crawlspace can all
          lead to bigger problems over time. We provide targeted pest control treatments
          and crawlspace solutions designed for homes and businesses in Iredell County.
        </p>

        {/* Hero image for pest / crawlspace work */}
           <div className="landscape-hero">
          <Image
            src="/hero-crawlspace.jpg"
            alt="Crawlspace vapor barrier and moisture control installation in Iredell County"
            width={1400}
            height={900}
            sizes="(max-width: 768px) 100vw, 1100px"
            className="landscape-hero-img"
          />
        </div>

        <div className="grid">
          <div className="card">
            <h2>Quarterly &amp; One-Time Pest Control</h2>
            <p>
              We focus on the pests that are most common in our area—ants, roaches,
              spiders, and other household invaders. Service can be one-time or quarterly,
              depending on your needs and tolerance.
            </p>
            <p>
              Treatments are applied with care for your family, pets, and property while
              still being effective against problem pests.
            </p>
          </div>

          <div className="card">
            <h2>Rodent Control &amp; Exclusion</h2>
            <p>
              Rodents can cause damage, contaminate surfaces, and create noise and
              stress. We inspect, identify entry points, and set up a plan that can
              include trapping, baiting, and exclusion recommendations.
            </p>
          </div>

          <div className="card">
            <h2>Crawlspace Moisture &amp; Vapor Barriers</h2>
            <p>
              Excess moisture in a crawlspace can lead to mold, odors, structural
              concerns, and attract more pests. We install vapor barriers and moisture
              control solutions to help stabilize your crawlspace environment.
            </p>
          </div>

          <div className="card">
            <h2>Flexible Scheduling</h2>
            <p>
              We work around your schedule and can often coordinate pest control with
              your landscaping or lawn care visits, so you don&apos;t have to wait on
              multiple companies.
            </p>
          </div>
        </div>
<section className="service-details"><h2>Mosquito Treatments &amp; Recurring Pest Service</h2><p>We offer seasonal mosquito treatments and quarterly pest control. We discuss the pests you are seeing, inspect the affected areas and recommend a service plan for your property. Your quote explains the treatment scope and schedule.</p><h2>Pest Control Questions</h2><details><summary>Do you offer quarterly pest control?</summary><p>Yes. Quarterly service is available for common household pests. Let us know the pest, where you are seeing activity and whether the issue is indoors or outdoors so we can discuss an appropriate plan.</p></details><details><summary>How should I prepare for treatment?</summary><p>Preparation and re-entry instructions depend on the treatment and product. We explain any required steps before the visit, including instructions for people and pets.</p></details><details><summary>Can you help with crawlspace moisture?</summary><p>We install crawlspace vapor barriers and discuss moisture concerns during an inspection. Tell us about standing water, odors or other visible conditions when requesting service.</p></details><h2>Request a Pest Control Quote</h2><p>Serving Statesville, Mooresville, Troutman and surrounding <a href="/service-area">Iredell County communities</a>. Call <a href="tel:17045006475">704-500-6475</a> or <a href="/contact">request a quote online</a>. For animals entering an attic or crawlspace, see our <a href="/wildlife-removal">wildlife removal and exclusion service</a>.</p></section>
      </div>
    </div>
  );
}
