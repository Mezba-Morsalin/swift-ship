const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getRiderShipments = async (riderId) => {
  const response = await fetch(
    `${API_URL}/api/shipments/rider/${riderId}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch rider shipments.");
  }

  return response.json();
};