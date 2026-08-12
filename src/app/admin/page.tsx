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
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent(HONEYPOT_HIT_EVENT, {
          detail: { path: '/admin', timestamp: Date.now() },
        })
      )

      try {
        sessionStorage.setItem('honeypot-hit', 'true')
      } catch {
        /* ignore */
      }

      const timer = setTimeout(() => {
        // Compute parent path (e.g., /base/login -> /base/)
        const newPath = window.location.pathname.replace(/\/[^/]*$/, '/') || '/'
        window.location.replace(newPath)
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