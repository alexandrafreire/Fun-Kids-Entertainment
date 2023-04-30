import React, { useState, useEffect } from "react";
import { MenuItemsUsersProfile } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Auth } from "aws-amplify";

const DropdownProfile = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  };

  useEffect(() => {
    const closeDropdown = () => {
      setClick(false);
    };

    document.addEventListener("click", closeDropdown, { capture: true });

    return () => {
      document.removeEventListener("click", closeDropdown, {
        capture: true,
      });
    };
  }, []);

  return (
    <div className="dropdown-profile-container">
      <div className="profile-container" onClick={handleClick}>
        <i className="far fa-user-circle fa-lg"></i>
        <i className={click ? "fas fa-caret-up" : "fas fa-caret-down"}></i>
      </div>
      <ul
        className={
          click ? "dropdown-menu-profile clicked" : "dropdown-menu-profile"
        }
      >
        {MenuItemsUsersProfile.map((item, index) => {
          if (item.title === "Sign Out") {
            return (
              <li key={index}>
                <button
                  onClick={() => {
                    signOut();
                    closeMobileMenu();
                  }}
                  className="signout-btn"
                >
                  {item.title}
                </button>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default DropdownProfile;
