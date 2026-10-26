import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface EditorialButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline-dark";
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
}

export default function EditorialButton({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  showArrow = true,
}: EditorialButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center space-x-3 px-7 py-3.5 text-xs md:text-sm font-editorial-sans tracking-wide uppercase font-semibold transition-all duration-300 rounded-sm cursor-pointer select-none";

  let variantClasses = "";
  if (variant === "primary") {
    variantClasses =
      "bg-burgundy text-white hover:bg-burgundy-deep shadow-md hover:shadow-lg hover:shadow-burgundy/20";
  } else if (variant === "secondary") {
    variantClasses =
      "bg-transparent text-ink border border-ink/40 hover:border-ink hover:bg-ink/5";
  } else if (variant === "outline-dark") {
    variantClasses =
      "bg-transparent text-stone-200 border border-stone-600 hover:border-white hover:text-white hover:bg-white/5";
  }

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {content}
    </button>
  );
}
