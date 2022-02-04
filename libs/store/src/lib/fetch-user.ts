import { User } from '@waweb/model';
import supabase from './supabase';

/**
 * Fetch a single user
 * @param {number} userId
 * @param {function} setState Optionally pass in a hook or callback to set the state
 */
const fetchUser = async (userId: string, setState: (user: User) => void) => {
  try {
    let { body } = await supabase
      .from<User>('users')
      .select(`*`)
      .eq('id', userId);
    body = body ?? [];
    const user = body[0];
    if (setState) setState(user);
    return user;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export default fetchUser;
