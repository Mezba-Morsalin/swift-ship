"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  MapPin,
  Package,
  Phone,
  Trash2,
  UserRound,
  X,
  Truck,
  Send,
  Banknote,
  Weight,
  Tag,
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const HubShipments = ({
  hub,
  shipments: initialShipments,
  riders: allRiders,
}) => {
  const [shipments, setShipments] = useState(
    initialShipments || []
  );

  const [selectedShipment, setSelectedShipment] =
    useState(null);

  const [selectedRider, setSelectedRider] = useState("");

  const [loading, setLoading] = useState(false);

  const [deleteLoading, setDeleteLoading] = useState(null);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  // ========================================
  // ONLY ACTIVE RIDERS OF THIS HUB
  // ========================================
  const riders = (allRiders || []).filter(
    (rider) =>
      rider?.status?.toLowerCase() === "active" &&
      rider?.hubCode === hub?.hubCode
  );

  // ========================================
  // SHOW MESSAGE
  // ========================================
  const showMessage = (type, text) => {
    setMessage({
      type,
      text,
    });

    setTimeout(() => {
      setMessage({
        type: "",
        text: "",
      });
    }, 3000);
  };

  // ========================================
  // GET ADMIN ACTION TYPE
  // accepted / cancelled
  // ========================================
  const getActionType = (shipment) => {
    return shipment?.action?.type?.toLowerCase() || "";
  };

  // ========================================
  // DELETE CANCELLED SHIPMENT
  // ========================================
  const handleDeleteShipment = async (shipmentId) => {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this cancelled shipment?"
    );

    if (!confirmed) return;

    try {
      setDeleteLoading(shipmentId);

      const response = await fetch(
        `${API_URL}/api/shipments/${shipmentId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to delete shipment."
        );
      }

      setShipments((prev) =>
        prev.filter(
          (shipment) => shipment._id !== shipmentId
        )
      );

      showMessage(
        "success",
        "Shipment deleted successfully."
      );
    } catch (error) {
      console.error("Delete shipment error:", error);

      showMessage(
        "error",
        error.message || "Failed to delete shipment."
      );
    } finally {
      setDeleteLoading(null);
    }
  };

  // ========================================
  // OPEN ASSIGN RIDER MODAL
  // ========================================
  const handleOpenAssign = (shipment) => {
    setSelectedShipment(shipment);
    setSelectedRider("");

    setMessage({
      type: "",
      text: "",
    });
  };

  // ========================================
  // SEND RIDER REQUEST
  // ========================================
const handleAssignRider = async () => {
  if (!selectedRider) {
    showMessage("error", "Please select a rider.");
    return;
  }

  if (!selectedShipment) return;

  const rider = riders.find(
    (item) => item._id === selectedRider
  );

  if (!rider) {
    showMessage("error", "Rider not found.");
    return;
  }

  try {
    setLoading(true);

    const response = await fetch(
      `${API_URL}/api/shipments/${selectedShipment._id}/assign-rider`,
      {
        method: "PATCH",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          riderId: rider._id,
          riderName: rider.name,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to send rider request."
      );
    }

    setShipments((prev) =>
      prev.map((shipment) =>
        shipment._id === selectedShipment._id
          ? {
              ...shipment,
              riderId: rider._id,
              riderName: rider.name,
              assignmentStatus: "requested",
              assignedAt: new Date().toISOString(),
            }
          : shipment
      )
    );

    setSelectedShipment(null);
    setSelectedRider("");

    showMessage(
      "success",
      `Request sent to ${rider.name}.`
    );
  } catch (error) {
    console.error("Assign rider error:", error);

    showMessage(
      "error",
      error.message || "Failed to send rider request."
    );
  } finally {
    setLoading(false);
  }
};

  // ========================================
  // STATUS STYLE
  // ========================================
  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "border-orange-200 bg-orange-50 text-orange-500";

      case "in_transit":
      case "in transit":
        return "border-purple-200 bg-purple-50 text-purple-600";

      case "delivered":
        return "border-emerald-200 bg-emerald-50 text-emerald-600";

      case "returned":
        return "border-rose-200 bg-rose-50 text-rose-600";

      default:
        return "border-slate-200 bg-slate-50 text-slate-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* ========================================
          HEADER
      ======================================== */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Link
              href="/dashboard/admin/hubs"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
            >
              <ArrowLeft size={18} />
            </Link>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
                  {hub?.hubName || "Hub"} Shipments
                </h1>

                {hub?.hubCode && (
                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase text-amber-600">
                    {hub.hubCode}
                  </span>
                )}
              </div>

              <div className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                <MapPin size={13} />

                <span>
                  {hub?.area || "Area"},{" "}
                  {hub?.district || "District"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full bg-slate-50 px-4 py-2">
            <Package
              size={16}
              className="text-amber-500"
            />

            <span className="text-sm font-bold text-slate-700">
              {shipments.length} Shipments
            </span>
          </div>
        </div>
      </div>

      {/* ========================================
          MESSAGE
      ======================================== */}
      {message.text && (
        <div
          className={`rounded-xl border px-4 py-3 text-sm font-semibold ${
            message.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-600"
              : "border-red-200 bg-red-50 text-red-500"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* ========================================
          NO SHIPMENTS
      ======================================== */}
      {shipments.length === 0 ? (
        <div className="rounded-2xl border border-slate-100 bg-white px-6 py-16 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            <Package size={26} />
          </div>

          <h2 className="mt-4 text-lg font-bold text-slate-800">
            No Shipments Found
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            This hub currently has no shipments.
          </p>
        </div>
      ) : (
        /* ========================================
           SHIPMENTS
        ======================================== */
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {shipments.map((shipment) => {
            const status =
              shipment?.status?.toLowerCase() || "";

            const actionType = getActionType(shipment);

            const isAdminAccepted =
              actionType === "accepted";

            const isCancelled =
              actionType === "cancelled";

            const isRiderRequested =
              shipment?.assignmentStatus === "requested";

            const isInTransit =
              status === "in_transit" ||
              status === "in transit";

            const isDelivered =
              status === "delivered";

            return (
              <div
                key={shipment._id}
                className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                {/* ========================================
                    HEADER
                ======================================== */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                      <Package size={20} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Shipment ID
                      </p>

                      <h3 className="truncate text-sm font-extrabold text-slate-900">
                        #{shipment._id}
                      </h3>
                    </div>
                  </div>

                  {/* ACTUAL SHIPMENT STATUS */}
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase ${getStatusStyle(
                      shipment.status
                    )}`}
                  >
                    {isInTransit
                      ? "In Transit"
                      : shipment.status || "Pending"}
                  </span>
                </div>

                <div className="my-4 h-px bg-slate-100" />

                {/* ========================================
                    ADMIN ACTION
                ======================================== */}
                <div className="mb-4 flex items-center justify-between rounded-[16px] border border-slate-100 bg-slate-50 px-3 py-3">
                  <div className="flex items-center gap-2">
                    {isAdminAccepted ? (
                      <CheckCircle2
                        size={16}
                        className="text-emerald-500"
                      />
                    ) : isCancelled ? (
                      <X
                        size={16}
                        className="text-red-500"
                      />
                    ) : (
                      <Clock3
                        size={16}
                        className="text-orange-500"
                      />
                    )}

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wide text-slate-400">
                        Admin Action
                      </p>

                      <p className="text-xs font-bold text-slate-700">
                        {isAdminAccepted
                          ? "Accepted"
                          : isCancelled
                            ? "Cancelled"
                            : "Waiting for Approval"}
                      </p>
                    </div>
                  </div>

                  {shipment?.action?.createdAt && (
                    <span className="text-[9px] font-medium text-slate-400">
                      {new Date(
                        shipment.action.createdAt
                      ).toLocaleDateString()}
                    </span>
                  )}
                </div>

                {/* ========================================
                    RECIPIENT
                ======================================== */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <UserRound
                      size={15}
                      className="shrink-0 text-slate-400"
                    />

                    <span className="text-slate-400">
                      Recipient:
                    </span>

                    <span className="font-bold text-slate-700">
                      {shipment.recipientName}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Phone
                      size={15}
                      className="shrink-0 text-slate-400"
                    />

                    <span className="font-medium text-slate-600">
                      {shipment.recipientPhone}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 text-sm">
                    <MapPin
                      size={15}
                      className="mt-0.5 shrink-0 text-slate-400"
                    />

                    <span className="font-medium text-slate-600">
                      {shipment.address}
                    </span>
                  </div>
                </div>

                {/* ========================================
                    SHIPMENT INFO
                ======================================== */}
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  <div className="rounded-[16px] bg-slate-50 px-3 py-3">
                    <div className="flex items-center gap-1 text-[9px] font-bold uppercase text-slate-400">
                      <MapPin size={11} />
                      Destination
                    </div>

                    <p className="mt-1 truncate text-sm font-bold text-slate-800">
                      {shipment.destination}
                    </p>
                  </div>

                  <div className="rounded-[16px] bg-slate-50 px-3 py-3">
                    <div className="flex items-center gap-1 text-[9px] font-bold uppercase text-slate-400">
                      <Tag size={11} />
                      Category
                    </div>

                    <p className="mt-1 truncate text-sm font-bold text-slate-800">
                      {shipment.category}
                    </p>
                  </div>

                  <div className="rounded-[16px] bg-slate-50 px-3 py-3">
                    <div className="flex items-center gap-1 text-[9px] font-bold uppercase text-slate-400">
                      <Weight size={11} />
                      Weight
                    </div>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                      {shipment.weight} kg
                    </p>
                  </div>

                  <div className="rounded-[16px] bg-slate-50 px-3 py-3">
                    <div className="flex items-center gap-1 text-[9px] font-bold uppercase text-slate-400">
                      <Banknote size={11} />
                      COD
                    </div>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                      ৳{shipment.codAmount || 0}
                    </p>
                  </div>
                </div>

                {/* ========================================
                    INSTRUCTIONS
                ======================================== */}
                {shipment.instructions && (
                  <div className="mt-3 rounded-[16px] border border-amber-100 bg-amber-50 px-3 py-3">
                    <p className="text-[9px] font-bold uppercase text-amber-500">
                      Delivery Instructions
                    </p>

                    <p className="mt-1 text-xs font-medium text-amber-700">
                      {shipment.instructions}
                    </p>
                  </div>
                )}

                {/* ========================================
                    ASSIGNED RIDER
                ======================================== */}
                {shipment.riderName && (
                  <div className="mt-3 flex items-center gap-2 rounded-[16px] border border-sky-100 bg-sky-50 px-3 py-3">
                    <Truck
                      size={16}
                      className="text-sky-500"
                    />

                    <div>
                      <p className="text-[9px] font-bold uppercase text-sky-400">
                        Assigned Rider
                      </p>

                      <p className="text-sm font-bold text-sky-700">
                        {shipment.riderName}
                      </p>
                    </div>
                  </div>
                )}

                {/* ========================================
                    ACTIONS
                ======================================== */}
                <div className="mt-5 flex gap-2">
                  {/* CANCELLED */}
                  {isCancelled && (
                    <button
                      type="button"
                      disabled={
                        deleteLoading === shipment._id
                      }
                      onClick={() =>
                        handleDeleteShipment(
                          shipment._id
                        )
                      }
                      className="flex h-10 flex-1 items-center justify-center gap-2 rounded-full bg-red-50 text-xs font-bold text-red-500 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Trash2 size={15} />

                      {deleteLoading === shipment._id
                        ? "Deleting..."
                        : "Delete Shipment"}
                    </button>
                  )}

                  {/* ADMIN ACCEPTED + NO RIDER REQUEST */}
                  {isAdminAccepted &&
                    !isRiderRequested &&
                    !isInTransit && (
                      <button
                        type="button"
                        onClick={() =>
                          handleOpenAssign(shipment)
                        }
                        className="flex h-10 flex-1 items-center justify-center gap-2 rounded-full bg-[#111827] text-xs font-bold text-white transition hover:bg-slate-800"
                      >
                        <Truck size={15} />
                        Assign Rider
                      </button>
                    )}

                  {/* RIDER REQUEST SENT */}
                  {isAdminAccepted &&
                    isRiderRequested &&
                    !isInTransit && (
                      <div className="flex h-10 flex-1 items-center justify-center gap-2 rounded-full bg-orange-50 text-xs font-bold text-orange-500">
                        <Clock3 size={15} />
                        Rider Request Pending
                      </div>
                    )}

                  {/* IN TRANSIT */}
                  {isInTransit && (
                    <div className="flex h-10 flex-1 items-center justify-center gap-2 rounded-full bg-purple-50 text-xs font-bold text-purple-600">
                      <Truck size={15} />
                      In Transit
                    </div>
                  )}

                  {/* DELIVERED */}
                  {isDelivered && (
                    <div className="flex h-10 flex-1 items-center justify-center gap-2 rounded-full bg-emerald-50 text-xs font-bold text-emerald-600">
                      <CheckCircle2 size={15} />
                      Delivered
                    </div>
                  )}

                  {/* NORMAL PENDING - ADMIN HAS NOT ACCEPTED */}
                  {status === "pending" &&
                    !isAdminAccepted &&
                    !isCancelled && (
                      <div className="flex h-10 flex-1 items-center justify-center gap-2 rounded-full bg-orange-50 text-xs font-bold text-orange-500">
                        <Clock3 size={15} />
                        Waiting for Admin Approval
                      </div>
                    )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ========================================
          ASSIGN RIDER MODAL
      ======================================== */}
      {selectedShipment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-5 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[24px] bg-white p-6 shadow-2xl">
            {/* MODAL HEADER */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-extrabold text-slate-900">
                  Assign Rider
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Send this shipment to an active rider
                  of this hub.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedShipment(null)
                }
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
              >
                <X size={17} />
              </button>
            </div>

            {/* SHIPMENT PREVIEW */}
            <div className="mt-5 rounded-[18px] bg-slate-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                Shipment
              </p>

              <p className="mt-1 text-sm font-bold text-slate-800">
                {selectedShipment.recipientName}
              </p>

              <div className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                <MapPin size={12} />
                {selectedShipment.destination}
              </div>
            </div>

            {/* RIDER COUNT */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Available Riders
              </p>

              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                {riders.length} Active
              </span>
            </div>

            {/* RIDER SELECT */}
            {riders.length > 0 ? (
              <div className="mt-2">
                <select
                  value={selectedRider}
                  onChange={(event) =>
                    setSelectedRider(
                      event.target.value
                    )
                  }
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none transition focus:border-slate-400"
                >
                  <option value="">
                    Choose a rider
                  </option>

                  {riders.map((rider) => (
                    <option
                      key={rider._id}
                      value={rider._id}
                    >
                      {rider.name} — {rider.phone}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="mt-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3">
                <p className="text-xs font-semibold text-orange-600">
                  No active rider is assigned to this
                  hub.
                </p>
              </div>
            )}

            {/* MODAL ACTIONS */}
            <div className="mt-6 flex gap-2">
              <button
                type="button"
                onClick={() =>
                  setSelectedShipment(null)
                }
                className="h-11 flex-1 rounded-full bg-slate-100 text-sm font-bold text-slate-600 transition hover:bg-slate-200"
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={
                  loading ||
                  !selectedRider ||
                  riders.length === 0
                }
                onClick={handleAssignRider}
                className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#111827] text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send size={15} />

                {loading
                  ? "Sending..."
                  : "Send Request"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HubShipments;