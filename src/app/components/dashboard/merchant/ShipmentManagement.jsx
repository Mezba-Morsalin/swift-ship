"use client";

import { useMemo, useState } from "react";
import {
  Copy,
  Eye,
  Package,
  Printer,
  Search,
  ChevronDown,
} from "lucide-react";

import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const shipments = [
  {
    waybill: "SWIFT-89421",
    recipient: "Tanvir Hossain",
    phone: "+880 1712-984321",
    destination: "Dhaka Metropolitan",
    address: "House 14, Road 5, Block B, Gulshan-2, Dhaka",
    cod: "৳ 2,450",
    fee: "Fee: 160",
    status: "OUT FOR DELIVERY",
    statusStyle: "border-amber-200 bg-amber-50 text-amber-700",
  },
  {
    waybill: "SWIFT-99102",
    recipient: "Nusrat Jahan",
    phone: "+880 1819-223344",
    destination: "Chattogram",
    address: "Flat B3, Building 12, Agrabad C/A, Chattogram",
    cod: "৳ 8,900",
    fee: "Fee: 120",
    status: "IN TRANSIT",
    statusStyle: "border-blue-200 bg-blue-50 text-blue-700",
  },
  {
    waybill: "SWIFT-77341",
    recipient: "Sabbir Ahmed",
    phone: "+880 1911-556677",
    destination: "Sylhet",
    address: "Zindabazar Point, Road 3, Sylhet Sadar",
    cod: "৳ 1,850",
    fee: "Fee: 110",
    status: "DELIVERED",
    statusStyle: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    waybill: "SWIFT-66290",
    recipient: "Farhana Yeasmin",
    phone: "+880 1610-112233",
    destination: "Gazipur",
    address: "House 8, Road 2, Chowrasta, Gazipur Sadar",
    cod: "৳ 3,200",
    fee: "Fee: 130",
    status: "DELIVERED",
    statusStyle: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    waybill: "SWIFT-55412",
    recipient: "Mahir Chowdhury",
    phone: "+880 1515-443322",
    destination: "Rajshahi",
    address: "Saheb Bazar Main Road, Rajshahi Sadar",
    cod: "৳ 1,500",
    fee: "Fee: 110",
    status: "RETURNED",
    statusStyle: "border-rose-200 bg-rose-50 text-rose-700",
  },
  {
    waybill: "SWIFT-89425",
    recipient: "Dr. Shahriar Alam",
    phone: "+880 1811-998877",
    destination: "Dhaka Metropolitan",
    address: "Apartment 4A, Road 113, Gulshan-2, Dhaka",
    cod: "৳ 5,200",
    fee: "Fee: 100",
    status: "OUT FOR DELIVERY",
    statusStyle: "border-amber-200 bg-amber-50 text-amber-700",
  },
  {
    waybill: "SWIFT-89430",
    recipient: "Nusrat Parveen",
    phone: "+880 1912-334455",
    destination: "Dhaka Metropolitan",
    address: "House 98, Park Road, Baridhara DOHS, Dhaka",
    cod: "৳ 1,800",
    fee: "Fee: 160",
    status: "OUT FOR DELIVERY",
    statusStyle: "border-amber-200 bg-amber-50 text-amber-700",
  },
  {
    waybill: "SWIFT-33104",
    recipient: "Raisa Islam",
    phone: "+880 1714-778899",
    destination: "Dhaka Metropolitan",
    address: "Flat 5B, Road 27, Dhanmondi, Dhaka",
    cod: "৳ 4,100",
    fee: "Fee: 160",
    status: "PENDING PICKUP",
    statusStyle: "border-slate-200 bg-slate-50 text-slate-700",
  },
];

const statusOptions = [
  "ALL",
  "PENDING PICKUP",
  "IN TRANSIT",
  "OUT FOR DELIVERY",
  "DELIVERED",
  "RETURNED",
];

