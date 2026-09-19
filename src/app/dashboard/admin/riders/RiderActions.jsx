"use client";

import { useState } from "react";
import { Eye, EyeOff, MoreVertical } from "lucide-react";
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
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  if (!rider) return null;

  const handleApprove = async () => {
  if (!password || password.length < 8) {
    return;
  }

  try {
    setLoading(true);

    const response = await fetch("/api/admin/riders/approve", {
  method: "POST",
  cache: "no-store",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    rider,
    password,
  }),
});

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to approve rider.");
    }

    setPassword("");
    setShowPassword(false);
    setPasswordOpen(false);
    setOpen(false);

    router.refresh();
  } catch (error) {
    console.error("Failed to approve rider:", error);
  } finally {
    setLoading(false);
  }
};

  const handleStatusUpdate = async (status) => {
    try {
      setLoading(true);

      await updateRider(rider._id, {
        status,
      });

      setOpen(false);

      router.refresh();
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
            {rider.status === "pending" && !passwordOpen && (
              <Button
                disabled={loading}
                onClick={() => setPasswordOpen(true)}
                className="w-full justify-start bg-green-500 text-white hover:bg-green-600"
              >
                Approve Rider
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

            {rider.status === "pending" && passwordOpen && (
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Set Rider Password
                  </label>

                  <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Enter password"
    disabled={loading}
    minLength={8}
    className="h-11 w-full rounded-lg border border-slate-200 px-3 pr-11 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 disabled:cursor-not-allowed disabled:opacity-60"
  />

  <button
    type="button"
    onClick={() => setShowPassword((prev) => !prev)}
    disabled={loading}
    aria-label={showPassword ? "Hide password" : "Show password"}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
  >
    {showPassword ? (
      <Eye className="h-4 w-4" />
    ) : (
      <EyeOff className="h-4 w-4" />
    )}
  </button>
</div>

                  <p className="mt-1.5 text-xs text-slate-400">
                    Password must be at least 8 characters.
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button
                    type="button"
                    disabled={loading}
                    onClick={() => {
                      setPassword("");
                      setPasswordOpen(false);
                    }}
                    className="flex-1 bg-slate-100 text-slate-700 hover:bg-slate-200"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="button"
                    disabled={loading || password.length < 8}
                    onClick={handleApprove}
                    className="flex-1 bg-emerald-500 text-white hover:bg-emerald-600"
                  >
                    {loading ? "Approving..." : "Approve Rider"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RiderActions;