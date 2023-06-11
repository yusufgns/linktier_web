import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, NextRequest } from "next/server";
import type { Database } from "./types/supabase";

export async function middleware(req: NextRequest) {
    const res: any = NextResponse.next();
    const supabase = createMiddlewareSupabaseClient<Database>({ req, res });
    const { data: session } = await supabase.auth.getSession();

    return res;
}
