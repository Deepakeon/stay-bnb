import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <main className={`container mx-auto px-6 py-6 ${className}`}>
      {children}
    </main>
  );
}
