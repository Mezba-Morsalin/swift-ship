"use client";

import { useState } from "react";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";

import { Button } from "@/app/components/ui/button";

const ShipmentActions = ({ shipment }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  if (!shipment) return null;

  // ==========================================
  // Shipment Action
  // ==========================================
  const currentAction = shipment.action?.type;

  // ==========================================
  // Handle Accept / Cancel Action
  // ==========================================
  const handleStatusUpdate = async (action) => {
    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/shipments/${shipment._id}`,
        {
          method: "PATCH",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: action,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update shipment action."
        );
      }

      setOpen(false);
      router.refresh();
    } catch (error) {
      console.error("Failed to update shipment action:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Action Button */}
      <Button
        onClick={() => setOpen(true)}
        className="rounded-lg bg-transparent p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
      >
        <MoreVertical size={18} />
      </Button>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Shipment Actions</DialogTitle>

            <DialogDescription>
              Manage shipment #{shipment._id?.slice(-6)}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 pt-2">

            {/* ==========================================
                No Action Yet
            ========================================== */}
            {!currentAction && shipment.status === "pending" && (
              <>
                <Button
                  disabled={loading}
                  onClick={() => handleStatusUpdate("accepted")}
                  className="w-full justify-start bg-indigo-500 text-white hover:bg-indigo-600"
                >
                  {loading ? "Processing..." : "Accept Shipment"}
                </Button>

                <Button
                  disabled={loading}
                  onClick={() => handleStatusUpdate("cancelled")}
                  className="w-full justify-start bg-rose-500 text-white hover:bg-rose-600"
                >
                  {loading ? "Processing..." : "Cancel Shipment"}
                </Button>
              </>
            )}

            {/* ==========================================
                Shipment Accepted
            ========================================== */}
            {currentAction === "accepted" && (
              <div className="rounded-lg bg-indigo-50 px-4 py-3 text-sm text-indigo-700">
                <p className="font-medium">
                  Shipment accepted
                </p>

                <p className="mt-1 text-indigo-600">
                  This shipment has been accepted and is waiting
                  for hub processing.
                </p>
              </div>
            )}

            {/* ==========================================
                Shipment Cancelled
            ========================================== */}
            {currentAction === "cancelled" && (
              <div className="rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-700">
                <p className="font-medium">
                  Shipment cancelled
                </p>

                <p className="mt-1 text-rose-600">
                  This shipment has been cancelled.
                </p>
              </div>
            )}

            {/* ==========================================
                Fallback
            ========================================== */}
            {shipment.status !== "pending" && (
              <div className="rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600">
                Shipment status is currently controlled by the hub.
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShipmentActions;