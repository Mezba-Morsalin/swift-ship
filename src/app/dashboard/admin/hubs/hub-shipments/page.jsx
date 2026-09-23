import React from "react";

import { getShipments } from "@/app/lib/getShipments";
import { getRiders } from "@/app/lib/getRiders";
import { getHubs } from "@/app/lib/getHubs";

import HubShipments from "./HubShipments";

const HubShipmentsPage = async ({ searchParams }) => {
  const params = await searchParams;
  const hubId = params?.hubId;

  const [shipmentsResponse, ridersResponse, hubsResponse] =
    await Promise.all([
      getShipments(),
      getRiders(),
      getHubs(),
    ]);

  const shipments = Array.isArray(shipmentsResponse)
    ? shipmentsResponse
    : shipmentsResponse?.data || [];

  const riders = Array.isArray(ridersResponse)
    ? ridersResponse
    : ridersResponse?.data || [];

  const hubs = Array.isArray(hubsResponse)
    ? hubsResponse
    : hubsResponse?.data || [];

  const hub = hubs.find(
    (item) => String(item?._id) === String(hubId)
  );

  const hubShipments = shipments.filter(
    (shipment) => String(shipment?.hubId) === String(hubId)
  );

  return (
    <HubShipments
      hub={hub}
      shipments={hubShipments}
      riders={riders}
    />
  );
};

export default HubShipmentsPage;