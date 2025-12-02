import Image from "next/image";

export const metadata = {
  title: "Pest Control & Moisture Solutions | Mooe's Landscaping & Pest Control",
  description:
    "General pest control, rodent control, and crawlspace moisture solutions for homes and businesses in Statesville, Mooresville, Troutman and Iredell County.",
};

export default function PestControlPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Pest Control &amp; Moisture Solutions</h1>
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
            className="landscape-hero-img"
          />
        </div>

        <div className="grid">
          <div className="card">
            <h2>General Pest Control</h2>
            <p>
              We focus on the pests that are most common in our area—ants, roaches,
              spiders, and other household invaders. Service can be one-time or recurring,
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
      </div>
    </div>
  );
}
