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
} from "react-icons/fa6";


export default function HubDetails({hub}) {
  const stats = hub.shipmentStats;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6">
          <Link href={'/dashboard/admin/hubs'} className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900 border border-slate-400 shadow rounded-2xl py-2 px-5">
            <FaArrowLeft />
            Back to Hubs
          </Link>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                  {hub.hubName}
                </h1>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold capitalize text-green-700 ring-1 ring-green-200">
                  {hub.operationalStatus}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                <span className="font-medium text-gray-700">
                  {hub.hubCode}
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />

                <span className="capitalize">
                  {hub.type.replace("_", " ")}
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />

                <span className="flex items-center gap-1.5">
                  <FaLocationDot className="text-amber-500" />
                  {hub.area}, {hub.district}
                </span>
              </div>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800">
              <FaWarehouse />
              Manage Hub
            </button>
          </div>
        </div>

        {/* Top Overview Cards */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

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

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Max Storage
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {hub.maxStorage.toLocaleString()}
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

          {/* Left */}
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

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Hub Name
                  </p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {hub.hubName}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Hub Code
                  </p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {hub.hubCode}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Division
                  </p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {hub.division}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    District
                  </p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {hub.district}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Area
                  </p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {hub.area}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Maximum Storage
                  </p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {hub.maxStorage.toLocaleString()} parcels
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Address
                  </p>

                  <p className="mt-1 flex items-center gap-2 font-semibold text-gray-900">
                    <FaLocationDot className="text-amber-500" />
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
                  ["Out for Delivery", stats.outForDelivery, "text-orange-600"],
                  ["Delivered", stats.delivered, "text-green-600"],
                  ["Total", stats.total, "text-gray-900"],
                ].map(([label, value, color]) => (
                  <div key={label} className="bg-white p-5">
                    <p className="text-sm text-gray-500">{label}</p>
                    <p className={`mt-2 text-2xl font-bold ${color}`}>
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
                  Districts currently served by this hub.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 p-6">
                {hub.coverageZones.map((zone) => (
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

          {/* Right */}
          <div className="space-y-6">

            {/* Manager */}
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
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-50">
                    <FaUserTie className="text-2xl text-amber-600" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      {hub.manager.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {hub.manager.designation}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`tel:${hub.manager.phone}`}
                    className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 text-sm text-gray-700 transition hover:bg-gray-100"
                  >
                    <FaPhone className="text-amber-500" />
                    {hub.manager.phone}
                  </a>

                  <a
                    href={`mailto:${hub.manager.email}`}
                    className="block truncate rounded-lg bg-gray-50 p-3 text-sm text-gray-700 transition hover:bg-gray-100"
                  >
                    {hub.manager.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Riders */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-100 px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">
                      Assigned Riders
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      Riders currently assigned to this hub.
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                    <FaPeopleGroup className="text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                {hub.assignedRiders.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 px-5 py-8 text-center">
                    <FaPeopleGroup className="mx-auto text-2xl text-gray-300" />

                    <p className="mt-3 text-sm font-semibold text-gray-700">
                      No riders assigned
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-400">
                      Assign riders to this hub to start managing local
                      deliveries.
                    </p>

                    <button className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-gray-800">
                      Assign Rider
                    </button>
                  </div>
                ) : (
                  <div>
                    {/* Rider list */}
                  </div>
                )}
              </div>
            </div>

            {/* Status */}
            <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <FaCheck className="text-green-600" />
                </div>

                <div>
                  <p className="font-semibold text-green-900">
                    Hub is operational
                  </p>

                  <p className="mt-1 text-sm leading-5 text-green-700">
                    This hub is currently active and available for shipment
                    processing and rider operations.
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