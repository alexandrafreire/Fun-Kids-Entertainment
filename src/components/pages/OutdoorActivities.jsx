import React, { useEffect, useState } from "react";
import "../../App.css";
import { OutdoorActivitiesBanner } from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import SitesHomePage from "../sections/SitesHomePage";
import { DataStore } from "aws-amplify";
import { Sites } from "../../models";

function OutdoorActivities() {
  const [outdoorSites, setOutdoorSites] = useState([]);

  useEffect(() => {
    async function fetchOutdoorSites() {
      try {
        const allSites = await DataStore.query(Sites);
        const outdoorSites = allSites.filter(
          (site) =>
            site.siteType === "Outdoor" && site.siteType !== "Exhibition"
        );

        if (outdoorSites.length > 0) {
          setOutdoorSites(outdoorSites);
        }
      } catch (error) {
        console.error("Error fetching outdoor sites", error);
      }
    }

    fetchOutdoorSites();
  }, []);

  return (
    <>
      <OutdoorActivitiesBanner />
      <CustomDivider />
      <SitesHomePage sitesArray={outdoorSites} />
    </>
  );
}

export default OutdoorActivities;
