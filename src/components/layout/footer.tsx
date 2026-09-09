"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+1 678 908 9470";

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer className="kes-footer">
      <div className="kes-footer-lead">
        <Image
          src="/images/KESMainLogo2.png"
          alt="Kavod Engineering Services"
          width={789}
          height={175}
          className="h-auto w-[210px] md:w-[260px]"
        />
        <p>
          We are trusted experts in engineering, welding inspection, coatings,
          and quality assurance for safer and stronger infrastructure.
        </p>
      </div>

      <div className="kes-footer-grid">
        <section>
          <h3>Explore</h3>
          <nav>
            <Link href="/home#about">About us</Link>
            <Link href="/home#services">Services</Link>
            <Link href="/contact">Contact us</Link>
            <a href="#">Visit our Blog ↗</a>
          </nav>
        </section>

        <section>
          <h3>Keep in touch</h3>
          <nav>
            <a href="https://www.instagram.com/invites/contact/?igsh=kzhqo6r2gywy&utm_content=xksfjv0">
              Instagram ↗
            </a>
            <a href="https://www.linkedin.com/company/kavod-engineering-services/">
              LinkedIn ↗
            </a>
          </nav>
        </section>

        <section>
          <h3>Contact us</h3>
          <nav>
            <button onClick={copyPhoneNumber} type="button">
              {copied ? "Copied ✓" : phoneNumber}
            </button>
            <a href="mailto:support@kavodengineering.com">
              support@kavodengineering.com
            </a>
          </nav>
        </section>

        <section>
          <h3>Location</h3>
          <p>Jacksonville, Florida, USA</p>
        </section>
      </div>

      <div className="kes-footer-mark" aria-hidden="true">
        KAVOD
      </div>

      <div className="kes-footer-base">
        <span>
          © {new Date().getFullYear()} — Copyright. KAVOD Engineering Services
        </span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
};
