import { cn } from './cn'

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn('rounded-xl border border-border bg-surface p-5 shadow-sm sm:p-6', className)}
    >
      {children}
    </div>
  )
}
