import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:py-16">
      <section className="rounded-3xl bg-gradient-to-r from-[#19A48E] to-[#8AE3D4] px-6 py-12 text-white shadow-xl shadow-emerald-100 sm:px-8 sm:py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-800">UAE Credit Intelligence</p>
        <h1 className="mb-4 max-w-2xl text-4xl font-bold leading-tight lg:text-5xl">Know Your Credit. Unlock Better Loans.</h1>
        <p className="mb-8 max-w-2xl text-lg text-emerald-50">
          AI-powered credit insights for UAE users to improve loan approval confidence.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/input">
            <Button className="bg-[#0f6f60] text-white hover:bg-[#0c5d51]">Check My Eligibility</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="secondary">View Demo</Button>
          </Link>
          <Link href="/partner-banks">
            <Button variant="secondary">View Partner Banks Flow</Button>
          </Link>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-4">
        {[
          { label: "Avg. approval lift", value: "+27%" },
          { label: "Decision time reduced", value: "3.2 days" },
          { label: "Recommendation adoption", value: "92%" },
          { label: "Partner banks onboarded", value: "12" },
        ].map((metric) => (
          <Card key={metric.label} className="border-emerald-100 bg-emerald-50/50">
            <p className="text-sm text-slate-600">{metric.label}</p>
            <p className="mt-2 text-2xl font-bold text-emerald-900">{metric.value}</p>
          </Card>
        ))}
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          { title: "AI Insights", desc: "Smart recommendations tailored to your financial behavior." },
          { title: "Loan Eligibility", desc: "Instant readiness score for personal loans in UAE banks." },
          { title: "Credit Tips", desc: "Actionable next steps to improve your approval chances." },
        ].map((item) => (
          <Card key={item.title}>
            <h3 className="mb-2 text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="text-slate-600">{item.desc}</p>
          </Card>
        ))}
      </section>


      <section className="mt-14">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">How it works</h2>
        <div className="rounded-3xl border border-emerald-100 bg-white p-5 sm:p-6">
          <p className="mb-4 text-sm text-slate-600">A simple 3-step workflow from profile input to loan-ready action plan.</p>
          <div className="workflow-line mb-6 h-2 rounded-full bg-gradient-to-r from-[#19A48E] to-[#8AE3D4]" />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                step: "Enter your financial details",
                icon: "01",
                detail: "Salary, liabilities, usage %, and payment behavior.",
              },
              {
                step: "Get AI credit and eligibility analysis",
                icon: "02",
                detail: "Score trend, risk band, and approval probability.",
              },
              {
                step: "Follow tips to boost approval odds",
                icon: "03",
                detail: "Personalized actions with projected impact.",
              },
            ].map((item, index) => (
              <Card
                key={item.step}
                className="workflow-step flex items-start gap-3 border-emerald-100 bg-emerald-50/40"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <span className="rounded-full bg-[#19A48E]/15 px-3 py-1 text-sm font-semibold text-[#127a69]">
                  {item.icon}
                </span>
                <div>
                  <p className="font-semibold text-slate-800">{item.step}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4">
            <p className="text-sm font-semibold text-[#127a69]">Workflow outcome</p>
            <p className="mt-1 text-sm text-slate-700">
              Users get a clear action plan plus matched partner-bank options to improve approval confidence before applying.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-emerald-100">
            <h3 className="font-semibold text-slate-900">Is this tuned for UAE lending behavior?</h3>
            <p className="mt-2 text-sm text-slate-600">
              Yes. The score guidance and recommendations are aligned with UAE salary-led loan patterns and usage behavior.
            </p>
          </Card>
          <Card className="border-emerald-100">
            <h3 className="font-semibold text-slate-900">Can users compare partner banks in one place?</h3>
            <p className="mt-2 text-sm text-slate-600">
              Yes. The Partner Banks flow provides side-by-side rates, loan ranges, and approval ETA.
            </p>
          </Card>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">Testimonials</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <p className="text-slate-700">
              “I improved my score by changing utilization habits. The suggestions were practical and easy to follow.”
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-900">Ayesha, Dubai</p>
          </Card>
          <Card>
            <p className="text-slate-700">
              “The eligibility estimate helped me apply confidently. I got approved with a better offer.”
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-900">Khalid, Abu Dhabi</p>
          </Card>
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-emerald-100 bg-white p-8">
        <h2 className="text-2xl font-bold text-slate-900">Start your credit-readiness journey</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Check your profile, get AI recommendations, and shortlist the right partner bank with confidence.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/input">
            <Button>Start Free Assessment</Button>
          </Link>
          <Link href="/profile">
            <Button variant="secondary">Explore Profile Tools</Button>
          </Link>
        </div>
      </section>

      <footer className="mt-16 border-t border-slate-200 py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Credit Compass UAE. Built for smarter financial decisions.
      </footer>
    </div>
  );
}
