import React, { useEffect, useState } from "react";
import "../../App.css";
import { IndoorActivitiesBanner } from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import SitesHomePage from "../sections/SitesHomePage";
import { DataStore } from "aws-amplify";
import { Sites } from "../../models";

function IndoorActivities() {
  const [indoorSites, setIndoorSites] = useState([]);

  useEffect(() => {
    async function fetchIndoorSites() {
      try {
        const allSites = await DataStore.query(Sites);
        const indoorSites = allSites.filter(
          (site) => site.siteType === "Indoor" && site.siteType !== "Exhibition"
        );

        if (indoorSites.length > 0) {
          setIndoorSites(indoorSites);
        }
      } catch (error) {
        console.error("Error fetching indoor sites", error);
      }
    }

    fetchIndoorSites();
  }, []);

  return (
    <>
      <IndoorActivitiesBanner />
      <CustomDivider />
      <SitesHomePage sitesArray={indoorSites} />
    </>
  );
}

export default IndoorActivities;
