import React from "react";
import { Box, Card, CardContent, Typography, CardActionArea, IconButton } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CancelIcon from "@mui/icons-material/Cancel";
import GroupIcon from "@mui/icons-material/Group";
import VerifiedIcon from "@mui/icons-material/Verified";

const BackendSupport: React.FC = () => {
  const cardData = [
    {
      id: 1,
      title: "24/7 Backend Support",
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      id: 2,
      title: "Flexible Cancellation Policy",
      icon: <CancelIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      id: 3,
      title: "Experienced Trip Captains",
      icon: <GroupIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      id: 4,
      title: "Certified Travel Consultants",
      icon: <VerifiedIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        padding: "20px",
        overflowX: "auto", // Allow horizontal scrolling if needed
      }}
    >
      {cardData.map((card) => (
        <Card key={card.id} sx={{ minWidth: 200, flexShrink: 0 }}>
          <CardActionArea>
            <CardContent sx={{ textAlign: "center" }}>
              <IconButton disableRipple sx={{ backgroundColor: "transparent" }}>
                {card.icon}
              </IconButton>
              <Typography variant="body1" sx={{ marginTop: 1, fontWeight: "bold" }}>
                {card.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default BackendSupport;