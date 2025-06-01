import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface TripsSectionProps {
  trips: {
    customizeTrips: { title: string; src: string; link: string }[];
    spitiTrips: { title: string; src: string; link: string }[];
    trendingDestinations: { title: string; src: string; link: string }[];
  };
}

const TripsSection: React.FC<TripsSectionProps> = ({ trips }) => {
  const navigate = useNavigate();

  const handleCardClick = (trip: { title: string; src: string }) => {
    navigate("/secondary-screen", { state: { title: trip.title, image: trip.src } });
  };

  return (
    <Box>
      {/* Section: Customize Trips */}
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Customize Trips
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {trips.customizeTrips.map((trip, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                height: "150px",
                backgroundImage: `url(${trip.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textShadow: "0px 0px 5px black",
              }}
              onClick={() => handleCardClick(trip)}
            >
              <Typography variant="h6">{trip.title}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Section: Spiti Trips */}
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Spiti Trips
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {trips.spitiTrips.map((trip, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                height: "150px",
                backgroundImage: `url(${trip.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textShadow: "0px 0px 5px black",
              }}
              onClick={() => handleCardClick(trip)}
            >
              <Typography variant="h6">{trip.title}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Section: Trending Destinations */}
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Trending Destinations
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {trips.trendingDestinations.map((trip, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                height: "150px",
                backgroundImage: `url(${trip.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textShadow: "0px 0px 5px black",
              }}
              onClick={() => handleCardClick(trip)}
            >
              <Typography variant="h6">{trip.title}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TripsSection;