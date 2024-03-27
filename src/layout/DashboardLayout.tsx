import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: LayoutProps) {
  return <div className="mt-16 px-4">{children}</div>;
}
