import {
  Box,
  Typography,
  Chip,
  Stack,
  Card,
  CardActionArea,
  Avatar,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import articles from "../data/articles.json";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box sx={{ pt: 2, maxWidth: "900px", mx: "auto" }}>
      
      {/* ===== SECTION HEADING ===== */}
      <Typography
        variant="h4"
        fontWeight={700}
        mb={1}
        sx={{
          textAlign: "left",
          fontSize: { xs: "1.8rem", md: "2.2rem" },
          letterSpacing: "-0.5px",
        }}
      >
        Latest Articles
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={3}>
        Browse recently shared insights across domains — tech, creativity, learning,
        personal reflections and more.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      {/* ===== ARTICLE LIST ===== */}
      <Stack spacing={3}>
        {articles.map((post) => (
          <Card
            key={post.id}
            elevation={2}
            sx={{
              borderRadius: 3,
              transition: "0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 6,
                cursor: "pointer",
              },
            }}
          >
            <CardActionArea
              sx={{ p: 3 }}
              onClick={() => navigate(`/article/${post.id}`)}
            >
              {/* Title */}
              <Typography
                variant="h5"
                fontWeight={700}
                sx={{ lineHeight: 1.3, mb: 1 }}
              >
                {post.title}
              </Typography>

              {/* Short Preview */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2, maxWidth: "95%" }}
              >
                {post.subtitle}
              </Typography>

              {/* Author & Meta */}
              <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                <Avatar
                  src={post.author.profileImage}
                  alt={post.author.name}
                  sx={{ width: 42, height: 42 }}
                >
                  {!post.author.profileImage && post.author.name.charAt(0)}
                </Avatar>

                <Box>
                  <Typography fontWeight={600}>{post.author.name}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {post.createdAt} • {post.readTime}
                  </Typography>
                </Box>
              </Stack>

              {/* Tags */}
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {post.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    size="small"
                    variant="outlined"
                    sx={{ borderRadius: "10px" }}
                  />
                ))}
              </Stack>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          px: 4,
          py: 2.2,
          mt:5,
          borderRadius: 3,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        <Typography>📅 Next Publish: Nov 25</Typography>
        <Typography>📝 Entry Size: 200–400 words</Typography>
        <Typography>🔥 Writers: {articles.length}</Typography>
      </Box>

    </Box>
  );
}
