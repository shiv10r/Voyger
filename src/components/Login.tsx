import React, { useState } from "react";
import "./../assets/Login.css"; // Updated import path

interface LoginProps {
  onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>("mod");
  const [password, setPassword] = useState<string>("shiv");

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");

    if (storedUser) {
      if (
        storedUser.username === username &&
        storedUser.password === password
      ) {
        alert("Login successful!");
        onLogin(username);
      } else {
        alert("Invalid credentials.");
      }
    } else {
      alert("No user found. Please register first.");
    }
  };

  return (
    <div className="login">
      <div className="login-card">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;