import Image from "next/image";
import { CustomButton } from "@/components/shared/customButton";

export const SendMessageCard = () => {
  return (
    <section className="kes-contact-cta">
      <div className="kes-contact-art" aria-hidden="true">
        <Image
          src="/svg/KAVODOutline.svg"
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 58vw"
          className="object-contain object-left-bottom"
        />
      </div>

      <div className="kes-contact-copy">
        <p className="kes-kicker">Send us a message</p>
        <h2>Ready to elevate your next project?</h2>
        <p>
          Let&apos;s discuss how Kavod can ensure your infrastructure is built
          with the highest standards of quality and integrity.
        </p>
        <CustomButton href="/contact" variant="secondary" className="kes-cta-button">
          <span className="flex items-center gap-3">
            Get a consultation
            <Image src="/svg/ArrowUpRight.svg" alt="" width={18} height={18} />
          </span>
        </CustomButton>
      </div>
    </section>
  );
};
