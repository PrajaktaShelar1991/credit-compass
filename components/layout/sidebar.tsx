import Link from "next/link";

const navItems = [
  { label: "Overview", href: "/dashboard" },
  { label: "Credit Input", href: "/input" },
  { label: "Results", href: "/results" },
  { label: "Partner Banks", href: "/partner-banks" },
  { label: "Notifications", href: "/notifications" },
  { label: "Profile & Tools", href: "/profile" },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm lg:flex">
      <div className="mb-6 rounded-2xl bg-gradient-to-r from-emerald-700 to-slate-900 p-4 text-white">
        <p className="text-xs uppercase tracking-wide text-emerald-100">AI Assistant</p>
        <h2 className="text-lg font-semibold">Credit Compass UAE</h2>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
