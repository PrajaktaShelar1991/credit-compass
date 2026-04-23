import { MobileNav } from "@/components/layout/mobile-nav";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const tools = [
  { name: "EMI Calculator", description: "Estimate monthly payments before choosing a loan amount." },
  { name: "Score Booster Plan", description: "Track habits that improve your approval probability." },
  { name: "Debt-to-Income Analyzer", description: "See how liabilities impact your bank eligibility." },
  { name: "Application Checklist", description: "Know which documents UAE banks expect before applying." },
];

export default function ProfilePage() {
  return (
    <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 sm:px-6 sm:py-8">
      <Sidebar />

      <main className="w-full">
        <MobileNav />
        <Navbar />

        <section className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-1">
            <div className="mx-auto size-20 rounded-full bg-gradient-to-r from-emerald-700 to-slate-900" />
            <h1 className="mt-4 text-center text-xl font-bold text-slate-900">Prajakta J.</h1>
            <p className="text-center text-sm text-slate-600">Dubai, UAE</p>
            <div className="mt-5 space-y-2 text-sm text-slate-700">
              <p>
                Profile Tier: <span className="font-semibold">Gold</span>
              </p>
              <p>
                Credit Score: <span className="font-semibold">720</span>
              </p>
              <p>
                Preferred Loan: <span className="font-semibold">Personal Loan</span>
              </p>
            </div>
            <Button className="mt-5 w-full">Edit Profile</Button>
          </Card>

          <Card className="lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-900">Profile Tools</h2>
            <p className="mt-1 text-sm text-slate-600">
              Use these tools to improve financial readiness and secure better offers.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {tools.map((tool) => (
                <div key={tool.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900">{tool.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{tool.description}</p>
                  <Button variant="secondary" className="mt-3 w-full">
                    Open Tool
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}
