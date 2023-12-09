import type { VercelRequest, VercelResponse } from '@vercel/node'
import { sql } from '@vercel/postgres';
import { injectSpeedInsights } from '@vercel/speed-insights'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { rows } = await sql`SELECT * FROM tbl;`;
  return res.json(rows)
}
