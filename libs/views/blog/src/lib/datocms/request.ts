// import tiny from 'tiny-json-http';

export interface DatoCmsRequest {
  preview: boolean;
  query: string;
  variables: Record<string, any>;
}

export async function request({
  preview,
  query,
  variables,
}: DatoCmsRequest): Promise<any> {
  // let endpoint = 'https://graphql.datocms.com';

  // if (process.env['NEXT_DATOCMS_ENVIRONMENT']) {
  //   endpoint += `/environments/${process.env['NEXT_DATOCMS_ENVIRONMENT']}`;
  // }

  // if (preview) {
  //   endpoint += `/preview`;
  // }

  // const { body } = await tiny.post({
  //   url: endpoint,
  //   headers: {
  //     authorization: `Bearer ${process.env['NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN']}`,
  //   },
  //   data: {
  //     query: query,
  //     variables: variables,
  //   },
  // });

  // if (body.errors) {
  //   console.error('Ouch! The query has some errors!');
  //   throw body.errors;
  // }

  // return body.data;
  return null;
}
