import { User } from '@waweb/model';
import supabase from './supabase';

/**
 * Fetch a single user
 * @param {number} userId
 * @param {function} setState Optionally pass in a hook or callback to set the state
 */
const fetchUser = async (
  userId: string,
  setState: (user: User | null) => void
): Promise<User | null> => {
  try {
    // const user = await prisma.user.findFirst({ where: { id: userId } });
    const { body } = await supabase
      .from<User>('users')
      .select(`*`)
      .eq('id', userId);
    const user = body ? body[0] : null;
    if (setState) setState(user);
    return user;
  } catch (error) {
    console.error('error', error);
    return null;
  }
};

export default fetchUser;
