import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./auth/Login";
import Create_Account from "./auth/Create_Account";
import Home_Dashboard from "./pages/HomeDashboard/home_dashboard";
import Leaderboard_Dashboard from "./pages/LeaderboardDashboard/leaderboard_dashboard";
import Learning_Dashboard from "./pages/LearningDashboard/learning_dashboard";
import Logout_Dashboard from "./pages/LogoutDashboard/logout_dashboard";
import Profile_Dashboard from "./pages/Profile Dashboard/profile_dashboard";
import Test_Dashboard from "./pages/TestDashboard/test_dashboard";

function App() {
  return (
    <>
       <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create_account" element={<Create_Account />} />
          <Route path="/home_dashboard" element={<Home_Dashboard/>} />
          <Route path="/learning_dashboard" element={<Learning_Dashboard/>} />
          <Route path="/leaderboard_dashboard" element={<Leaderboard_Dashboard />} />
          <Route path="/test_dashboard" element={<Test_Dashboard />} />
          <Route path="/profile_dashboard" element={<Profile_Dashboard />} />
          <Route path="/logout_dashboard" element={<Logout_Dashboard/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
