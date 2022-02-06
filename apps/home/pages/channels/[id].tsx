import { useAuthWithRedir } from '@waweb/auth';
import { addMessage, useStore } from '@waweb/store';
import LayoutChat from '@waweb/ui.layout-chat';
import Message from '@waweb/ui.message';
import MessageInput from '@waweb/ui.message-input';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

const ChannelsPage = (props) => {
  const router = useRouter();
  const messagesEndRef = useRef(null);
  const { id } = router.query;
  const channelId = BigInt(typeof id === 'string' ? id : 1);
  const { channels, messages } = useStore({ channelId });

  //redirect back to auth screen if principal user missing
  const { user } = useAuthWithRedir('/');

  // scroll to end of messages
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }, [messages]);

  // TODO
  // redirect to public channel when current channel is deleted or does not exist
  // useEffect(() => {
  //   if (!channels.some((channel) => channel.id === BigInt(channelId))) {
  //     console.error(`${channelId} does not exist in channels`, channels);
  //     router.push('/channels/1');
  //   }
  // }, [channels, channelId, router]);

  // Render the channels and messages
  return (
    <LayoutChat channels={channels} activeChannelId={channelId}>
      <div className="relative" style={{ height: '100%' }}>
        <div className="h-full pb-16 Messages">
          <div className="p-2 overflow-y-auto">
            {messages.map((x) => (
              <Message key={x.id.toString()} message={x} />
            ))}
            <div ref={messagesEndRef} style={{ height: 0 }} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-2">
          <MessageInput
            onSubmit={async (text) => addMessage(text, channelId, user.id)}
          />
        </div>
      </div>
    </LayoutChat>
  );
};

export default ChannelsPage;
