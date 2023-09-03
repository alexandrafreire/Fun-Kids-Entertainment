import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Amplify
import { Amplify } from "aws-amplify";

//Pages
import Navbar from "./components/navigation/Navbar";
import UsersProfile from "./components/pages/UsersProfile";
import EditProfile from "./components/pages/EditProfile";
import Home from "./components/pages/Home";
import IndoorActivities from "./components/pages/IndoorActivities";
import OutdoorActivities from "./components/pages/OutdoorActivities";
import CultureShows from "./components/pages/CultureShows";
import Games from "./components/pages/Games";
import MoviesTvShows from "./components/pages/MoviesTvShows";
import Books from "./components/pages/Books";
import SuggestAnActivity from "./components/pages/SuggestAnActivity";
import ContactUs from "./components/pages/ContactUs";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Footer from "./components/sections/Footer";
import SignUp from "./components/pages/SignUp";
import Admin from "./components/pages/Admin";
import Error from "./components/pages/Error";
import "./App.css";

// Amplify Configurations
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Explore/IndoorActivities"
          element={<IndoorActivities />}
        />
        <Route
          path="/Explore/OutdoorActivities"
          element={<OutdoorActivities />}
        />
        <Route path="/Explore/CultureShows" element={<CultureShows />} />
        <Route path="/OnTheWay/Games" element={<Games />} />
        <Route path="/OnTheWay/MoviesTvShows" element={<MoviesTvShows />} />
        <Route path="/OnTheWay/Books" element={<Books />} />
        <Route path="/SuggestAnActivity" element={<SuggestAnActivity />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/SignUp/" element={<SignUp />} />
        <Route path="/Admin/" element={<Admin />} />
        <Route path="/UsersProfile" element={<UsersProfile />} />
        <Route path="/edit-profile/:id" element={<EditProfile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
