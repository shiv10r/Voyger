import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface TrendingDestinationsProps {
  destinations: { title: string; image: string; link: string }[];
}

const TrendingDestinations: React.FC<TrendingDestinationsProps> = ({ destinations }) => {
  return (
    <div className="section-banner">
      <Typography
        variant="h4"
        component="div"
        sx={{ color: "white", textAlign: "center", marginBottom: "20px" }}
      >
        Trending Destinations
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          padding: 2,
          whiteSpace: "nowrap",
        }}
      >
        {destinations.map((destination, index) => (
          <Link
            to={destination.link}
            key={index}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              sx={{
                display: "inline-block",
                minWidth: "300px",
                height: "200px",
                backgroundImage: `url(${destination.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
                marginRight: "10px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "10px",
                  borderRadius: "5px",
                  position: "relative",
                  bottom: "-150px",
                  textAlign: "center",
                }}
              >
                {destination.title}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </div>
  );
};

export default TrendingDestinations;