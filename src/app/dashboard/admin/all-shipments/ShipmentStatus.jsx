"use client";

import { useState } from "react";

import { MoreVertical } from "lucide-react";



import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";

import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";

const ShipmentActions = ({ shipment }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  if (!shipment) return null;

  const handleStatusUpdate = async (status) => {
    try {
      setLoading(true);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/shipments/${shipment._id}`, {
        method: "PATCH",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: shipment._id,
          status,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update shipment status."
        );
      }

      setOpen(false);
      router.refresh();
    } catch (error) {
      console.error("Failed to update shipment status:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="rounded-lg bg-transparent p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
      >
        <MoreVertical size={18} />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Shipment Actions</DialogTitle>

            <DialogDescription>
              Manage shipment #{shipment._id?.slice(-6)}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 pt-2">
  {/* Pending */}
  {shipment.status === "pending" && (
    <>
      <Button
        disabled={loading}
        onClick={() => handleStatusUpdate("accepted")}
        className="w-full justify-start bg-indigo-500 text-white hover:bg-indigo-600"
      >
        {loading ? "Updating..." : "Accept Shipment"}
      </Button>

      <Button
        disabled={loading}
        onClick={() => handleStatusUpdate("cancelled")}
        className="w-full justify-start bg-rose-500 text-white hover:bg-rose-600"
      >
        {loading ? "Updating..." : "Cancel Shipment"}
      </Button>
    </>
  )}

  {/* Accepted */}
  {shipment.status === "accepted" && (
    <div className="rounded-lg bg-indigo-50 px-4 py-3 text-sm text-indigo-700">
      Shipment accepted. Further actions will be handled by the hub.
    </div>
  )}

  {/* In Transit */}
  {shipment.status === "transit" && (
    <div className="rounded-lg bg-blue-50 px-4 py-3 text-sm text-blue-700">
      Shipment is currently in transit.
    </div>
  )}

  {/* Delivered */}
  {shipment.status === "delivered" && (
    <div className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
      This shipment has already been delivered.
    </div>
  )}

  {/* Returned */}
  {shipment.status === "returned" && (
    <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
      This shipment has been returned.
    </div>
  )}

  {/* Cancelled */}
  {shipment.status === "cancelled" && (
    <div className="rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600">
      This shipment has been cancelled.
    </div>
  )}
</div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShipmentActions;