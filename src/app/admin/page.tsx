'use client'

import { useEffect } from 'react'
import { HONEYPOT_HIT_EVENT } from '@/components/honeypot/types'

/**
 * Honeypot trap route. No legitimate user should ever land here.
 * If someone does, they either clicked an invisible link (bot-like)
 * or typed the URL directly.
 */
export default function AdminTrap() {
  useEffect(() => {
    // Log honeypot hit to analytics for monitoring
    if (typeof window !== 'undefined') {
      // Fire a custom event that analytics can pick up if consent is granted
      window.dispatchEvent(
        new CustomEvent(HONEYPOT_HIT_EVENT, {
          detail: { path: '/admin', timestamp: Date.now() },
        })
      )

      // Store local flag that this IP/session hit a honeypot
      try {
        sessionStorage.setItem('honeypot-hit', 'true')
      } catch {
        // sessionStorage may be blocked in private mode
      }

      // Immediately navigate away to reduce dwell time for bots
      const timer = setTimeout(() => {
        window.location.href = '/'
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <div className="space-y-4 text-center">
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="text-gray-600">Redirecting to home...</p>
    </div>
  )
}