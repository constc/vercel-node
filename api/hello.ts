import type { VercelRequest, VercelResponse } from '@vercel/node'
import { sql } from '@vercel/postgres';
import { injectSpeedInsights } from '@vercel/speed-insights'

const { rows } = await sql`SELECT * FROM tbl;`;

export default function handler(req: VercelRequest, res: VercelResponse) {
  return res.json(rows)
}
