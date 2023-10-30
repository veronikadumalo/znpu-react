export const uploadPhoto = async (file?: File) => {
  if (!file) return null;
  const filename = encodeURIComponent(file.name);
  const res = await fetch(`/api/upload-image?file=${filename}`);
  const data = await res.json();
  const formData = new FormData();

  Object.entries({ ...data.fields, file }).forEach(([key, value]) => {
    // @ts-ignore
    formData.append(key, value);
  });
  try {
    const fileRes = await fetch(data.url, {
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
