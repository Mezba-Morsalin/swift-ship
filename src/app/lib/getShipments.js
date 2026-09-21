const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getShipments = async () => {
  try {
    const response = await fetch(`${API_URL}/api/shipments`);

    if (!response.ok) {
      throw new Error("Failed to fetch shipments");
    }

    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error("Error fetching shipments:", error);
    throw error;
  }
};