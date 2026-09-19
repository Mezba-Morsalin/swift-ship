import {
  Bike,
  CalendarDays,
  Mail,
  MapPin,
  MoreVertical,
  Phone,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaMotorcycle } from "react-icons/fa6";
import { Button } from "../../ui/button";
import RiderActions from "@/app/dashboard/admin/riders/RiderActions";

const Riders = ({ riders }) => {
  return (
    <div>
      {riders.length === 0 ? (
        <div className="flex min-h-[400px] w-full items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex w-full max-w-md flex-col items-center text-center">
            {/* Rider Illustration */}
            <div className="relative mb-6 flex h-36 w-36 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-500/10">
              {/* Decorative Circles */}
              <div className="absolute inset-3 rounded-full border border-dashed border-blue-200 dark:border-blue-500/30" />

              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/20">
                <FaMotorcycle className="text-5xl" />
              </div>

              {/* Small Badge */}
              <div className="absolute -right-1 top-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-orange-100 text-orange-500 dark:border-slate-950 dark:bg-orange-500/10">
                <MapPin size={18} />
              </div>
            </div>

            {/* Text */}
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              No Rider Found
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
              We couldn&apos;t find any available riders right now. Try again in
              a moment or check back later.
            </p>

            {/* Status */}
            <div className="mt-5 flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-500 dark:bg-slate-900 dark:text-slate-400">
              <FaMotorcycle className="text-lg text-slate-400" />
              <span>No available riders nearby</span>
            </div>

            {/* Try Again Button */}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {" "}
          {riders.map((rider) => (
            <div
              key={rider._id}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">

              <div className="flex items-start justify-between">

                <div className="flex items-center gap-3">

                  <Image src={rider?.image || "/default-avatar.png"} alt={rider.name} height={70} width={70} className="rounded-full h-24 w-24 object-cover"/>
                  <div>

                    <h3 className="font-semibold text-slate-900">

                      {rider?.name}
                    </h3>
                    <span className="mt-1 inline-flex rounded-md border border-amber-300 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">

                      {rider.hubCode}
                    </span>
                  </div>
                </div>
                <RiderActions rider={rider}/>
              </div>
              <div className="mt-4">
  <span
    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
      rider.status === "active"
        ? "bg-emerald-50 text-emerald-600"
        : rider.status === "pending"
        ? "bg-amber-50 text-amber-600"
        : "bg-rose-50 text-rose-600"
    }`}
  >
    <span
      className={`h-1.5 w-1.5 rounded-full ${
        rider.status === "active"
          ? "bg-emerald-500"
          : rider.status === "pending"
          ? "bg-amber-500"
          : "bg-rose-500"
      }`}
    />
    {rider.status.charAt(0).toUpperCase() + rider.status.slice(1)}
  </span>
</div>
              <div className="my-4 h-px bg-slate-100" />
              <div className="space-y-3 text-sm">

                <div className="flex items-center gap-3 text-slate-500">
                  <Phone size={16} className="shrink-0 text-slate-400" />
                  <span>{rider.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">

                  <Mail size={16} className="shrink-0 text-slate-400" />
                  <span className="truncate">{rider.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <MapPin size={16} className="shrink-0 text-slate-400" />
                  <span className="truncate">{rider.area}</span>
                </div>
              </div>
              <div className="my-4 h-px bg-slate-100" />
              <div className="flex items-center justify-between text-xs">

                <div className="flex items-center gap-2 text-slate-600">
                  <Bike size={16} className="text-slate-400" />
                  <span className="capitalize">{rider.vehicleType}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">

                  <CalendarDays size={15} />
                  <span>

                    Joined
                    {new Date(rider.joiningDate).toLocaleDateString(
                      "en-CA",
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Riders;
