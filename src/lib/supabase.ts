import { createClient } from "@supabase/supabase-js";
import crypto from "node:crypto";
import { supabaseAnonKey, supabaseUrl } from "@/constants/appConfig";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function uploadImage(file: File, folderName: string, bucketName: string = "simple-ecommerce") {
  const fileExtension = file.name.split(".").pop();
  const randomName = crypto.randomBytes(16).toString("hex");
  const filePath = `${folderName}/img${randomName}.${fileExtension}`; // example: "products/img1f1c7ef743deb517f74a2f88aa1b799f.jpg"

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
  let filePath = publicUrl.split(`/${bucketName}/`)[1];

  if (!filePath) {
    console.error("Invalid public URL format:", publicUrl);
    return false;
  }

  filePath = filePath.split("?")[0];
  filePath = decodeURIComponent(filePath);

  const { error } = await supabase.storage.from(bucketName).remove([filePath]);

  if (error) {
    console.error("Error deleting image:", error);
    return false;
  }

  return true;
}
