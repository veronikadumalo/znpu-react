import aws from "aws-sdk";
export const uploadPhoto = async (file?: File) => {
  if (!file) return null;
  const filename = encodeURIComponent(file.name);
  const s3 = new aws.S3({
    accessKeyId: "AKIAVAGLBMHQSDODUESZ",
    secretAccessKey: "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",
    region: "eu-central-1",
  });
  aws.config.update({
    accessKeyId: "AKIAVAGLBMHQSDODUESZ",
    secretAccessKey: "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",
    region: "eu-central-1",
    signatureVersion: "v4",
  });

  const post = await s3.createPresignedPost({
    Bucket: "znpu-bucket",
    Fields: {
      key: filename,
    },
    Expires: 60, // seconds
    Conditions: [
      ["content-length-range", 0, 5048576], // up to 1 MB
    ],
  });
  console.log(post);

  // const res = await fetch(`/api/upload-image?file=${filename}`);
  // const data = await res.json();
  const formData = new FormData();

  Object.entries({ ...post.fields, file }).forEach(([key, value]) => {
    // @ts-ignore
    formData.append(key, value);
  });
  try {
    const fileRes = await fetch(post.url, {
      method: "POST",
      body: formData,
    });
    const isFileUploaded = await fileRes.ok;
    return isFileUploaded;
  } catch {
    console.log("errro");
    return false;
  }
};
