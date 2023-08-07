import "./UsersProfile.css";
import { useState, useEffect, useCallback } from "react";
import { DataStore, Auth } from "aws-amplify";
import { TextField, SelectField, Button, Flex } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";
import { Users, City } from "./../../models";

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
  const [isSaved, setIsSaved] = useState(false);

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
      setPreferredLocation(userQuery.preferredLocation.cityName);
      setPreferredAgeRanges(userQuery.preferredAgeRanges);
      setPreferredAmusementTypes(userQuery.preferredAmusementTypes);

      const cities = await DataStore.query(City);
      const uniqueCityNames = Array.from(
        new Set(cities.map((city) => city.cityName))
      );
      setPreferredLocations(uniqueCityNames);
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
      const cities = await DataStore.query(City, (c) =>
        c.cityName.eq(preferredLocation)
      );
      const city = cities[0];
      if (!city) {
        console.error(`City with name ${preferredLocation} not found.`);
        return;
      }

      const existingUser = await DataStore.query(Users, userData.id);

      const updatedUser = await DataStore.save(
        Users.copyOf(existingUser, (updated) => {
          updated.name = name;
          updated.email = email;
          updated.username = username;
          updated.preferredLocation = city; // Set the city object as the preferred location
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

      setIsSaved(true); // Mark the form as saved

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
              isDisabled={isSaved}
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
              isDisabled={isSaved}
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
              isDisabled={isSaved}
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
              isDisabled={isSaved}
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
          <Button onClick={handleUpdateProfile} isDisabled={isSaved}>
            Save Changes
          </Button>
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
