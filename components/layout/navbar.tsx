import Link from "next/link";

export function Navbar() {
  return (
    <header className="mb-6 flex items-center justify-between rounded-2xl border border-emerald-100 bg-white px-4 py-4 shadow-sm sm:px-5">
      <div>
        <p className="text-xs uppercase tracking-wide text-emerald-700">Dashboard</p>
        <h1 className="text-lg font-semibold text-slate-900">Welcome back, Prajakta</h1>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/notifications"
          className="relative inline-flex items-center rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800 transition hover:bg-amber-100"
        >
          Alerts
          <span className="ml-2 inline-flex size-5 items-center justify-center rounded-full bg-amber-600 text-[10px] text-white">
            3
          </span>
        </Link>
        <div className="size-10 rounded-full bg-gradient-to-r from-emerald-700 to-slate-900" />
        <div className="text-right">
          <p className="text-sm font-semibold text-slate-800">Prajakta</p>
          <p className="text-xs text-slate-500">UAE Resident</p>
        </div>
      </div>
    </header>
  );
}
