import { DataStore } from "aws-amplify";
import { Users, Sites } from "../../models";

const fetchSitesBasedOnUserPreferences = async (userId) => {
  try {
    const user = await DataStore.query(Users, userId);
    if (!user) {
      console.log("User not found");
      return [];
    }

    console.log("User:", JSON.stringify(user));

    const { cityID, preferredAgeRanges, preferredAmusementTypes } = user;

    if (!cityID) {
      console.log("User has no preferred location set");
      return [];
    }

    console.log("Preferred Location:", cityID);

    const transformedPreferredAgeRanges = preferredAgeRanges
      .replace("_", " ")
      .toUpperCase();
    const transformedPreferredAmusementTypes = preferredAmusementTypes
      .replace("_", " ")
      .toUpperCase();

    const allSites = await DataStore.query(Sites);

    const filteredSites = allSites.filter((site) => {
      const isCityMatch = site.cityID === cityID;
      let isAgeMatch = true,
        isAmusementMatch = true;

      if (transformedPreferredAgeRanges) {
        isAgeMatch =
          site.siteAgeRange.toUpperCase() === transformedPreferredAgeRanges;
      }

      if (transformedPreferredAmusementTypes) {
        isAmusementMatch =
          site.amusementTypeName.toUpperCase() ===
          transformedPreferredAmusementTypes;
      }

      return isCityMatch && (isAgeMatch || isAmusementMatch);
    });

    if (filteredSites.length === 0) {
      console.log("No sites match the user's preferences");
      return [];
    }

    return filteredSites;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};

export default fetchSitesBasedOnUserPreferences;
