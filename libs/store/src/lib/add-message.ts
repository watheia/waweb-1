import { Message } from '@waweb/model';
import supabase from './supabase';

/**
 * Insert a new message into the DB
 * @param {string} message The message text
 * @param {bigint} channel_id
 * @param {string} user_id The author
 */
const addMessage = async (
  message: string,
  channel_id: bigint,
  user_id: string
) => {
  try {
    const { body } = await supabase
      .from<Message>('messages')
      .insert([{ message, channel_id, user_id }]);
    return body;
  } catch (error) {
    console.error('error', error);
    return null;
  }
};

export default addMessage;
