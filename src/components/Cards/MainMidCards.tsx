import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallbackForm from "../../components/Cards/CallbackForm";


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
  const [openForm, setOpenForm] = useState(false);

  const handleCallBack = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const cardData: CardData[] = [
    {
      id: 1,
      title: "Planning Trip",
      description:
        "Planning a trip can be overwhelming. Let our experts assist you in planning a perfect getaway.",
      buttonText: "Get a Call Back",
      backgroundColor: "#FFA500",
    },
    {
      id: 3,
      title: "Customer Reviews",
      reviews: [
        {
          id: 1,
          platform: "Google Reviews",
          rating: "4.8",
          icon: <GoogleIcon sx={{ color: "#DB4437", fontSize: 30 }} />,
        },
        {
          id: 2,
          platform: "Facebook Reviews",
          rating: "4.7",
          icon: <FacebookIcon sx={{ color: "#4267B2", fontSize: 30 }} />,
        },
        {
          id: 3,
          platform: "Tripadvisor Reviews",
          rating: "5.0",
          icon: <StarIcon sx={{ color: "#34E0A1", fontSize: 30 }} />,
        },
      ],
    },
    {
      id: 4,
      title: "Certified & Recognised by",
      certifications: [
        {
          id: 1,
          name: "ISO Certified",
          icon: <VerifiedIcon sx={{ color: "#4CAF50" }} />,
        },
        {
          id: 2,
          name: "Government Approved",
          icon: <VerifiedIcon sx={{ color: "#2196F3" }} />,
        },
        {
          id: 3,
          name: "Trusted by Thousands",
          icon: <VerifiedIcon sx={{ color: "#FF9800" }} />,
        },
      ],
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 2,
        }}
      >
        {cardData.map((card) => {
          if (card.id === 3) {
            return (
              <Card key={card.id} sx={{ padding: "20px" }}>
                <CardContent>
                  <Typography variant="h6">{card.title}</Typography>
                  <Box sx={{ mt: 2 }}>
                    {card.reviews?.map((review) => (
                      <Box
                        key={review.id}
                        sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                      >
                        {review.icon}
                        <Typography fontWeight="bold">{review.rating}</Typography>
                        <Typography color="textSecondary">{review.platform}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            );
          } else if (card.id === 4) {
            return (
              <Card key={card.id} sx={{ padding: "20px" }}>
                <CardContent>
                  <Typography variant="h6">{card.title}</Typography>
                  <Box sx={{ mt: 2 }}>
                    {card.certifications?.map((cert) => (
                      <Box
                        key={cert.id}
                        sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                      >
                        {cert.icon}
                        <Typography>{cert.name}</Typography>
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
                  padding: "20px",
                  color: "white",
                  backgroundColor: card.backgroundColor,
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6">{card.title}</Typography>
                  <Typography sx={{ mt: 1 }}>{card.description}</Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: "#fff",
                      color: "#000",
                      "&:hover": { backgroundColor: "#FFD580" },
                    }}
                    onClick={handleCallBack}
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
      <CallbackForm open={openForm} handleClose={handleCloseForm} />
    </>
  );
};

export default MainMidCards;
