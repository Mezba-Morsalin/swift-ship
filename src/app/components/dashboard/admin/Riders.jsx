
import { MapPin } from 'lucide-react';
import React from 'react';
import { FaMotorcycle } from 'react-icons/fa6';


const Riders = () => {
    return (
        <div>
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
          We couldn&apos;t find any available riders right now.
          Try again in a moment or check back later.
        </p>

        {/* Status */}
        <div className="mt-5 flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-500 dark:bg-slate-900 dark:text-slate-400">
          <FaMotorcycle className="text-lg text-slate-400" />
          <span>No available riders nearby</span>
        </div>

        {/* Try Again Button */}

      </div>
    </div>
        </div>
    );
};

export default Riders;