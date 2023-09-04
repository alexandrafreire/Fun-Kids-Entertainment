import { useEffect, useState, useCallback } from "react";
import { Auth } from "aws-amplify";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import { Users, Sites } from "../../models";
import "../../App.css";
import { HomePageBanner } from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import SitesHomePage from "../sections/SitesHomePage";
import fetchSitesBasedOnUserPreferences from "../sections/fetchSitesUserPreferences";
import LocationModal from "../Locations/LocationModal";

function Home() {
  const [allSites, setAllSites] = useState([]);
  const [filteredSites, setFilteredSites] = useState([]);
  const [userStatus, setUserStatus] = useState("guest");
  const [showModal, setShowModal] = useState(false);

  const fetchAllSites = async () => {
    const queriedAllSites = await DataStore.query(Sites, Predicates.ALL);
    setAllSites(queriedAllSites);
  };

  const fetchFilteredSites = async (userId) => {
    const queriedFilteredSites = await fetchSitesBasedOnUserPreferences(userId);
    setFilteredSites(queriedFilteredSites);
  };

  const updateSitesWithDistance = useCallback(
    (sitesWithDistance) => {
      const updatedAllSites = allSites.map((site) => {
        const siteWithDistance = sitesWithDistance.find(
          (s) => s.id === site.id
        );
        return siteWithDistance
          ? { ...site, distance: siteWithDistance.distance }
          : site;
      });

      const updatedFilteredSites = filteredSites.map((site) => {
        const siteWithDistance = sitesWithDistance.find(
          (s) => s.id === site.id
        );
        return siteWithDistance
          ? { ...site, distance: siteWithDistance.distance }
          : site;
      });

      console.log("Updated All Sites:", updatedAllSites);
      console.log("Updated Filtered Sites:", updatedFilteredSites);

      setAllSites(updatedAllSites);
      setFilteredSites(updatedFilteredSites);
    },
    [allSites, filteredSites]
  );

  // New useEffect just for logging changes in allSites and filteredSites
  useEffect(() => {
    console.log(
      "allSites or filteredSites have changed",
      allSites,
      filteredSites
    );
  }, [allSites, filteredSites]);

  useEffect(() => {
    let isMounted = true;
    const hasAcceptedLocation = localStorage.getItem("hasAcceptedLocation");
    if (hasAcceptedLocation === null) {
      setShowModal(true);
    }
    const fetchData = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        if (isMounted) setUserStatus("authenticated");

        await fetchAllSites();
        console.log("Fetched All Sites:", allSites);

        const userData = await DataStore.query(Users, user.attributes.sub);
        if (userData && isMounted) {
          setUserStatus("hasPreferences");
          await fetchFilteredSites(user.attributes.sub);
        }
      } catch (err) {
        if (isMounted) setUserStatus("guest");
        await fetchAllSites();
      }
    };

    const sitesWithDistanceFromSessionStorage =
      sessionStorage.getItem("sitesWithDistance");

    if (sitesWithDistanceFromSessionStorage) {
      updateSitesWithDistance(JSON.parse(sitesWithDistanceFromSessionStorage));
    }

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [updateSitesWithDistance]);

  return (
    <>
      {showModal && (
        <LocationModal
          setShowModal={setShowModal}
          updateSitesWithDistance={updateSitesWithDistance}
        />
      )}
      <HomePageBanner />
      <CustomDivider />
      <SitesHomePage
        sitesArray={userStatus === "hasPreferences" ? filteredSites : allSites}
      />
    </>
  );
}

export default Home;
