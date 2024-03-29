import { exitPreview } from '@prismicio/next';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function exit(req: NextApiRequest, res: NextApiResponse) {
  await exitPreview({ req, res });
}
