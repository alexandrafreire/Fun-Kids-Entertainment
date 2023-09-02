import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import { Users, Sites } from "../../models";
import "../../App.css";
import { HomePageBanner } from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import SitesHomePage from "../sections/SitesHomePage";
import fetchSitesBasedOnUserPreferences from "../sections/fetchSitesUserPreferences";

function Home() {
  const [allSites, setAllSites] = useState([]);
  const [filteredSites, setFilteredSites] = useState([]);
  const [userStatus, setUserStatus] = useState("guest");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        console.log("User authenticated");
        setUserStatus("authenticated");

        const queriedAllSites = await DataStore.query(Sites, Predicates.ALL);
        setAllSites(queriedAllSites);
        console.log("All sites fetched:", queriedAllSites);

        const userData = await DataStore.query(Users, user.attributes.sub);
        if (userData) {
          console.log("User has preferences:", userData);
          setUserStatus("hasPreferences");

          const queriedFilteredSites = await fetchSitesBasedOnUserPreferences(
            user.attributes.sub
          );
          console.log("Filtered sites fetched:", queriedFilteredSites);
          setFilteredSites(queriedFilteredSites);
        }
      } catch (err) {
        console.info(
          "The user is not authenticated. Fetching all sites for guest users."
        );
        setUserStatus("guest");

        const queriedAllSites = await DataStore.query(Sites, Predicates.ALL);
        setAllSites(queriedAllSites);
        console.log("All sites fetched for guest:", queriedAllSites);
      }
    };

    fetchData();
  }, []);

  console.log("Current user status:", userStatus);

  return (
    <>
      <HomePageBanner />
      <CustomDivider />
      <SitesHomePage
        sitesArray={userStatus === "hasPreferences" ? filteredSites : allSites}
      />
    </>
  );
}

export default Home;
