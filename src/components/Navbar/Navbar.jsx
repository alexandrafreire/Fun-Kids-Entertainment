import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./../../images/logo.png";
import DropdownExplore from "./DropdownExplore";
import DropdownOnTheWay from "./DropdownOnTheWay";
import { ButtonSignIn, ButtonContactUs } from "./Button";

function Navbar() {
  //Update the state
  const [click, setClick] = useState(false);

  const [Dropdown, setDropdown] = useState(false);
  const [Dropdown1, setDropdown1] = useState(false);

  //Set state to be the opositive of what it is when the user clicks the icon
  const handleClick = () => setClick(!click);
  //For Mobile pages, on click menu not visible when the user selects an option
  const closeMobileMenu = () => setClick(false);

  //Remove dropdown if inner width < 960 - DropdownExplore
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  //Remove dropdown if inner width < 960 - DropdownOnTheWay
  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };

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
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo} width="338" height="57" className="logo" alt="" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {/*if click=true place "fas fa-times icon", if false place "fas fa-bars" icon*/}
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/Explore" className="nav-links" onClick={closeMobileMenu}>
              Explore <i className="fas fa-caret-down" />
            </Link>
            {Dropdown && <DropdownExplore />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <Link
              to="/OnTheWay"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              On The Way <i className="fas fa-caret-down" />
            </Link>
            {/*if drop down is true*/}
            {Dropdown1 && <DropdownOnTheWay />}
          </li>
          <li className="nav-item">
            <Link
              to="/Subscribe"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Subscribe
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
