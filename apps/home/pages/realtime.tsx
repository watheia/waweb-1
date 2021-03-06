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

import Realtime from '@waweb/views.realtime';
import Layout from '@waweb/layout';
import { Page, PageSpinner } from '@waweb/atoms';
import config from '@waweb/config';
import { useAuth } from '@waweb/auth';
import Gatekeeper from '@waweb/views.gatekeeper';

export default function IndexPage() {
  const { isUserLoading, isLoggedIn } = useAuth();
  const meta = {
    title: isLoggedIn ? 'Watheia Realtime' : 'Watheia Gatekeeper',
    description: config.metaDescription
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout useBackdrop>
        {isUserLoading ? (
          <PageSpinner />
        ) : isLoggedIn ? (
          <Realtime />
        ) : (
          <Gatekeeper />
        )}
      </Layout>
    </Page>
  );
}
