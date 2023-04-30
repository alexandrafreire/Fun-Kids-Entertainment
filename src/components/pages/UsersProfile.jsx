import "../../App.css";
import "./UsersProfile.css";
import {
  View,
  Tabs,
  TabItem,
  Image,
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
  }, []);

  const navigate = useNavigate();

  return (
    <>
      {isAuthenticated && userData ? (
        <View className="profile-view">
          <Tabs justifyContent="flex-start">
            <TabItem title="User Profile">
              Profile Page
              <Image
                alt="ProfilePic"
                src={userData.profilePic || "/amplify-logo.svg"}
                objectFit="initial"
                objectPosition="50% 50%"
                backgroundColor="initial"
                height="40%"
                width="40%"
                opacity="100%"
              />
              <Flex direction="column">
                <TextField
                  label="Name"
                  size="default"
                  width="75%"
                  value={userData.name}
                  readOnly
                  isDisabled={true}
                />
                <TextField
                  label="Username"
                  size="default"
                  width="75%"
                  value={userData.username}
                  readOnly
                  isDisabled={true}
                />
                <TextField
                  label="Email"
                  size="default"
                  width="75%"
                  value={userData.email}
                  readOnly
                  isDisabled={true}
                />
                <SelectField
                  label="Preferred Location"
                  size="default"
                  width="75%"
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
                  width="75%"
                  isDisabled={true}
                  defaultValue={userData.preferredAmusementTypes}
                  readOnly
                  isDisabled={true}
                ></SelectField>
                <SelectField
                  label="Preferred Age Range"
                  size="default"
                  width="75%"
                  defaultValue={userData.preferredAgeRanges}
                  readOnly
                  isDisabled={true}
                >
                  {/* Add preferred age ranges options */}
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
            <TabItem title="Tab 2">Favorite Sites</TabItem>
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
