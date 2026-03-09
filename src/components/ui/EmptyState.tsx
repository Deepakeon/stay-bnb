import { Search } from "lucide-react";

interface EmptyStateProps {
  message: string;
  icon?: React.ReactNode;
}

export default function EmptyState({ message, icon }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-muted-foreground animate-fade-in">
      {icon || <Search className="h-12 w-12 mb-4 opacity-40" />}
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
}
