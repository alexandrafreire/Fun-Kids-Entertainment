import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth, Hub } from "aws-amplify";
import "./Navbar.css";
import logo from "./../../images/logo.png";
import DropdownExplore from "./DropdownExplore";
import DropdownOnTheWay from "./DropdownOnTheWay";
import { ButtonSignIn, ButtonContactUs } from "./Button";
import useAdminCheck from "./../pages/AdminCheck";

function Navbar() {
  const [click, setClick] = useState(false);
  const [Dropdown, setDropdown] = useState(false);
  const [Dropdown1, setDropdown1] = useState(false);
  const [showDropdownProfile, setShowDropdownProfile] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [username, setUsername] = useState("");
  const isAdmin = useAdminCheck();
  console.log(isAdmin);

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

  const toggleDropdownProfile = () => {
    setShowDropdownProfile(
      (prevShowDropdownProfile) => !prevShowDropdownProfile
    );
  };

  const [signedIn, setSignedIn] = useState(false);
  const [profilePicUrl, setProfilePicUrl] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setSignedIn(!!user);
        setProfilePicUrl(user.attributes.profilePic);
        setUsername(user.attributes.username || user.attributes.name);
      } catch (error) {
        setSignedIn(false);
      }
    };

    checkUser();

    const listener = Hub.listen("auth", async (data) => {
      switch (data.payload.event) {
        case "signIn":
        case "signOut":
          await checkUser();
          navigate("/");
          break;
        default:
          break;
      }
    });

    return () => {
      Hub.listen("auth", listener);
    };
  }, [navigate]);

  return (
    <>
      <nav className="navbar-top">
        <ul className={`nav-top-items ${signedIn ? "signed-in" : ""}`}>
          <li>
            <ButtonContactUs />
          </li>
          {signedIn ? (
            <li className="nav-item-profile" onClick={toggleDropdownProfile}>
              <div className="profile-container">
                {profilePicUrl ? (
                  <img
                    src={profilePicUrl}
                    alt="Profile"
                    className="profile-pic"
                  />
                ) : (
                  <i className="far fa-user-circle fa-lg"></i>
                )}
                <span className="username">{username}</span>
              </div>
              {showDropdownProfile && (
                <ul className="dropdown-menu-profile">
                  <li>
                    <Link to="/UsersProfile" className="nav-links">
                      Profile Settings
                    </Link>
                  </li>
                  {isAdmin && (
                    <li>
                      <Link to="/Admin" className="nav-links">
                        Admin Panel
                      </Link>
                    </li>
                  )}
                  <li>
                    <div
                      className="nav-links signout-btn"
                      role="button"
                      tabIndex="0"
                      onClick={() => Auth.signOut()}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          Auth.signOut();
                        }
                      }}
                    >
                      Sign Out
                    </div>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li>
              <ButtonSignIn />
            </li>
          )}
        </ul>
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
