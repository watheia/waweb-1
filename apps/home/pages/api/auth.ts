import { NextApiRequest, NextApiResponse } from 'next';
import db from '@waweb/store';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    await db.auth.api.setAuthCookie(req, res);
  } else {
    const { user, error } = await db.auth.api.getUserByCookie(req);
    if (error) {
      return res.status(500).json({ error });
    } else if (!user) {
      return res.status(401).json({
        error: {
          code: 'user-not-found',
          message: 'User not found.',
        },
      });
    }

    return res.status(200).json({ loggedIn: true, ...user });
  }
}
