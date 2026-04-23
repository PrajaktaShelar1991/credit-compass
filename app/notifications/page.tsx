"use client";

import { useMemo, useState } from "react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Notification = {
  id: number;
  title: string;
  message: string;
  read: boolean;
  type: "approval" | "insight" | "reminder";
};

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: "Pre-approval from Emirates NBD",
    message: "You are pre-qualified up to AED 420,000 based on your current profile.",
    read: false,
    type: "approval",
  },
  {
    id: 2,
    title: "AI Insight",
    message: "Lower your credit card usage by 7% to improve your approval tier.",
    read: false,
    type: "insight",
  },
  {
    id: 3,
    title: "Payment Reminder",
    message: "Your card payment due date is in 3 days. Timely payment protects your score.",
    read: true,
    type: "reminder",
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const unreadCount = useMemo(() => notifications.filter((item) => !item.read).length, [notifications]);

  const markAllAsRead = () => {
    setNotifications((previous) => previous.map((item) => ({ ...item, read: true })));
  };

  return (
    <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 sm:px-6 sm:py-8">
      <Sidebar />

      <main className="w-full">
        <MobileNav />
        <Navbar />

        <Card className="border-emerald-100">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Notifications Center</h1>
              <p className="mt-1 text-sm text-slate-600">
                Stay updated on approvals, profile changes, and AI credit recommendations.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                {unreadCount} unread
              </span>
              <Button variant="secondary" onClick={markAllAsRead}>
                Mark all as read
              </Button>
            </div>
          </div>
        </Card>

        <section className="mt-6 space-y-4">
          {notifications.map((item) => (
            <Card
              key={item.id}
              className={`${item.read ? "border-slate-200 bg-white" : "border-emerald-200 bg-emerald-50/40"}`}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.message}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${
                    item.type === "approval"
                      ? "bg-emerald-100 text-emerald-800"
                      : item.type === "insight"
                        ? "bg-sky-100 text-sky-800"
                        : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {item.type}
                </span>
              </div>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
