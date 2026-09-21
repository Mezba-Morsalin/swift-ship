import AllShipments from "@/app/components/dashboard/admin/AllShipments";
import { getShipments } from "@/app/lib/getShipments";

import React from "react";

const AllShipmentPage = async () => {
  const shipments = await getShipments();

  return (
    <div>
      <AllShipments shipments={shipments} />
    </div>
  );
};

export default AllShipmentPage;