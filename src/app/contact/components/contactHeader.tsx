interface ContactHeaderProps {
  section: string;
  title: string;
  titleTwo: string;
  description: string;
}

const contactAssurances = [
  "Industry-leading quality assurance, inspection, and consulting services.",
  "Dependable asset management for safer and stronger infrastructure.",
  "Technical expertise without compromising safety or regulatory compliance.",
];

export const ContactHeader = ({
  section,
  title,
  titleTwo,
  description,
}: ContactHeaderProps) => {
  return (
    <header className="kes-contact-intro">
      <p className="kes-kicker">{section}</p>
      <h1>
        {title}
        <br />
        {titleTwo}
      </h1>
      <p className="kes-contact-description">{description}</p>

      <ul className="kes-contact-assurances">
        {contactAssurances.map((assurance) => (
          <li key={assurance}>
            <span aria-hidden="true">✓</span>
            {assurance}
          </li>
        ))}
      </ul>
    </header>
  );
};
