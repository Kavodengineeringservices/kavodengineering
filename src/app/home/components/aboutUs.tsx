import Image from "next/image";

const statements = [
  {
    number: "01",
    title: "Our Mission",
    image: "/images/missionImage.jpeg",
    text: "Our mission at Kavod Engineering Services is to deliver industry-leading quality assurance, inspection, and consulting services at an effective cost without compromising safety and regulatory compliance while fostering long-term partnerships with our clients by upholding the highest standards of integrity, professionalism, and technical expertise.",
  },
  {
    number: "02",
    title: "Our Vision",
    image: "/images/visionImage.jpeg",
    text: "To be a trusted leader in quality assurance and materials consulting through innovation, continuous improvement, and a commitment to ethical engineering practices ensuring safer, efficient, and high-quality built environment.",
  },
];

export const AboutUs = () => {
  return (
    <section id="about" className="kes-section kes-about scroll-mt-24">
      <div className="kes-section-heading">
        <p className="kes-kicker">About us</p>
        <h2>Experts in Welding &amp; Quality Assurance</h2>
        <p>
          At Kavod Engineering Services, our deep expertise in welding
          engineering, material science, and quality assurance empowers clients
          to deliver infrastructure that stands the test of time.
        </p>
      </div>

      <div className="kes-statement-grid">
        {statements.map((statement) => (
          <article className="kes-statement-card" key={statement.title}>
            <div className="kes-statement-image">
              <Image
                src={statement.image}
                alt={statement.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
              <span>{statement.number}</span>
            </div>
            <div className="kes-statement-copy">
              <h3>{statement.title}</h3>
              <p>{statement.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
