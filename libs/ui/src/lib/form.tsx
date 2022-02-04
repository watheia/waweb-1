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

import { useAuth } from '@waweb/auth';
import cn from 'clsx';
import { useCallback, useState } from 'react';
import styles from './form.module.css';
import LoadingDots from './loading-dots';
import styleUtils from './utils.module.css';

export class FormError extends Error {
  constructor(public res: Response) {
    super();
  }
}

type FormState = 'default' | 'loading' | 'error';

type Props = {
  sharePage?: boolean;
};

export default function Form({ sharePage }: Props) {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [errorTryAgain, setErrorTryAgain] = useState(false);
  const [focused, setFocused] = useState(false);
  const [formState, setFormState] = useState<FormState>('default');
  const auth = useAuth();

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (formState === 'default') {
        setFormState('loading');
        const data = new FormData(e.currentTarget);
        return auth.signIn({ email: data.get('email') as string });
      } else {
        setFormState('default');
      }
    },
    [auth, formState]
  );

  const onTryAgainClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setFormState('default');
    setErrorTryAgain(true);
  }, []);

  // useEmailQueryParam('email', setEmail);

  return formState === 'error' ? (
    <div
      className={cn(styles['form'], {
        [styles['share-page']]: sharePage,
      })}
    >
      <div className={styles['form-row']}>
        <div className={cn(styles['input-label'], styles['error'])}>
          <div className={cn(styles['input'], styles['input-text'])}>
            {errorMsg}
          </div>
          <button
            type="button"
            className={cn(styles['submit'], styles['login'], styles['error'])}
            onClick={onTryAgainClick}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  ) : (
    <form
      className={cn(styles['form'], {
        [styles['share-page']]: sharePage,
        [styleUtils['appear']]: !errorTryAgain,
        [styleUtils['appear-fifth']]: !errorTryAgain && !sharePage,
        [styleUtils['appear-third']]: !errorTryAgain && sharePage,
      })}
      onSubmit={onSubmit}
    >
      <div className={styles['form-row']}>
        <label
          htmlFor="email-input-field"
          className={cn(styles['input-label'], {
            [styles['focused']]: focused,
          })}
        >
          <input
            className={styles['input']}
            autoComplete="off"
            type="email"
            id="email-input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Enter email to get login url"
            aria-label="Your email address"
            required
          />
        </label>
        <button
          type="submit"
          className={cn(styles['submit'], styles['login'], styles[formState])}
          disabled={formState === 'loading'}
        >
          {formState === 'loading' ? <LoadingDots size={4} /> : <>Login</>}
        </button>
      </div>
    </form>
  );
}
