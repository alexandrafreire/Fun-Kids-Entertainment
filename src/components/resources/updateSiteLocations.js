import { DataStore, Predicates, initSchema } from "@aws-amplify/datastore";
import { Geo } from "@aws-amplify/geo";
import awsExports from "/Users/alexandrafreire/Desktop/funkidsent/src/aws-exports.js";
import { Amplify } from "aws-amplify";
import { schema } from "/Users/alexandrafreire/Desktop/funkidsent/src/models/Schema.js";

Amplify.configure({
  ...awsExports,
  Auth: {
    identityPoolId: "eu-west-1_l9JZPGoLr",
    region: awsExports.aws_project_region,
  },
});
initSchema(schema);

const { Sites } = schema;

async function getLatLngForSiteCity(siteCity) {
  try {
    const results = await Geo.searchByAddress(siteCity);

    if (results.length > 0) {
      const location = results[0].geometry.coordinates;
      return { lat: location[1], lng: location[0] }; // Note the order: [lng, lat]
    } else {
      throw new Error(`Failed to get coordinates for siteCity: ${siteCity}`);
    }
  } catch (error) {
    console.error(
      `Error fetching coordinates for siteCity: ${siteCity}: ${error.message}`
    );
  }
}

async function updateSitesWithLatLng() {
  const allSites = await DataStore.query(Sites, Predicates.ALL);

  for (const site of allSites) {
    if (!site.cityLat || !site.cityLng) {
      try {
        const { lat, lng } = await getLatLngForSiteCity(site.siteCity);
        await DataStore.save(
          Sites.copyOf(site, (updatedSite) => {
            updatedSite.cityLat = lat;
            updatedSite.cityLng = lng;
          })
        );
        console.log(`Updated ${site.siteCity}: (${lat}, ${lng})`);
      } catch (error) {
        console.error(`Error updating ${site.siteCity}: ${error.message}`);
      }
    }
  }

  console.log("Finished updating Sites with cityLat and cityLng");
}

// Call the function to update the Sites
updateSitesWithLatLng();
