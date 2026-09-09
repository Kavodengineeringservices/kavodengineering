import Image from "next/image";
import { IndustryContent } from "@/content/industryContent";

export const IndustriesServed = () => {
  return (
    <section className="kes-section kes-industries">
      <div className="kes-section-heading">
        <p className="kes-kicker">Industries served</p>
        <h2>Precision Solutions Across Sectors</h2>
        <p>
          From on-site inspections to laboratory testing, Kavod delivers
          tailored services for diverse industries.
        </p>
      </div>

      <div className="kes-industry-grid">
        {IndustryContent.map((industry, index) => (
          <article key={industry.industry} className="kes-industry-card">
            <div className="kes-industry-meta">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Image
                src={industry.icon}
                alt=""
                width={28}
                height={28}
                aria-hidden="true"
              />
            </div>
            <h3>{industry.industry}</h3>
            <p>{industry.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
