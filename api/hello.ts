import type { VercelRequest, VercelResponse } from '@vercel/node'
import { sql } from '@vercel/postgres';

export default async (req: VercelRequest, res: VercelResponse) => {
  const { rows } = await sql`SELECT * FROM tbl;`;
  return res.json(rows)
}
