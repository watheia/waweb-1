import { UserRole } from '@waweb/model';
import supabase from './supabase';

/**
 * Fetch all roles for the current user
 * @param {function} setState Optionally pass in a hook or callback to set the state
 */
const fetchUserRoles = async (
  setState: (roles: UserRole[]) => void
): Promise<UserRole[]> => {
  try {
    let { body } = await supabase.from<UserRole>('user_roles').select(`*`);
    if (setState) setState(body ?? []);
    return body ?? [];
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

export default fetchUserRoles;
