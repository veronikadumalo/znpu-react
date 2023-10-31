"use client";
import axios from "axios";
import { useEffect, useState, FormEvent } from "react";

export default function FileUpload() {
  const [file, setFile] = useState<any>(null);
  const [uploadingStatus, setUploadingStatus] = useState<boolean>(false);

  const uploadFile = async () => {
    setUploadingStatus(true);

    try {
      let { data } = await axios.post(
        "/api/upload",
        {
          file: file,
          type: file.type,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      console.log(data, "DATA");

      setUploadingStatus(false);
      setFile(null);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (file) {
      uploadFile();
    }
  }, [file]);

  console.log(uploadingStatus);

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        name="image"
        id="selectFile"
        onChange={(e: any) => setFile(e.target.files[0])}
      />
    </div>
  );
}
