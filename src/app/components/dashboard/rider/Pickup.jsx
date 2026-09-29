"use client";

import RiderShipmentActions from "@/app/dashboard/rider/RiderShipmentActions";
import Image from "next/image";
import { useState } from "react";
import { FaBarcode, FaCheck, FaClockRotateLeft, FaLocationDot, FaPhone, FaPowerOff, FaTruckFast } from "react-icons/fa6";



export default function Pickups({user,rider,shipments = [],}) {
  
    const [shipmentList, setShipmentList] = useState(
      Array.isArray(shipments) ? shipments : []
    );
  
    // Always use state for rendering
    const safeShipments = shipmentList;
  return (
    <div className="space-y-6">
        <div className="bg-slate-100 border shadow rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2  shrink-0">
                    <Image
          src={rider?.image || "/images/default-avatar.png"}
          alt={rider?.name}
          width={40}
          height={40}
        />
                    <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#131927] rounded-full" />
                  </div>
        
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                       <span
            className={`px-2.5 py-0.5 rounded-full border text-[10px] font-black tracking-wider uppercase ${
              rider?.status === "pending"
                ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                : rider?.status === "active"
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                : rider?.status === "suspended"
                ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                : "bg-slate-500/10 text-slate-400 border-slate-500/20"
            }`}
          >
            Status : {rider?.status || "unknown"}
          </span>
                      <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
          RIDER ID: {rider?._id ? `RD-${rider?._id.slice(-4).toUpperCase()}` : "N/A"}
        </span>
                    </div>
                    <h1 className="text-xl sm:text-2xl text-slate-900 font-black tracking-tight mt-1">
                      {rider?.name}
                    </h1>
                    <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5 mt-0.5">
                      <FaLocationDot className="text-[#fcb915] text-xs shrink-0" />
                      <span>Assigned Hub : {rider?.area}</span>
                    </p>
                  </div>
                </div>
        
                {/* Status Toggle Button */}
                <button
          disabled={rider?.status !== "active"}
          className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg shrink-0 ${
            rider?.status === "active"
              ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-emerald-500/20"
              : rider?.status === "pending"
              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20 cursor-not-allowed shadow-none"
              : rider?.status === "suspended"
              ? "bg-rose-500/10 text-rose-400 border border-rose-500/20 cursor-not-allowed shadow-none"
              : "bg-slate-500/10 text-slate-400 border border-slate-500/20 cursor-not-allowed shadow-none"
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
        <div className="space-y-6 font-sans">

      {/* ==================================================
          PAGE HEADING
      ================================================== */}
      <div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-black uppercase tracking-wider text-slate-900">
            MERCHANT DISPATCH PICKUPS
          </h1>

          <p className="text-xs font-medium text-slate-400">
            Manage your scheduled merchant pickups and parcel collection.
          </p>
        </div>
      </div>


      {/* ==================================================
          PICKUPS GRID
      ================================================== */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

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
    </div>
    </div>
  );
}