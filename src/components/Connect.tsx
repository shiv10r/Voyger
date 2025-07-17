import React from "react";
import { Box, Card, CardContent, Typography, CardActionArea } from "@mui/material";

const Connect: React.FC = () => {
  const cardData = [
    {
      id: 1,
      title: "Quick Links",
      items: [
        { text: "Terms & Conditions", link: "#" },
        { text: "Privacy Policy", link: "#" },
        { text: "Refund Policy", link: "#" },
        { text: "Contact Us", link: "#" },
        { text: "Careers", link: "#" },
      ],
    },
    {
      id: 2,
      title: "Trips",
      items: [
        { text: "Backpacking Trips", link: "#" },
        { text: "Rajasthan Trips", link: "#" },
        { text: "International Trips", link: "#" },
        { text: "Weekend Trips", link: "#" },
      ],
    },
    {
      id: 3,
      title: "Social Media",
      items: [
        { text: "Instagram", link: "https://www.instagram.com" },
        { text: "WhatsApp", link: "https://www.whatsapp.com" },
        { text: "YouTube", link: "https://www.youtube.com" },
        { text: "LinkedIn", link: "https://www.linkedin.com" },
      ],
    },
    {
      id: 4,
      title: "Address",
      items: [
        { text: "Voyger Group, a subsidiary of KS Real States UP" },
        { text: "U34Y35738938, IU347589347" },
        { text: "info.voyger@gmail.com" },
        { text: "www.voyger.com" },
      ],
    },
  ];


  
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 2,
        padding: "20px",
      }}
    >
      {cardData.map((card) => (
        <Card key={card.id} sx={{ height: "100%" }}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                {card.title}
              </Typography>
              {card.id === 5 ? (
                // Blank sections for images
                <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "lightgray",
                      borderRadius: "8px",
                    }}
                  />
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "lightgray",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              ) : (
                // Text Links or Address
                <Box>
                  {card.items.map((item, index) =>
                    "text" in item ? (
                      <Typography
                        key={index}
                        variant="body2"
                        component={"link" in item ? "a" : "p"}
                        href={"link" in item ? item.link : undefined}
                        target={"link" in item ? "_blank" : undefined}
                        rel={"link" in item ? "noopener noreferrer" : undefined}
                        sx={{
                          display: "block",
                          color: "link" in item ? "primary.main" : "text.secondary",
                          textDecoration: "link" in item && item.link ? "none" : undefined,
                          "&:hover": "link" in item && item.link ? { textDecoration: "underline" } : undefined,
                        }}
                      >
                        {item.text}
                      </Typography>
                    ) : null
                  )}
                </Box>
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default Connect;