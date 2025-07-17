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
  TableRow,
  TextField,
  Button,
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface TripDetailsCardProps {
  tripName: string;
  packageCost: { roomSharing: string; cost: string }[];
}

const TripDetailsCard: React.FC<TripDetailsCardProps> = ({ tripName, packageCost }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    destination: tripName,
    queryType: "document", // Default query type
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQueryTypeChange = (e: SelectChangeEvent<string>) => {
    setFormData((prev) => ({ ...prev, queryType: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add logic to handle form submission (e.g., API call)
  };

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