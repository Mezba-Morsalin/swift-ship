const updateRider = async (riderId, updateData) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/riders/${riderId}`,
    {
      method: "PATCH",
      cache : "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update rider.");
  }

  return data;
};

export default updateRider;