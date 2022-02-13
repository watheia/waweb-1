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

import { Page, PageSpinner } from '@waweb/atoms';
import { useAuthWithRedir } from '@waweb/auth';
import Layout from '@waweb/layout';

// const Dashboard = lazy(() => import('@waweb/app.ui.dashboard'));

export default function IndexPage() {
  const meta = {
    title: 'Watheia | Gatekeeper Signout',
    description: 'Sign out the current user and redirect to home page',
  };

  const { signOut } = useAuthWithRedir('/');
  signOut();

  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <PageSpinner />
      </Layout>
    </Page>
  );
}
