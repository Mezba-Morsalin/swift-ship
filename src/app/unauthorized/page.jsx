import Link from "next/link";

import { FaShieldAlt, FaArrowLeft } from "react-icons/fa";

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        <div className="h-2 bg-[#FBBF24]" />

        <div className="p-10 text-center sm:p-12">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#111827] shadow-lg">
            <FaShieldAlt className="text-5xl text-[#FBBF24]" />
          </div>

          <h1 className="mt-8 text-7xl font-extrabold tracking-tight text-[#111827]">
            401
          </h1>

          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#FBBF24]" />

          <h2 className="mt-5 text-3xl font-bold text-[#111827]">
            Unauthorized Access
          </h2>

          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-500">
            Sorry, you don&apos;t have permission to access this page. Please
            sign in with an authorized account or return to the SwiftShip
            homepage.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#111827] px-7 py-3.5 font-semibold text-white shadow-md transition hover:bg-slate-800 hover:shadow-lg"
            >
              <FaArrowLeft className="text-[#FBBF24]" />
              Back to Home
            </Link>
          </div>

          <div className="mt-9 border-t border-slate-100 pt-5">
            <p className="text-sm text-slate-400">
              If you believe this is a mistake, please contact the SwiftShip
              administrator.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;