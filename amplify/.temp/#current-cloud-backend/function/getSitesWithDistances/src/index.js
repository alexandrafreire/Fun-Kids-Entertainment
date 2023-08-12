const axios = require("axios");
const { API, graphqlOperation } = require("aws-amplify");

// Configuring Amplify
const config = {
  API: {
    graphql_endpoint:
      process.env.API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIENDPOINTOUTPUT,
    region: process.env.AWS_REGION || "us-east-1",
  },
};
Amplify.configure(config);

// Example GraphQL queries (you need to define actual queries based on your schema)
const getUserQuery = `query GetUser($id: ID!) {
  getUser(id: $id) {
    preferredLocation {
      cityID
      cityLat
      cityLng
    }
  }
}`;

const listSitesQuery = `query ListSites {
  listSites {
    items {
      id
      siteLat
      siteLng
    }
  }
}`;

async function getDistanceBetweenCoordinates(
  originLat,
  originLng,
  destinationLat,
  destinationLng
) {
  const baseUrl = "https://maps.googleapis.com/maps/api/distancematrix/json";
  const endpoint = `${baseUrl}?origins=${originLat},${originLng}&destinations=${destinationLat},${destinationLng}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  const response = await axios.get(endpoint);
  return response.data.rows[0].elements[0].distance.value / 1000; // Convert meters to kilometers
}

exports.handler = async (event) => {
  console.log("Received event:", JSON.stringify(event));

  const userId =
    event.queryStringParameters && event.queryStringParameters.userId;

  if (!userId) {
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET",
      },
      body: JSON.stringify({
        error: "userId is required as a query string parameter.",
      }),
    };
  }

  try {
    const userResponse = await API.graphql(
      graphqlOperation(getUserQuery, { id: userId })
    );
    const user = userResponse.data.getUser;
    const { cityLat, cityLng } = user.preferredLocation;

    const sitesResponse = await API.graphql(graphqlOperation(listSitesQuery));
    const allSites = sitesResponse.data.listSites.items;

    const sitesWithDistances = await Promise.all(
      allSites.map(async (site) => {
        const distance = await getDistanceBetweenCoordinates(
          cityLat,
          cityLng,
          site.siteLat,
          site.siteLng
        );
        return {
          ...site,
          SiteDistanceToGeoLoc: distance,
        };
      })
    );

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET",
      },
      body: JSON.stringify(sitesWithDistances),
    };
  } catch (error) {
    console.error("Error:", error.message);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET",
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
