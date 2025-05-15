import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function SmallCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mt-6 mx-6 w-fit">
      <h2 className="text-right text-[#1E293B] font-semibold text-lg mb-4">
        التقويم
      </h2>
      <div className="calendar-wrapper rtl">
        <Calendar
          onChange={setValue}
          value={value}
          locale="ar-EG"
          className="!border-none"
          tileClassName="!text-sm"
        />
      </div>
    </div>
  );
}
