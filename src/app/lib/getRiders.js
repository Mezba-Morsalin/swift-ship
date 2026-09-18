export const getRiders = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/riders`);

  if (!response.ok) {
    throw new Error("Failed to fetch hubs");
  }

  return response.json();
};