import JobberRequestForm from "../components/JobberRequestForm";
import { pageMetadata } from "../../lib/seo";
export const metadata = pageMetadata("Contact Mooe’s | Statesville Landscaping & Pest Control", "Request a quote for lawn care, landscaping, pest control or wildlife removal in Statesville and Iredell County. Call or text 704-500-6475.", "/contact");

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Contact Mooe&apos;s Landscaping &amp; Pest Control</h1>
        <p className="section-intro">
          Tell us a little about your property and what you&apos;re looking for, and
          we&apos;ll get back to you as soon as possible with options and pricing.
        </p>

        <div className="grid" style={{gridTemplateColumns:"minmax(0, 1fr)"}}>
          <div className="card">
            <h2>Call or Text</h2>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:17045006475">704-500-6475</a>
            </p>
            <p>
              <strong>General Inquiries:</strong>{" "}
              <a href="mailto:mooelandscaping@gmail.com">
                mooelandscaping@gmail.com
              </a>
            </p>
            <p>
              <strong>Pest &amp; Wildlife:</strong>{" "}
              <a href="mailto:jmooesr@mooeslandscapingandpest.com">
                jmooesr@mooeslandscapingandpest.com
              </a>
            </p>
            <p>
              You can call, text, or email us directly. If we&apos;re on a job, we&apos;ll
              get back to you as soon as we&apos;re safely able to respond.
            </p>
          </div>

          <div className="card">
            <h2>Request a Free Quote</h2>
            <JobberRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
}
