import React from "react";
import { useTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Login({ mode, toggleTheme }) {
  const theme = useTheme();

  return (
    <>
      {/* زر التبديل */}
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
          className="flex w-[960px] h-[560px] shadow-lg rounded-[30px] overflow-hidden"
          style={{ backgroundColor: theme.palette.background.paper }}
        >
          {/* القسم الأيسر */}
          <div className="w-[479.77px] h-[560px] bg-[#F5F6FA] relative">
            <img
              src="/assets/login/all-login.svg"
              alt="Login Illustration"
              className="w-full h-full object-cover object-bottom"
            />
          </div>

          {/* القسم الأيمن */}
          <div className="w-[480px] flex flex-col items-center justify-center relative px-10">
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <img src="/assets/logo.png" alt="شعار" className="w-8 h-8" />
              <span
                className="text-xl font-bold"
                style={{ color: theme.palette.text.primary }}
              >
                RockStock
              </span>
            </div>

            <div className="w-full max-w-[330px]">
              <h2
                className="text-[32px] font-bold mb-8 text-center"
                style={{ color: theme.palette.text.primary }}
              >
                تسجيل الدخول
              </h2>

              <form className="space-y-5">
                {/* البريد */}
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
                      placeholder="أدخل الإيميل الخاص بك"
                      className="w-full pr-10 pl-4 py-2 rounded-[22px] text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                      dir="rtl"
                      style={{
                        backgroundColor: theme.palette.background.paper,
                        border: `1px solid ${theme.palette.divider}`,
                        color: theme.palette.text.primary,
                      }}
                    />
                    <img
                      src="/assets/login/icons/email.svg"
                      alt="email"
                      className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2"
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
                      className="w-full pr-10 pl-4 py-2 rounded-[22px] text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                      dir="rtl"
                      style={{
                        backgroundColor: theme.palette.background.paper,
                        border: `1px solid ${theme.palette.divider}`,
                        color: theme.palette.text.primary,
                      }}
                    />
                    <img
                      src="/assets/login/icons/password.svg"
                      alt="password"
                      className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2"
                    />
                  </div>
                </div>

                <div
                  className="flex justify-end text-sm"
                  style={{ color: theme.palette.text.secondary }}
                >
                  <a href="#" className="text-[#FF8E29] hover:underline">
                    نسيت كلمة المرور؟
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-[#FF8E29] text-white rounded-[22px] hover:bg-[#e07b20] transition duration-200"
                >
                  تسجيل الدخول
                </button>

                <div
                  className="text-sm text-center mt-4"
                  style={{ color: theme.palette.text.secondary }}
                >
                  لا تملك حسابًا؟{" "}
                  <a href="#" className="text-[#FF8E29] hover:underline">
                    إنشاء حساب
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
