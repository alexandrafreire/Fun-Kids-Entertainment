import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarTop.css";
import { ButtonSignIn, ButtonContactUs } from "./Button";

function NavbarTop() {
  //Update the state
  const [click, setClick] = useState(false);

  return (
    <>
      <nav className="navbar-top">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/SignUp" className="nav-links-mobile">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" className="nav-links-mobile">
              Sign In
            </Link>
          </li>
        </ul>
        <ButtonContactUs />
        <ButtonSignIn />
      </nav>
    </>
  );
}

export default NavbarTop;
