const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createShipment(shipmentData) {
  const response = await fetch(`${API_URL}/api/shipments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shipmentData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to create shipment."
    );
  }

  return data;
}