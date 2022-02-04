import { Channel } from '@waweb/model';
import supabase from './supabase';

/**
 * Delete a channel from the DB
 * @param {bigint} channelId
 */
const deleteChannel = async (channelId: bigint) => {
  try {
    let { body } = await supabase
      .from<Channel>('channels')
      .delete()
      .match({ id: channelId });
    return body;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export default deleteChannel;
