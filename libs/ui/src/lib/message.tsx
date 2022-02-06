import { MessageModel } from '@waweb/model';
import { deleteMessage, useStore } from '@waweb/store';
import TrashIcon from './icons/icon-trash';
import { useAuth } from '@waweb/auth';

export type MessageProps = {
  message: MessageModel;
};

const Message = ({ message }: MessageProps) => {
  const { user, userRoles } = useAuth();
  const { users } = useStore({ channelId: message.channel_id });
  const author = users[message.user_id];

  return (
    <div className="py-1 flex items-center space-x-2">
      <div className="text-gray-100 w-4">
        {(user?.id === message.user_id ||
          userRoles.some((role) => ['admin', 'moderator'].includes(role))) && (
          <button onClick={() => deleteMessage(message.id)}>
            <TrashIcon />
          </button>
        )}
      </div>
      <div>
        <p className="text-blue-700 font-bold">{author.email}</p>
        <p className="text-white">{message.message}</p>
      </div>
    </div>
  );
};

export default Message;
