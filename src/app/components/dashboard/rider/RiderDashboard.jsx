
"use client";

import RiderShipmentActions from "@/app/dashboard/rider/RiderShipmentActions";
import Image from "next/image";
import { useState } from "react";

import {
  FaPhone,
  FaLocationDot,
  FaClockRotateLeft,
  FaBoxesPacking,
  FaWallet,
  FaPowerOff,
  FaMoneyBillWave,
  FaCheck,
  FaTruckFast,
} from "react-icons/fa6";

export default function RiderDashboard({
  user,
  rider,
  shipments = [],
}) {
  // ==================================================
  // SHIPMENT STATE
  // ==================================================

  const [shipmentList, setShipmentList] = useState(
    Array.isArray(shipments) ? shipments : []
  );

  // Always use state for rendering
  const safeShipments = shipmentList;

  // ==================================================
  // STATS
  // ==================================================

  const totalAssigned = safeShipments.length;

  const completedToday = safeShipments.filter(
    (shipment) =>
      shipment?.status?.toLowerCase() === "delivered"
  ).length;

  const pendingDeliveries = safeShipments.filter(
    (shipment) =>
      shipment?.status?.toLowerCase() !== "delivered"
  ).length;

  const codCashInHand = safeShipments
    .filter(
      (shipment) =>
        shipment?.status?.toLowerCase() !== "delivered"
    )
    .reduce(
      (total, shipment) =>
        total + Number(shipment?.codAmount || 0),
      0
    );

  // Temporary earning calculation
  const riderEarnings = completedToday * 100;

  // ==================================================
  // RIDER IMAGE
  // ==================================================

  const riderImage = Array.isArray(rider?.image)
    ? rider.image[0]
    : rider?.image || "/images/default-avatar.png";

  // ==================================================
  // RENDER
  // ==================================================

  return (
    <div className="space-y-6 font-sans text-slate-100">
      {/* ==================================================
          1. TOP RIDER PROFILE BANNER
      ================================================== */}

      <div className="flex flex-col justify-between gap-4 rounded-2xl border bg-slate-100 p-4 shadow sm:p-6 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          {/* Rider Image */}
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 border-slate-200">
            <Image
              src={riderImage}
              alt={rider?.name || "Rider"}
              width={64}
              height={64}
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.src =
                  "/images/default-avatar.png";
              }}
            />

            <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-[#131927] bg-emerald-500" />
          </div>

          {/* Rider Info */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full border px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                  rider?.status === "pending"
                    ? "border-amber-500/20 bg-amber-500/10 text-amber-400"
                    : rider?.status === "active"
                    ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                    : rider?.status === "suspended"
                    ? "border-rose-500/20 bg-rose-500/10 text-rose-400"
                    : "border-slate-500/20 bg-slate-500/10 text-slate-400"
                }`}
              >
                Status : {rider?.status || "unknown"}
              </span>

              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                RIDER ID:{" "}
                {rider?._id
                  ? `RD-${rider._id
                      .slice(-4)
                      .toUpperCase()}`
                  : "N/A"}
              </span>
            </div>

            <h1 className="mt-1 text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
              {rider?.name || user?.name || "Rider"}
            </h1>

            <p className="mt-0.5 flex items-center gap-1.5 text-xs font-medium text-slate-400">
              <FaLocationDot className="shrink-0 text-xs text-[#fcb915]" />

              <span>
                Assigned Hub:{" "}
                {rider?.hubCode || rider?.area || "N/A"}
              </span>
            </p>
          </div>
        </div>

        {/* Status Button */}
        <button
          disabled={rider?.status !== "active"}
          className={`flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider shadow-lg transition-colors ${
            rider?.status === "active"
              ? "cursor-pointer bg-emerald-500 text-slate-950 shadow-emerald-500/20 hover:bg-emerald-400"
              : rider?.status === "pending"
              ? "cursor-not-allowed border border-amber-500/20 bg-amber-500/10 text-amber-400 shadow-none"
              : rider?.status === "suspended"
              ? "cursor-not-allowed border border-rose-500/20 bg-rose-500/10 text-rose-400 shadow-none"
              : "cursor-not-allowed border border-slate-500/20 bg-slate-500/10 text-slate-400 shadow-none"
          }`}
        >
          <FaPowerOff className="text-sm" />

          <span>
            {rider?.status === "active"
              ? "ON DUTY (ONLINE)"
              : rider?.status === "pending"
              ? "PENDING APPROVAL"
              : rider?.status === "suspended"
              ? "ACCOUNT SUSPENDED"
              : "UNAVAILABLE"}
          </span>
        </button>
      </div>

      {/* ==================================================
          2. STATS GRID
      ================================================== */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* TODAY'S ASSIGNED */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#fcb915]/10 transition-transform duration-300 group-hover:scale-125" />

          <div className="relative flex h-full flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                  TODAY&apos;S ASSIGNED
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fcb915]/10 text-[#d99b00]">
                  <FaBoxesPacking className="text-sm" />
                </div>
              </div>

              <div className="flex items-end gap-2">
                <h3 className="text-3xl font-black tracking-tight text-slate-900">
                  {totalAssigned}
                </h3>

                <span className="mb-1 text-xs font-bold text-slate-400">
                  Consignments
                </span>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
              <span className="h-2 w-2 rounded-full bg-[#fcb915]" />

              <span className="text-xs font-bold text-slate-500">
                {pendingDeliveries} Pending Doorsteps
              </span>
            </div>
          </div>
        </div>

        {/* COMPLETED TODAY */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-emerald-500/10 transition-transform duration-300 group-hover:scale-125" />

          <div className="relative flex h-full flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-600">
                  COMPLETED TODAY
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <FaCheck className="text-sm" />
                </div>
              </div>

              <div className="flex items-end gap-2">
                <h3 className="text-3xl font-black tracking-tight text-emerald-500">
                  {completedToday}
                </h3>

                <span className="mb-1 text-xs font-bold text-slate-400">
                  Deliveries
                </span>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <span className="text-xs font-bold text-slate-500">
                {completedToday > 0
                  ? "Delivery completed"
                  : "No completed delivery"}
              </span>
            </div>
          </div>
        </div>

        {/* COD CASH IN HAND */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#fcb915]/10 transition-transform duration-300 group-hover:scale-125" />

          <div className="relative flex h-full flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#c58b00]">
                  COD CASH IN HAND
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fcb915]/10 text-[#d99b00]">
                  <FaWallet className="text-sm" />
                </div>
              </div>

              <div className="flex items-end gap-2">
                <h3 className="text-3xl font-black tracking-tight text-slate-900">
                  ৳ {codCashInHand.toLocaleString()}
                </h3>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
              <span className="h-2 w-2 rounded-full bg-slate-300" />

              <span className="text-xs font-bold text-slate-500">
                Pending Hub Deposit
              </span>
            </div>
          </div>
        </div>

        {/* RIDER EARNINGS */}
        <div className="group relative overflow-hidden rounded-2xl bg-[#fcb915] p-5 text-slate-950 shadow-lg shadow-amber-200/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/20 transition-transform duration-300 group-hover:scale-125" />

          <div className="relative flex h-full flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-900/70">
                  RIDER EARNINGS
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950/10">
                  <FaMoneyBillWave className="text-sm" />
                </div>
              </div>

              <div className="flex items-end gap-2">
                <h3 className="text-3xl font-black tracking-tight">
                  ৳ {riderEarnings.toLocaleString()}
                </h3>

                <span className="mb-1 text-xs font-black text-slate-900/60">
                  TODAY
                </span>
              </div>
            </div>

            <div className="mt-5 border-t border-slate-900/10 pt-4">
              <span className="text-[11px] font-bold text-slate-900/70">
                Based on completed deliveries
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          3. ACTIVE DELIVERY TASKS HEADER
      ================================================== */}

      <div>
        <h2 className="text-lg font-black uppercase tracking-tight text-slate-900">
          ACTIVE DELIVERY TASKS
        </h2>

        <p className="mt-0.5 text-xs text-slate-400">
          Review your assigned shipment requests and delivery
          information.
        </p>
      </div>

      {/* ==================================================
          4. NO SHIPMENTS
      ================================================== */}

      {safeShipments.length === 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
            <FaTruckFast className="text-2xl" />
          </div>

          <h3 className="mt-5 text-lg font-black text-slate-900">
            No Delivery Requests
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
            You currently have no shipment requests assigned to
            you. New delivery requests will appear here when the
            hub assigns a shipment.
          </p>
        </div>
      )}

      {/* ==================================================
          5. DYNAMIC DELIVERY TASKS
      ================================================== */}

      {safeShipments.map((shipment) => {
        const status =
          shipment?.status?.toLowerCase() || "pending";

        const assignmentStatus =
          shipment?.assignmentStatus?.toLowerCase() || "";

        const actionType =
          shipment?.action?.type?.toLowerCase() || "";

        const isRequested =
          assignmentStatus === "requested";

        const isAccepted =
          assignmentStatus === "accepted";

        const isDelivered =
          status === "delivered";

        // ==================================================
        // GOOGLE MAPS URL
        // ==================================================

        const locationQuery =
          shipment?.address ||
          shipment?.destination ||
          "";

        const googleMapsUrl = locationQuery
          ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              locationQuery
            )}`
          : null;

        return (
          <div
            key={shipment?._id}
            className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
          >
            {/* ==================================================
                TASK HEADER
            ================================================== */}

            <div className="flex flex-col gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-sm font-black tracking-wider text-[#111827]">
                  SWIFT-
                  {shipment?._id
                    ?.slice(-5)
                    .toUpperCase() || "N/A"}
                </span>

                <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold text-slate-500">
                  {shipment?.hubCode || "NO HUB"}
                </span>

                <span className="text-xs text-slate-500">
                  Destination:{" "}
                  <strong className="font-bold text-slate-800">
                    {shipment?.destination || "N/A"}
                  </strong>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs text-slate-400">
                  Assigned:{" "}
                  <strong className="font-bold text-slate-700">
                    {shipment?.assignedAt
                      ? new Date(
                          shipment.assignedAt
                        ).toLocaleDateString()
                      : "N/A"}
                  </strong>
                </span>

                <span
                  className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-wider ${
                    isDelivered
                      ? "border-emerald-200 bg-emerald-50 text-emerald-600"
                      : isAccepted
                      ? "border-blue-200 bg-blue-50 text-blue-600"
                      : isRequested
                      ? "border-amber-200 bg-amber-50 text-amber-600"
                      : "border-slate-200 bg-slate-50 text-slate-500"
                  }`}
                >
                  {isDelivered
                    ? "DELIVERED"
                    : isAccepted
                    ? "ASSIGNED"
                    : isRequested
                    ? "REQUESTED"
                    : actionType || status}
                </span>
              </div>
            </div>

            {/* ==================================================
                TASK INFORMATION
            ================================================== */}

            <div className="grid grid-cols-1 gap-5 text-xs md:grid-cols-3">
              {/* Recipient */}
              <div className="space-y-2 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  RECIPIENT INFORMATION
                </span>

                <div>
                  <p className="text-sm font-black text-slate-900">
                    {shipment?.recipientName || "N/A"}
                  </p>

                  {shipment?.recipientPhone && (
                    <p className="mt-1 font-mono text-xs text-slate-500">
                      {shipment.recipientPhone}
                    </p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  DOORSTEP ADDRESS
                </span>

                <p className="font-medium leading-relaxed text-slate-700">
                  {shipment?.address ||
                    "Address not available"}
                </p>

                {shipment?.instructions && (
                  <div className="rounded-lg border border-amber-100 bg-amber-50/70 px-3 py-2">
                    <p className="text-[11px] font-medium italic leading-relaxed text-amber-700">
                      Note: {shipment.instructions}
                    </p>
                  </div>
                )}
              </div>

              {/* COD */}
              <div className="space-y-2 rounded-xl border border-amber-100 bg-amber-50/50 p-4 md:text-right">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  COD CASH TO COLLECT
                </span>

                <p className="text-2xl font-black text-[#111827]">
                  ৳{" "}
                  {Number(
                    shipment?.codAmount || 0
                  ).toLocaleString()}
                </p>

                <div className="flex items-center gap-2 md:justify-end">
                  <span className="h-1 w-1 rounded-full bg-slate-300" />

                  <p className="text-[10px] font-semibold text-slate-400">
                    Weight: {shipment?.weight || 0} kg
                  </p>
                </div>

                <p className="text-[10px] font-semibold text-slate-400">
                  Delivery Charge: ৳{" "}
                  {Number(
                    shipment?.deliveryCharge || 0
                  ).toLocaleString()}
                </p>
              </div>
            </div>

            {/* ==================================================
                EXTRA SHIPMENT INFORMATION
            ================================================== */}

            <div className="grid grid-cols-1 gap-3 border-t border-slate-100 pt-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Category */}
              <div className="rounded-xl bg-slate-50 px-4 py-3">
                <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400">
                  CATEGORY
                </span>

                <span className="mt-1 block text-xs font-bold text-slate-700">
                  {shipment?.category || "N/A"}
                </span>
              </div>

              {/* Hub */}
              <div className="rounded-xl bg-slate-50 px-4 py-3">
                <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400">
                  HUB
                </span>

                <span className="mt-1 block text-xs font-bold text-slate-700">
                  {shipment?.hubName ||
                    shipment?.hubCode ||
                    "N/A"}
                </span>
              </div>

              {/* Shipment Status */}
              <div className="rounded-xl bg-slate-50 px-4 py-3">
                <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400">
                  SHIPMENT STATUS
                </span>

                <span className="mt-1 block text-xs font-bold capitalize text-slate-700">
                  {shipment?.status || "Pending"}
                </span>
              </div>

              {/* Assignment */}
              <div className="rounded-xl bg-slate-50 px-4 py-3">
                <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400">
                  ASSIGNMENT
                </span>

                <span className="mt-1 block text-xs font-bold capitalize text-slate-700">
                  {shipment?.assignmentStatus || "N/A"}
                </span>
              </div>
            </div>

            {/* ==================================================
                ACTION FOOTER
            ================================================== */}

            <div className="flex flex-col gap-3 border-t border-slate-100 pt-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Left Actions */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Call Buyer */}
                {shipment?.recipientPhone && (
                  <a
                    href={`tel:${shipment.recipientPhone}`}
                    className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-emerald-600 ring-1 ring-emerald-100 transition-all duration-200 hover:bg-emerald-100 hover:ring-emerald-200"
                  >
                    <FaPhone className="text-xs" />
                    <span>CALL BUYER</span>
                  </a>
                )}

                {/* GPS Route */}
                {googleMapsUrl ? (
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-blue-600 ring-1 ring-blue-100 transition-all duration-200 hover:bg-blue-100 hover:ring-blue-200"
                  >
                    <FaLocationDot className="text-xs" />
                    <span>GPS ROUTE</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="flex cursor-not-allowed items-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-slate-400 ring-1 ring-slate-200"
                  >
                    <FaLocationDot className="text-xs" />
                    <span>GPS UNAVAILABLE</span>
                  </button>
                )}

                {/* Timeline */}
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-slate-600 ring-1 ring-slate-200 transition-all duration-200 hover:bg-slate-200"
                >
                  <FaClockRotateLeft className="text-xs" />
                  <span>TIMELINE</span>
                </button>
              </div>

              {/* Right Actions */}
              <div className="flex flex-wrap items-center gap-2">
                <RiderShipmentActions
                  shipment={shipment}
                  onUpdated={(updatedShipment) => {
                    if (!updatedShipment?._id) {
                      return;
                    }

                    setShipmentList(
                      (currentShipments) =>
                        currentShipments.map((item) =>
                          item._id ===
                          updatedShipment._id
                            ? updatedShipment
                            : item
                        )
                    );
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
