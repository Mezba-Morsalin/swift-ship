
import RiderDashboard from "@/app/components/dashboard/rider/RiderDashboard";

import { auth } from "@/app/lib/auth";
import { getRiders } from "@/app/lib/getRiders";
import { getRiderShipments } from "@/app/lib/getRiderShipments";
import { headers } from "next/headers";

const RiderDashboardPage = async () => {
  // ==================================================
  // GET LOGGED-IN USER
  // ==================================================

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  // ==================================================
  // GET ALL RIDERS
  // ==================================================

  const riders = await getRiders();

  // Find current rider using Better Auth user.id
  const rider = riders?.data?.find(
    (item) => item.userId === user?.id
  );

  // ==================================================
  // RIDER NOT FOUND
  // ==================================================

  if (!rider) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50">
              <span className="text-4xl">👤</span>
            </div>

            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Rider Profile Not Found
            </span>

            <h1 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Rider Profile Not Found
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
              We could not find a rider profile connected to
              your account. Please contact the SwiftShip
              administration team.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ==================================================
  // PENDING RIDER
  // ==================================================

  if (rider.status?.toLowerCase() === "pending") {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-xl">
          <div className="rounded-3xl border border-amber-200 bg-white p-8 text-center shadow-sm sm:p-10">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-amber-100 bg-amber-50">
              <span className="text-4xl">⏳</span>
            </div>

            <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-600">
              Pending Approval
            </span>

            <h1 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Your Rider Profile Is Under Review
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
              Your application has been submitted successfully
              and is currently being reviewed by our
              administration team.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-5 text-left">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Application Status
                </span>

                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                  Pending
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-1/2 rounded-full bg-amber-400" />
              </div>

              <p className="mt-3 text-xs text-slate-400">
                You will get access to your rider dashboard
                once your application is approved.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==================================================
  // SUSPENDED RIDER
  // ==================================================

  if (rider.status?.toLowerCase() === "suspended") {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-xl">
          <div className="rounded-3xl border border-rose-200 bg-white p-8 text-center shadow-sm sm:p-10">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-rose-100 bg-rose-50">
              <span className="text-4xl">🚫</span>
            </div>

            <span className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-600">
              Account Suspended
            </span>

            <h1 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Your Rider Account Is Suspended
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
              Your access to the rider dashboard has been
              temporarily suspended. Please contact the
              administration team for more information.
            </p>

            <div className="mt-8 rounded-2xl border border-rose-100 bg-rose-50/50 p-5 text-left">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Account Status
                </span>

                <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-700">
                  Suspended
                </span>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                If you believe this is a mistake or need
                assistance, please contact the SwiftShip
                administration team.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==================================================
  // ACTIVE RIDER - GET SHIPMENTS
  // ==================================================

  let riderShipments = [];

  if (rider?._id) {
    try {
      const riderShipmentsResponse =
        await getRiderShipments(rider._id);

      riderShipments =
        Array.isArray(riderShipmentsResponse?.data)
          ? riderShipmentsResponse.data
          : [];

      console.log(
        "Rider shipments:",
        riderShipments
      );
    } catch (error) {
      console.error(
        "Failed to fetch rider shipments:",
        error
      );
    }
  }

  // ==================================================
  // RENDER DASHBOARD
  // ==================================================

  return (
    <div>
      <RiderDashboard
        user={user}
        rider={rider}
        shipments={riderShipments}
      />
    </div>
  );
};

export default RiderDashboardPage;
