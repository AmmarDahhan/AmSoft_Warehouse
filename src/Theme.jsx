import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#FFF4EA",
              paper: "#ffffff",
            },
            text: {
              primary: "#1E293B",
              secondary : "#050F24",
            },
            primary: {
              main: "#FF8E29",
            },
            action: {
              selected: "#FFF3E6", // لون خلفية العنصر النشط
            },
            error: {
              main: "#EF4444",
              light: "#FEE2E2",
            },
          }
        : {
            background: {
              default: "#151D32",
              paper: "#1E293B",
            },
            text: {
              primary: "#CCCDCD",
              secondary : "FFFFFF",
            },
            primary: {
              main: "#FF8E29", // نفس اللون بالوضع الداكن
            },
            action: {
              selected: "#452B00",
            },
            error: {
              main: "#EF4444",
              light: "#7F1D1D",
            },
          }),
    },
  });

export default getTheme;
