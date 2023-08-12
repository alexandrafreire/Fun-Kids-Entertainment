import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import "../../App.css";
import HomePageBanner from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import SitesCollectionCards from "../sections/SitesCollectionCards";
import { Users } from "../../models";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersData = async () => {
      try {
        // fetch the current signed in user
        const user = await Auth.currentAuthenticatedUser();
        // check if the user is authenticated with an API key
        if (user.signInUserSession.accessToken.payload.auth_time === 0) {
          // if the user is authenticated with an API key, do not query the Users table
          console.log("User is authenticated with an API key");
        } else {
          // if the user is not authenticated with an API key, query the Users table
          const usersData = await DataStore.query(Users);
          setUsers(usersData);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getUsersData();
  }, []);

  return (
    <>
      <HomePageBanner />
      <CustomDivider />
      <SitesCollectionCards />
    </>
  );
}

export default Home;
