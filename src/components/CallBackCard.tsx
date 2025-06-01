import React from "react";
import { Card, CardContent, Typography, TextField, Button, Box } from "@mui/material";

const CallBackCard: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Call Back Form Submitted");
  };

  return (
    <Card sx={{ maxWidth: "400px", width: "100%" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Want us to give you a Call Back? Have any Doubts?
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginTop: "10px",
          }}
        >
          <TextField label="Full Name" variant="outlined" fullWidth required />
          <TextField label="Contact Number" variant="outlined" fullWidth required />
          <TextField label="Your Email" variant="outlined" fullWidth required />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CallBackCard;