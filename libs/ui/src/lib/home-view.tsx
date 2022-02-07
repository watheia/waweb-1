import {
  AppRole,
  ChannelModel,
  DivProps,
  MessageModel,
  User,
} from '@waweb/model';
import { useEffect, useRef } from 'react';
import Dashboard from './dashboard';
import { NavItem } from './layout-dash';

export interface HomeViewProps extends DivProps {
  user: User;
  userRoles: AppRole[];
  channels: ChannelModel[];
  activeChannel: ChannelModel;
  timeline: MessageModel[];
  navigation: NavItem[];
}

const HomeView = ({
  user,
  userRoles,
  channels,
  activeChannel,
  timeline,
  navigation,
  ...props
}: HomeViewProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // scroll to end of messages if present
    timeline &&
      timeline.length > 0 &&
      messagesEndRef.current?.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
  }, [timeline, messagesEndRef]);

  // TODO
  // redirect to public channel when current channel is deleted or does not exist
  useEffect(() => {
    if (
      activeChannel &&
      !channels.some((channel) => channel.id === activeChannel.id)
    ) {
      console.error(`${activeChannel} does not exist in channels`, channels);
      // router.push('/channel/1');
    }
  }, [channels, activeChannel]);

  return (
    <Dashboard
      user={user}
      userRoles={userRoles}
      channels={channels}
      activeChannel={activeChannel}
      timeline={timeline}
      navigation={navigation}
    />
  );
};

export default HomeView;
