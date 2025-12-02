export const metadata = {
  title: "Service Areas | Mooe's Landscaping & Pest Control",
  description:
    "Mooe's Landscaping & Pest Control serves Statesville, Mooresville, Troutman, Harmony, Olin and surrounding Iredell County communities.",
};

const areas = [
  "Statesville, NC",
  "Mooresville, NC",
  "Troutman, NC",
  "Harmony, NC",
  "Olin, NC",
  "Union Grove, NC",
  "Scotts, NC",
  "Rural Iredell County properties",
];

export default function ServiceAreaPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Where We Work</h1>
        <p className="section-intro">
          Our team is based in Iredell County and focuses on serving nearby communities
          with landscaping, lawn care, pest control, wildlife removal, and moisture
          solutions. If you&apos;re close to any of the areas below, there&apos;s a good
          chance we can help.
        </p>

        <ul className="service-area-list">
          {areas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>

        <p className="section-intro" style={{ marginTop: "1.5rem" }}>
          Not sure if you&apos;re in our service area? Call or text{" "}
          <a href="tel:17045006475">704-500-6475</a> and we&apos;ll let you know if we
          can come out or recommend a trusted partner.
        </p>
      </div>
    </div>
  );
}
