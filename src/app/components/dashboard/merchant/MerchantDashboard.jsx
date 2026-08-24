"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaPlus,
  FaWallet,
  FaCopy,
  FaClockRotateLeft,
  FaPrint,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const recentDeliveries = [
  {
    waybill: "SWIFT-89421",
    recipient: "Tanvir Hossain",
    phone: "+880 1712-984321",
    destination: "Dhaka Metropolitan",
    cod: "৳ 2,450",
    status: "OUT FOR DELIVERY",
    statusStyle:
      "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    waybill: "SWIFT-99102",
    recipient: "Nusrat Jahan",
    phone: "+880 1819-223344",
    destination: "Chattogram",
    cod: "৳ 8,900",
    status: "IN TRANSIT",
    statusStyle:
      "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    waybill: "SWIFT-77341",
    recipient: "Sabbir Ahmed",
    phone: "+880 1911-556677",
    destination: "Sylhet",
    cod: "৳ 1,850",
    status: "DELIVERED",
    statusStyle:
      "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    waybill: "SWIFT-66290",
    recipient: "Farhana Yeasmin",
    phone: "+880 1610-112233",
    destination: "Gazipur",
    cod: "৳ 3,200",
    status: "DELIVERED",
    statusStyle:
      "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    waybill: "SWIFT-55412",
    recipient: "Mahir Chowdhury",
    phone: "+880 1515-443322",
    destination: "Rajshahi",
    cod: "৳ 1,500",
    status: "RETURNED",
    statusStyle:
      "bg-rose-50 text-rose-700 border-rose-200",
  },
];

