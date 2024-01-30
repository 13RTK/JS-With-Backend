import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://obxlsqvuazjpqmswijng.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ieGxzcXZ1YXpqcHFtc3dpam5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2MTI0NTksImV4cCI6MjAyMjE4ODQ1OX0.PymoFpz85Z4ToPxahmv6LdVIwWCX4ls2sN8GpuqsUIY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
