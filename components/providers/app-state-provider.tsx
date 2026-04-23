"use client";

import { createContext, useContext, useMemo, useState } from "react";

type CreditInputData = {
  monthlySalary: number;
  existingLoans: number;
  creditCardUsage: number;
  missedPayments: "yes" | "no";
};

type AppStateContextType = {
  formData: CreditInputData;
  setFormData: (data: CreditInputData) => void;
};

const defaultFormData: CreditInputData = {
  monthlySalary: 18000,
  existingLoans: 2,
  creditCardUsage: 35,
  missedPayments: "no",
};

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<CreditInputData>(defaultFormData);

  const value = useMemo(
    () => ({
      formData,
      setFormData,
    }),
    [formData],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error("useAppState must be used within AppStateProvider");
  }

  return context;
}
