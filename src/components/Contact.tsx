import React from "react";
import { Box, Card, CardContent, Typography, CardActionArea } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact: React.FC = () => {
  const cardData = [
    {
      id: 1,
      title: "Days of Trip",
      icon: <CalendarTodayIcon color="primary" />, // Icon for Days of Trip
      items: [{ text: "3N-4D" }],
    },
    {
      id: 2,
      title: "Starting Price",
      icon: <AttachMoneyIcon color="primary" />, // Icon for Starting Price
      items: [{ text: "₹8999 /-" }],
    },
    {
      id: 3,
      title: "Pickup & Drop",
      icon: <LocationOnIcon color="primary" />, // Icon for Pickup & Drop
      items: [{ text: "Delhi/Chandigarh" }],
    },
  ];

  return (
    <Box>
      {/* Cards Section */}
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 2,
          padding: "20px",
          marginTop: "20px",
        }}
      >
        {cardData.map((card) => (
          <Card
            key={card.id}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "#f9f9f9",
              padding: "20px",
            }}
          >
            <CardActionArea>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: "10px" }}>
                  {card.icon}
                  <Typography variant="h6" component="div" gutterBottom>
                    {card.title}
                  </Typography>
                </Box>
                <Box>
                  {card.items.map((item, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        display: "block",
                        color: "text.secondary",
                      }}
                    >
                      {item.text}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Contact;