import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { getTheme } from "./theme";
import { useThemeMode } from "./hooks/useThemeMode";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const { mode, toggleMode } = useThemeMode();
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoutes mode={mode} toggleMode={toggleMode} />
      </BrowserRouter>
    </ThemeProvider>
  );
}
