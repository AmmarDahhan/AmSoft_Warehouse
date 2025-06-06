import React from "react";
import RevenueChart from "./RevenueChart";
import DashboardSummary from "./DashboardSummary";
import SmallCalendar from "./SmallCalendar";
import MainLayout from "../../MainLayout"; 
import "./Dashboard.css";
import "../../index.css";

export default function Dashboard({ mode, toggleTheme }) {
  return (
    <MainLayout
      mode={mode}
      toggleTheme={toggleTheme}
      pageTitle="الصفحة الرئيسية"
    >
      <div className="flex-1 overflow-y-auto p-6 text-right">
        <DashboardSummary />
        <SmallCalendar />
        <RevenueChart />
      </div>
    </MainLayout>
  );
}
