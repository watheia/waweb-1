import { Channel } from '@waweb/model';
import { Dispatch } from 'react';
import supabase from './supabase';

/**
 * Fetch all channels
 * @param {function} setState Optionally pass in a hook or callback to set the state
 */
const fetchChannels = async (
  setState: Dispatch<React.SetStateAction<Channel[]>>
) => {
  try {
    const { body } = await supabase.from<Channel>('channels').select('*');
    setState(body ?? []);
    return body ?? [];
  } catch (error) {
    console.error('error', error);
    return [];
  }
};

export default fetchChannels;
