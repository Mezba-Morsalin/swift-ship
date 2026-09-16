"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  FaArrowLeft,
  FaBox,
  FaBuilding,
  FaLocationDot,
  FaPlus,
  FaUserTie,
} from "react-icons/fa6";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";


const AddHub = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    hubCode: "",
    hubName: "",
    type: "regional_hub",
    division: "",
    district: "",
    area: "",
    address: "",
    manager: {
      name: "",
      designation: "",
      phone: "",
      email: "",
    },
    maxStorage: "",
    operationalStatus: "active",
    coverageZones: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleManagerChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      manager: {
        ...prev.manager,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const payload = {
        hubCode: formData.hubCode.trim(),
        hubName: formData.hubName.trim(),
        type: formData.type,
        division: formData.division.trim(),
        district: formData.district.trim(),
        area: formData.area.trim(),
        address: formData.address.trim(),

        manager: {
          name: formData.manager.name.trim(),
          designation: formData.manager.designation.trim(),
          phone: formData.manager.phone.trim(),
          email: formData.manager.email.trim(),
        },

        maxStorage: Number(formData.maxStorage),
        operationalStatus: formData.operationalStatus,

        coverageZones: formData.coverageZones
          .split(",")
          .map((zone) => zone.trim())
          .filter(Boolean),
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/hubs`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to create hub");
      }

      toast.success("Hub created successfully");

      router.push("/dashboard/admin/hubs");
      router.refresh();
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <button
              type="button"
              onClick={() => router.back()}
              className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900 border border-slate-400 shadow rounded-2xl py-2 px-5"
            >
              <FaArrowLeft className="text-xs" />
              Back to Hubs
            </button>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Add New Hub
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Create a new distribution hub and configure its operational
              details.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Basic Information */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <FaBuilding />
                </div>

                <div>
                  <h2 className="font-semibold text-slate-900">
                    Basic Information
                  </h2>
                  <p className="text-sm text-slate-500">
                    Enter the primary information for this hub.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Hub Code
                  </label>

                  <Input
                    name="hubCode"
                    value={formData.hubCode}
                    onChange={handleChange}
                    placeholder="Hub Code"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Hub Name
                  </label>

                  <Input
                    name="hubName"
                    value={formData.hubName}
                    onChange={handleChange}
                    placeholder="Regional Hub"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Hub Type
                  </label>

                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                  >
                    <option value="regional_hub">Regional Hub</option>
                    <option value="central_hub">Central Hub</option>
                    <option value="district_hub">District Hub</option>
                    <option value="local_hub">Local Hub</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Operational Status
                  </label>

                  <select
                    name="operationalStatus"
                    value={formData.operationalStatus}
                    onChange={handleChange}
                    className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Division
                  </label>

                  <Input
                    name="division"
                    value={formData.division}
                    onChange={handleChange}
                    placeholder="Division Name"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    District
                  </label>

                  <Input
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="District Name"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Area
                  </label>

                  <Input
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="District Area"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Maximum Storage
                  </label>

                  <Input
                    type="number"
                    name="maxStorage"
                    value={formData.maxStorage}
                    onChange={handleChange}
                    placeholder="e.g. 13000"
                    min="0"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FaLocationDot />
                </div>

                <div>
                  <h2 className="font-semibold text-slate-900">
                    Location Details
                  </h2>

                  <p className="text-sm text-slate-500">
                    Add the physical location of the hub.
                  </p>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Describe The Hub Address"
                  className="w-full"
                  rows={3}
                  required
                />
              </div>
            </div>

            {/* Manager */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <FaUserTie />
                </div>

                <div>
                  <h2 className="font-semibold text-slate-900">
                    Hub Manager
                  </h2>

                  <p className="text-sm text-slate-500">
                    Enter the manager&apos;s contact information.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Manager Name
                  </label>

                  <Input
                    name="name"
                    value={formData.manager.name}
                    onChange={handleManagerChange}
                    placeholder="Manager Name"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Designation
                  </label>

                  <Input
                    name="designation"
                    value={formData.manager.designation}
                    onChange={handleManagerChange}
                    placeholder="e.g. Regional Hub Manager"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone
                  </label>

                  <Input
                    type="tel"
                    name="phone"
                    value={formData.manager.phone}
                    onChange={handleManagerChange}
                    placeholder="+880 1719-000109"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>

                  <Input
                    type="email"
                    name="email"
                    value={formData.manager.email}
                    onChange={handleManagerChange}
                    placeholder="manager@swiftship.bd"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Coverage */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <FaBox />
                </div>

                <div>
                  <h2 className="font-semibold text-slate-900">
                    Coverage & Capacity
                  </h2>

                  <p className="text-sm text-slate-500">
                    Configure the areas served by this hub.
                  </p>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Coverage Zones
                </label>

                <Input
                  name="coverageZones"
                  value={formData.coverageZones}
                  onChange={handleChange}
                  placeholder="Mymensingh, Jamalpur, Netrokona, Sherpur"
                  required
                />

                <p className="mt-2 text-xs text-slate-400">
                  Separate multiple coverage zones with commas.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                disabled={loading}
                className="h-11 px-6"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={loading}
                className="h-11 bg-[#fcb915] px-6 text-slate-900 hover:bg-[#f0ad05]"
              >
                {loading ? (
                  "Creating Hub..."
                ) : (
                  <>
                    <FaPlus className="mr-2 text-sm" />
                    Create Hub
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHub;