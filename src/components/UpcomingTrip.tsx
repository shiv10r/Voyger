import React from "react";
import { Box, Typography } from "@mui/material";
import ImageSlider from "./ImageSlider"; // Import the reusable ImageSlider component
import { trendingDestinations, feedbackVideo,UpcomingTrips,SpitiLadakhTrips,HimachalTrips} from "./Text"; // Import the required data
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const UpcomingTrip: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (destinationName: string) => {
    navigate(`/destination/${destinationName}`); // Navigate to the destination page
  };

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Trending Destinations Section */}
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
        </Typography>
        <ImageSlider
          title="Trending Destinations"
          images={trendingDestinations.map((image) => ({
            ...image,
            onClick: () => handleCardClick(image.alt), // Pass the click handler for navigation
          }))}
        />
      </Box>

      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
        </Typography>
        <ImageSlider title="Upcoming Trips" images={UpcomingTrips} />
      </Box>


        {/* Feedback Videos Section */}
        <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
        </Typography>
        <ImageSlider title="SpitiLadakh Trips" images={SpitiLadakhTrips} />
      </Box>


      {/* Feedback Videos Section */}
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
        </Typography>
        <ImageSlider title="HimachalTrips" images={HimachalTrips} />
      </Box>


      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
        </Typography>
        <ImageSlider title="FeedbackVideo" images={feedbackVideo} />
      </Box>


    </Box>
  );
};

export default UpcomingTrip;