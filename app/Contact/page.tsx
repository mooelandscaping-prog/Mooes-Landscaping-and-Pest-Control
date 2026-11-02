export const metadata = {
  title: "Contact Us | Mooe's Landscaping & Pest Control",
  description:
    "Request a free quote for landscaping, lawn care, pest control, wildlife removal, or crawlspace moisture solutions in Iredell County, NC.",
};

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Contact Mooe&apos;s Landscaping &amp; Pest Control</h1>
        <p className="section-intro">
          Tell us a little about your property and what you&apos;re looking for, and
          we&apos;ll get back to you as soon as possible with options and pricing.
        </p>

        <div className="grid">
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
            <form
              action="mailto:mooelandscaping@gmail.com"
              method="POST"
              encType="text/plain"
              className="contact-form"
            >
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="Name" type="text" required />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="Phone" type="tel" required />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="Email" type="email" />
              </div>

              <div className="form-field">
                <label htmlFor="address">Address / Area</label>
                <input id="address" name="Address" type="text" />
              </div>

              <div className="form-field">
                <label htmlFor="message">How can we help?</label>
                <textarea id="message" name="Message" rows={4} />
              </div>

              <label style={{display:"flex",alignItems:"flex-start",gap:"0.6rem",fontSize:"0.9rem",lineHeight:1.6}}><input type="checkbox" name="SMS consent" value="Yes" style={{marginTop:"0.35rem"}}/><span>I agree to receive service-related text messages from Mooe’s Landscaping &amp; Pest Control, including scheduling, quotes, and billing updates. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for help. Consent is not a condition of purchase. See our <a href="/privacy-policy" style={{textDecoration:"underline"}}>Privacy Policy</a> and <a href="/terms-of-service" style={{textDecoration:"underline"}}>Terms of Service</a>.</span></label>
              <button type="submit" className="btn btn-primary">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
