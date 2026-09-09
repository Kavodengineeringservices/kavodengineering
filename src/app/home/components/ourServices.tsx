"use client";

import Image from "next/image";
import { useState } from "react";
import { ServicesContent } from "@/content/servicesContent";

const serviceHighlights = [
  ["Technical service experts", "Project Management"],
  [
    "Weld Procedure Qualification",
    "Metallurgical & Mechanical Testing",
    "Failure Analysis",
  ],
  [
    "Certified Welding Inspection (CWI)",
    "NDT (UT, MT, VT)",
    "Coating Inspection",
  ],
  ["CWI Training", "Quality and Safety Workshops"],
];

export const OurServices = () => {
  const [activeService, setActiveService] = useState(0);
  const service = ServicesContent[activeService];

  return (
    <section id="services" className="kes-section kes-services scroll-mt-24">
      <div className="kes-section-heading">
        <p className="kes-kicker">Our services</p>
        <h2>Your Assurance, Our Expertise</h2>
        <p>
          From welding inspection to failure analysis, we provide
          precision-engineered solutions.
        </p>
      </div>

      <div className="kes-service-tabs" role="tablist" aria-label="Kavod services">
        {ServicesContent.map((item, index) => (
          <button
            key={item.link}
            type="button"
            role="tab"
            aria-selected={activeService === index}
            aria-controls="active-service-panel"
            onClick={() => setActiveService(index)}
            className={activeService === index ? "is-active" : ""}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.section}
          </button>
        ))}
      </div>

      <article
        id="active-service-panel"
        className="kes-service-panel"
        role="tabpanel"
        key={service.link}
      >
        <div className="kes-service-copy">
          <p className="kes-index">{String(activeService + 1).padStart(2, "0")}</p>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <ul>
            {serviceHighlights[activeService].map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <a href="/contact" className="kes-outline-link">
            Discuss this service
            <Image src="/svg/ArrowUpRight.svg" alt="" width={16} height={16} />
          </a>
        </div>

        <div className="kes-service-image">
          <Image
            src={`/images/${service.image}`}
            alt={`Kavod ${service.title}`}
            fill
            sizes="(max-width: 900px) 100vw, 54vw"
            className="object-cover"
          />
          <div className="kes-image-code" aria-hidden="true">
            <span>KES / {service.link.toUpperCase()}</span>
            <span>QUALITY VERIFIED</span>
          </div>
        </div>
      </article>
    </section>
  );
};
