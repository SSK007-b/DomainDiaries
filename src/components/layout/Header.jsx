import { useState } from "react";
import {
  AppBar, Toolbar, Typography, IconButton, Button, Drawer,
  List, ListItemButton, ListItemText, Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", path: "/DomainDiaries" },
//   { label: "Articles", path: "/articles" },
//   { label: "Categories", path: "/categories" },
//   { label: "About", path: "/about" },
];

export default function Header({ mode, toggleMode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <AppBar position="sticky" elevation={1}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* Brand */}
          <Typography
            component={Link}
            to="/"
            sx={{
              fontWeight: "bold",
              fontSize: "1.4rem",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Domain Diaries
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                color={pathname === item.path ? "secondary.main" : "text.primary"}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Theme Toggle + Mobile Menu */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <ThemeToggle mode={mode} toggle={toggleMode} />

            <IconButton
              sx={{ display: { xs: "block", md: "none" }, color: "inherit" }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 220, pt: 2 }}>
          {navItems.map((item) => (
            <List key={item.path}>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={pathname === item.path}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </List>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
