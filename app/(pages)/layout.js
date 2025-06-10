"use client";
import { useState } from "react";
import CommonHeader from "../components/appComponents/commonHeader";
import Sidebar from "../components/appComponents/sideBar";

export default function AppPagesLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Header Component */}
      <CommonHeader setIsSidebarOpen={setIsSidebarOpen} />

      {/* Main Content */}
      {/* <main className="ml-64 mt-20 ">{children}</main> */}
      <main className="mt-20 md:ml-64 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
