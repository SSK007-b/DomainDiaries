import { createTheme } from "@mui/material/styles";
import { lightPalette, darkPalette } from "./palette";

export const getTheme = (mode) =>
  createTheme({
    palette: mode === "dark" ? darkPalette : lightPalette,
    typography: {
      fontFamily: `"Inter", sans-serif`,
    },
    shape: { borderRadius: 10 },
  });
