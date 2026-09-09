import Image from "next/image";
import { CustomButton } from "@/components/shared/customButton";

export const HomeHeader = () => {
  return (
    <header className="kes-hero">
      <Image
        src="/images/image1.jpg"
        alt="Illuminated structural steel framework"
        fill
        priority
        sizes="100vw"
        quality={75}
        className="object-cover object-center"
      />
      <div className="kes-hero-shade" />
      <div className="kes-grid-overlay" />

      <div className="kes-hero-content">
        <p className="kes-kicker">Engineering quality assurance</p>
        <h1>Engineering Quality, Ensuring Integrity.</h1>
        <p className="kes-hero-copy">
          Leading experts in materials quality assurance and quality control
          inspection for safer and stronger infrastructure.
        </p>
        <CustomButton href="/contact" className="kes-hero-cta">
          <span className="flex items-center gap-3">
            Get a consultation
            <Image src="/svg/ArrowUpRight.svg" alt="" width={18} height={18} />
          </span>
        </CustomButton>
      </div>
    </header>
  );
};
