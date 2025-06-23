/**
 * @author Rahul Mondal
 * @github https://github.com/isyrae
 * 
 * Created for educational, demonstration, or personal portfolio purposes.
 * Reuse and redistribution allowed with proper attribution.
 */

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
