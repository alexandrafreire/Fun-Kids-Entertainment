import React, { useState, useEffect } from "react";
import {
  View,
  Tabs,
  TabItem,
  TextField,
  Flex,
  SelectField,
  Button,
} from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { Users, Sites } from "../../models";
import { useNavigate } from "react-router-dom";

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

function UsersProfile() {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [uniqueSiteCities, setUniqueSiteCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setIsAuthenticated(true);

        const userQuery = await DataStore.query(Users, user.attributes.sub);
        console.log(userQuery);

        if (userQuery) {
          setUserData(userQuery);
        } else {
          console.log("User not found in the Users table.");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchUniqueCities = async () => {
      try {
        const sites = await DataStore.query(Sites);
        const uniqueCities = Array.from(
          new Set(sites.map((site) => site.siteCity))
        );
        setUniqueSiteCities(uniqueCities);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUniqueCities();
  }, []);

  const handleEditProfile = () => {
    navigate(`/edit-profile/${userData?.id}`);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
                  value={userData.preferredLocation || "Not set"}
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
                  value={userData.preferredAmusementTypes || "Not set"}
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
                  value={userData.preferredAgeRanges || "Not set"}
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
