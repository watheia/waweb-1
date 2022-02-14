import { NextApiRequest, NextApiResponse } from 'next';
import supabase from '@waweb/supabase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    await supabase.auth.api.setAuthCookie(req, res);
  } else {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    const response = user
      ? { loggedIn: true, principal: user }
      : { loggedIn: false };
    if (user) {
      // Enable Preview Mode by setting the cookies
      res.setPreviewData({ user_id: user.id });
    }

    return res.status(200).json(response);
  }
}
