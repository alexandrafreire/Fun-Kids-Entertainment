import React from "react";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Explore from "./components/pages/Explore";
import IndoorActivities from "./components/pages/IndoorActivities";
import OutdoorActivities from "./components/pages/OutdoorActivities";
import ConcertsShows from "./components/pages/ConcertsShows";
import OnTheWay from "./components/pages/OnTheWay";
import Games from "./components/pages/Games";
import MoviesTvShows from "./components/pages/MoviesTvShows";
import Books from "./components/pages/Books";
import Subscribe from "./components/pages/Subscribe";
import ContactUs from "./components/pages/ContactUs.tsx";
import Profile from "./components/pages/Profile";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsOfService from "./components/pages/TermsOfService";
import Footer from "./components/sections/Footer";
import SignUp from "./components/pages/SignUp";
import Error from "./components/pages/Error";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore/" element={<Explore />} />
        <Route
          path="/Explore/IndoorActivities"
          element={<IndoorActivities />}
        />
        <Route
          path="/Explore/OutdoorActivities"
          element={<OutdoorActivities />}
        />
        <Route path="/Explore/ConcertsShows" element={<ConcertsShows />} />
        <Route path="/OnTheWay" element={<OnTheWay />} />
        <Route path="/OnTheWay/Games" element={<Games />} />
        <Route path="/OnTheWay" element={<Home />} />
        <Route path="/OnTheWay/MoviesTvShows" element={<MoviesTvShows />} />
        <Route path="/OnTheWay/Books" element={<Books />} />
        <Route path="/Subscribe" element={<Subscribe />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/SignUp/" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
