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

import useConfig from '@waweb/config';
import { ComingSoon, Page } from '@waweb/atoms';
import Layout from '@waweb/layout';

export default function IndexPage() {
  const config = useConfig();
  const meta = {
    title: 'Watheia Labs | Support',
    description: config.metaDescription,
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout usePadding>
        <ComingSoon />
      </Layout>
    </Page>
  );
}