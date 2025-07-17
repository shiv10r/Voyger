import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreen from "./MainScreen";
import SecondaryScreen from "./SecondaryScreen";

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>("John Doe");

  const handleLogout = () => {
    console.log("User logged out");
    setCurrentUser("");
  };

  return (
    <Router>
      <div>
        <Routes>
          {currentUser ? (
            <>
              {/* Route for MainScreen */}
              <Route
                path="/"
                element={<MainScreen username={currentUser} onLogout={handleLogout} />}
              />

              {/* Route for SecondaryScreen */}
              <Route path="/destination/:destinationName" element={<SecondaryScreen />} />
            </>
          ) : (
            <>
              {/* Add routes for login or other screens if needed */}
              <Route path="/" element={<div>Please log in</div>} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;