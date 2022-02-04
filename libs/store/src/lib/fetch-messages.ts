import { Message, Prisma } from '@prisma/client';
import supabase from './supabase';

export type FetchMessagesResponse = Message & Prisma.MessageInclude;
/**
 * Fetch all messages and their authors
 * @param {number} channelId
 * @param {function} setState Optionally pass in a hook or callback to set the state
 */
const fetchMessages = async (
  channelId: string | bigint | Date | null,
  setState: (messages: FetchMessagesResponse[]) => void
): Promise<FetchMessagesResponse[] | null> => {
  try {
    const { body } = await supabase
      .from<Message>('messages')
      .select(`*, author:user_id(*)`)
      .eq('channel_id', channelId)
      .order('inserted_at', { ascending: true });
    if (setState) setState(body ?? []);
    return body ?? [];
  } catch (error) {
    console.error('error', error);
    return null;
  }
};

export default fetchMessages;
