export interface DatoCmsRequest {
  preview: boolean;
  query: string;
  variables: Record<string, any>;
}

const GATEWAY = 'https://graphql.datocms.com';

const token = process.env['NEXT_DATOCMS_API_TOKEN'];
const environment = process.env['NEXT_DATOCMS_ENVIRONMENT'] ?? 'main';

const getEndpoint = (preview: boolean) => {
  let endpoint = GATEWAY;

  if (process.env['NEXT_DATOCMS_ENVIRONMENT']) {
    endpoint += `/environments/${environment}`;
  }

  if (preview) {
    endpoint += `/preview`;
  }

  return endpoint;
};

export async function request(query: string, { variables, preview }: any = {}) {
  const res = await fetch(getEndpoint(preview), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}
