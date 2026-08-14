const uploadToImage = async (file) => {
  const formData = new FormData();

  formData.append("image", file);

  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
    {
      method: "POST",
      body: formData,
    }
  );

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(
      result?.error?.message || "Image upload failed."
    );
  }

  return result.data.url;
};

export default uploadToImage