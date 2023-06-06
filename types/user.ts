import { Database } from "./supabase";

export type UserType = Database['public']['Tables']['user']['Row']