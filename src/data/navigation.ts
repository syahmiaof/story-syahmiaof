export interface NavItem {
  label: string;
  enLabel: string;
  href: string;
  tag: string;
}

export const navItems: NavItem[] = [
  { label: "Utama", enLabel: "Home", href: "/", tag: "01" },
  { label: "Kisah", enLabel: "Story", href: "/kisah", tag: "02" },
  { label: "Perjalanan", enLabel: "Journey", href: "/perjalanan", tag: "03" },
  { label: "Karya", enLabel: "Creations", href: "/karya", tag: "04" },
  { label: "Catatan", enLabel: "Reflections", href: "/catatan", tag: "05" },
];
