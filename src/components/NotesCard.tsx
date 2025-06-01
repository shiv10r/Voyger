import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const NotesCard: React.FC = () => {
  return (
    <Card sx={{ maxWidth: "400px", width: "100%" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Notes
        </Typography>
        <Typography variant="body2">
          • Travelers residing outside Delhi are suggested to book trains/flights reaching Delhi not later than 2 PM on the trip start date. Similarly, on the trip end date, book returning flights/trains leaving post 6 PM.
          <br />
          • Numerous factors such as weather, road conditions, the physical ability of participants, etc. may cause itinerary changes. We reserve the right to change any schedule in the interest of safety, comfort, and general well-being.
          <br />
          • The age limit of our group departures is 16 to 42 years due to the power-packed itineraries that we provide to our travelers. We can customize trips for travelers beyond the mentioned age bracket.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NotesCard;