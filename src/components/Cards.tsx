import React from "react";
import { Box, Card, CardContent, Typography, CardActionArea, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cards: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const cardData = [
    {
      id: 1,
      title: "Image Card",
      image: "https://via.placeholder.com/300", // Replace with your image URL
      itineraryLink: "https://drive.google.com", // Replace with your Google Drive link
    },
  ];

  const handleBookNow = () => {
    navigate("/book-now"); // Redirect to the BookNow component
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex", // Use flex for horizontal layout
        justifyContent: "center", // Center the card horizontally
        padding: "20px",
      }}
    >
      {cardData.map((card) => (
        <Card
          key={card.id}
          sx={{
            width: "100%", // Make the card cover the full width of the page
            display: "flex", // Horizontal layout for the card
            flexDirection: "row", // Align content horizontally
            height: "200px", // Adjust height for a horizontal card
          }}
        >
          <CardActionArea sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            {/* Image Section */}
            <Box
              sx={{
                width: "40%", // Image takes 40% of the card width
                height: "100%",
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Content Section */}
            <CardContent sx={{ width: "60%", padding: "20px" }}>
              <Typography variant="h6" component="div" gutterBottom>
                {card.title}
              </Typography>
              <Box sx={{ display: "flex", gap: 2, marginTop: "10px" }}>
                {/* Get Itinerary Button */}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => window.open(card.itineraryLink, "_blank")}
                >
                  Get Itinerary
                </Button>

                {/* Book Now Button */}
                <Button variant="contained" color="secondary" onClick={handleBookNow}>
                  Book Now
                </Button>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default Cards;