import React from "react";
import { useTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function SignUp({ mode, toggleTheme }) {
  const theme = useTheme();

  return (
    <>
      {/* زر تبديل الثيم */}
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        className="absolute top-4 left-4 z-50"
      >
        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>

      <div
        className="h-screen flex items-center justify-center font-sans px-4"
        style={{ backgroundColor: theme.palette.background.default }}
      >
        {/* الصندوق الرئيسي */}
        <div
          className="flex w-[960px] h-[590px] shadow-lg rounded-[30px] overflow-hidden"
          style={{ backgroundColor: theme.palette.background.paper }}
        >
          {/* القسم الأيسر - الصورة */}
          <div className="w-[480px] h-[591px] bg-[#F5F6FA] relative">
            <img
              src="/assets/login/all-login.svg"
              alt="توضيح"
              className="w-full h-full object-cover object-bottom"
            />
          </div>

          {/* القسم الأيمن - النموذج */}
          <div className="w-1/2 flex flex-col items-center justify-center relative px-8">
            {/* الشعار في الزاوية العلوية اليمنى */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <img
                src="/assets/logo.png"
                alt="شعار RockStock"
                className="w-8 h-8"
              />
              <span
                className="text-xl font-bold"
                style={{ color: theme.palette.text.primary }}
              >
                RockStock
              </span>
            </div>

            {/* المحتوى */}
            <div className="w-[400px] max-w-full">
              <h2
                className="text-[32px] font-bold mb-4 text-right"
                style={{ color: theme.palette.text.primary }}
              >
                إنشاء حساب
              </h2>

              <form className="space-y-5">
                {/* الاسم الكامل */}
                <div>
                  <label
                    htmlFor="fullname"
                    className="block text-sm mb-2 text-right"
                    style={{ color: theme.palette.text.secondary }}
                  >
                    الاسم الكامل
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="fullname"
                      placeholder="أدخل اسمك الكامل"
                      className="w-full pr-10 pl-4 py-2 border text-right border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    />
                    <img
                      src="/assets/login/icons/name.svg"
                      alt="name icon"
                      className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    />
                  </div>
                </div>

                {/* البريد الإلكتروني */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 text-right"
                    style={{ color: theme.palette.text.secondary }}
                  >
                    البريد الإلكتروني
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      className="w-full pr-10 pl-4 py-2 text-right border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    />
                    <img
                      src="/assets/login/icons/email.svg"
                      alt="email icon"
                      className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    />
                  </div>
                </div>

                {/* كلمة المرور */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm mb-2 text-right"
                    style={{ color: theme.palette.text.secondary }}
                  >
                    كلمة المرور
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      placeholder="********"
                      className="w-full pr-10 pl-4 py-2 text-right border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    />
                    <img
                      src="/assets/login/icons/password.svg"
                      alt="password icon"
                      className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    />
                  </div>
                </div>

                {/* تأكيد كلمة المرور */}
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm mb-2 text-right"
                    style={{ color: theme.palette.text.secondary }}
                  >
                    تأكيد كلمة المرور
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirm-password"
                      placeholder="********"
                      className="w-full pr-10 pl-4 py-2 text-right border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    />
                    <img
                      src="/assets/login/icons/password.svg"
                      alt="confirm icon"
                      className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-[#FF8E29] text-white rounded-xl hover:bg-[#e07b20] transition duration-200"
                >
                  إنشاء حساب
                </button>
              </form>

              {/* رابط تسجيل الدخول */}
              <div
                className="text-sm text-center mt-4"
                style={{ color: theme.palette.text.secondary }}
              >
                <span>هل لديك حساب؟ </span>
                <a href="#" className="text-[#FF8E29] hover:underline">
                  تسجيل الدخول
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
