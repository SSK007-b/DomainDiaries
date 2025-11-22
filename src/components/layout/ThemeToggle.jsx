import { IconButton, Box } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeToggle({ mode, toggle }) {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 10000,
      }}
    >
      <IconButton
        onClick={toggle}
        sx={{
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          p: 1.1,
          boxShadow: 2,
          "&:hover": {
            bgcolor: "action.hover",
          },
        }}
      >
        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Box>
  );
}
