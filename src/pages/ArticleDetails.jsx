import { Box, Typography, Chip, Avatar, Stack, Button, Divider } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import articles from "../data/articles.json";

export default function ArticleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = articles.find((item) => item.id === String(id));

  if (!article) {
    return (
      <Box py={4} textAlign="center">
        <Typography variant="h5" color="error" mb={2}>
          Article Not Found ❌
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Back To Home
        </Button>
      </Box>
    );
  }

  return (
    <Box py={4} maxWidth="800px" mx="auto">
      {/* Cover Image */}
      {article.coverImage && (
        <Box
          sx={{
            width: "100%",
            height: 260,
            borderRadius: 2,
            mb: 3,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${article.coverImage})`,
          }}
        />
      )}

      {/* Category */}
      {article.category && (
        <Chip label={article.category} color="primary" sx={{ mb: 2 }} />
      )}

      {/* Title */}
      <Typography variant="h3" fontWeight="bold" mb={1}>
        {article.title}
      </Typography>

      {/* Author + Metadata */}
      <Stack direction="row" spacing={2} alignItems="center" mb={3}>
        <Avatar
          src={article.author?.profileImage || "https://placehold.co/100x100"}
          alt={article.author?.name}
          sx={{ width: 55, height: 55 }}
        />

        <Box>
          <Typography fontWeight={600}>
            {article.author?.name || "Unknown Author"}
          </Typography>
          <Typography color="text.secondary" variant="caption">
            {article.createdAt} • {article.readTime}
          </Typography>
        </Box>
      </Stack>

      <Divider sx={{ my: 3 }} />

      {/* Content Renderer */}
      {Array.isArray(article.content) &&
        article.content.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return (
                <Typography
                  key={index}
                  paragraph
                  sx={{ fontSize: "1.15rem", lineHeight: 1.9 }}
                >
                  {block.text}
                </Typography>
              );

            case "heading":
              return (
                <Typography
                  key={index}
                  variant="h5"
                  fontWeight="bold"
                  sx={{ mt: 4, mb: 2 }}
                >
                  {block.text}
                </Typography>
              );

            case "list":
              return (
                <Box key={index} component="ul" sx={{ pl: 3, mb: 3 }}>
                  {block.items.map((item, i) => (
                    <Typography
                      key={i}
                      component="li"
                      sx={{ fontSize: "1.15rem", lineHeight: 1.8 }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              );

            default:
              return null;
          }
        })}
    </Box>
  );
}
