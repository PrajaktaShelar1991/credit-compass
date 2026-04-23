"use client";

import Link from "next/link";
import { useMemo } from "react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { useAppState } from "@/components/providers/app-state-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function calculateEligibilityScore({
  monthlySalary,
  existingLoans,
  creditCardUsage,
  missedPayments,
}: {
  monthlySalary: number;
  existingLoans: number;
  creditCardUsage: number;
  missedPayments: "yes" | "no";
}) {
  let score = 85;

  if (monthlySalary < 10000) score -= 15;
  if (monthlySalary < 7000) score -= 10;

  score -= Math.min(existingLoans * 5, 20);
  score -= creditCardUsage > 30 ? Math.min((creditCardUsage - 30) * 0.5, 20) : 0;
  score -= missedPayments === "yes" ? 12 : 0;

  return Math.max(25, Math.min(95, Math.round(score)));
}

export default function ResultsPage() {
  const { formData } = useAppState();

  const eligibilityScore = useMemo(() => calculateEligibilityScore(formData), [formData]);

  const approvalChance = eligibilityScore > 75 ? "High" : eligibilityScore > 60 ? "Moderate" : "Low";
  const suggestedLoanAmount = Math.round(formData.monthlySalary * 20);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
      <MobileNav />
      <Card className="p-8">
        <h1 className="text-2xl font-bold text-slate-900">Your Loan Eligibility Results</h1>
        <p className="mt-2 text-slate-600">Based on your current profile, here is your AI-powered readiness snapshot.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Card className="bg-slate-50">
            <p className="text-sm text-slate-500">Eligibility Score</p>
            <p className="mt-2 text-3xl font-bold text-emerald-700">{eligibilityScore}%</p>
          </Card>
          <Card className="bg-slate-50">
            <p className="text-sm text-slate-500">Loan Approval Chance</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{approvalChance}</p>
          </Card>
          <Card className="bg-slate-50">
            <p className="text-sm text-slate-500">Suggested Loan Amount</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">AED {suggestedLoanAmount.toLocaleString()}</p>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
          <h2 className="text-lg font-semibold text-emerald-900">AI Insights</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-emerald-900">
            <li>Reduce credit utilization below 30% for better scoring stability.</li>
            <li>Avoid late payments and keep all EMIs on schedule.</li>
            <li>Maintain a stable income trail before applying for higher loan amounts.</li>
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/input">
            <Button variant="secondary">Update Inputs</Button>
          </Link>
          <Link href="/partner-banks">
            <Button variant="secondary">View Partner Banks Flow</Button>
          </Link>
          <Link href="/dashboard">
            <Button>Improve My Score Plan</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
