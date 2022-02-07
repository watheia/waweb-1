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

import React, { useEffect } from 'react';
import { useAuth } from '@waweb/auth';
import { DivProps } from '@waweb/model';
import clsx from 'clsx';
import styles from './realtime-chat.module.css';

const announcements = [
  {
    id: 1,
    title: 'Office closed on July 2nd',
    preview:
      'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
  },
  {
    id: 2,
    title: 'New password policy',
    preview:
      'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
  },
  {
    id: 3,
    title: 'Office closed on July 2nd',
    preview:
      'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
  },
];

export type RealtimeChatProps = DivProps;

const RealtimeChat = ({ className, ...props }: RealtimeChatProps) => {
  const { isLoggedIn, isLoading, isUserLoading, user, userRoles } = useAuth();
  useEffect(() => {
    console.log({
      isLoggedIn,
      isLoading,
      isUserLoading,
      user,
      userRoles,
    });
  }, [isLoggedIn, isLoading, isUserLoading, user, userRoles]);
  return (
    <div className={clsx(styles['realtime-chat'], className)} {...props}>
      <div className={styles['messages']}></div>
      <div className={styles['control-bar']}></div>
    </div>
  );
};

export default RealtimeChat;
