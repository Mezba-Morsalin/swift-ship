export const getHubs = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hubs`);

  if (!response.ok) {
    throw new Error("Failed to fetch hubs");
  }

  return response.json();
};