export default function MerchantDashboard({merchant}) {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6 font-sans text-[#111827]">

      {/* ==================================================
          1. TOP MERCHANT BANNER
      ================================================== */}
      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 md:flex-row md:items-center">

        <div className="flex items-center gap-4">

          {/* Merchant Avatar */}
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 border-[#fcb915]">
            <Image src= {merchant.image} alt="Merchant Avatar" fill className="object-cover"
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">

              <span
  className={`rounded-full border px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${
    merchant.status === "active"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : merchant.status === "pending"
      ? "border-amber-200 bg-amber-50 text-amber-700"
      : merchant.status === "rejected"
      ? "border-rose-200 bg-rose-50 text-rose-700"
      : "border-slate-200 bg-slate-50 text-slate-500"
  }`}
>
  {merchant.status === "active"
    ? "VERIFIED MERCHANT"
    : merchant.status === "pending"
    ? "PENDING VERIFICATION"
    : merchant.status === "rejected"
    ? "APPLICATION REJECTED"
    : "UNKNOWN STATUS"}
</span>

              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
  ID: MCH-{merchant.id.slice(-5).toUpperCase()}
</span>
            </div>

            <h1 className="mt-1 text-xl font-black tracking-tight text-[#111827] sm:text-2xl">
              {merchant.businessName}
            </h1>

            <p className="mt-0.5 flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <span>
                Primary Hub: {merchant.location} •
                {merchant.email}
              </span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex shrink-0 items-center gap-3">
  {merchant?.status === "pending" ? (
    <div className="flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-5 py-2.5">
      <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />

      <span className="text-xs font-black uppercase tracking-wider text-amber-700">
        ACCOUNT PENDING
      </span>
    </div>
  ) : (
    <>
      <Link
        href="/dashboard/merchant/create-shipment"
        className="flex items-center gap-2 rounded-full bg-[#fcb915] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-[#111827] shadow-sm transition-colors hover:bg-yellow-400"
      >
        <FaPlus className="text-sm" />
        <span>NEW PARCEL</span>
      </Link>

      <Link
        href="/dashboard/merchant/cod-wallet"
        className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-[#24344d] transition-colors hover:bg-slate-100"
      >
        <FaWallet className="text-sm text-[#f59e0b]" />
        <span>COD WALLET</span>
      </Link>
    </>
  )}
</div>
      </div>

      {
        merchant.status === "pending" ? <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">

        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-[#f59e0b] ring-1 ring-amber-200">
          <FaClockRotateLeft className="text-2xl" />
        </div>

        {/* Badge */}
        <div className="mt-6 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-amber-700">
          PENDING VERIFICATION
        </div>

        {/* Heading */}
        <h1 className="mt-4 text-2xl font-black tracking-tight text-[#111827] sm:text-3xl">
          Your Merchant Account Is Under Review
        </h1>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
          Thank you for registering with SwiftShip. Your merchant
          account has been submitted successfully and is currently
          waiting for admin verification.
        </p>

        {/* Info */}
        <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#fbbf24]" />

            <div>
              <p className="text-xs font-black uppercase tracking-wide text-[#24344d]">
                What happens next?
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Our team will review your business information.
                Once approved, your merchant dashboard and
                delivery features will become available.
              </p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-slate-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
          Awaiting admin approval
        </div>

      </div>
    </div> : <div>
        {/* ==================================================
          2. STATS OVERVIEW CARDS
      ================================================== */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">

        {/* Total Orders */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            TOTAL ORDERS
          </span>

          <h3 className="mt-1 text-2xl font-black text-[#111827] sm:text-3xl">
            8
          </h3>

          <span className="mt-3 text-[10px] font-bold text-emerald-600">
            ↗ Live Synced
          </span>
        </div>

        {/* Pending Pickup */}
        <div className="flex flex-col justify-between rounded-2xl border border-[#fcb915]/40 bg-white p-4 shadow-sm">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#c58a00]">
            PENDING PICKUP
          </span>

          <h3 className="mt-1 text-2xl font-black text-[#d99b00] sm:text-3xl">
            1
          </h3>

          <span className="mt-3 text-[10px] font-bold text-slate-400">
            Pickup scheduled
          </span>
        </div>

        {/* In Transit */}
        <div className="flex flex-col justify-between rounded-2xl border border-blue-200 bg-white p-4 shadow-sm">
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
            IN TRANSIT / DELIVERY
          </span>

          <h3 className="mt-1 text-2xl font-black text-blue-600 sm:text-3xl">
            4
          </h3>

          <span className="mt-3 text-[10px] font-bold text-slate-400">
            Active on GPS
          </span>
        </div>

        {/* Delivered */}
        <div className="flex flex-col justify-between rounded-2xl border border-emerald-200 bg-white p-4 shadow-sm">
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">
            DELIVERED
          </span>

          <h3 className="mt-1 text-2xl font-black text-emerald-600 sm:text-3xl">
            2
          </h3>

          <span className="mt-3 text-[10px] font-bold text-emerald-600">
            99.4% On-Time
          </span>
        </div>

        {/* Returned */}
        <div className="flex flex-col justify-between rounded-2xl border border-rose-200 bg-white p-4 shadow-sm">
          <span className="text-[10px] font-black uppercase tracking-widest text-rose-600">
            RETURNED
          </span>

          <h3 className="mt-1 text-2xl font-black text-rose-600 sm:text-3xl">
            1
          </h3>

          <span className="mt-3 text-[10px] font-bold text-rose-600">
            ৳0 return fee
          </span>
        </div>

        {/* Unsettled COD */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#fffdf5] p-4 shadow-sm">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
            UNSETTLED COD
          </span>

          <h3 className="mt-1 text-xl font-black text-[#d99b00] sm:text-2xl">
            ৳ 84,500
          </h3>

          <span className="mt-3 text-[10px] font-bold text-emerald-600">
            Auto-disburse @ 6 PM
          </span>
        </div>
      </div>

      {/* ==================================================
          3. DISBURSEMENT BANNER
      ================================================== */}
      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-[#fcb915]/40 bg-white p-4 shadow-sm sm:flex-row sm:items-center">

        <div className="flex items-center gap-3.5">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fcb915] text-lg text-[#111827]">
            <FaWallet />
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-[#b77900]">
              SCHEDULED DAILY 6:00 PM COD DISBURSEMENT
            </h4>

            <p className="mt-0.5 text-xs text-slate-500">
              Your collected balance of{" "}
              <strong className="text-[#111827]">
                ৳ 84,500
              </strong>{" "}
              will be deposited to City Bank A/C ****4892
              with 0% commission fees today at 6:00 PM.
            </p>
          </div>
        </div>

        <Link
          href="/dashboard/merchant/cod-wallet"
          className="shrink-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-center text-xs font-black uppercase tracking-wider text-[#24344d] transition-colors hover:bg-slate-100"
        >
          VIEW LEDGER DETAILS
        </Link>
      </div>

      {/* ==================================================
          4. RECENT DELIVERIES & LIVE STATUS TABLE
      ================================================== */}
      <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-base font-black uppercase tracking-tight text-[#111827]">
              RECENT DELIVERIES & LIVE STATUS
            </h2>

            <p className="mt-0.5 text-xs text-slate-400">
              Real-time status updates across all active dispatches.
            </p>
          </div>

          <Link
            href="/dashboard/merchant/shipments"
            className="flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#d99b00] hover:underline"
          >
            <span>VIEW ALL (8)</span>
            <FaArrowUpRightFromSquare className="text-[10px]" />
          </Link>
        </div>

        {/* Table Container */}
        <div className="scrollbar-none overflow-x-auto">

          <table className="w-full text-left text-xs">

            <thead>
              <tr className="border-b border-slate-200 text-[10px] font-black uppercase tracking-wider text-slate-400">

                <th className="px-3 py-3">
                  WAYBILL ID
                </th>

                <th className="px-3 py-3">
                  RECIPIENT
                </th>

                <th className="px-3 py-3">
                  DESTINATION
                </th>

                <th className="px-3 py-3">
                  COD
                </th>

                <th className="px-3 py-3">
                  STATUS
                </th>

                <th className="px-3 py-3 text-right">
                  ACTIONS
                </th>

              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 font-medium">

              {recentDeliveries.map((item) => (
                <tr
                  key={item.waybill}
                  className="transition-colors hover:bg-slate-50"
                >

                  {/* Waybill */}
                  <td className="px-3 py-3.5">

                    <div className="flex items-center gap-1.5 font-bold text-[#111827]">

                      <span>
                        {item.waybill}
                      </span>

                      <button
                        onClick={() =>
                          copyToClipboard(item.waybill)
                        }
                        className="rounded p-1 text-slate-400 transition-colors hover:text-[#111827]"
                        title="Copy Waybill"
                      >
                        <FaCopy className="text-[11px]" />
                      </button>

                    </div>
                  </td>

                  {/* Recipient */}
                  <td className="px-3 py-3.5">

                    <p className="font-bold text-[#24344d]">
                      {item.recipient}
                    </p>

                    <p className="font-mono text-[10px] text-slate-400">
                      {item.phone}
                    </p>

                  </td>

                  {/* Destination */}
                  <td className="px-3 py-3.5 text-slate-500">
                    {item.destination}
                  </td>

                  {/* COD */}
                  <td className="px-3 py-3.5 font-black text-[#111827]">
                    {item.cod}
                  </td>

                  {/* Status */}
                  <td className="px-3 py-3.5">

                    <span
                      className={`rounded-full border px-2.5 py-1 text-[9px] font-black uppercase tracking-wider ${item.statusStyle}`}
                    >
                      {item.status}
                    </span>

                  </td>

                  {/* Actions */}
                  <td className="px-3 py-3.5 text-right">

                    <div className="flex items-center justify-end gap-2">

                      <button
                        className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-bold uppercase text-slate-500 transition-colors hover:bg-slate-100 hover:text-[#111827]"
                      >
                        <FaClockRotateLeft className="text-[10px]" />
                        <span>TIMELINE</span>
                      </button>

                      <button
                        className="flex items-center gap-1.5 rounded-lg bg-[#fcb915] px-3 py-1.5 text-[10px] font-black uppercase text-[#111827] shadow-sm transition-colors hover:bg-yellow-400"
                      >
                        <FaPrint className="text-[10px]" />
                        <span>WAYBILL</span>
                      </button>

                    </div>
                  </td>

                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
      </div>
      }
    </div>
  );
}