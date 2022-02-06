import { useAuth } from '@waweb/auth';
import { addMessage } from '@waweb/store';
import LayoutChat from '@waweb/ui.layout-chat';
import Message from '@waweb/ui.message';
import MessageInput from '@waweb/ui.message-input';
import { useRef } from 'react';

const ChannelsPage = (props) => {
  // const router = useRouter();
  const { user } = useAuth();
  const messagesEndRef = useRef(null);
  const channelId = BigInt(1);
  const { messages, channels } = {
    messages: [],
    channels: [
      {
        id: channelId,
        slug: '/channels/1',
        inserted_at: new Date(),
        created_by: '',
      },
    ],
  };

  // Else load up the page
  // const { id } = router.query;
  // const channelId = BigInt(typeof id === 'string' ? id : 1);
  // const { messages, channels } = useStore({ channelId });

  // useEffect(() => {
  //   messagesEndRef.current.scrollIntoView({
  //     block: 'start',
  //     behavior: 'smooth',
  //   });
  // }, [messages]);

  // redirect to public channel when current channel is deleted or does not exist
  // useEffect(() => {
  //   if (!channels.some((channel) => channel.id === BigInt(channelId))) {
  //     router.push('/channels/1');
  //   }
  // }, [channels, channelId, router]);

  // Render the channels and messages
  return (
    <LayoutChat channels={channels} activeChannelId={channelId}>
      <div className="relative" style={{ height: '100%' }}>
        <div className="Messages h-full pb-16">
          <div className="p-2 overflow-y-auto">
            {messages.map((x) => (
              <Message key={x.id.toString()} message={x} />
            ))}
            <div ref={messagesEndRef} style={{ height: 0 }} />
          </div>
        </div>
        <div className="p-2 absolute bottom-0 left-0 w-full">
          <MessageInput
            onSubmit={async (text) => addMessage(text, channelId, user.id)}
          />
        </div>
      </div>
    </LayoutChat>
  );
};

export default ChannelsPage;
