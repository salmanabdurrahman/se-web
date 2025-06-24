import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function uploadFile(file: File, folderName: string) {
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = `${folderName}/${fileName}`;

  const { data, error } = await supabase.storage.from("simple-ecommerce").upload(filePath, file, {
    cacheControl: "3600",
    upsert: false,
  });

  if (error) {
    throw error;
  }

  return data;
}

export function getPublicUrl(path: string) {
  const { data } = supabase.storage.from("simple-ecommerce").getPublicUrl(path);
  return data.publicUrl;
}
