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
import Layout from '@waweb/layout';
import Profile from '@waweb/views.profile';

// const Dashboard = lazy(() => import('@waweb/app.ui.dashboard'));

export default function AccountPage() {
  const meta = {
    title: 'Watheia | User Account',
    description: 'Edit account settings for Watheia Labs',
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout usePadding>
        <Profile />
      </Layout>
    </Page>
  );
}
