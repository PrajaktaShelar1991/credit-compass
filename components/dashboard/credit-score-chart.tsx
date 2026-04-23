"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const scoreData = [
  { month: "Jan", score: 660 },
  { month: "Feb", score: 675 },
  { month: "Mar", score: 690 },
  { month: "Apr", score: 705 },
  { month: "May", score: 714 },
  { month: "Jun", score: 720 },
];

export function CreditScoreChart() {
  if (typeof window === "undefined") {
    return <div className="h-72 w-full animate-pulse rounded-2xl bg-slate-100" />;
  }

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={scoreData}>
          <XAxis dataKey="month" axisLine={false} tickLine={false} stroke="#64748b" />
          <YAxis domain={[620, 760]} axisLine={false} tickLine={false} stroke="#64748b" />
          <Tooltip
            contentStyle={{
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
            }}
          />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#4f46e5"
            strokeWidth={3}
            dot={{ r: 4, fill: "#4f46e5" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
