import type { VercelRequest, VercelResponse } from '@vercel/node'
import { injectSpeedInsights } from '@vercel/speed-insights'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query
  return res.json({
    message: `Hello ${name}!`,
  })
}
