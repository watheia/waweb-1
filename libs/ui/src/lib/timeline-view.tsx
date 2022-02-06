import { useAuthWithRedir } from '@waweb/auth';
import { DivProps } from '@waweb/model';
import { addMessage, useStore } from '@waweb/store';
import LayoutChat from '@waweb/ui.layout-chat';
import { useEffect, useRef } from 'react';
import Container from './container';
import TimelineItem from './timeline-item';
import MessageInput from './message-input';

export interface ChatViewProps extends DivProps {
  slug: string;
}

const TimelineView = ({ slug, ...props }: ChatViewProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { channels, activeChannel, timeline } = useStore(slug);
  const { user, userRoles } = useAuthWithRedir('/');

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
  // useEffect(() => {
  //   if (!channels.some((channel) => channel.slug === slug)) {
  //     console.error(`${slug} does not exist in channels`, channels);
  //     // router.push('/channel/1');
  //   }
  // }, [channels, slug]);

  // Render the channels and timeline
  return (
    <LayoutChat
      channels={channels}
      activeChannel={activeChannel}
      user={user}
      userRoles={userRoles}
      {...props}
    >
      <Container className="pt-6">
        {timeline.map((it) => (
          <TimelineItem
            key={it.id.toString()}
            item={it}
            isDeleteable={
              // user is owner of message
              user.id === it.user_id ||
              // user is an admin or moderator
              userRoles.some((role) => ['admin', 'moderator'].includes(role))
            }
          />
        ))}
        <div ref={messagesEndRef} style={{ height: 0 }} />
      </Container>
      <div className="absolute bottom-0 left-0 w-full p-2">
        {user && activeChannel && (
          <MessageInput
            onSubmit={async (text) =>
              addMessage(text, activeChannel.id, user.id)
            }
          />
        )}
      </div>
    </LayoutChat>
  );
};

export default TimelineView;
