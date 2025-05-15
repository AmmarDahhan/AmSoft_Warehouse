import React from "react";

const summaryCards = [
  {
    title: "المبيعات",
    value: "٨٢,٥٠٠ ل.س",
    icon: "/assets/icons-dashboard/sales.svg",
    bg: "#FFFFFF",
    iconBg: "#FF8E29",
  },
  {
    title: "العملاء",
    value: "١٢٠",
    icon: "/assets/icons-dashboard/customers.svg",
    bg: "#FFFFFF",
    iconBg: "#0F766E",
  },
  {
    title: "متوسط الإيراد",
    value: "١١,٢٠٠ ل.س",
    icon: "/assets/icons-dashboard/revenue.svg",
    bg: "#FFFFFF",
    iconBg: "#2563EB",
  },
];

export default function DashboardSummary() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-6">
      {summaryCards.map((card, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between p-4 rounded-2xl"
          style={{ backgroundColor: card.bg }}
        >
          {/* النص */}
          <div className="text-right">
            <p className="text-sm text-[#64748B] font-medium">{card.title}</p>
            <p className="text-lg font-bold text-[#1E293B] mt-1">
              {card.value}
            </p>
          </div>

          {/* الأيقونة */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: card.iconBg }}
          >
            <img src={card.icon} alt={card.title} className="w-5 h-5" />
          </div>
        </div>
      ))}
    </div>
  );
}
