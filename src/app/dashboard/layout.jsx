"use client";

import { useState, useEffect } from "react";

import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";


export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-slate-50/50" />;
  }

  return (
    <div className="min-h-screen bg-slate-50/60 flex flex-col font-sans">
      {/* Top Fixed / Sticky Navigation Bar */}
      <DashboardNavbar onToggleMenu={() => setSidebarOpen((prev) => !prev)} />

      {/* Main Body Grid Area */}
      <div className="flex flex-1 relative pt-16">
        {/* Sidebar Navigation */}
        <DashboardSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Dynamic Page Children Content */}
        <main className="flex-1 lg:ml-72 p-4 sm:p-6 lg:p-8 overflow-x-hidden min-h-[calc(100vh-4rem)] transition-all duration-300">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}