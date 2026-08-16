"use client";

import { useState } from "react";

import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans">
      
      {/* Fixed Top Navbar */}
      <DashboardNavbar
        onToggleMenu={() => setSidebarOpen((prev) => !prev)}
      />

      {/* Everything below Navbar */}
      <div className="pt-16">

        {/* Dashboard Navigation */}
        <DashboardSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Page Content */}
        <main className="w-full">
          <div className="max-w-[1024px] xl:max-w-[1100px] mx-auto px-4 sm:px-5 lg:px-0 py-5 sm:py-6">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}