import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CallbackForm from "./../components/Cards/CallbackForm"; // Adjust the import path as necessary
import Grid from "@mui/material/Grid";

const DayWisePlan: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"DayWisePlan" | "DaysCosting" | "Inclusion">("DayWisePlan");
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  const dayPlans = {
    Day1: ["Arrival at Destination", "Sightseeing", "Dinner and Rest"],
    Day2: ["Morning Trek", "Lunch Break", "Evening Campfire"],
    Day3: ["Adventure Activities", "Local Market Visit", "Departure Prep"],
    Day4: ["Departure", "Feedback Session", "Goodbye"],
  };

  const costingDates = [
    "May 16 to May 21 — Seats Available",
    "May 23 to May 28 — Seats Available",
    "May 30 to Jun 4 — Seats Available",
  ];

  const inclusionDetails = [
    "Entire travel as per itinerary",
    "6 meals provided (Dinner on Day 2 to Breakfast on Day 5)",
    "2 Nights in Manali Hotel, 1 Night Kasol Camp",
    "Pickup/drop from Delhi or Chandigarh",
    "Experienced Trip Captain",
    "Bonfire & music (weather dependent)",
    "All tolls, taxes, parking charges",
    "Full enjoyment & lifetime memories",
  ];

  return (
    <Box sx={{ p: 3, bgcolor: "#f9f9f9", borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Day Wise Plan
      </Typography>

      {/* Tabs */}
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <Button
          variant={activeTab === "DayWisePlan" ? "contained" : "outlined"}
          onClick={() => setActiveTab("DayWisePlan")}
        >
          Day Wise Plan
        </Button>
        <Button
          variant={activeTab === "DaysCosting" ? "contained" : "outlined"}
          onClick={() => setActiveTab("DaysCosting")}
        >
          Days & Costing
        </Button>
        <Button
          variant={activeTab === "Inclusion" ? "contained" : "outlined"}
          onClick={() => setActiveTab("Inclusion")}
        >
          Inclusion
        </Button>
      </Box>

      {/* Content */}
      {activeTab === "DayWisePlan" && (
        <Grid container spacing={2}>
          {Object.entries(dayPlans).map(([day, activities]) => (
            <Grid item xs={12} md={6} key={day}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">{day}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {activities.map((activity, idx) => (
                    <Typography key={idx} variant="body2" gutterBottom>
                      • {activity}
                    </Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      )}

      {activeTab === "DaysCosting" && (
        <Box>
          <Typography variant="h6">Upcoming Dates</Typography>
          {costingDates.map((date, idx) => (
            <Typography key={idx} variant="body2" gutterBottom>
              • {date}
            </Typography>
          ))}
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleOpenForm}>
            Book Now
          </Button>
        </Box>
      )}

      {activeTab === "Inclusion" && (
        <Box>
          <Typography variant="h6">What's Included</Typography>
          {inclusionDetails.map((detail, idx) => (
            <Typography key={idx} variant="body2" gutterBottom>
              • {detail}
            </Typography>
          ))}
        </Box>
      )}

      {/* Callback Form Dialog */}
      <CallbackForm open={openForm} handleClose={handleCloseForm} />
    </Box>
  );
};

export default DayWisePlan;
