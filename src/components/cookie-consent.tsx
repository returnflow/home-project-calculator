'use client'

import { useCallback, useSyncExternalStore } from 'react'

type ConsentState = 'pending' | 'granted' | 'denied'

const STORAGE_KEY = 'cookie-consent'

function getServerSnapshot(): ConsentState {
  return 'pending'
}

function getSnapshot(): ConsentState {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'granted' || stored === 'denied') return stored
  return 'pending'
}

function subscribe(callback: () => void): () => void {
  const handler = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) callback()
  }
  window.addEventListener('storage', handler)
  return () => window.removeEventListener('storage', handler)
}

export function setConsent(value: ConsentState): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, value)
  // Notify subscribers on the same window
  window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }))
}

/**
 * Check if analytics tracking is allowed based on user consent.
 * Safe to call during SSR (returns false on server).
 */
export function isTrackingAllowed(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(STORAGE_KEY) === 'granted'
}

/**
 * Cookie consent banner.
 * Shows at the bottom of the page until the user makes a choice.
 */
export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const handleAccept = useCallback(() => {
    setConsent('granted')
  }, [])

  const handleDecline = useCallback(() => {
    setConsent('denied')
  }, [])

  if (consent !== 'pending') return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface p-4 shadow-lg sm:p-6"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-gray-700">
          <p>
            We use cookies to improve your experience and analyze site traffic. Clicking the Accept
            button means you consent to the use of analytics cookies.
          </p>
          <p className="mt-1">
            <a href="/privacy" className="text-primary-700 underline-offset-2 hover:underline">
              Learn more in our Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={handleDecline}
            className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-surface-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="rounded-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}