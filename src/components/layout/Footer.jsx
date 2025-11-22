import { Box, Typography, Link as MuiLink, Stack, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box sx={{ mt: 6, py: 4, textAlign: "center", opacity: 0.9 }}>
      <Divider sx={{ mb: 3 }} />

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Domain Diaries
      </Typography>

      <Stack direction="row" spacing={3} justifyContent="center" >
        <MuiLink component={Link} to="/" underline="hover">Home</MuiLink>
        <MuiLink component={Link} to="/about" underline="hover">About</MuiLink>
        <MuiLink component={Link} to="/contact" underline="hover">Contact</MuiLink>
        <MuiLink component={Link} to="/articles" underline="hover">Articles</MuiLink>
      </Stack>

      <Typography variant="body2">
        © {new Date().getFullYear()} Domain Diaries — All Rights Reserved.
      </Typography>
    </Box>
  );
}
