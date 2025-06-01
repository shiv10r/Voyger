import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

interface TripDetailsProps {
  trips: {
    customizeTrips: { title: string; image: string }[];
    spitiTrips: { title: string; image: string }[];
    himachalTrips: { title: string; image: string }[];
  };
}

const TripDetails: React.FC<TripDetailsProps> = ({ trips }) => {
  const renderTrips = (title: string, tripData: { title: string; image: string }[]) => (
    <div>
      <Typography variant="h4" component="div" sx={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 2,
          padding: 2,
        }}
      >
        {tripData.map((trip, index) => (
          <Card key={index} sx={{ maxWidth: 250, flex: "1 1 calc(25% - 20px)", marginBottom: "20px" }}>
            <img
              src={"https://plus.unsplash.com/premium_photo-1661878942694-6adaa2ce8175?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} // Use the dynamic image URL from the trip data
              alt={trip.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {trip.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );

  return (
    <div>
      {renderTrips("Customize Trips", trips.customizeTrips)}
      {renderTrips("Spiti Trips", trips.spitiTrips)}
      {renderTrips("Himachal Trips", trips.himachalTrips)}
    </div>
  );
};

export default TripDetails;