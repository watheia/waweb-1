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

import {
  AppRole,
  ChannelModel,
  DivProps,
  MessageModel,
  User,
} from '@waweb/model';
import LayoutDash, { NavItem } from '@waweb/ui.layout-dash';
import { useRef } from 'react';
import Container from './container';
import TimelineItem from './timeline-item';

export interface DashboardProps extends DivProps {
  user: User;
  userRoles: AppRole[];
  channels: ChannelModel[];
  activeChannel: ChannelModel;
  timeline: MessageModel[];
  navigation: NavItem[];
}

export default function Dashboard({
  timeline,
  user,
  userRoles,
  navigation,
  ...props
}: DashboardProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  return (
    <LayoutDash user={user} userRoles={userRoles} {...props}>
      <Container className="pt-6">
        {timeline.map((it) => (
          <TimelineItem
            key={it.id.toString()}
            item={it}
            deleteEnabled={
              // user is owner of message
              user.id === it.user_id ||
              // user is an admin or moderator
              userRoles.some((role) => ['admin', 'moderator'].includes(role))
            }
          />
        ))}
        <div ref={messagesEndRef} style={{ height: 0 }} />
      </Container>
    </LayoutDash>
  );
}
