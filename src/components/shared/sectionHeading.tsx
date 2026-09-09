import React from "react";
import clsx from "clsx";

interface SectionHeadingProps {
  section: string;
  title: string;
  paragraph?: string;
  className?: string;
  variant?: "white" | "black";
  titleClassName?: string;
  paragraphClassName?: string;
}

export const SectionHeading = ({
  section,
  title,
  paragraph,
  className,
  variant = "black",
  titleClassName,
  paragraphClassName,
}: SectionHeadingProps) => {
  const variantClasses = {
    white: "text-base-white",
    black: "text-base-white",
  };

  return (
    <div
      className={clsx(
        "flex flex-col gap-2",
        className,
        variantClasses[variant]
      )}
    >
      <span className="text-secondary-500 font-semibold uppercase">
        {section}
      </span>
      <h3
        className={clsx(
          "text-[30px] md:text-[36px] leading-[36px] md:leading-[42px]",
          titleClassName
        )}
      >
        {title}
      </h3>
      {paragraph && (
        <p
          className={clsx(
            "md:text-[18px] md:max-w-[70%] lg:max-w-[45%] xl:max-w-[30%]",
            paragraphClassName
          )}
        >
          {paragraph}
        </p>
      )}
    </div>
  );
};
