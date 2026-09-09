import ContactForm from "@/app/contact/components/contactForm";
import { ContactHeader } from "./components/contactHeader";

export default function Contact() {
  return (
    <main className="kes-contact-page">
      <div className="kes-contact-layout">
        <ContactHeader
          section="contact us"
          title="Let's Talk"
          titleTwo="Quality & Integrity"
          description="Whether you're planning a new project or need expert guidance, our team is ready to provide dependable asset management and comprehensive quality assurance solutions."
        />

        <ContactForm />
      </div>
    </main>
  );
}
