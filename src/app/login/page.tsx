'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { HONEYPOT_HIT_EVENT } from '@/components/honeypot/types'

export default function LoginTrap() {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent(HONEYPOT_HIT_EVENT, {
          detail: { path: '/login', timestamp: Date.now() },
        })
      )
      try {
        sessionStorage.setItem('honeypot-hit', 'true')
      } catch {
        /* ignore */
      }
      const timer = setTimeout(() => {
        router.replace('/')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [router])

  return (
    <div className="space-y-4 text-center">
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="text-gray-600">Redirecting to home...</p>
    </div>
  )
}
