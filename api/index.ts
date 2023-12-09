import type { VercelRequest, VercelResponse } from '@vercel/node'
import { injectSpeedInsights } from '@vercel/speed-insights'

export default async (req: VercelRequest, res: VercelResponse) => {
  return res.json({})
}
