import Link from "next/link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const partnerBanks = [
  { name: "Emirates NBD", rate: "4.89%", maxLoan: "AED 500,000", eta: "24-48 hours", fit: "Excellent Fit" },
  { name: "ADCB", rate: "5.05%", maxLoan: "AED 450,000", eta: "2-3 days", fit: "Strong Fit" },
  { name: "Mashreq", rate: "5.15%", maxLoan: "AED 400,000", eta: "1-2 days", fit: "Strong Fit" },
];

export default function PartnerBanksPage() {
  return (
    <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 sm:px-6 sm:py-8">
      <Sidebar />

      <main className="w-full">
        <MobileNav />
        <Navbar />

        <Card className="border-emerald-100 bg-gradient-to-r from-emerald-700 to-slate-900 text-white">
          <p className="text-xs uppercase tracking-wide text-emerald-100">Partner Banks Flow</p>
          <h1 className="mt-2 text-2xl font-bold">View and compare the best UAE partner banks</h1>
          <p className="mt-2 max-w-2xl text-sm text-emerald-100">
            We rank banks based on your profile, approval probability, turnaround time, and loan terms.
          </p>
        </Card>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "1. Match profile with partner criteria",
            "2. Compare rates, approval chance, and speed",
            "3. Apply to your top matched bank",
          ].map((step) => (
            <Card key={step} className="border-amber-100 bg-amber-50 text-amber-900">
              <p className="font-semibold">{step}</p>
            </Card>
          ))}
        </section>

        <section className="mt-6 grid gap-4">
          {partnerBanks.map((bank) => (
            <Card key={bank.name} className="border-slate-200">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{bank.name}</h2>
                  <p className="mt-1 text-sm text-slate-600">Profile Match: {bank.fit}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-700 sm:grid-cols-3">
                  <p>
                    Rate
                    <span className="block text-base font-semibold text-slate-900">{bank.rate}</span>
                  </p>
                  <p>
                    Max Loan
                    <span className="block text-base font-semibold text-slate-900">{bank.maxLoan}</span>
                  </p>
                  <p>
                    Approval ETA
                    <span className="block text-base font-semibold text-slate-900">{bank.eta}</span>
                  </p>
                </div>
                <Button>Apply via {bank.name}</Button>
              </div>
            </Card>
          ))}
        </section>

        <div className="mt-6">
          <Link href="/notifications">
            <Button variant="secondary">Track application updates in Notifications</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
