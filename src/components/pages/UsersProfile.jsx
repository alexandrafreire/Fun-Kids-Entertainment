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
  Icon,
  Button,
} from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import "../../App.css";
import { Users } from "../../models";
import { Sites } from "../../models";
import { useSearchParams } from "react-router-dom";

function UsersProfile() {
  const [users, setUsers] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { id } = useSearchParams();

  useEffect(() => {
    const getUsersData = async () => {
      try {
        // fetch the current signed in user
        const user = await Auth.currentAuthenticatedUser();
        // query the Users table
        const usersData = await DataStore.query(Users);
        setUsers(usersData);
        setIsAuthenticated(true);
      } catch (err) {
        console.error(err);
      }
    };
    getUsersData();
  }, [id]);

  return (
    <>
      {isAuthenticated ? (
        <View className="profile-view">
          <Tabs justifyContent="flex-start">
            <TabItem title="Tab 1">
              Profile Page
              <Image
                alt="ProfilePic"
                src="/amplify-logo.svg"
                objectFit="initial"
                objectPosition="50% 50%"
                backgroundColor="initial"
                height="40%"
                width="40%"
                opacity="100%"
              />
              <Flex direction="column">
                <TextField label="Username" size="default" width="75%" />
                <TextField label="email" size="default" width="75%" />
                <SelectField
                  label="Preferred Location"
                  size="default"
                  width="75%"
                >
                  <option value="apple">Apple</option>
                  <option value="banana">Banana</option>
                  <option value="orange">Orange</option>
                </SelectField>
                <SelectField
                  label="Preferred Activities"
                  size="default"
                  width="75%"
                >
                  <option value="apple">Apple</option>
                  <option value="banana">Banana</option>
                  <option value="orange">Orange</option>
                </SelectField>
                <SelectField
                  label="Preferred Age Range"
                  size="default"
                  width="75%"
                >
                  <option value="apple">Apple</option>
                  <option value="banana">Banana</option>
                  <option value="orange">Orange</option>
                </SelectField>
              </Flex>
              <Button
                variation="primary"
                loadingText=""
                onClick={() => alert("hello")}
                ariaLabel=""
              >
                Edit profile
              </Button>
            </TabItem>
            <TabItem title="Tab 2">Favorite Sites</TabItem>
          </Tabs>
        </View>
      ) : (
        <div>{<h2>User is not found</h2>}</div>
      )}
    </>
  );
}

export default UsersProfile;
