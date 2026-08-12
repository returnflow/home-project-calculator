export const HONEYPOT_HIT_EVENT = 'honeypot-hit' as const

export type HoneypotHitDetail = {
  path: string
  timestamp: number
}