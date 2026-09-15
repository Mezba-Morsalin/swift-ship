import HubCard from '@/app/components/dashboard/admin/HubCard';
import { auth } from '@/app/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import { FaPlus, FaWarehouse } from 'react-icons/fa6';

const page = async () => {
    const session = await auth.api.getSession({
                       headers: await headers(),
                     });
                     const admin = session?.user

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hubs`)
    const hubs = await res.json()
    console.log("hubs", hubs)
    return (
        <div>
            {!hubs || hubs.length === 0 ? (
  <div className="flex min-h-[500px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white p-8">
    <div className="max-w-md text-center">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-50">
        <FaWarehouse className="text-4xl text-amber-500" />
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        No Distribution Hubs Yet
      </h2>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        SwiftShip doesn&apos;t have any distribution hubs configured yet.
        Create your first hub to start managing parcel distribution
        and delivery operations.
      </p>

      <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          <FaPlus />
          Create Distribution Hub
        </button>

        <button
          type="button"
          className="rounded-lg border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
        >
          Learn More
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xl font-bold text-gray-900">0</p>
          <p className="mt-1 text-xs text-gray-500">Active Hubs</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xl font-bold text-gray-900">0</p>
          <p className="mt-1 text-xs text-gray-500">Districts Covered</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xl font-bold text-gray-900">0</p>
          <p className="mt-1 text-xs text-gray-500">Parcels Routed</p>
        </div>
      </div>
    </div>
  </div>
) : (
  <HubCard hubs={hubs} admin={admin} />
)}
        </div>
    );
};

export default page;