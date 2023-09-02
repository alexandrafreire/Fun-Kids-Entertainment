import React, { useEffect, useState } from "react";
import "../../App.css";
import { ConcertsShowsBanner } from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import SitesHomePage from "../sections/SitesHomePage";
import { DataStore } from "aws-amplify";
import { Sites } from "../../models";

function CultureShows() {
  const [cultureShowsSites, setCultureShowsSites] = useState([]);

  useEffect(() => {
    async function fetchCultureShowsSites() {
      try {
        const allSites = await DataStore.query(Sites);
        const cultureShowsSites = allSites.filter(
          (site) => site.siteType === "Exhibition"
        );

        if (cultureShowsSites.length > 0) {
          setCultureShowsSites(cultureShowsSites);
        }
      } catch (error) {
        console.error("Error fetching culture and shows sites", error);
      }
    }

    fetchCultureShowsSites();
  }, []);

  return (
    <>
      <ConcertsShowsBanner />
      <CustomDivider />
      <SitesHomePage sitesArray={cultureShowsSites} />
    </>
  );
}

export default CultureShows;
