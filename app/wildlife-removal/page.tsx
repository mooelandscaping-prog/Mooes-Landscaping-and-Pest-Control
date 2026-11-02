import { ServiceSchema } from "../components/ServiceSchema";
import { pageMetadata } from "../../lib/seo";
import Image from "next/image";

export const metadata = pageMetadata("Wildlife Removal in Statesville, NC | Mooe’s", "Wildlife removal and exclusion for raccoons, squirrels, snakes and other nuisance animals in Statesville and Iredell County. Request an inspection.", "/wildlife-removal");

export default function WildlifeRemovalPage() {
  return (
    <div className="section">
      <div className="container">
        <ServiceSchema name="Wildlife removal and exclusion" path="/wildlife-removal" />
        <nav aria-label="Breadcrumb" style={{fontSize:"0.9rem",marginBottom:"1rem"}}><a href="/">Home</a> / Wildlife removal and exclusion</nav>
        <h1 className="section-title">Wildlife Removal &amp; Exclusion in Statesville, NC</h1>
        <p className="section-intro">
          When wildlife gets a little too close for comfort—inside your crawlspace,
          attic, walls, or around your home—we provide safe, humane removal and
          exclusion to address the animal problem and help protect your property.
        </p>
        {/* Snake / wildlife hero image */}
        <div className="wildlife-hero">
          <Image
            src="/hero-wildlife.jpg"
            alt="Wildlife removal technician safely handling a snake in Iredell County"
            width={600}
            height={900}
            sizes="(max-width: 640px) 100vw, 600px"
            className="wildlife-hero-img"
          />
        </div>

        <div className="grid">
          <div className="card">
            <h2>Common Wildlife We Handle</h2>
            <p>
              We regularly respond to calls for:
            </p>
            <ul>
              <li>Raccoons in attics or crawlspaces</li>
              <li>Squirrels chewing and nesting in structures</li>
              <li>Snakes around homes, in garages, and crawlspaces</li>
              <li>Bats in attics and soffits</li>
              <li>Other nuisance wildlife around homes and outbuildings</li>
            </ul>
          </div>

          <div className="card">
            <h2>Humane Trapping &amp; Removal</h2>
            <p>
              Animals are trapped or captured using methods designed to minimize
              stress and risk to both the animal and your family. Once removed, we
              can advise on or perform repairs to help prevent future issues.
            </p>
          </div>

          <div className="card">
            <h2>Exclusion &amp; Prevention</h2>
            <p>
              Getting the animal out is only half the battle. We look for entry
              points, damage, and attractants, then recommend exclusion steps such as
              sealing gaps, screening vents, and protecting vulnerable areas so
              wildlife can&apos;t get back in.
            </p>
          </div>

          <div className="card">
            <h2>Cleanup &amp; Sanitation</h2>
            <p>
              Wildlife can leave behind droppings, nesting material, and odors. We
              can help with basic cleanup and recommend additional remediation if the
              damage is extensive.
            </p>
          </div>

          <div className="card">
            <h2>Integrated with Pest &amp; Moisture Services</h2>
            <p>
              Because we also handle general pest control and crawlspace moisture
              solutions, we can look at your property as a whole and create a
              complete plan to protect it.
            </p>
          </div>
        </div>

        <section className="section" style={{ paddingTop: "2rem" }}>
          <div className="container">
            <h2 className="section-title">Have a Wildlife Problem Right Now?</h2>
            <p className="section-intro">
              If you&apos;re currently dealing with an animal in or around your home,
              call or text and let us know what you&apos;re seeing. We&apos;ll tell
              you what to expect and schedule a visit as soon as possible.
            </p>
            <div className="hero-actions">
              <a href="tel:17045006475" className="btn btn-primary">
                Call or Text 704-500-6475
              </a>
              <a href="/contact" className="btn btn-secondary">
                Request an Inspection Online
              </a>
            </div>
          </div>
        </section>
<section className="service-details"><h2>Wildlife Removal Questions</h2><details><summary>Can you help keep animals from coming back?</summary><p>We inspect likely entry points and recommend exclusion work such as sealing gaps and screening vents. The appropriate repair depends on the animal and the building.</p></details><details><summary>What should I tell you when I call?</summary><p>Share your address, where the animal was seen or heard, when the activity happens and any photos you can take from a safe distance. Avoid approaching or handling wildlife.</p></details><details><summary>Can you help with a snake in a garage or crawlspace?</summary><p>Contact us with the location and a description of what you are seeing. We will discuss access and scheduling for removal. Keep people and pets away from the animal while waiting for assistance.</p></details><p>We serve Statesville and nearby <a href="/service-area">Iredell County communities</a>. For insects or rodent treatment, visit our <a href="/pest-control">pest control page</a>.</p></section>
      </div>
    </div>
  );
}
