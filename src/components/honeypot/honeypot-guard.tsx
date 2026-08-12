'use client'

import { useEffect, useSyncExternalStore } from 'react'
import { HONEYPOT_HIT_EVENT } from './types'

const FLAG_KEY = 'honeypot-hit'

function getServerSnapshot(): boolean {
  return false
}

function getSnapshot(): boolean {
  if (typeof window === 'undefined') return false
  return sessionStorage.getItem(FLAG_KEY) === 'true'
}

function subscribe(callback: () => void): () => void {
  const handler = () => callback()
  window.addEventListener(HONEYPOT_HIT_EVENT, handler)
  return () => window.removeEventListener(HONEYPOT_HIT_EVENT, handler)
}

/**
 * HoneypotGuard wraps the site content and disables functionality
 * if the current session has hit a honeypot route.
 *
 * On a static site, "blocking" means:
 * - Clearing localStorage/sessionStorage
 * - Disabling calculators (inputs become read-only)
 * - Removing analytics consent
 */
export function HoneypotGuard({ children }: { children: React.ReactNode }) {
  const isBlocked = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    if (!isBlocked) return

    // Clear all stored data
    try {
      localStorage.clear()
      sessionStorage.clear()
    } catch {
      /* ignore */
    }

    // Remove analytics consent
    try {
      localStorage.removeItem('cookie-consent')
    } catch {
      /* ignore */
    }
  }, [isBlocked])

  if (isBlocked) {
    return (
      <div className="mx-auto max-w-2xl space-y-6 px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-red-700">Access Restricted</h1>
        <p className="text-gray-700">
          Unusual activity was detected from your session. Calculator functionality has been
          temporarily disabled.
        </p>
        <p className="text-sm text-gray-500">
          If you believe this is an error, you can try refreshing the page.
        </p>
      </div>
    )
  }

  return <>{children}</>
}