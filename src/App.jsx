import { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import getTheme from "./Theme.jsx";
import SignUp from "./pages/login/SignUp.jsx";
import Login from "./pages/login/Login.jsx";
import ResetPassword from "./pages/login/ResetPassword.jsx";
import ResetSuccess from "./pages/login/ResetSuccess.jsx";

import Dashboard from "./pages/Dashborad-Content/Dashboard.jsx";
import Products from "./pages/Products.jsx";
import ProductDetailsCard from "./pages/ProductDetailsCard.jsx";
import CalendarPage from "./pages/Calendar.jsx";
import EntryNotes from "./pages/Notes/EntryNotes.jsx";

export default function App() {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* صفحات بدون layout */}
          <Route
            path="/signup"
            element={<SignUp mode={mode} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/"
            element={<Login mode={mode} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/reset-password"
            element={<ResetPassword mode={mode} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/reset-success"
            element={<ResetSuccess mode={mode} toggleTheme={toggleTheme} />}
          />

          {/* صفحات داخل layout */}
          <Route
            path="/dashboard"
            element={<Dashboard mode={mode} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/products"
            element={<Products mode={mode} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/products/warehouse/:warehouseId"
            element={<Products mode={mode} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/products/details/:id"
            element={<ProductDetailsCard />}
          />
          <Route
            path="/products/:id"
            element={
              <ProductDetailsCard mode={mode} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/calendar"
            element={<CalendarPage mode={mode} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/entry-notes"
            element={<EntryNotes mode={mode} toggleTheme={toggleTheme}/>}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
