import ShipmentManagement from '@/app/components/dashboard/merchant/ShipmentManagement';
import { auth } from '@/app/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaClockRotateLeft, FaPlus, FaWallet } from 'react-icons/fa6';

const MerchantShipmentPage = async() => {
    const session = await auth.api.getSession({
                   headers: await headers(),
                 });
                 const merchant = session?.user

        if (merchant?.status === "rejected") {
    return (
      <div className="space-y-6 font-sans">

        <div className="rounded-2xl border border-rose-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* Content */}
            <div className="flex items-start gap-4">

              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </div>

              {/* Text */}
              <div>
                <div className="flex flex-wrap items-center gap-2">

                  <h2 className="text-lg font-black tracking-tight text-[#111827]">
                    Merchant Application Rejected
                  </h2>

                  <span className="rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-rose-600">
                    REJECTED
                  </span>

                </div>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Unfortunately, your merchant application could not be
                  approved at this time. Please review your submitted
                  information or contact SwiftShip support for assistance.
                </p>

                {/* Rejection Reason */}
                {merchant?.rejectionReason && (
                  <div className="mt-4 rounded-xl border border-rose-100 bg-rose-50/60 px-4 py-3">
                    <p className="text-[10px] font-black uppercase tracking-wider text-rose-500">
                      REJECTION REASON
                    </p>

                    <p className="mt-1 text-xs font-medium leading-5 text-rose-700">
                      {user.rejectionReason}
                    </p>
                  </div>
                )}

              </div>
            </div>

            {/* Action */}
            <Link
              href="/dashboard/merchant/profile"
              className="shrink-0 rounded-xl bg-[#111827] px-5 py-2.5 text-center text-[11px] font-black uppercase tracking-wider text-white transition-colors hover:bg-[#24344d]"
            >
              REVIEW PROFILE
            </Link>

          </div>
        </div>

      </div>
    );
  }
    return (
        <div className='space-y-6'>
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
                    merchant.status === "pending" ? <div className="w-full mx-auto mt-14 max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
                    
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
                            <div className ="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-slate-400">
                              <span className ="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
                              Awaiting admin approval
                            </div>
                    
                          </div> : <ShipmentManagement/>
                  }
        </div>
    );
};

export default MerchantShipmentPage;