/**
 * Copyright 2022 Watheia Labs, LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Dashboard from '@waweb/views.dashboard';
import Layout from '@waweb/layout';
import { Page, PageSpinner } from '@waweb/atoms';
import useConfig from '@waweb/config';
import { useLoginStatus } from '@waweb/auth';
import { useCallback } from 'react';
import Gatekeeper from '@waweb/views.gatekeeper';

export default function IndexPage() {
  const config = useConfig();
  const { loginStatus, mutate } = useLoginStatus();
  const meta = {
    title: 'Watheia Realtime',
    description: config.metaDescription,
  };

  const loginHandler = useCallback(() => {
    mutate('/api/auth');
  }, [mutate]);

  return (
    <Page meta={meta} fullViewport>
      <Layout useBackdrop>
        {loginStatus === 'loading' ? (
          <PageSpinner />
        ) : loginStatus === 'loggedIn' ? (
          <Dashboard />
        ) : (
          <Gatekeeper onLogin={loginHandler} />
        )}
      </Layout>
    </Page>
  );
}

/* /**
 *
 * @param ctx Redirect to home if no principal user is authenticated
 * @returns
 */
// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const user = supabase.auth.api.getUserByCookie(ctx.req);
//   return {
//     redirect: user
//       ? undefined
//       : {
//           permanent: false,
//           destination: '/home',
//         },
//   };
// };
