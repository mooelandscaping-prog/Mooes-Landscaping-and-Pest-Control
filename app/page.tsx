"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Nancy W.",
    rating: 5,
    text: "They came out and did an amazing job maintaining my yard. Reliable, friendly, and fair pricing.",
    date: "1/20/2024",
  },
  {
    name: "Nancy B.",
    rating: 5,
    text: "Josh and his crew from Mooe’s Landscaping and Pest Control keep our property looking great all year.",
    date: "12/16/2023",
  },
  {
    name: "Casey E.",
    rating: 4,
    text: "Appreciated the quality of the work and how quickly they fit us into the schedule.",
    date: "3/12/2025",
  },
];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>Landscaping, Lawn Care &amp; Pest Control in Iredell County, NC</h1>
            <p>
              Reliable service for homes and businesses in Statesville, Mooresville,
              Troutman, Harmony, Olin, and nearby communities. Keep your property
              looking sharp and your home pest-free with one local, dependable team.
            </p>
            <div className="hero-actions">
              <a href="/contact" className="btn btn-primary">
                Get a Free Quote
              </a>
              <a href="tel:17045006475" className="btn btn-secondary">
                Call or Text 704-500-6475
              </a>
            </div>
            <p style={{ marginTop: "0.75rem", fontSize: "0.9rem", color: "#cbd5f5" }}>
              Locally owned &amp; family operated • Landscaping • Pest Control • Wildlife Removal
            </p>
          </div>

          <div className="hero-side">
            <div className="hero-photo-grid">
              <div className="hero-photo-card hero-photo-large">
                <Image
                  src="/hero-landscape.jpg"
                  alt="Finished landscape bed and stone path installed by Mooe's Landscaping in Statesville NC"
                  fill
                  sizes="(min-width: 1024px) 260px, 80vw"
                  className="hero-photo-img"
                />
              </div>
              <div className="hero-photo-column">
                <div className="hero-photo-card">
                  <Image
                    src="/hero-wildlife.jpg"
                    alt="Wildlife removal technician safely handling a snake in Iredell County NC"
                    fill
                    sizes="150px"
                    className="hero-photo-img"
                  />
                </div>
                <div className="hero-photo-card">
                  <Image
                    src="/hero-crawlspace.jpg"
                    alt="Crawlspace vapor barrier installation and moisture control"
                    fill
                    sizes="150px"
                    className="hero-photo-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Complete Outdoor Services From One Local Team
          </h2>
          <p className="section-intro">
            Instead of juggling multiple companies, work with one team that can
            handle your lawn, landscaping, and pest problems all year long.
          </p>
          <div className="grid">
            <a href="/landscaping-lawn-care" className="card">
              <h3>Landscaping &amp; Lawn Care</h3>
              <p>
                Ongoing mowing, edging, trimming, mulch and pine straw, seasonal
                plantings, and full property cleanups to keep your yard looking its best.
              </p>
            </a>
            <a href="/pest-control" className="card">
              <h3>Pest Control</h3>
              <p>
                General pest control for ants, roaches, spiders, rodents, and more.
                Safe, targeted treatments designed for North Carolina homes and businesses.
              </p>
            </a>
            <a href="/wildlife-removal" className="card">
              <h3>Wildlife Removal</h3>
              <p>
                Humane removal and exclusion for raccoons, squirrels, snakes, bats and
                other nuisance wildlife that find their way into your property.
              </p>
            </a>
            <a href="/service-area" className="card">
              <h3>Seasonal &amp; One-Time Services</h3>
              <p>
                Leaf cleanup, gutter cleaning, storm debris removal, and one-time yard
                cleanups to get your property back under control fast.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials (Google-style slider) */}
      <section className="section section-alt">
        <div className="container">
          <div className="testimonials-header">
            <div>
              <h2 className="section-title">What Our Customers Are Saying</h2>
              <p className="section-intro">
                Real Google reviews from homeowners and businesses we serve across Iredell County.
              </p>
            </div>
            <div className="testimonials-rating">
              <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>4.6 ★</div>
              <div style={{ fontSize: "0.9rem" }}>on Google · 7+ reviews</div>
            </div>
          </div>

          <div className="testimonial-slider">
            <div className="testimonial-card">
              <p>{current.text}</p>
              <div className="testimonial-name">
                {current.name} · {current.date} · {current.rating}★
              </div>
              <div className="testimonial-nav">
                <button className="btn btn-secondary" onClick={prev}>
                  ◀
                </button>
                <button className="btn btn-secondary" onClick={next}>
                  ▶
                </button>
              </div>
              <div style={{ marginTop: "0.5rem", display: "flex", gap: "4px" }}>
                {testimonials.map((_, i) => (
                  <span
                    key={i}
                    className={
                      "testimonial-dot" + (i === index ? " active" : "")
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Why Iredell County Homeowners Choose Mooe&apos;s
          </h2>
        <div className="grid">
            <div className="card card-plain">
              <h3>Local &amp; Family-Run</h3>
              <p>
                Based right here in Iredell County, we understand local lawns, local pests,
                and local expectations. We&apos;re your neighbors, not a big out-of-town franchise.
              </p>
            </div>
            <div className="card card-plain">
              <h3>Reliable &amp; Communicative</h3>
              <p>
                We show up when we say we will, keep you updated, and make it easy to reach
                us by call or text.
              </p>
            </div>
            <div className="card card-plain">
              <h3>All-In-One Service</h3>
              <p>
                Landscaping, lawn care, pest control, and wildlife removal from one company
                that already knows your property.
              </p>
            </div>
            <div className="card card-plain">
              <h3>Transparent Pricing</h3>
              <p>
                No surprise charges. You&apos;ll know what to expect before we start any job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Proudly Serving Iredell County &amp; Nearby Areas</h2>
          <p className="section-intro">
            We provide landscaping, lawn care, pest control, and wildlife removal throughout:
          </p>
          <p className="service-area">
            Statesville • Mooresville • Troutman • Harmony • Olin • 
            and surrounding Iredell County communities.
          </p>
          <p className="section-intro">
            If you&apos;re not sure whether you&apos;re in our service area, just reach out—we&apos;re
            happy to let you know.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-cta">
        <div className="container cta-inner">
          <div>
            <h2>Ready for a Yard You&apos;re Proud Of?</h2>
            <p>
              Whether you need weekly mowing, a one-time cleanup, or help with pests and
              wildlife, we&apos;re here to help.
            </p>
          </div>
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
    </>
  );
}
