import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,} from "@mui/material"; 

interface TripDetailsCardProps {
  tripName: string;
  packageCost: { roomSharing: string; cost: string }[];
}

const TripDetailsCard: React.FC<TripDetailsCardProps> = ({ tripName, packageCost }) => {
  useState({
    fullName: "",
    contactNumber: "",
    email: "",
    destination: tripName,
    queryType: "document", // Default query type
  });
  


  return (
    <Card sx={{ maxWidth: "600px", width: "100%", margin: "20px auto" }}>
      <CardContent>
        {/* Package Cost Table */}
        <Typography variant="h5" gutterBottom>
          Package Cost - {tripName}
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Room Sharing</strong></TableCell>
                <TableCell><strong>Cost (per person)</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {packageCost.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.roomSharing}</TableCell>
                  <TableCell>{row.cost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default TripDetailsCard;