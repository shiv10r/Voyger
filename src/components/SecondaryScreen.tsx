import React, { useState } from "react";
import { Box, IconButton, Drawer, List, ListItem, ListItemText, Toolbar, AppBar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { NotesCard, MarqueeButtons, accommodationImages, galleryImages, marqueeContent, Videos } from "./Text";
import ImageSlider from "./ImageSlider";
import TripDetailsCard from "./TripDetailsCard";
import Feedback from "./Feedback";
import Connect from "./Connect";
import Cards from "./Cards";
import BackendSupport from "./BackendSupport";
import DayWisePlan from "./DayWisePlan"; // Import the DayWisePlan component
import Contact from "./Contact";

const SecondaryScreen: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<keyof typeof marqueeContent>("cancellation");
  const [selectedTrip, setSelectedTrip] = useState<"Himachal" | "Ladakh">("Himachal");
  const navigate = useNavigate();

  const menuOptions = [
    { text: "International Trip", path: "/international-trip" },
    { text: "Weekend Trip", path: "/weekend-trip" },
    { text: "About Us", path: "/about-us" },
    { text: "Contact Us", path: "/contact-us" },
    { text: "Blogs", path: "/blogs" },
    { text: "Career", path: "/career" },
  ];

  const packageCosts = {
    Himachal: [
      { roomSharing: "Quad Sharing", cost: "8999/-" },
      { roomSharing: "Triple Sharing", cost: "9499/-" },
      { roomSharing: "Double Sharing", cost: "9999/-" },
    ],
    Ladakh: [
      { roomSharing: "Quad Sharing", cost: "12999/-" },
      { roomSharing: "Triple Sharing", cost: "13999/-" },
      { roomSharing: "Double Sharing", cost: "14999/-" },
    ],
  };

  return (
    <Box sx={{ padding: "20px", display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
      {/* AppBar with Hamburger Menu */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Secondary Screen
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer for Hamburger Menu */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <List>
          {menuOptions.map((option, index) => (
            <ListItem
              component="button"
              key={index}
              onClick={() => {
                navigate(option.path);
                setIsDrawerOpen(false);
              }}
            >
              <ListItemText primary={option.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Full-Width Banner Card */}
      <Box sx={{ width: "100%", marginTop: "20px" }}>
        <Cards />
      </Box>

      

        {/* Contact Cards Section */}
        <Box sx={{ width: "100%", marginTop: "20px" }}>
        <Contact />
      </Box>


      {/* DayWisePlan and Package Cost Section */}
      <Box sx={{ display: "flex", flexDirection: "row", gap: 4, width: "100%", marginTop: "20px" }}>
        {/* Left Section: Day Wise Plan */}
        <Box sx={{ flex: 1 }}>
          <DayWisePlan />
        </Box>

        {/* Right Section: Package Cost */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" gutterBottom>
          </Typography>
          <TripDetailsCard tripName={selectedTrip} packageCost={packageCosts[selectedTrip]} />
        </Box>
      </Box>

      {/* Backend Support Section */}
      <Box sx={{ width: "100%", marginTop: "20px" }}>
        <BackendSupport />
      </Box>

      {/* Accommodation Section */}
      <ImageSlider title="Accommodation" images={accommodationImages} />

      {/* Gallery Section */}
      <ImageSlider title="Gallery" images={galleryImages} />
      <ImageSlider title="Videos" images={Videos} />

      {/* Feedback Section */}
      <Box sx={{ width: "100%", marginTop: "20px" }}>
        <Feedback />
      </Box>

      {/* Connect Section */}
      <Box sx={{ width: "100%", marginTop: "20px" }}>
        <Connect />
      </Box>
    </Box>
  );
};

export default SecondaryScreen;