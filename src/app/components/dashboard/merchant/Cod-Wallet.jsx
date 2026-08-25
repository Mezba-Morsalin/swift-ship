"use client";

import { FaWallet, FaCircleCheck, FaCreditCard } from "react-icons/fa6";

const ledgerHistory = [
  {
    refId: "PAY-2026-0808",
    date: "Aug 08, 2026 • 18:00",
    method: "City Bank A/C ****4892",
    amount: "৳ 1,24,000",
    status: "SETTLED",
  },
  {
    refId: "PAY-2026-0807",
    date: "Aug 07, 2026 • 18:00",
    method: "bKash Merchant Wallet",
    amount: "৳ 98,500",
    status: "SETTLED",
  },
  {
    refId: "PAY-2026-0806",
    date: "Aug 06, 2026 • 18:00",
    method: "City Bank A/C ****4892",
    amount: "৳ 1,89,500",
    status: "SETTLED",
  },
];

export default function CodWallet() {
  return (
    <div className="space-y-6 font-sans">

  {/* ==================================================
      1. TOP CARDS GRID
  ================================================== */}
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

    {/* Available COD Balance */}
    <div className="flex flex-col justify-between rounded-2xl border border-[#fcb915]/40 bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">

        <span className="text-[10px] font-black uppercase tracking-widest text-[#b77900]">
          AVAILABLE COD BALANCE
        </span>

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fcb915]/10 text-sm text-[#d99b00]">
          <FaWallet />
        </div>

      </div>

      <h2 className="mt-3 text-3xl font-black text-[#d99b00]">
        ৳ 84,500
      </h2>

      <p className="mt-4 text-xs font-bold text-emerald-600">
        Ready for 6:00 PM automated bank deposit today
      </p>

    </div>


    {/* Total Settled Payouts */}
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">

        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
          TOTAL SETTLED PAYOUTS
        </span>

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-sm text-emerald-600">
          <FaCircleCheck />
        </div>

      </div>

      <h2 className="mt-3 text-3xl font-black text-[#111827]">
        ৳ 4,12,000
      </h2>

      <p className="mt-4 text-xs font-medium text-slate-400">
        32 Payout cycles completed with 0% fees
      </p>

    </div>


    {/* Payout Destination */}
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">

        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
          PAYOUT DESTINATION
        </span>

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-sm text-blue-600">
          <FaCreditCard />
        </div>

      </div>

      <div className="mt-3">

        <h3 className="text-base font-black text-[#111827]">
          City Bank Ltd.
        </h3>

        <p className="mt-0.5 font-mono text-xs text-slate-400">
          A/C: **** **** 4892 (Aura Fashion House)
        </p>

      </div>

      <div className="mt-4" />

    </div>

  </div>


  {/* ==================================================
      2. DISBURSEMENT LEDGER HISTORY
  ================================================== */}
  <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

    <div>
      <h2 className="text-base font-black uppercase tracking-tight text-[#111827]">
        DISBURSEMENT LEDGER HISTORY
      </h2>

      <p className="mt-1 text-xs text-slate-400">
        Complete history of your COD settlement and bank disbursements.
      </p>
    </div>


    {/* Table */}
    <div className="scrollbar-none overflow-x-auto">

      <table className="w-full text-left text-xs">

        <thead>

          <tr className="border-b border-slate-200 text-[10px] font-black uppercase tracking-wider text-slate-400">

            <th className="px-3 py-3">
              PAYOUT REF ID
            </th>

            <th className="px-3 py-3">
              DISBURSEMENT DATE
            </th>

            <th className="px-3 py-3">
              METHOD / ACCOUNT
            </th>

            <th className="px-3 py-3">
              NET AMOUNT
            </th>

            <th className="px-3 py-3 text-right">
              STATUS
            </th>

          </tr>

        </thead>


        <tbody className="divide-y divide-slate-100 font-medium">

          {ledgerHistory.map((item) => (

            <tr
              key={item.refId}
              className="transition-colors hover:bg-slate-50"
            >

              {/* Reference ID */}
              <td className="px-3 py-4 font-bold text-[#24344d]">
                {item.refId}
              </td>


              {/* Date */}
              <td className="px-3 py-4 text-slate-500">
                {item.date}
              </td>


              {/* Method */}
              <td className="px-3 py-4 text-slate-500">
                {item.method}
              </td>


              {/* Amount */}
              <td className="px-3 py-4 font-black text-[#111827]">
                {item.amount}
              </td>


              {/* Status */}
              <td className="px-3 py-4 text-right">

                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-emerald-600">
                  {item.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

</div>
  );
}