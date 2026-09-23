"use client";

import Link from "next/link";

import {
  FaArrowLeft,
  FaBox,
  FaCheck,
  FaLocationDot,
  FaPeopleGroup,
  FaPhone,
  FaWarehouse,
  FaUserTie,
  FaCircleExclamation,
} from "react-icons/fa6";

export default function HubDetails({ hub }) {
  const stats = hub.shipmentStats || {
    total: 0,
    pending: 0,
    atHub: 0,
    readyRider: 0,
    outForDelivery: 0,
    delivered: 0,
  };

  const isActive = hub.operationalStatus === "active";

  const formattedType = (hub.type || "")
    .replaceAll("_", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const coverageZones = hub.coverageZones || [];
  const assignedRiders = hub.assignedRiders || [];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/dashboard/admin/hubs"
            className="mb-5 inline-flex items-center gap-2 rounded-2xl border border-slate-400 px-5 py-2 text-sm font-medium text-gray-500 shadow transition hover:border-gray-900 hover:text-gray-900"
          >
            <FaArrowLeft />
            Back to Hubs
          </Link>

          <div>
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                {hub.hubName}
              </h1>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ring-1 ${
                  isActive
                    ? "bg-green-50 text-green-700 ring-green-200"
                    : "bg-red-50 text-red-700 ring-red-200"
                }`}
              >
                {hub.operationalStatus}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
              <span className="font-medium text-gray-700">
                {hub.hubCode}
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />

              <span>{formattedType}</span>

              <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />

              <span className="flex items-center gap-1.5">
                <FaLocationDot className="text-amber-500" />
                {hub.area}, {hub.district}
              </span>
            </div>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total Shipments */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Shipments
                </p>

                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {stats.total}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <FaBox className="text-xl text-blue-600" />
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              Shipments assigned to this hub
            </p>
          </div>

          {/* Pending */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Pending
                </p>

                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {stats.pending}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                <FaBox className="text-xl text-amber-500" />
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              Waiting for processing
            </p>
          </div>

          {/* Delivered */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Delivered
                </p>

                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {stats.delivered}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                <FaCheck className="text-xl text-green-600" />
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              Successfully delivered
            </p>
          </div>

          {/* Max Storage */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Max Storage
                </p>

                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {(hub.maxStorage || 0).toLocaleString()}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50">
                <FaWarehouse className="text-xl text-purple-600" />
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              Maximum parcel capacity
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-6 lg:col-span-2">
            {/* Hub Information */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-100 px-6 py-5">
                <h2 className="text-lg font-bold text-gray-900">
                  Hub Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  General information about this distribution hub.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2">
                {/* Hub Name */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Hub Name
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {hub.hubName}
                  </p>
                </div>

                {/* Hub Code */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Hub Code
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {hub.hubCode}
                  </p>
                </div>

                {/* Hub Type */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Hub Type
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {formattedType}
                  </p>
                </div>

                {/* Division */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Division
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {hub.division}
                  </p>
                </div>

                {/* District */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    District
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {hub.district}
                  </p>
                </div>

                {/* Area */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Area
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {hub.area}
                  </p>
                </div>

                {/* Maximum Storage */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Maximum Storage
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {(hub.maxStorage || 0).toLocaleString()} parcels
                  </p>
                </div>

                {/* Operational Status */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Operational Status
                  </p>

                  <p
                    className={`mt-1 font-semibold capitalize ${
                      isActive ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {hub.operationalStatus}
                  </p>
                </div>

                {/* Address */}
                <div className="sm:col-span-2">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Address
                  </p>

                  <p className="mt-1 flex items-center gap-2 font-semibold text-gray-900">
                    <FaLocationDot className="shrink-0 text-amber-500" />
                    {hub.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Shipment Overview */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-100 px-6 py-5">
                <h2 className="text-lg font-bold text-gray-900">
                  Shipment Overview
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Current shipment distribution across the hub.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-b-2xl bg-gray-100 sm:grid-cols-3">
                {[
                  ["Pending", stats.pending, "text-amber-600"],
                  ["At Hub", stats.atHub, "text-blue-600"],
                  ["Ready Rider", stats.readyRider, "text-purple-600"],
                  [
                    "Out for Delivery",
                    stats.outForDelivery,
                    "text-orange-600",
                  ],
                  ["Delivered", stats.delivered, "text-green-600"],
                  ["Total", stats.total, "text-gray-900"],
                ].map(([label, value, color]) => (
                  <div key={label} className="bg-white p-5">
                    <p className="text-sm text-gray-500">{label}</p>

                    <p
                      className={`mt-2 text-2xl font-bold ${color}`}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage Zones */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-100 px-6 py-5">
                <h2 className="text-lg font-bold text-gray-900">
                  Coverage Zones
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Areas currently served by this hub.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 p-6">
                {coverageZones.map((zone) => (
                  <div
                    key={zone}
                    className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"
                  >
                    <FaLocationDot className="text-amber-500" />

                    <span className="text-sm font-semibold text-gray-700">
                      {zone}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Hub Manager */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-100 px-6 py-5">
                <h2 className="text-lg font-bold text-gray-900">
                  Hub Manager
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Person responsible for this hub.
                </p>
              </div>

              <div className="p-6">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-50">
                    <FaUserTie className="text-2xl text-amber-600" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-900">
                      {hub.manager?.name || "N/A"}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {hub.manager?.designation || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {hub.manager?.phone && (
                    <a
                      href={`tel:${hub.manager.phone}`}
                      className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 text-sm text-gray-700 transition hover:bg-gray-100"
                    >
                      <FaPhone className="shrink-0 text-amber-500" />

                      <span>{hub.manager.phone}</span>
                    </a>
                  )}

                  {hub.manager?.email && (
                    <a
                      href={`mailto:${hub.manager.email}`}
                      className="block truncate rounded-lg bg-gray-50 p-3 text-sm text-gray-700 transition hover:bg-gray-100"
                    >
                      {hub.manager.email}
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Assigned Riders */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-100 px-6 py-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">
                      Assigned Riders
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      Riders currently assigned to this hub.
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <FaPeopleGroup className="text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                {assignedRiders.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 px-5 py-8 text-center">
                    <FaPeopleGroup className="mx-auto text-2xl text-gray-300" />

                    <p className="mt-3 text-sm font-semibold text-gray-700">
                      No riders assigned
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-400">
                      There are currently no riders assigned to this hub.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {assignedRiders.map((rider) => (
                      <div
                        key={rider.riderId}
                        className="rounded-xl border border-gray-200 bg-gray-50 p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                            <FaUserTie className="text-blue-600" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-gray-900">
                              {rider.name}
                            </p>

                            <p className="mt-1 truncate text-xs text-gray-500">
                              {rider.email}
                            </p>

                            {rider.phone && (
                              <a
                                href={`tel:${rider.phone}`}
                                className="mt-2 flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900"
                              >
                                <FaPhone className="text-[10px] text-amber-500" />
                                {rider.phone}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Operational Status */}
            <div
              className={`rounded-2xl border p-5 ${
                isActive
                  ? "border-green-200 bg-green-50"
                  : "border-red-200 bg-red-50"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    isActive ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  {isActive ? (
                    <FaCheck className="text-green-600" />
                  ) : (
                    <FaCircleExclamation className="text-red-600" />
                  )}
                </div>

                <div>
                  <p
                    className={`font-semibold ${
                      isActive ? "text-green-900" : "text-red-900"
                    }`}
                  >
                    {isActive
                      ? "Hub is operational"
                      : "Hub is not operational"}
                  </p>

                  <p
                    className={`mt-1 text-sm leading-5 ${
                      isActive ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {isActive
                      ? "This hub is currently active and available for shipment processing and rider operations."
                      : "This hub is currently inactive and unavailable for shipment processing and rider operations."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}