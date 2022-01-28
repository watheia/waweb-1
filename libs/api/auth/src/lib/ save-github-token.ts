export default async function saveGithubToken({
  id,
  token,
}: {
  id?: string;
  token: string;
}) {
  return await fetch('/api/save-github-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      token,
    }),
  });
}
