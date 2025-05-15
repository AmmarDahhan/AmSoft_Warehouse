import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

export default function MainLayout({ children, mode, toggleTheme }) {
  return (
    <div className="flex bg-[#FFF4EA] min-h-screen" dir="rtl">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-y-auto">
        <Navbar mode={mode} toggleTheme={toggleTheme} />

        {/* الصفحة الحالية */}
        <Box className="p-6">{children}</Box>
      </div>
    </div>
  );
}
