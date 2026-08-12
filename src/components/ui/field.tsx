import { cn } from './cn'

const fieldBase =
  'block w-full rounded-lg border bg-surface px-3 py-2.5 text-base text-gray-900 placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-surface-muted'

const fieldTone = {
  default: 'border-border focus:border-primary-700',
  error: 'border-red-700 focus:border-red-700',
} as const

type FieldShellProps = {
  id: string
  label: string
  error?: string
  hint?: string
  children: (describedBy: string | undefined) => React.ReactNode
}

export function FieldShell({ id, label, error, hint, children }: FieldShellProps) {
  const describedBy =
    [error && `${id}-error`, hint && `${id}-hint`].filter(Boolean).join(' ') || undefined
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-base font-medium text-gray-900">
        {label}
      </label>
      {children(describedBy)}
      {hint ? (
        <p id={`${id}-hint`} className="text-sm text-gray-600">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm font-medium text-red-800">
          {error}
        </p>
      ) : null}
    </div>
  )
}

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> & {
  id: string
  label: string
  error?: string
  hint?: string
}

export function Input({ id, label, error, hint, className, ...props }: InputProps) {
  return (
    <FieldShell id={id} label={label} error={error} hint={hint}>
      {(describedBy) => (
        <input
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(fieldBase, error ? fieldTone.error : fieldTone.default, className)}
          {...props}
        />
      )}
    </FieldShell>
  )
}

type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'id'> & {
  id: string
  label: string
  error?: string
  hint?: string
  children: React.ReactNode
}

export function Select({ id, label, error, hint, className, children, ...props }: SelectProps) {
  return (
    <FieldShell id={id} label={label} error={error} hint={hint}>
      {(describedBy) => (
        <select
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(fieldBase, error ? fieldTone.error : fieldTone.default, className)}
          {...props}
        >
          {children}
        </select>
      )}
    </FieldShell>
  )
}
