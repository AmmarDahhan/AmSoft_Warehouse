import React from "react";
import RevenueChart from "./RevenueChart";
import DashboardSummary from "./DashboardSummary";
import SmallCalendar from "./SmallCalendar";
import "./Dashboard.css";
import "../../index.css";
import Calendar from "../Calendar";

export default function Dashboard() {
  return (
        <div className="flex-1 overflow-y-auto p-6 text-right">
            {/* <Calendar /> */}
            {/* <DashboardSummary /> 
            <RevenueChart /> 
            <SmallCalendar /> */}
        </div>
  );
}
