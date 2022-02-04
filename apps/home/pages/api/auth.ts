import { NextApiRequest, NextApiResponse } from 'next';
import db from '@waweb/store';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  db.auth.api.setAuthCookie(req, res);
}
