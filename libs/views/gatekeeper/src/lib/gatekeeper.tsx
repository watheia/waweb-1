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

import { useAuth } from '@waweb/auth';
import { DivProps } from '@waweb/model';
import { useEffect } from 'react';
import { Container } from '@waweb/atoms';
import Hero from './hero';
import LearnMore from './learn-more';
import LoginForm from './login-form';
import clsx from 'clsx';
import styles from './gatekeeper.module.css';

export interface GatekeeperProps extends DivProps {
  onLogin?: () => void;
}

export default function Gatekeeper({
  className,
  onLogin,
  ...props
}: GatekeeperProps) {
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    if (isLoggedIn && onLogin) onLogin();
  }, [isLoggedIn, onLogin]);

  return (
    <Container className={clsx(styles['root'], className)} {...props}>
      <Hero />
      <LoginForm />
      <LearnMore />
    </Container>
  );
}
