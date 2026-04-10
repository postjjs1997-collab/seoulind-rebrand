import { createClient } from "@supabase/supabase-js";
import type { NoticeItem } from "../notice-types";

export type NoticeRow = NoticeItem;

function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) {
    throw new Error("Supabase env is missing");
  }
  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function listNotices() {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("notices")
    .select("*")
    .order("pinned", { ascending: false })
    .order("updated_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as NoticeRow[];
}

export async function createNotice(input: {
  title: string;
  body: string;
  pinned: boolean;
}) {
  const supabase = getSupabaseClient();
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from("notices")
    .insert({
      title: input.title,
      body: input.body,
      pinned: input.pinned,
      created_at: now,
      updated_at: now,
    })
    .select("*")
    .single();
  if (error) throw error;
  return data as NoticeRow;
}

export async function updateNotice(
  id: string,
  input: Partial<{ title: string; body: string; pinned: boolean }>,
) {
  const supabase = getSupabaseClient();
  const patch: Partial<NoticeRow> = {
    updated_at: new Date().toISOString(),
  };
  if (typeof input.title === "string") patch.title = input.title;
  if (typeof input.body === "string") patch.body = input.body;
  if (typeof input.pinned === "boolean") patch.pinned = input.pinned;

  const { data, error } = await supabase
    .from("notices")
    .update(patch)
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw error;
  return data as NoticeRow;
}

export async function deleteNotice(id: string) {
  const supabase = getSupabaseClient();
  const { error } = await supabase.from("notices").delete().eq("id", id);
  if (error) throw error;
}

