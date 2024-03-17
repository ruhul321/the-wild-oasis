import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://plfhcpbkwgampxycatmf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsZmhjcGJrd2dhbXB4eWNhdG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NTUzNDksImV4cCI6MjAyMzMzMTM0OX0.FnguUqyVBLW6VRT5I4asf2EPiZLXXqEBgWdjhiERP5E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
