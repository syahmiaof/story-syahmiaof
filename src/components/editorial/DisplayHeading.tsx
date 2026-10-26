import React from "react";

interface DisplayHeadingProps {
  line1: string;
  line2?: string;
  theme?: "light" | "dark";
  className?: string;
  line1Color?: string;
  line2Color?: string;
}

export default function DisplayHeading({
  line1,
  line2,
  theme = "light",
  className = "",
  line1Color,
  line2Color,
}: DisplayHeadingProps) {
  const isDark = theme === "dark";

  return (
    <h1
      className={`font-editorial-display font-black tracking-tight uppercase select-none ${className}`}
      style={{
        fontSize: "clamp(3.2rem, 7.2vw, 7.6rem)",
        lineHeight: 0.9,
      }}
    >
      <span
        className={`block text-reveal-line ${
          line1Color || (isDark ? "text-stone-100" : "text-ink")
        }`}
      >
        {line1}
      </span>
      {line2 && (
        <span
          className={`block text-reveal-line mt-1 md:mt-2 ${
            line2Color || (isDark ? "text-[#B81828]" : "text-burgundy")
          }`}
        >
          {line2}
        </span>
      )}
    </h1>
  );
}
