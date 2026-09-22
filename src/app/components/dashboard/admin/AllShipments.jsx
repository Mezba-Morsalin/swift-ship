"use client";

import ShipmentActions from "@/app/dashboard/admin/all-shipments/ShipmentStatus";
import {
  Package,
  MapPin,
  Phone,
  CalendarDays,
  MoreHorizontal,
} from "lucide-react";

const AllShipments = ({ shipments = [] }) => {
  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            All Shipments
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Manage and monitor all shipment deliveries
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2">
          <Package className="h-4 w-4 text-slate-500" />
          <span className="text-sm font-medium text-slate-700">
            {shipments.length} Shipments
          </span>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px]">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80">
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Shipment
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Recipient
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Destination
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Hub
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                COD
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Charge
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Status
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Created
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {shipments.length > 0 ? (
              shipments.map((shipment) => (
                <tr
                  key={shipment._id}
                  className="transition-colors hover:bg-slate-50/70"
                >
                  {/* Shipment */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                        <Package className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="font-mono text-sm font-semibold text-slate-800">
                          #{shipment._id.slice(-8).toUpperCase()}
                        </p>

                        <p className="mt-1 max-w-[150px] truncate text-xs text-slate-500">
                          {shipment.category}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Recipient */}
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-slate-800">
                        {shipment.recipientName}
                      </p>

                      <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                        <Phone className="h-3.5 w-3.5" />
                        <span>{shipment.recipientPhone}</span>
                      </div>
                    </div>
                  </td>

                  {/* Destination */}
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />

                      <div className="min-w-0">
                        <p className="font-medium text-slate-700">
                          {shipment.destination}
                        </p>

                        <p
                          title={shipment.address}
                          className="mt-1 max-w-[180px] truncate text-xs text-slate-500"
                        >
                          {shipment.address}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Hub */}
                  <td className="px-6 py-4">
                    <div>
                      <span className="inline-flex rounded-md bg-slate-100 px-2 py-1 font-mono text-xs font-semibold text-slate-700">
                        {shipment.hubCode}
                      </span>

                      <p
                        title={shipment.hubName}
                        className="mt-1 max-w-[170px] truncate text-xs text-slate-500"
                      >
                        {shipment.hubName}
                      </p>
                    </div>
                  </td>

                  {/* COD */}
                  <td className="px-6 py-4">
                    <p className="font-semibold text-slate-800">
                      ৳{Number(shipment.codAmount).toLocaleString()}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {shipment.weight} kg
                    </p>
                  </td>

                  {/* Delivery Charge */}
                  <td className="px-6 py-4">
                    <span className="font-medium text-slate-700">
                      ৳{Number(shipment.deliveryCharge).toLocaleString()}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <StatusBadge status={shipment.status} />
                  </td>

                  {/* Created */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CalendarDays className="h-4 w-4 text-slate-400" />

                      <span>
                        {new Date(shipment.createdAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </span>
                    </div>
                  </td>

                  {/* Action */}
                  <td className="px-6 py-4 text-right">
                    <ShipmentActions shipment={shipment}/>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9} className="px-6 py-16 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                      <Package className="h-7 w-7 text-slate-400" />
                    </div>

                    <h3 className="mt-4 text-sm font-semibold text-slate-800">
                      No shipments found
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      There are no shipments available right now.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ================= FOOTER ================= */}
      {shipments.length > 0 && (
        <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-medium text-slate-700">
              {shipments.length}
            </span>{" "}
            shipment{shipments.length !== 1 ? "s" : ""}
          </p>

          <p className="text-xs text-slate-400">
            Shipment data is updated from API
          </p>
        </div>
      )}
    </div>
  );
};

/* ================= STATUS BADGE ================= */

const StatusBadge = ({ status }) => {
 const statusConfig = {
  pending: {
    label: "Pending",
    className: "bg-amber-50 text-amber-700 ring-amber-600/20",
    dot: "bg-amber-500",
  },

  accepted: {
    label: "Accepted",
    className: "bg-indigo-50 text-indigo-700 ring-indigo-600/20",
    dot: "bg-indigo-500",
  },

  transit: {
    label: "In Transit",
    className: "bg-blue-50 text-blue-700 ring-blue-600/20",
    dot: "bg-blue-500",
  },

  delivered: {
    label: "Delivered",
    className: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    dot: "bg-emerald-500",
  },

  returned: {
    label: "Returned",
    className: "bg-red-50 text-red-700 ring-red-600/20",
    dot: "bg-red-500",
  },

  cancelled: {
    label: "Cancelled",
    className: "bg-slate-50 text-slate-700 ring-slate-600/20",
    dot: "bg-slate-500",
  },
};

  const config = statusConfig[status?.toLowerCase()] || {
    label: status || "Unknown",
    className: "bg-slate-50 text-slate-600 ring-slate-600/20",
    dot: "bg-slate-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold capitalize ring-1 ring-inset ${config.className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
};

export default AllShipments;