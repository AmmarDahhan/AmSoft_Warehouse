import React, { useRef, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import arLocale from "@fullcalendar/core/locales/ar";

export default function CalendarPage() {
  const calendarRef = useRef(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const api = calendarRef.current?.getApi();
    if (api) setCurrentDate(api.getDate());
  }, []);

  const handleNextMonth = () => {
    const api = calendarRef.current.getApi();
    api.next();
    setCurrentDate(api.getDate());
  };

  const handlePrevMonth = () => {
    const api = calendarRef.current.getApi();
    api.prev();
    setCurrentDate(api.getDate());
  };

  const handleNextDay = () => {
    const api = calendarRef.current.getApi();
    api.incrementDate({ days: 1 });
    setCurrentDate(api.getDate());
  };

  const handlePrevDay = () => {
    const api = calendarRef.current.getApi();
    api.incrementDate({ days: -1 });
    setCurrentDate(api.getDate());
  };

  const handleToday = () => {
    const api = calendarRef.current.getApi();
    api.today();
    setCurrentDate(api.getDate());
  };

  const handleMonthChange = (event) => {
    const selectedMonth = parseInt(event.target.value);
    const api = calendarRef.current.getApi();
    const newDate = new Date(currentDate);
    newDate.setMonth(selectedMonth);
    api.gotoDate(newDate);
    setCurrentDate(newDate);
  };

  const monthYearFormatter = new Intl.DateTimeFormat("ar", {
    month: "long",
    year: "numeric",
  });
  const weekdayFormatter = new Intl.DateTimeFormat("ar", { weekday: "long" });

  return (
    <div
      dir="rtl"
      className="p-6 bg-[#FFFFFF] min-h-screen pt-[18px] rounded-[20px]"
    >
      <div className="bg-white rounded-[20px] shadow p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-[#1E293B] text-sm font-medium">
            <span>{monthYearFormatter.format(currentDate)}</span>
            <button
              onClick={handlePrevMonth}
              className="w-[19.17px] h-[19.17px]"
            >
              <img
                src="/assets/icons-dashboard/right-arrow-month.png"
                className="w-full h-full object-cover object-bottom"
              />
            </button>
            <button
              onClick={handleNextMonth}
              className="w-[19.17px] h-[19.17px]"
            >
              <img
                src="/assets/icons-dashboard/right-arrow-month.png"
                className="w-full h-full object-cover object-bottom rotate-180"
              />
            </button>
          </div>

          <div className="flex items-center gap-4 text-[#1E293B] text-sm font-medium">
            <button onClick={handlePrevDay} className="w-[8.75px] h-[14px]">
              <img
                src="/assets/icons-dashboard/right-arrow.png"
                className="w-full h-full object-cover object-bottom"
              />
            </button>
            <div>{weekdayFormatter.format(currentDate)}</div>
            <button onClick={handleNextDay} className="w-[8.75px] h-[14px]">
              <img
                src="/assets/icons-dashboard/left-arrow.png"
                className="w-full h-full object-cover object-bottom"
              />
            </button>
          </div>

          <select
            className="bg-[#FF8E29] text-[#FFFFFF] border text-center text-sm rounded-[30px] px-1 w-[170px] h-[45px]"
            value={currentDate.getMonth()}
            onChange={handleMonthChange}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i}>
                {new Intl.DateTimeFormat("ar", { month: "long" }).format(
                  new Date(2025, i)
                )}
              </option>
            ))}
          </select>
          {/* <button
            className="text-[#FF8E29] text-sm border px-3 py-1 rounded-md hover:bg-gray-100"
            onClick={handleToday}
          >
            اليوم
          </button> */}
        </div>

        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locale={arLocale}
          direction="rtl"
          headerToolbar={true}
          views={{
            dayGridMonth: { titleFormat: { year: "numeric", month: "long" } },
          }}
          dayHeaderFormat={{ weekday: "short" }}
          dayCellContent={(arg) => {
            const date = arg.date;
            const isToday = new Date().toDateString() === date.toDateString();
            const isFocused =
              currentDate.toDateString() === date.toDateString();
            return (
              <div
                className={`relative text-right text-xs px-1 w-full h-full flex items-start justify-end pr-2 pt-1 font-bold ${
                  isFocused ? "text-[#FF8E29]" : "text-[#334155]"
                }`}
              >
                {isToday && (
                  <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-[#FF8E29] opacity-20 z-0"></div>
                )}
                <span className="relative z-10">{arg.dayNumberText}</span>
              </div>
            );
          }}
          //   dayCellClassNames={() =>
          //     "bg-white rounded-xl shadow-sm p-1 text-sm min-h-[60px]"
          //   }
          dayCellClassNames={(arg) => {
            const isToday =
              new Date().toDateString() === arg.date.toDateString();
            return `bg-white rounded-xl shadow-sm p-1 text-sm min-h-[60px] ${
              isToday ? "!bg-white" : ""
            }`;
          }}
          events={[
            {
              title: "مهمة مستودع",
              date: "2025-05-15",
              backgroundColor: "#FDBA74",
              textColor: "#7C2D12",
            },
            {
              title: "تسليم مهم",
              date: "2025-05-20",
              backgroundColor: "#93C5FD",
              textColor: "#1E3A8A",
            },
          ]}
        />
      </div>
    </div>
  );
}
