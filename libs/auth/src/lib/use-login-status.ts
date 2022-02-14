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

import useSWR from 'swr';
import { KeyedMutator, PublicConfiguration } from 'swr/dist/types';
import { getGlobalScope } from '@waweb/utils';
import { User } from '@supabase/supabase-js';

const global = getGlobalScope<Window>();

export const ENDPOINT = '/api/auth';

export type LoginStatusRequest = PublicConfiguration<
  any,
  any,
  (url: string) => any
>;

export type LoginStatus = 'loading' | 'loggedOut' | 'loggedIn';

const fetcher = async (url: string) => {
  const res = await global.fetch(url);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};

export default function useLoginStatus(opts?: LoginStatusRequest): {
  loginStatus: LoginStatus;
  mutate: KeyedMutator<any>;
  principal: User | null;
} {
  const { data, error, mutate } = useSWR(ENDPOINT, fetcher, {
    ...opts,
    revalidateOnFocus: false,
  });

  if (error) {
    console.error(error);
  }

  let loginStatus: LoginStatus = 'loading';
  let principal = null;
  if (data) {
    loginStatus = data['loggedIn'] ? 'loggedIn' : 'loggedOut';
    principal = data['principal'] ?? null;
  }

  return {
    loginStatus,
    mutate,
    principal,
  };
}
