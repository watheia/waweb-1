import { Channel } from '@waweb/model';
import supabase from './supabase';

/**
 * Insert a new channel into the DB
 * @param {string} slug The channel name
 * @param {number} user_id The channel creator
 */
const addChannel = async (slug: any, user_id: any) => {
  try {
    const { body } = await supabase
      .from<Channel>('channels')
      .insert([{ slug, created_by: user_id }]);
    return body;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export default addChannel;
