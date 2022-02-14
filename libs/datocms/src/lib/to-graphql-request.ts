import { API_TOKEN, ENVIRONMENT } from './constants';
import { request } from './request';

export const toGraphqlRequest = async (
  preview: boolean,
  query: string,
  variables: Record<string, string> = {}
) => {
  const graphqlRequest = {
    preview,
    variables,
  };

  return preview
    ? {
        ...graphqlRequest,
        initialData: await request(query, graphqlRequest),
        token: API_TOKEN,
        environment: ENVIRONMENT,
      }
    : {
        enabled: false,
        initialData: await request(query, graphqlRequest),
      };
};
