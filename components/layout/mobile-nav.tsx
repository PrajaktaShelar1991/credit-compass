import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Input", href: "/input" },
  { label: "Results", href: "/results" },
  { label: "Banks", href: "/partner-banks" },
  { label: "Alerts", href: "/notifications" },
  { label: "Profile", href: "/profile" },
];

export function MobileNav() {
  return (
    <nav className="mb-4 flex gap-2 overflow-x-auto rounded-2xl border border-emerald-100 bg-white p-2 lg:hidden">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="whitespace-nowrap rounded-xl bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
