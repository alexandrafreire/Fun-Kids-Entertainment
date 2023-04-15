import React, { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { UsersProfile } from "../../models";
import "./ProfileSettings.css";
import config from "../../aws-exports";
import awsExports from "../../aws-exports";
import { Amplify } from "aws-amplify";
Amplify.configure(config);
Amplify.configure(awsExports);

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const userData = await DataStore.query(UsersProfile);
      const userProfile = userData[0]; // Assuming the first user's profile
      setUserProfile(userProfile);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  if (!userProfile) {
    return <div>Loading...</div>;
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
