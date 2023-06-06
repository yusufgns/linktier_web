import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import supabase from "../lib/supabase-client";
import Image from "next/image";

export default function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (file) {
      const filename = `${uuidv4()}-${file.name}`;

      const { data, error } = await supabase.storage
        .from("images")
        .upload(filename, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        console.error("Error uploading image:", error);
      } else if (data) {
        const filepath = data.path;
        // Save the filepath in the database or perform any other necessary actions
        setUploadedImageUrl(filepath);
      }
    }
  };

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="image" onChange={handleFileSelected} />
      <button type="submit">Upload image</button>
      {uploadedImageUrl && (
        <Image src={uploadedImageUrl} alt="" width={200} height={200} />
      )}
    </form>
  );
}
