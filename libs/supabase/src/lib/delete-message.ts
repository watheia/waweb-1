import { Message } from '@waweb/model';
import supabase from './supabase';

/**
 * Delete a message from the DB
 * @param {bigint} message_id
 */
const deleteMessage = async (message_id: bigint) => {
  try {
    const { body } = await supabase
      .from<Message>('messages')
      .delete()
      .match({ id: message_id });
    return body;
  } catch (error) {
    console.error('error', error);
    return null;
  }
};

export default deleteMessage;
