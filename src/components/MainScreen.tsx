import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ImageSlider from "./ImageSlider"; // Import the reusable ImageSlider component
import { trendingDestinations } from "./Text"; // Import trendingDestinations from Text.tsx
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Connect from "./Connect";
import UpcomingTrip from "./UpcomingTrip";
import CardsMain from "./MainScreen/CardMain";
import MainMidCards from "./Cards/MainMidCards";


interface MainScreenProps {
  username: string;
  onLogout: () => void;
}

const MainScreen: React.FC<MainScreenProps> = ({ username, onLogout }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const menuOptions = [
    { text: "International Trip", path: "/international-trip" },
    { text: "Weekend Trip", path: "/weekend-trip" },
    { text: "About Us", path: "/about-us" },
    { text: "Contact Us", path: "/contact-us" },
    { text: "Blogs", path: "/blogs" },
    { text: "Career", path: "/career" },
  ];

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  const handleCardClick = (destinationName: string) => {
    navigate(`/destination/${destinationName}`); // Navigate to the SecondaryScreen with the destination name
  };

  return (
    <Box>
      {/* AppBar with Hamburger Menu */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome, {username}!
          </Typography>
          <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer for Hamburger Menu */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => toggleDrawer(false)}>
        <List>
          {menuOptions.map((option, index) => (
            <ListItem
              component="button"
              key={index}
              onClick={() => {
                toggleDrawer(false);
                navigate(option.path); // Navigate to the selected path
              }}
            >
              <ListItemText primary={option.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

    {/* Upcoming Trips Section */}
    <Box sx={{ width: "100%", marginTop: "20px" }}>
            <CardsMain />
          </Box>
    

      {/* Upcoming Trips Section */}
      <Box sx={{ width: "100%", marginTop: "20px" }}>
        <UpcomingTrip />
      </Box>
  

      {/* Upcoming Trips Section */}
      <Box sx={{ width: "100%", marginTop: "20px" }}>
        <MainMidCards/>
      </Box>

      {/* Connect Section */}
      <Box sx={{ width: "100%", marginTop: "20px" }}>
        <Connect />
      </Box>
    </Box>
  );
};

export default MainScreen;