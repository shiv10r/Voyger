import React from "react";
import { Box, Card, CardContent, Typography, TextField, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";

const CardsMain: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {/* Image Card with Search Box and Four Options */}
      <Card
        sx={{
          position: "relative",
          width: "100%",
          height: "400px",  
          backgroundImage: `url("https://plus.unsplash.com/premium_photo-1673002094117-be8021ca0add?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Text Positioned Above the Search Box */}
        <Box
          className="typewriter-text"
          sx={{
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          Escape the Ordinary
        </Box>

        {/* Search Box Positioned Over the Image */}
        <Box
          sx={{
            position: "absolute",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px 20px",
            borderRadius: "8px",
            width: "60%",
            maxWidth: "500px",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search your destination..."
            InputProps={{
              startAdornment: <SearchIcon sx={{ marginRight: "8px", color: "white" }} />,
            }}
            sx={{
              width: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              borderRadius: "4px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.5)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.8)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              input: {
                color: "white",
              },
            }}
          />
        </Box>

        {/* Icons and Text Below the Search Box */}
        <CardContent sx={{ width: "100%" }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              textAlign: "center",
              color: "white",
              marginTop: "150px",
              justifyContent: "space-between",
              flexWrap: { xs: "wrap", sm: "nowrap" },
            }}
          >
            <Box sx={{ flex: 1, minWidth: { xs: "100%", sm: "auto" }, mb: { xs: 2, sm: 0 } }}>
              <StarIcon sx={{ fontSize: "40px", color: "gold" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                500+
              </Typography>
              <Typography variant="body2">5 Star Ratings</Typography>
            </Box>

            <Box sx={{ flex: 1, minWidth: { xs: "100%", sm: "auto" }, mb: { xs: 2, sm: 0 } }}>
              <SupportAgentIcon sx={{ fontSize: "40px", color: "lightblue" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                24/7
              </Typography>
              <Typography variant="body2">Assistance</Typography>
            </Box>

            <Box sx={{ flex: 1, minWidth: { xs: "100%", sm: "auto" }, mb: { xs: 2, sm: 0 } }}>
              <FlightTakeoffIcon sx={{ fontSize: "40px", color: "lightgreen" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                1000+
              </Typography>
              <Typography variant="body2">Successful Trips</Typography>
            </Box>

            <Box sx={{ flex: 1, minWidth: { xs: "100%", sm: "auto" } }}>
              <PriceCheckIcon sx={{ fontSize: "40px", color: "lightcoral" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                100%
              </Typography>
              <Typography variant="body2">Best Price Assured</Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardsMain;