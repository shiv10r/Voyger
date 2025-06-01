import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import Dropdown from "react-bootstrap/Dropdown";

const DayWisePlan: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"DayWisePlan" | "DaysCosting" | "Inclusion">("DayWisePlan");

  const dayPlans: Record<"Day1" | "Day2" | "Day3" | "Day4", string[]> = {
    Day1: ["Activity 1: Arrival at Destination", "Activity 2: Sightseeing", "Activity 3: Dinner and Rest"],
    Day2: ["Activity 4: Morning Trek", "Activity 5: Lunch Break", "Activity 6: Evening Campfire"],
    Day3: ["Activity 7: Adventure Activities", "Activity 8: Local Market Visit", "Activity 9: Departure Prep"],
    Day4: ["Activity 10: Departure", "Activity 11: Feedback Session", "Activity 12: Goodbye"],
  };

  const costingDates = [
    "May 16 to May 21 — Seats Available",
    "May 23 to May 28 — Seats Available",
    "May 30 to Jun 4 — Seats Available",
  ];

  const inclusionDetails = [
    "• Entire travel as per the itinerary.",
    "• 6 meals will be provided throughout the trip (From Dinner on Day 2 to Breakfast on Day 5).",
    "• Accommodation for 2 Night Stay in Manali Hotel and 1 night stay in Kasol Camp/ Hotel.",
    "• Pick up and drop off from Delhi or Chandigarh.",
    "• Experienced Trip Captain.",
    "• Music Night & bonfire (If Weather Allows).",
    "• All tolls, taxes & parking charges.",
    "• Full on Enjoyment & Lifetime Memories.",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Day Wise Plan
      </Typography>

      {/* Horizontal Buttons */}
      <Box sx={{ display: "flex", gap: 2, marginBottom: "20px" }}>
        <Button
          variant={activeTab === "DayWisePlan" ? "contained" : "outlined"}
          color="primary"
          onClick={() => setActiveTab("DayWisePlan")}
        >
          Day Wise Plan
        </Button>
        <Button
          variant={activeTab === "DaysCosting" ? "contained" : "outlined"}
          color="primary"
          onClick={() => setActiveTab("DaysCosting")}
        >
          Days & Costing
        </Button>
        <Button
          variant={activeTab === "Inclusion" ? "contained" : "outlined"}
          color="primary"
          onClick={() => setActiveTab("Inclusion")}
        >
          Inclusion
        </Button>
      </Box>

      {/* Content Section */}
      {activeTab === "DayWisePlan" && (
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {(Object.keys(dayPlans) as Array<"Day1" | "Day2" | "Day3" | "Day4">).map((day) => (
            <Dropdown key={day}>
              <Dropdown.Toggle variant="primary" id={`dropdown-${day}`}>
                {day}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Card sx={{ width: "300px", margin: "10px", backgroundColor: "#f5f5f5" }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {day} Activities
                    </Typography>
                    {dayPlans[day].map((activity, idx) => (
                      <Typography key={idx} variant="body2" sx={{ marginBottom: "10px" }}>
                        {activity}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </Box>
      )}

      {activeTab === "DaysCosting" && (
        <Box>
          <Typography variant="h6" gutterBottom>
            Dates
          </Typography>
          {costingDates.map((date, idx) => (
            <Typography key={idx} variant="body2" sx={{ marginBottom: "10px" }}>
              {date}
            </Typography>
          ))}
          <Button variant="contained" color="secondary" sx={{ marginTop: "10px" }}>
            Book Now
          </Button>
        </Box>
      )}

      {activeTab === "Inclusion" && (
        <Box>
          <Typography variant="h6" gutterBottom>
            Inclusion
          </Typography>
          {inclusionDetails.map((detail, idx) => (
            <Typography key={idx} variant="body2" sx={{ marginBottom: "10px" }}>
              {detail}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default DayWisePlan;