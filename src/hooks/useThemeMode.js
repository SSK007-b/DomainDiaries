import { useState, useEffect } from "react";

export function useThemeMode() {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return { mode, toggleMode };
}
