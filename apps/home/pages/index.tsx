/**
 * Copyright 2020 Vercel Inc.
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

import { SkipNavContent } from '@reach/skip-nav';
import Home from '@waweb/ui.home';
import useConfig from '@waweb/ui.hooks/use-config';
import Page from '@waweb/ui.page';
import { useRouter } from 'next/router';

export default function IndexPage() {
  const config = useConfig();
  const { query } = useRouter();
  const meta = {
    title: 'Demo - Virtual Event Starter Kit',
    description: config.metaDescription,
  };
  const ticketNumber = query.ticketNumber?.toString();
  const defaultUserData = {
    id: query.id?.toString(),
    ticketNumber: ticketNumber ? parseInt(ticketNumber, 10) : undefined,
    name: query.name?.toString(),
    username: query.username?.toString(),
  };

  return (
    <Page meta={meta} fullViewport>
      <SkipNavContent />
      <Home
        defaultUserData={defaultUserData}
        defaultPageState={query.ticketNumber ? 'online' : 'offline'}
      />
    </Page>
  );
}
