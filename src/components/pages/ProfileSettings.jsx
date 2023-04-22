import React, { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { UsersProfile } from "../../models";
import { useNavigate } from "react-router-dom";
import { Auth } from "@aws-amplify/auth";
import "./ProfileSettings.css";
import config from "../../aws-exports";
import awsExports from "../../aws-exports";
import { Amplify } from "aws-amplify";
Amplify.configure(config);
Amplify.configure(awsExports);

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const checkAuth = async () => {
      try {
        await Auth.currentAuthenticatedUser();
      } catch (error) {
        console.error("User is not authenticated:", error);
        navigate("/SignIn");
      }
    };

    checkAuth();
  }, [navigate]);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const userData = await DataStore.query(UsersProfile);
      if (userData.length > 0) {
        const userProfile = userData[0]; // Assuming the first user's profile
        setUserProfile(userProfile);
      } else {
        // No user profile found
        setUserProfile(null);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  if (!userProfile) {
    return <div>No user profile found.</div>;
  }

  return (
    <div className="user-profile">
      <div className="top-menu">
        <img
          src={userProfile.profilePic}
          alt="Profile"
          className="profile-pic"
        />
        <div className="user-fav-sites">
          {userProfile.UsersFavSites.map((site, index) => (
            <div key={index}>{site}</div>
          ))}
        </div>
        <button>Edit Profile</button>
      </div>
      <div className="left-side">
        <div>Username: {userProfile.name}</div>
        <div>Email: {userProfile.email}</div>
        <div>Username: {userProfile.username}</div>

        <div>
          Preferred Age Ranges:
          <select>
            {userProfile.preferredAgeRanges.map((range, index) => (
              <option key={index} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
        <div>
          Preferred Activities:
          <select>
            {userProfile.preferredAmusementTypes.map((activity, index) => (
              <option key={index} value={activity}>
                {activity}
              </option>
            ))}
          </select>
        </div>
        <div>Preferred Location: {userProfile.preferredLocation}</div>
      </div>
    </div>
  );
};

export default UserProfile;
