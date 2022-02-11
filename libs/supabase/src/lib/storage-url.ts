const supabaseUrl =
  process.env['NEXT_PUBLIC_SUPABASE_URL'] ?? 'http://localhost:8080';
const storageKey = process.env['NEXT_PUBLIC_SUPABASE_STORAGE_KEY'] ?? 'noop';

const storageUrl = (bucket: string, filename: string) => {
  return `${supabaseUrl}/storage/v1/object/sign/${bucket}/${filename}?token=${storageKey}`;
};

export default storageUrl;
