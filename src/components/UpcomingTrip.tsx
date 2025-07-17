import React from "react";
import { Box, Typography } from "@mui/material";
import ImageSlider from "./ImageSlider";
import {  feedbackVideo, SpitiLadakhTrips, HimachalTrips, UttarPradesh } from "./Text";
import { useNavigate } from "react-router-dom";

const UpcomingTrip: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (destinationName: string) => {
    navigate(`/destination/${destinationName}`);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom />
        <ImageSlider 
          title="Uttar Pradesh" 
          images={UttarPradesh.map((image) => ({
            ...image,
            onClick: () => handleCardClick(image.alt),
          }))} 
        />
      </Box>

      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom />
        <ImageSlider 
          title="SpitiLadakh Trips" 
          images={SpitiLadakhTrips.map((image) => ({
            ...image,
            onClick: () => handleCardClick(image.alt),
          }))} 
        />
      </Box>

      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom />
        <ImageSlider 
          title="HimachalTrips" 
          images={HimachalTrips.map((image) => ({
            ...image,
            onClick: () => handleCardClick(image.alt),
          }))} 
        />
      </Box>

      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom />
        <ImageSlider 
          title="FeedbackVideo" 
          images={feedbackVideo.map((image) => ({
            ...image,
            onClick: () => handleCardClick(image.alt),
          }))} 
        />
      </Box>
    </Box>
  );
};

export default UpcomingTrip;