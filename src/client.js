import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL
const anon = import.meta.env.VITE_SUPABASE_ANON

const client = createClient(url, anon)
export const supabase = client