import { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import getTheme from "./Theme.jsx";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SignUp from "./pages/login/SignUp";
import Login from "./pages/login/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import ResetPassword from "./pages/login/ResetPassword.jsx";
import ResetSuccess from "./pages/login/ResetSuccess.jsx";
import Dashboard from "./pages/Dashborad-Content/Dashboard.jsx";
import MainLayout from "./MainLayout.jsx";
export default function App() {
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* محتوى الصفحة */}
      {/* صفحات بدون Navbar / Sidebar */}
      {/* <SignUp mode={mode} toggleTheme={toggleTheme}/> */}
      {/* <Login mode={mode} toggleTheme={toggleTheme} /> */}
      {/* <ResetPassword mode={mode} toggleTheme={toggleTheme}/> */}
      {/* <ResetSuccess mode={mode} toggleTheme={toggleTheme}/> */}

      {/* صفحات فيها Navbar و Sidebar */}
      <MainLayout mode={mode} toggleTheme={toggleTheme}>
        <Dashboard />
      </MainLayout>
    </ThemeProvider>
  );
}
