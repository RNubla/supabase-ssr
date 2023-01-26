import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../db_types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createServerClient = () =>
  createServerComponentSupabaseClient<Database>({
    supabaseUrl,
    supabaseKey,
    headers,
    cookies,
  });
