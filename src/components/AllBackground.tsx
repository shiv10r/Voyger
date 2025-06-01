import React from "react";
import { Box, Typography } from "@mui/material";

interface AllBackgroundProps {
  image: string;
  title: string;
}

const AllBackground: React.FC<AllBackgroundProps> = ({ image, title }) => {
  return (
    <Box
      sx={{
        height: "50vh", // Half-page height
        width: "100%",
        background: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        {title}
      </Typography>
    </Box>
  );
};

export default AllBackground;