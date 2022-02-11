import ms from 'ms';
import { NextApiResponse } from 'next';

export default function addCacheHeaders(
  res: NextApiResponse,
  expiresSeconds = 10
): NextApiResponse {
  const expires = new Date(Date.now() + ms(`${expiresSeconds}s`));
  res.setHeader('Expires', expires.toUTCString());
  res.setHeader(
    'Cache-Control',
    `s-maxage=${expiresSeconds}, immutable, must-revalidate, stale-while-revalidate`
  );

  return res;
}
