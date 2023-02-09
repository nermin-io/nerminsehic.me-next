import { NextApiRequest, NextApiResponse } from 'next';

export default async function callback(req: NextApiRequest, res: NextApiResponse) {
  return res.json({ code: req.query.code, state: req.query.state });
}