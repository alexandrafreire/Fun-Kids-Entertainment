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
import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { Users, Sites } from "../../models";
import { Predicates } from "@aws-amplify/datastore";
import { useNavigate } from "react-router-dom";

function UsersProfile() {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [preferredLocations, setPreferredLocations] = useState([]);

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

  useEffect(() => {
    const getData = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setIsAuthenticated(true);

        const userQuery = await DataStore.query(Users, Predicates.ALL, {
          filter: (u) => u.id("eq", user.attributes.sub),
        });

        if (userQuery.length > 0) {
          setUserData(userQuery[0]);

          const sites = await DataStore.query(Sites);
          const uniqueSiteCities = Array.from(
            new Set(sites.map((site) => site.siteCity))
          );
          setPreferredLocations(uniqueSiteCities);
        } else {
          console.log("User not found in the Users table.");
        }
      } catch (err) {
        console.error(err);
      }
    };

    getData();

    // Observe changes in Users table and update userData when the user is updated
    const subscription = DataStore.observe(Users).subscribe((msg) => {
      if (msg.opType === "UPDATE" && msg.element.id === userData?.id) {
        setUserData(msg.element);
      }
    });

    // Unsubscribe from the DataStore.observe when the component is unmounted
    return () => subscription.unsubscribe();
  }, [userData]);

  const navigate = useNavigate();

  return (
    <>
      {isAuthenticated && userData ? (
        <View className="profile-view">
          <Tabs justifyContent="flex-start">
            <TabItem title="User Profile">
              <Flex direction="column">
                <TextField
                  label="Name"
                  size="default"
                  width="25%"
                  value={userData.name}
                  readOnly
                  isDisabled={true}
                />
                <TextField
                  label="Username"
                  size="default"
                  width="25%"
                  value={userData.username}
                  readOnly
                  isDisabled={true}
                />
                <TextField
                  label="Email"
                  size="default"
                  width="25%"
                  value={userData.email}
                  readOnly
                  isDisabled={true}
                />
                <SelectField
                  label="Preferred Location"
                  size="default"
                  width="25%"
                  defaultValue={userData.preferredLocation}
                  readOnly
                  isDisabled={true}
                >
                  {preferredLocations.map((location) => (
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
                  defaultValue={userData.preferredAmusementTypes}
                  readOnly
                >
                  {Object.values(amusementTypeNameDisplayNames).map(
                    (activity) => (
                      <option key={activity} value={activity}>
                        {activity}
                      </option>
                    )
                  )}
                </SelectField>

                <SelectField
                  label="Preferred Age Range"
                  size="default"
                  width="25%"
                  defaultValue={userData.preferredAgeRanges}
                  readOnly
                  isDisabled={true}
                >
                  {Object.values(siteAgeRangesDisplayNames).map((ageRange) => (
                    <option key={ageRange} value={ageRange}>
                      {ageRange}
                    </option>
                  ))}
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
