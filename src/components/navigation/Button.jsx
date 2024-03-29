import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export function ButtonSignIn() {
  return (
    <Link to="SignUp">
      <button className="btn-sign-in">Sign In</button>
    </Link>
  );
}

export function ButtonContactUs() {
  return (
    <Link to="ContactUs">
      <button className="btn-Contact-us">Contact Us</button>
    </Link>
  );
}
