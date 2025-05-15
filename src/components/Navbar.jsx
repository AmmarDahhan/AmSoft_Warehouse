import React from "react";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Navbar({ mode, toggleTheme }) {
  return (
    <div className="flex items-center justify-between h-[45px] mt-6 mx-6 px-8">
      {/* يسار: كلمة لوحة التحكم + البحث */}
      <div className="flex items-center gap-[50px]">
        <div className="text-[#1E293B] text-[20px] font-semibold w-[101px] h-[26px]">
          لوحة التحكم
        </div>

        <div className="flex items-center border border-[#E2E8F0] rounded-full px-4 w-[330px] h-[45px]">
          <input
            type="text"
            placeholder="ابحث..."
            className="w-full h-full outline-none text-sm text-right bg-transparent placeholder:text-[#94A3B8]"
          />
          <img
            src="/assets/icons-dashboard/search.svg"
            alt="بحث"
            className="w-4 h-4 ml-2"
          />
        </div>
      </div>

      {/* يمين: المستخدم */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img
          src="/assets/icons-dashboard/user-avatar.png"
          alt="صورة المستخدم"
          className="w-[45px] h-[45px] rounded-full object-cover"
        />
        <div className="text-right">
          <p className="text-sm font-semibold text-[#1E293B]">عمار</p>
          <p className="text-xs text-[#64748B]">أمين المستودع</p>
        </div>
        <img
          src="/assets/icons-dashboard/dropdown.svg"
          alt="سهم"
          className="w-4 h-4"
        />
        {/* زر تبديل الثيم */}
        <IconButton onClick={toggleTheme} color="inherit" size="small">
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </div>
    </div>
  );
}
