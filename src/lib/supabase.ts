import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function uploadImage(file: File, folderName: string, bucketName: string = "simple-ecommerce") {
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = `${folderName}/${fileName}`;

  // upload the file to supabase storage
  const { error } = await supabase.storage.from(bucketName).upload(filePath, file, {
    cacheControl: "3600",
    upsert: false,
  });

  if (error) {
    console.error("Error uploading image:", error);
    return null;
  }

  // get the public url of the uploaded file
  const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);

  return data.publicUrl;
}

export async function deleteImage(publicUrl: string, bucketName: string = "simple-ecommerce") {
  const filePath = publicUrl.split(`/${bucketName}/`)[1];

  if (!filePath) {
    console.error("Invalid public URL:", publicUrl);
    return false;
  }

  const { error } = await supabase.storage.from(bucketName).remove([filePath]);

  if (error) {
    console.error("Error deleting image:", error);
    return false;
  }

  return true;
}
