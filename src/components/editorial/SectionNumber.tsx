import React from "react";

interface SectionNumberProps {
  number: string;
  label: string;
  theme?: "light" | "dark";
}

export default function SectionNumber({
  number,
  label,
  theme = "light",
}: SectionNumberProps) {
  const isDark = theme === "dark";

  return (
    <div className="flex items-center space-x-4 select-none">
      <span
        className={`font-editorial-display text-lg md:text-xl font-bold tracking-wider ${
          isDark ? "text-[#A81320]" : "text-burgundy"
        }`}
      >
        {number}
      </span>
      <span
        className={`w-8 h-[1px] ${
          isDark ? "bg-stone-700" : "bg-stone"
        }`}
      />
      <span
        className={`text-xs uppercase tracking-ultra-wide font-medium ${
          isDark ? "text-stone-400" : "text-ink-muted"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
