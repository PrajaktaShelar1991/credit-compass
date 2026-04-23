"use client";

import { CreditScoreChart } from "@/components/dashboard/credit-score-chart";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import { Card } from "@/components/ui/card";

const recommendations = [
  "Keep your credit card utilization below 30% to maximize score impact.",
  "Set up autopay reminders to avoid any late payment entries.",
  "Limit new credit applications for the next 3 months.",
];

export default function DashboardPage() {
  return (
    <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 sm:px-6 sm:py-8">
      <Sidebar />

      <main className="w-full">
        <MobileNav />
        <Navbar />

        <section className="grid gap-4 md:grid-cols-3">
          <Card>
            <p className="text-sm text-slate-500">Credit Score</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">720</p>
          </Card>
          <Card>
            <p className="text-sm text-slate-500">Loan Eligibility</p>
            <p className="mt-2 text-3xl font-bold text-emerald-700">Eligible</p>
          </Card>
          <Card>
            <p className="text-sm text-slate-500">Risk Level</p>
            <p className="mt-2 text-3xl font-bold text-amber-700">Medium</p>
          </Card>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-5">
          <Card className="lg:col-span-3">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Credit Score Trend</h2>
            <CreditScoreChart />
          </Card>
          <Card className="lg:col-span-2">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Recommendations</h2>
            <ul className="space-y-3 text-sm text-slate-600">
              {recommendations.map((item) => (
                <li key={item} className="rounded-xl bg-slate-50 p-3">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </section>

        <section className="mt-6">
          <Card>
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Active Loans Summary</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs uppercase text-slate-500">Personal Loan</p>
                <p className="mt-1 font-semibold text-slate-800">AED 42,000 remaining</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs uppercase text-slate-500">Credit Card Dues</p>
                <p className="mt-1 font-semibold text-slate-800">AED 8,300 outstanding</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs uppercase text-slate-500">Monthly EMI</p>
                <p className="mt-1 font-semibold text-slate-800">AED 2,850</p>
              </div>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}
