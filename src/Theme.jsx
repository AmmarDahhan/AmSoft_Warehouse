import { Theme } from "@fullcalendar/core/internal";
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
            },
          }
        : {
            background: {
              default: "#1E293B",
              paper: "#151D32",
            },
            text: {
              primary: "#ffffff",
            },
          }),
    },
  });


export default getTheme;