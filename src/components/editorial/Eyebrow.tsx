import React from "react";

interface EyebrowProps {
  children: React.ReactNode;
  theme?: "light" | "dark";
  showDot?: boolean;
}

export default function Eyebrow({
  children,
  theme = "light",
  showDot = true,
}: EyebrowProps) {
  const isDark = theme === "dark";

  return (
    <div className="flex items-center space-x-3 mb-4 select-none">
      {showDot && (
        <span
          className={`inline-block w-2 h-2 rounded-full ${
            isDark ? "bg-[#A81320]" : "bg-burgundy"
          }`}
        />
      )}
      <span
        className={`text-xs md:text-sm font-editorial-sans tracking-ultra-wide uppercase font-semibold ${
          isDark ? "text-stone-300" : "text-ink-muted"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
