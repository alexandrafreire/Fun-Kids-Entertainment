import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import "../../App.css";
import { Users, Sites } from "../../models";
import HomePageBanner from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import SitesCollectionCards from "../sections/SitesCollectionCards";

function Home() {
  const [sites, setSites] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch sites
        const fetchedSites = await DataStore.query(Sites);
        setSites(fetchedSites);

        // Check user authentication
        const user = await Auth.currentAuthenticatedUser();
        setCurrentUser(user);
        const userData = await DataStore.query(Users, user.attributes.sub);
        console.log(userData);
      } catch (error) {
        if (error === "The user is not authenticated") {
          console.log("User is not signed in");
        } else {
          console.error("Error:", error);
        }
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <HomePageBanner />
      <CustomDivider />
      {currentUser ? (
        <p>Welcome back, {currentUser.attributes.name}!</p>
      ) : (
        <p>Please sign in to see personalized content.</p>
      )}
      <SitesCollectionCards sites={sites} />
    </>
  );
}

export default Home;
