import "./UsersProfile.css";
import { useState, useEffect, useCallback } from "react";
import { DataStore, Auth } from "aws-amplify";
import { TextField, SelectField, Button, Flex } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";
import { Users, Sites } from "./../../models";

function EditProfile() {
  const [userData, setUserData] = useState(null);
  const [preferredLocations, setPreferredLocations] = useState([]);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [preferredLocation, setPreferredLocation] = useState("");
  const [preferredAgeRanges, setPreferredAgeRanges] = useState("");
  const [preferredAmusementTypes, setPreferredAmusementTypes] = useState("");
  const [message, setMessage] = useState("");

  const siteAgeRangesDisplayNames = {
    FAMILY_ACTIVITIES: "Family Activities",
    TODDLER: "Toddler",
    PRESCHOOLER: "Preschooler",
    SCHOOL_AGED_CHILD: "School Aged Child",
    ALL_AGES_KIDS: "All Ages Kids",
    ADOLESCENTS_ADULTS: "Adolescents & Adults",
  };

  const amusementTypeNameDisplayNames = {
    PLAYGROUND: "Playground",
    AMUSEMENT_PARK: "Amusement Park",
    EXHIBITION: "Exhibition",
    NATURE_ANIMALS: "Nature & Animals",
    WATER_PARK: "Water Park",
    MUSEUM: "Museum",
    BEACH: "Beach",
    LANDSCAPE: "Landscape",
  };

  const fetchUserData = useCallback(async () => {
    try {
      // Check if the user is authenticated and if their token is still valid.
      const currentUser = await Auth.currentAuthenticatedUser();
      const session = await Auth.currentSession();
      const isTokenExpired =
        session.getIdToken().getExpiration() < new Date().getTime() / 1000;
      if (isTokenExpired) {
        await currentUser.getSession();
      }

      console.log("Current User: ", currentUser);

      const userQuery = await DataStore.query(Users, id);
      setUserData(userQuery);
      setName(userQuery.name);
      setEmail(userQuery.email);
      setUsername(userQuery.username);
      setPreferredLocation(userQuery.preferredLocation);
      setPreferredAgeRanges(userQuery.preferredAgeRanges);
      setPreferredAmusementTypes(userQuery.preferredAmusementTypes);

      const sites = await DataStore.query(Sites);
      const uniqueSiteCities = Array.from(
        new Set(sites.map((site) => site.siteCity))
      );
      setPreferredLocations(uniqueSiteCities);
    } catch (err) {
      console.error(err);
    }
  }, [id]);

  useEffect(() => {
    fetchUserData();

    const subscription = DataStore.observe(Users).subscribe((msg) => {
      if (msg.opType === "UPDATE") {
        console.log("User data updated in DataStore:", msg.element);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [fetchUserData]);

  const handleUpdateProfile = async () => {
    if (!userData) return;

    try {
      const existingUser = await DataStore.query(Users, userData.id);

      const updatedUser = await DataStore.save(
        Users.copyOf(existingUser, (updated) => {
          updated.name = name;
          updated.email = email;
          updated.username = username;
          updated.preferredLocation = preferredLocation;
          updated.preferredAgeRanges = preferredAgeRanges;
          updated.preferredAmusementTypes = preferredAmusementTypes;
        })
      );

      console.log("User profile updated:", updatedUser);

      // Force a sync with the backend
      await DataStore.start();

      // Fetch the updated user from the DataStore
      const latestUserData = await DataStore.query(Users, updatedUser.id);
      console.log("Updated user data from the DataStore:", latestUserData);
      setMessage("User profile updated successfully.");

      // Fetch the latest user data and update the state
      fetchUserData();
    } catch (err) {
      console.error("Error updating user profile:", err);
      setMessage("Error updating user profile.");
    }
  };

  return (
    <>
      {userData ? (
        <div className="edit-profile-view">
          <h1>Edit Profile</h1>
          <Flex direction="column">
            <TextField
              label="Name"
              size="default"
              width="25%"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Username"
              size="default"
              width="25%"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              isDisabled={true}
            />
            <TextField
              label="Email"
              size="default"
              width="25%"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isDisabled={true}
            />
            <SelectField
              label="Preferred Location"
              size="default"
              width="25%"
              value={preferredLocation}
              onChange={(e) => setPreferredLocation(e.target.value)}
            >
              {preferredLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </SelectField>
            <SelectField
              label="Preferred Amusement Types"
              size="default"
              width="25%"
              value={preferredAmusementTypes}
              onChange={(e) => setPreferredAmusementTypes(e.target.value)}
            >
              {Object.entries(amusementTypeNameDisplayNames).map(
                ([value, displayName]) => (
                  <option key={value} value={value}>
                    {displayName}
                  </option>
                )
              )}
            </SelectField>
            <SelectField
              label="Preferred Age Ranges"
              size="default"
              width="25%"
              value={preferredAgeRanges}
              onChange={(e) => setPreferredAgeRanges(e.target.value)}
            >
              {Object.entries(siteAgeRangesDisplayNames).map(
                ([value, displayName]) => (
                  <option key={value} value={value}>
                    {displayName}
                  </option>
                )
              )}
            </SelectField>
          </Flex>
          <Button onClick={handleUpdateProfile}>Save Changes</Button>
          {message && <p>{message}</p>}
        </div>
      ) : (
        <div>
          <h2>Loading user data...</h2>
        </div>
      )}
    </>
  );
}

export default EditProfile;
