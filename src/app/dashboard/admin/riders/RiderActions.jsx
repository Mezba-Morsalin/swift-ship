"use client";

import { useState } from "react";
import { MoreVertical } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import updateRider from "@/app/lib/UpdateRider";
import { useRouter } from "next/navigation";

const RiderActions = ({ rider }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter()

  if (!rider) return null;

  const handleStatusUpdate = async (status) => {
    try {
      setLoading(true);

      await updateRider(rider._id, {
        status,
      });

      setOpen(false);
      router.refresh()
    } catch (error) {
      console.error("Failed to update rider:", error);
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
            <DialogTitle>Rider Actions</DialogTitle>

            <DialogDescription>
              Manage {rider.name}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 pt-2">
  {rider.status === "pending" && (
    <Button
      disabled={loading}
      onClick={() => handleStatusUpdate("active")}
      className="w-full justify-start bg-amber-500 text-white hover:bg-amber-600"
    >
      {loading ? "Approving..." : "Approve Rider"}
    </Button>
  )}

  {rider.status === "active" && (
    <Button
      disabled={loading}
      onClick={() => handleStatusUpdate("suspended")}
      className="w-full justify-start bg-rose-500 text-white hover:bg-rose-600"
    >
      {loading ? "Suspending..." : "Suspend Rider"}
    </Button>
  )}

  {rider.status === "suspended" && (
    <Button
      disabled={loading}
      onClick={() => handleStatusUpdate("active")}
      className="w-full justify-start bg-emerald-500 text-white hover:bg-emerald-600"
    >
      {loading ? "Activating..." : "Activate Rider"}
    </Button>
  )}
</div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RiderActions;