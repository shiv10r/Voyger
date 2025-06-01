import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Button } from "@mui/material";
import "./../assets/Register.css";

interface RegisterProps {
  onRegister: () => void;
  onSwitchToLogin: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister, onSwitchToLogin }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = () => {
    if (username && password) {
      localStorage.setItem(
        "user",
        JSON.stringify({ username, password })
      );
      alert("User registered successfully!");
      setUsername("");
      setPassword("");
      onRegister(); // Notify parent that registration is complete
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="register">
      <Card className="register-card" elevation={3}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Register
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleRegister}
          >
            Register
          </Button>
          <Typography variant="body2" align="center" sx={{ marginTop: "10px" }}>
            Already have an account?{" "}
            <Button color="secondary" onClick={onSwitchToLogin}>
              Login
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;