export default function ShipmentManagement() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");

  const filteredShipments = useMemo(() => {
    const query = search.trim().toLowerCase();

    return shipments.filter((item) => {
      const matchesStatus =
        status === "ALL" || item.status === status;

      const matchesSearch =
        !query ||
        item.waybill.toLowerCase().includes(query) ||
        item.recipient.toLowerCase().includes(query) ||
        item.phone.toLowerCase().includes(query);

      return matchesStatus && matchesSearch;
    });
  }, [search, status]);

  const copyWaybill = async (waybill) => {
    try {
      await navigator.clipboard.writeText(waybill);
    } catch {
      // Clipboard may be unavailable in some browsers.
    }
  };

  const printWaybill = (item) => {
    window.print();
    console.log("Print waybill:", item.waybill);
  };

  return (
    <div className="w-full font-sans">
      <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-7">

        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

          <div>
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-[#f59e0b]" />
              <h1 className="text-xl font-black tracking-tight text-[#111827] sm:text-[22px]">
                SHIPMENT MANAGEMENT
              </h1>
            </div>

            <p className="mt-1 text-[11px] font-medium text-slate-500">
              Search, inspect live GPS checkpoints, and print thermal barcode labels.
            </p>
          </div>

          {/* Search + Filter */}
          <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">

            <div className="relative w-full sm:w-[250px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Waybill / Recipient / Phone..."
                className="h-10 rounded-full border-slate-200 bg-white pl-9 pr-4 text-[11px] text-[#24344d] shadow-none placeholder:text-slate-400 focus-visible:border-[#fcb915] focus-visible:ring-0"
              />
            </div>

            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="h-10 w-full rounded-full border-slate-200 bg-white px-4 text-[11px] font-bold text-[#24344d] shadow-none focus:ring-0 sm:w-[125px]">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>

              <SelectContent>
                {statusOptions.map((item) => (
                  <SelectItem
                    key={item}
                    value={item}
                    className="text-xs"
                  >
                    {item === "ALL" ? "All Statuses" : item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

          </div>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-left">

            <thead>
              <tr className="border-b border-slate-100">

                <th className="px-3 py-3 text-[9px] font-black uppercase tracking-widest text-slate-400">
                  WAYBILL NUMBER
                </th>

                <th className="px-3 py-3 text-[9px] font-black uppercase tracking-widest text-slate-400">
                  RECIPIENT
                </th>

                <th className="px-3 py-3 text-[9px] font-black uppercase tracking-widest text-slate-400">
                  DESTINATION
                </th>

                <th className="px-3 py-3 text-[9px] font-black uppercase tracking-widest text-slate-400">
                  COD
                </th>

                <th className="px-3 py-3 text-[9px] font-black uppercase tracking-widest text-slate-400">
                  STATUS
                </th>

                <th className="px-3 py-3 text-right text-[9px] font-black uppercase tracking-widest text-slate-400">
                  ACTIONS
                </th>

              </tr>
            </thead>

            <tbody>
              {filteredShipments.length > 0 ? (
                filteredShipments.map((item) => (
                  <tr
                    key={item.waybill}
                    className="border-b border-slate-100 transition-colors hover:bg-slate-50/70"
                  >

                    {/* Waybill */}
                    <td className="px-3 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-black text-[#24344d]">
                          {item.waybill}
                        </span>

                        <button
                          type="button"
                          onClick={() => copyWaybill(item.waybill)}
                          title="Copy waybill"
                          className="rounded p-1 text-slate-400 transition hover:bg-slate-100 hover:text-[#111827]"
                        >
                          <Copy className="h-3 w-3" />
                        </button>
                      </div>
                    </td>

                    {/* Recipient */}
                    <td className="px-3 py-3.5">
                      <p className="text-[10px] font-black text-[#111827]">
                        {item.recipient}
                      </p>

                      <p className="mt-0.5 font-mono text-[8px] font-medium text-slate-400">
                        {item.phone}
                      </p>
                    </td>

                    {/* Destination */}
                    <td className="max-w-[220px] px-3 py-3.5">
                      <p className="text-[10px] font-bold text-[#24344d]">
                        {item.destination}
                      </p>

                      <p className="mt-0.5 truncate text-[8px] font-medium text-slate-400">
                        {item.address}
                      </p>
                    </td>

                    {/* COD */}
                    <td className="px-3 py-3.5">
                      <p className="text-[10px] font-black text-[#111827]">
                        {item.cod}
                      </p>

                      <p className="mt-0.5 text-[8px] font-medium text-slate-400">
                        {item.fee}
                      </p>
                    </td>

                    {/* Status */}
                    <td className="px-3 py-3.5">
                      <span
                        className={`inline-flex rounded-full border px-2.5 py-1 text-[8px] font-black uppercase tracking-wider ${item.statusStyle}`}
                      >
                        {item.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-3 py-3.5">
                      <div className="flex items-center justify-end gap-2">

                        <Button
                          type="button"
                          variant="ghost"
                          className="h-8 rounded-lg bg-slate-50 px-3 text-[9px] font-black uppercase tracking-wide text-[#24344d] hover:bg-slate-100"
                        >
                          <Eye className="mr-1.5 h-3 w-3" />
                          LIVE TRACK
                        </Button>

                        <Button
                          type="button"
                          onClick={() => printWaybill(item)}
                          className="h-8 rounded-lg bg-[#fcb915] px-3 text-[9px] font-black uppercase tracking-wide text-[#111827] shadow-none hover:bg-yellow-400"
                        >
                          <Printer className="mr-1.5 h-3 w-3" />
                          WAYBILL
                        </Button>

                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-14 text-center"
                  >
                    <Package className="mx-auto h-8 w-8 text-slate-300" />

                    <p className="mt-3 text-sm font-black text-[#24344d]">
                      No shipments found
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Try changing your search or status filter.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <p className="text-[10px] font-medium text-slate-400">
            Showing{" "}
            <span className="font-black text-[#24344d]">
              {filteredShipments.length}
            </span>{" "}
            of{" "}
            <span className="font-black text-[#24344d]">
              {shipments.length}
            </span>{" "}
            shipments
          </p>

          <button
            type="button"
            className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#d99b00] hover:underline"
          >
            Refresh
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>

      </div>
    </div>
  );
}