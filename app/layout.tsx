import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Mooe's Landscaping & Pest Control",
  description: "Landscaping, lawn care, pest control, and wildlife removal in Iredell County NC.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="site-body">
        {/* HEADER */}
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="logo-main">
              Mooe&apos;s
              <span className="logo-sub">Landscaping & Pest Control</span>
            </Link>

            <nav className="nav">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/landscaping-lawn-care" className="nav-link">Landscaping & Lawn Care</Link>
              <Link href="/pest-control" className="nav-link">Pest Control</Link>
              <Link href="/wildlife-removal" className="nav-link">Wildlife Removal</Link>
              <Link href="/service-area" className="nav-link">Service Area</Link>
              <Link href="/Contact" className="nav-link nav-cta">Get a Quote</Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="site-main">{children}</main>

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="container footer-inner">
            <div>
              <div className="footer-logo">Mooe&apos;s Landscaping & Pest Control</div>
              <div className="footer-contact">
                <p>
                  <strong>Call or Text:</strong>{" "}
                  <a href="tel:17045006475">704-500-6475</a>
                </p>

                <p>
                  <strong>General Inquiries:</strong>{" "}
                  <a href="mailto:mooelandscaping@gmail.com">mooelandscaping@gmail.com</a>
                </p>

                <p>
                  <strong>Sales (Landscaping & Lawn Care):</strong>{" "}
                  <a href="mailto:betty@mooeslandscapingandpest.com">
                    betty@mooeslandscapingandpest.com
                  </a>
                </p>

                <p>
                  <strong>Pest & Wildlife:</strong>{" "}
                  <a href="mailto:jmooesr@mooeslandscapingandpest.com">
                    jmooesr@mooeslandscapingandpest.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} Mooe&apos;s Landscaping & Pest Control. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
