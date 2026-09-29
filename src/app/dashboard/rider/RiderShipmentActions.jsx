"use client";

import { useState } from "react";
import {
  FaCheck,
  FaXmark,
  FaTruckFast,
} from "react-icons/fa6";
import { toast } from "sonner";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function RiderShipmentActions({
  shipment,
  onUpdated,
}) {
  const [loading, setLoading] = useState(false);

  const status =
    shipment?.status?.toLowerCase() || "pending";

  const assignmentStatus =
    shipment?.assignmentStatus?.toLowerCase() || "";

  // Rider received shipment request
  const isRequested =
    assignmentStatus === "requested";

  // Rider accepted shipment
  const isAccepted =
    assignmentStatus === "accepted";

  // Shipment is currently in transit
  const isInTransit =
    status === "in_transit";

  // Shipment already delivered
  const isDelivered =
    status === "delivered";

  const handleAction = async (action) => {
    if (!shipment?._id) {
      toast.error("Shipment ID is missing.");
      return;
    }

    if (!API_URL) {
      toast.error("API URL is not configured.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${API_URL}/api/shipments/${shipment._id}/rider-action`,
        {
          method: "PATCH",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data?.message || "Failed to update shipment."
        );
      }

      // Update local dashboard state
      if (data?.shipment) {
        onUpdated?.(data.shipment);
      }

      // Success toast
      if (action === "accepted") {
        toast.success("Shipment accepted successfully.");
      } else if (action === "rejected") {
        toast.success("Shipment request declined.");
      } else if (action === "delivered") {
        toast.success("Shipment marked as delivered.");
      } else {
        toast.success("Shipment updated successfully.");
      }

      // IMPORTANT:
      // router.refresh() intentionally not used here.
      // Local state is already updated through onUpdated().
    } catch (error) {
      console.error("Shipment action error:", error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==================================================
  // ALREADY DELIVERED
  // ==================================================
  if (isDelivered) {
    return (
      <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-emerald-600 ring-1 ring-emerald-100">
        <FaCheck className="text-sm" />

        <span>DELIVERED</span>
      </div>
    );
  }

  // ==================================================
  // ACCEPTED + IN TRANSIT
  // ==================================================
  if (isAccepted && isInTransit) {
    return (
      <button
        type="button"
        disabled={loading}
        onClick={() => handleAction("delivered")}
        className="flex items-center gap-2 rounded-xl bg-[#fcb915] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-[#111827] shadow-[0_5px_15px_rgba(252,185,21,0.25)] transition-all duration-200 hover:bg-[#f5b20d] hover:shadow-[0_7px_20px_rgba(252,185,21,0.30)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <FaTruckFast className="text-sm" />

        <span>
          {loading
            ? "UPDATING..."
            : "MARK AS DELIVERED"}
        </span>
      </button>
    );
  }

  // ==================================================
  // RIDER RECEIVED REQUEST
  // ==================================================
  if (isRequested) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        {/* DECLINE */}
        <button
          type="button"
          disabled={loading}
          onClick={() => handleAction("rejected")}
          className="flex items-center gap-2 rounded-xl bg-rose-50 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-rose-500 ring-1 ring-rose-100 transition-all duration-200 hover:bg-rose-100 hover:ring-rose-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <FaXmark className="text-sm" />

          <span>
            {loading
              ? "PROCESSING..."
              : "DECLINE REQUEST"}
          </span>
        </button>

        {/* ACCEPT */}
        <button
          type="button"
          disabled={loading}
          onClick={() => handleAction("accepted")}
          className="flex items-center gap-2 rounded-xl bg-[#fcb915] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-[#111827] shadow-[0_5px_15px_rgba(252,185,21,0.25)] transition-all duration-200 hover:bg-[#f5b20d] hover:shadow-[0_7px_20px_rgba(252,185,21,0.30)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <FaCheck className="text-sm" />

          <span>
            {loading
              ? "PROCESSING..."
              : "ACCEPT SHIPMENT"}
          </span>
        </button>
      </div>
    );
  }

  return null;
}