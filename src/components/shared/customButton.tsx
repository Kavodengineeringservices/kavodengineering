"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface CustomButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const CustomButton = ({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: CustomButtonProps) => {
  const variantClasses = {
    primary:
      "text-base-black bg-[#ff5b00] hover:bg-[#ff7a33]",
    secondary: "text-base-black bg-base-white hover:bg-gray-100",
  };

  const baseClasses =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full text-[14px] uppercase tracking-[0.05em] py-3 px-6 transition-colors duration-300";

  const buttonClasses = clsx(baseClasses, variantClasses[variant], className);

  const content = <span className="relative z-10">{children}</span>;

  if (href) {
    return (
      <Link href={href} className={buttonClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {content}
    </button>
  );
};
