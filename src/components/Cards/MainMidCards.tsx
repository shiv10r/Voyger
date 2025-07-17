import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star"; // For review ratings
import VerifiedIcon from "@mui/icons-material/Verified"; // For certifications
import GoogleIcon from "@mui/icons-material/Google"; // Google logo
import FacebookIcon from "@mui/icons-material/Facebook"; // Facebook logo

interface Review {
  id: number;
  platform: string;
  rating: string;
  icon: React.ReactNode;
}

interface Certification {
  id: number;
  name: string;
  icon: React.ReactNode;
}

interface CardData {
  id: number;
  title: string;
  description?: string;
  buttonText?: string;
  backgroundColor?: string;
  subCards?: { id: number; title: string; description: string }[];
  reviews?: Review[];
  certifications?: Certification[];
}

const MainMidCards: React.FC = () => {

  const cardData: CardData[] = [
    {
      id: 1,
      title: "Planning Trip",
      description:
        "Planning a trip can be overwhelming. Let our experts assist you in planning a perfect getaway.",
      buttonText: "Get a Call Back",
      backgroundColor: "#FFA500", // Saffron color
    },
    {
      id: 2,
      title: "Explore Options",
      subCards: [
        { id: 1, title: "National", description: "Discover the beauty of India." },
        { id: 2, title: "International", description: "Explore destinations abroad." },
        { id: 3, title: "Pilgrimage", description: "Visit sacred places." },
        { id: 4, title: "Couple", description: "Plan a romantic getaway." },
      ],
    },
    {
      id: 3,
      title: "Customer Reviews",
      reviews: [
        {
          id: 1,
          platform: "Google Reviews",
          rating: "4.8",
          icon: <GoogleIcon sx={{ color: "#DB4437", fontSize: "30px" }} />, // Google logo
        },
        {
          id: 2,
          platform: "Facebook Reviews",
          rating: "4.7",
          icon: <FacebookIcon sx={{ color: "#4267B2", fontSize: "30px" }} />, // Facebook logo
        },
        {
          id: 3,
          platform: "Tripadvisor Reviews",
          rating: "5.0",
          icon: <StarIcon sx={{ color: "#34E0A1", fontSize: "30px" }} />, // Tripadvisor icon
        },
      ],
    },
    {
      id: 4,
      title: "Certified & Recognised by",
      certifications: [
        { id: 1, name: "ISO Certified", icon: <VerifiedIcon sx={{ color: "#4CAF50" }} /> },
        { id: 2, name: "Government Approved", icon: <VerifiedIcon sx={{ color: "#2196F3" }} /> },
        { id: 3, name: "Trusted by Thousands", icon: <VerifiedIcon sx={{ color: "#FF9800" }} /> },
      ],
    },
  ];

  const handleCallBack = () => {
    alert("Our team will contact you shortly!"); // Simulate a callback action
  };

  return (
    <Box
      sx={{
        width: "100%", // Full width of the parent container
        padding: "20px",
        display: "grid", // Use grid layout for responsive rows
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsive columns
        gap: 2, // Space between cards
      }}
    >
      {cardData.map((card) => {
        if (card.id === 3) {
          return (
            <Card
              key={card.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "auto", // Adjust height for dynamic content
                padding: "20px",
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {card.title}
                </Typography>
                {/* Reviews Section */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    marginTop: "10px",
                  }}
                >
                  {card.reviews?.map((review) => (
                    <Box
                      key={review.id}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      {review.icon}
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {review.rating}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {review.platform}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          );
        } else if (card.id === 4) {
          return (
            <Card
              key={card.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "auto", // Adjust height for dynamic content
                padding: "20px",
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {card.title}
                </Typography>
                {/* Certifications Section */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    marginTop: "10px",
                  }}
                >
                  {card.certifications?.map((certification) => (
                    <Box
                      key={certification.id}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      {certification.icon}
                      <Typography variant="body1">{certification.name}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          );
        } else if (card.id === 1) {
          return (
            <Card
              key={card.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "300px", // Adjust height for the card
                backgroundColor: card.backgroundColor, // Saffron background for Card 1
                color: "white", // White text color for better contrast
                padding: "20px",
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {card.description}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleCallBack}
                  sx={{
                    backgroundColor: "white",
                    color: card.backgroundColor,
                    "&:hover": {
                      backgroundColor: "#FFD580", // Lighter saffron on hover
                    },
                  }}
                >
                  {card.buttonText}
                </Button>
              </CardContent>
            </Card>
          );
        } else {
          return null;
        }
      })}
    </Box>
  );
};

export default MainMidCards;