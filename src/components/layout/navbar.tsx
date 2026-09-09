import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="kes-navbar">
      <Link href="/home" aria-label="Kavod Engineering Services home">
        <Image
          src="/images/KESMainLogo2.png"
          alt="Kavod Engineering Services"
          width={789}
          height={175}
          priority
          className="h-auto w-[158px] sm:w-[184px]"
        />
      </Link>

      <a
        href="#"
        className="kes-blog-link"
        aria-label="Visit our Blog (external link; address coming soon)"
        title="Blog address coming soon"
      >
        <span>Visit our Blog</span>
        <Image
          src="/svg/ArrowUpRight.svg"
          alt=""
          width={16}
          height={16}
          aria-hidden="true"
        />
      </a>
    </div>
  );
};
