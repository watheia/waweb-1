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

import { Page } from '@waweb/atoms';
import { AuthView } from '@waweb/auth';
import Layout from '@waweb/layout';
import supabase from '@waweb/supabase';
import { GetServerSideProps } from 'next';

// const Dashboard = lazy(() => import('@waweb/app.ui.dashboard'));

export default function AuthPage() {
  const meta = {
    title: 'Watheia Labs | Single Sign On (SSO)',
    description: 'Login with a 3rd party provider or Gatekeeper account',
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout usePadding>
        <AuthView />
      </Layout>
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // redirect to main if already signed in
  const { user } = await supabase.auth.api.getUserByCookie(req);
  return {
    redirect: user ? { destination: '/', permanent: false } : undefined,
    props: {},
  };
};
