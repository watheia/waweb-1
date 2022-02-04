import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env['NEXT_PUBLIC_SUPABASE_URL'] ?? 'http://localhost:8080';
const supabaseAnonKey = process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] ?? 'noop';

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
