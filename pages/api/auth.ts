import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.setHeader('WWW-authenticate', 'Basic realm="Reactive barrier"')
  res.statusCode = 401
  res.end(`[WARNING] Your cyberbrain has been destroyed.`)
}
