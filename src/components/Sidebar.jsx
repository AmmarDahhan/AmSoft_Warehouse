import React from "react";

export default function Sidebar() {
  const activeItem = "لوحة التحكم";

  const menuItems = [
    {
      icon: (
        <img
          src="/assets/icons-dashboard/Home.svg"
          alt="أيقونة"
          className="w-4 h-4"
        />
      ),
      label: "الصفحة الرئيسية",
    },
    {
      icon: (
        <img
          src="/assets/icons-dashboard/Products.svg"
          alt="أيقونة"
          className="w-4 h-4"
        />
      ),
      label: "المنتجات",
    },
    {
      icon: (
        <img
          src="/assets/icons-dashboard/calendar.svg"
          alt="أيقونة"
          className="w-4 h-4"
        />
      ),
      label: "التقويم",
    },
    {
      icon: (
        <img
          src="/assets/icons-dashboard/EntryNotes.svg"
          alt="أيقونة"
          className="w-4 h-4"
        />
      ),
      label: "مذكرات إدخال",
    },
    {
      icon: (
        <img
          src="/assets/icons-dashboard/ExNotes.svg"
          alt="أيقونة"
          className="w-4 h-4"
        />
      ),
      label: "مذكرات إخراج",
    },
    {
      icon: (
        <img
          src="/assets/icons-dashboard/ReceivNotes.svg"
          alt="أيقونة"
          className="w-4 h-4"
        />
      ),
      label: "مذكرات المستلمة",
    },
    {
      icon: (
        <img
          src="/assets/icons-dashboard/ScrapNote.svg"
          alt="أيقونة"
          className="w-4 h-4"
        />
      ),
      label: "مذكرات إتلاف",
    },
    {
      icon: (
        <img
          src="/assets/icons-dashboard/InstallReports.svg"
          alt="أيقونة"
          className="w-4 h-4"
        />
      ),
      label: "تقارير التثبيت",
    },
    {
      icon: (
        <img
          src="/assets/icons-dashboard/PurRequest.svg"
          alt="أيقونة"
          className="w-4 h-4"
        />
      ),
      label: "طلبات الشراء",
    },
    {
      icon: (
        <img
          src="/assets/icons-dashboard/CuManagment.svg"
          alt="أيقونة"
          className="w-4 h-4"
        />
      ),
      label: "أمين المستودع",
    },
    {
      icon: (
        <img
          src="/assets/icons-dashboard/notification.svg"
          alt="أيقونة"
          className="w-4 h-4"
        />
      ),
      label: "الإشعارات",
    },
    {
      icon: (
        <img
          src="/assets/icons-dashboard/User.svg"
          alt="أيقونة"
          className="w-4 h-4"
        />
      ),
      label: "المستخدمين",
    },
    {
      icon: (
        <img
          src="/assets/icons-dashboard/Settings.svg"
          alt="أيقونة"
          className="w-4 h-4"
        />
      ),
      label: "الإعدادات",
    },
  ];

  return (
    <div
      dir="rtl"
      className="w-[200px] min-h-screen bg-white shadow-lg flex flex-col justify-between py-5 px-5 rounded-[30px] font-sans"
    >
      {/* الشعار */}
      <div className="flex items-center justify-center mb-6">
        <img src="/assets/logo.png" alt="شعار" className="w-6 h-6" />
        <span className="text-sm font-semibold text-[#1E293B] ml-2">
          RockStock
        </span>
      </div>

      {/* القائمة */}
      <ul className="flex-1 space-y-3 text-xs font-medium">
        {menuItems.map((item, index) => {
          const isActive = item.label === activeItem;
          return (
            <li
              key={index}
              className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-all duration-200 ${
                isActive
                  ? "text-[#FF8E29] bg-[#FFF3E6]"
                  : "text-[#334155] hover:text-[#FF8E29] hover:bg-[#FFF3E6]"
              }`}
            >
              {item.icon}
              <span className="truncate">{item.label}</span>
            </li>
          );
        })}
      </ul>

      {/* زر تسجيل الخروج */}
      <div className="flex items-center gap-2 text-[#EF4444] cursor-pointer px-3 py-2 hover:bg-red-100 rounded-md transition text-xs">
        <img
          src="/assets/icons-dashboard/logout.svg"
          alt="أيقونة"
          className="w-4 h-4"
        />
        <span>تسجيل الخروج</span>
      </div>
    </div>
  );
}
