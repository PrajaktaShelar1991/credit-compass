"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { useAppState } from "@/components/providers/app-state-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function InputPage() {
  const router = useRouter();
  const { formData, setFormData } = useAppState();

  const [monthlySalary, setMonthlySalary] = useState(formData.monthlySalary);
  const [existingLoans, setExistingLoans] = useState(formData.existingLoans);
  const [creditCardUsage, setCreditCardUsage] = useState(formData.creditCardUsage);
  const [missedPayments, setMissedPayments] = useState<"yes" | "no">(formData.missedPayments);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    setFormData({
      monthlySalary,
      existingLoans,
      creditCardUsage,
      missedPayments,
    });

    setTimeout(() => {
      router.push("/results");
    }, 700);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <MobileNav />
      <Card className="p-8">
        <h1 className="text-2xl font-bold text-slate-900">Credit Readiness Input</h1>
        <p className="mt-2 text-slate-600">Enter your details to check your loan eligibility for UAE lenders.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <Input
            id="monthlySalary"
            type="number"
            label="Monthly Salary (AED)"
            value={monthlySalary}
            onChange={(event) => setMonthlySalary(Number(event.target.value))}
            required
          />

          <Input
            id="existingLoans"
            type="number"
            label="Existing Loans"
            value={existingLoans}
            onChange={(event) => setExistingLoans(Number(event.target.value))}
            required
          />

          <Input
            id="creditUsage"
            type="number"
            label="Credit Card Usage %"
            value={creditCardUsage}
            onChange={(event) => setCreditCardUsage(Number(event.target.value))}
            min={0}
            max={100}
            required
          />

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Missed Payments (Last 12 months)</label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setMissedPayments(option.value as "yes" | "no")}
                  className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                    missedPayments === option.value
                      ? "border-indigo-300 bg-indigo-50 text-indigo-700"
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full">
            {isSubmitting ? "Analyzing..." : "Submit & View Results"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
