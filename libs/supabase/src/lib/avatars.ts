import supabase from './supabase';

export const defaultAvatar = '/images/icon.png';

const avatars = supabase.storage.from('avatars');
export default avatars;
