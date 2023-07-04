import "../../App.css";
import "./UsersProfile.css";
import {
  View,
  Tabs,
  TabItem,
  TextField,
  Flex,
  SelectField,
  Button,
} from "@aws-amplify/ui-react";
import { useEffect, useState, useRef } from "react";
import { Auth } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { Users, Sites } from "../../models";
import { useNavigate } from "react-router-dom";

function UsersProfile() {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [preferredLocation, setPreferredLocation] = useState("");
  const [preferredAgeRange, setPreferredAgeRange] = useState("");
  const [preferredAmusementType, setPreferredAmusementType] = useState("");
  const [uniqueSiteCities, setUniqueSiteCities] = useState([]);
  const navigate = useNavigate(); // Move it to the top level of your function.

  const handleEditProfile = () => {
    navigate(`/edit-profile/${userData.id}`);
  };

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

  const userDataIdRef = useRef();

  useEffect(() => {
    const getData = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setIsAuthenticated(true);

        const userQuery = await DataStore.query(Users, user.attributes.sub);
        console.log(userQuery);

        if (userQuery) {
          setUserData(userQuery);
          userDataIdRef.current = userQuery.id;

          // Set the state variables when the user data is fetched
          setName(userQuery.name);
          setEmail(userQuery.email);
          setUsername(userQuery.username);
          setPreferredLocation(userQuery.preferredLocation);
          setPreferredAgeRange(userQuery.preferredAgeRanges);
          setPreferredAmusementType(userQuery.preferredAmusementTypes);

          const sites = await DataStore.query(Sites);
          const uniqueCities = Array.from(
            new Set(sites.map((site) => site.siteCity))
          );
          setUniqueSiteCities(uniqueCities);
        } else {
          console.log("User not found in the Users table.");
        }
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    // Observe changes in Users table and update userData when the user is updated
    const subscription = DataStore.observe(Users).subscribe((msg) => {
      if (msg.opType === "UPDATE" && msg.element.id === userDataIdRef.current) {
        setUserData(msg.element);
      }
    });

    // Unsubscribe from the DataStore.observe when the component is unmounted
    return () => subscription.unsubscribe();
  }, []); // Added userData?.id here

  useEffect(() => {
    console.log(userData);
  }, [userData]); // New useEffect to log userData when it changes

  return (
    <>
      {isAuthenticated && userData ? (
        <View className="profile-view" key={userData.id}>
          <Tabs justifyContent="flex-start">
            <TabItem title="User Profile">
              <Flex direction="column">
                <TextField
                  label="Name"
                  size="default"
                  width="25%"
                  value={name}
                  readOnly
                  isDisabled={true}
                />
                <TextField
                  label="Username"
                  size="default"
                  width="25%"
                  value={username}
                  readOnly
                  isDisabled={true}
                />
                <TextField
                  label="Email"
                  size="default"
                  width="25%"
                  value={email}
                  readOnly
                  isDisabled={true}
                />
                <SelectField
                  label="Preferred Location"
                  size="default"
                  width="25%"
                  value={preferredLocation || "Not set"}
                  readOnly
                  isDisabled={true}
                >
                  {uniqueSiteCities.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </SelectField>
                <SelectField
                  label="Preferred Activities"
                  size="default"
                  width="25%"
                  isDisabled={true}
                  value={preferredAmusementType || "Not set"}
                  readOnly
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
                  label="Preferred Age Range"
                  size="default"
                  width="25%"
                  value={preferredAgeRange || "Not set"}
                  readOnly
                  isDisabled={true}
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
              <Button
                variation="primary"
                loadingText=""
                onClick={handleEditProfile}
                ariaLabel=""
              >
                Edit profile
              </Button>
            </TabItem>
            <TabItem title="Favorite Sites"></TabItem>
          </Tabs>
        </View>
      ) : (
        <div>
          <h2>User is not found</h2>
        </div>
      )}
    </>
  );
}

export default UsersProfile;
