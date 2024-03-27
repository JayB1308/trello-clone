import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: LayoutProps) {
  return <main className="mt-16 px-4 w-full h-auto">{children}</main>;
}
