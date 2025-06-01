import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const Place: React.FC = () => {
  const { placeName } = useParams<{ placeName: string }>();

  return (
    <Box sx={{ padding: "20px", textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Welcome to {(placeName ?? "unknown").charAt(0).toUpperCase() + (placeName ?? "unknown").slice(1)}
      </Typography>
      <Typography variant="body1">
        Explore the beauty and attractions of {placeName}.
      </Typography>
    </Box>
  );
};

export default Place;