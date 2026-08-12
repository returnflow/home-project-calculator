import { cn } from './cn'

type AlertProps = {
  variant?: 'info' | 'warning' | 'error'
  title?: string
  children: React.ReactNode
  className?: string
}

const tones = {
  info: 'border-blue-800 bg-blue-50 text-blue-950',
  warning: 'border-amber-700 bg-amber-50 text-amber-950',
  error: 'border-red-800 bg-red-50 text-red-950',
} as const

/**
 * Alerts use role="alert" for assertive announcement of errors and
 * role="status" for non-critical information. Meaning comes from the
 * title/text content, never from color alone.
 */
export function Alert({ variant = 'info', title, children, className }: AlertProps) {
  return (
    <div
      role={variant === 'error' ? 'alert' : 'status'}
      className={cn('rounded-lg border-l-4 p-4', tones[variant], className)}
    >
      {title ? <p className="font-semibold">{title}</p> : null}
      <div className={cn('text-sm leading-relaxed', title ? 'mt-1' : undefined)}>{children}</div>
    </div>
  )
}
