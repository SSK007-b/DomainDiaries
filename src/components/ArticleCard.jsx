import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Divider,
  Box,
} from "@mui/material";

export default function ArticleCard({ title, category, desc, date, author }) {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 3,
        transition: "0.2s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.01)",
          boxShadow: 5,
        },
        mb: 3,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        
        {/* Category Label */}
        <Chip
          label={category}
          color="secondary"
          size="small"
          sx={{ mb: 1 }}
        />

        {/* Title */}
        <Typography variant="h5" fontWeight={700} gutterBottom>
          {title}
        </Typography>

        {/* Short Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, lineHeight: 1.6 }}
        >
          {desc}
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Footer: metadata */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          {/* Author */}
          {author && (
            <Typography variant="body2" fontWeight={600}>
              ✍️ {author}
            </Typography>
          )}

          {/* Date */}
          <Typography variant="caption" color="text.secondary">
            📅 {new Date(date).toLocaleDateString()}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
