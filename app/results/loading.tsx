export default function LoadingResults() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="animate-pulse rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="h-8 w-72 rounded bg-slate-200" />
        <div className="mt-3 h-4 w-96 rounded bg-slate-100" />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="h-28 rounded-2xl bg-slate-100" />
          <div className="h-28 rounded-2xl bg-slate-100" />
          <div className="h-28 rounded-2xl bg-slate-100" />
        </div>
      </div>
    </div>
  );
}
