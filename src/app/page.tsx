import type { Metadata } from "next";
import Image from "next/image";
import { SendMessageCard } from "@/app/contact/components/sendMessageCard";
import { AboutUs } from "./home/components/aboutUs";
import { HomeHeader } from "./home/components/homeHeader";
import { IndustriesServed } from "./home/components/industriesServed";
import { OurServices } from "./home/components/ourServices";

export const metadata: Metadata = {
  title: "Experts in Welding & Quality Assurance",
};

const values = [
  {
    icon: "diamond.svg",
    title: "Unrivaled Expertise",
    description: "Advanced inspections and testing backed by idustry veterans.",
  },
  {
    icon: "gears.svg",
    title: "Absolute Integrity",
    description: "Rigorous processes that prioritize safety and compliance.",
  },
  {
    icon: "agreement.svg",
    title: "Precision & Reliability",
    description: "Data-driven insights you can count on every time.",
  },
];

export default function Home() {
  return (
    <main className="kes-home">
      <HomeHeader />

      <div className="kes-sector-strip" aria-label="Industries served">
        <span>Built for critical infrastructure</span>
        <span>Construction</span>
        <span>Oil &amp; Gas</span>
        <span>Manufacturing</span>
        <span>Transportation</span>
        <span>Aerospace</span>
        <span>Power Generation</span>
      </div>

      <AboutUs />
      <OurServices />
      <IndustriesServed />

      <section className="kes-section kes-values">
        <div className="kes-section-heading">
          <p className="kes-kicker">Our value proposition</p>
          <h2>Why Choose KAVOD?</h2>
        </div>
        <div className="kes-value-grid">
          {values.map((value, index) => (
            <article key={value.title} className="kes-value-card">
              <div className="kes-value-topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Image
                  src={`/svg/${value.icon}`}
                  alt=""
                  width={44}
                  height={44}
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="kes-cta-wrap">
        <SendMessageCard />
      </div>
    </main>
  );
}
