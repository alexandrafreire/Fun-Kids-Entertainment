/* Amplify Params - DO NOT EDIT
    API_FUNKIDSENTERTAINMENTAPI_CITYTABLE_ARN
    API_FUNKIDSENTERTAINMENTAPI_CITYTABLE_NAME
    API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIENDPOINTOUTPUT
    API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIIDOUTPUT
    API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIKEYOUTPUT
    API_FUNKIDSENTERTAINMENTAPI_SITESTABLE_ARN
    API_FUNKIDSENTERTAINMENTAPI_SITESTABLE_NAME
    AUTH_FUNKIDSENTERTAINMENT_USERPOOLID
    ENV
    REGION
Amplify Params - DO NOT EDIT */

import fetch from "node-fetch";
import aws from "aws-sdk";

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const SITES_TABLE = process.env.API_FUNKIDSENTERTAINMENTAPI_SITESTABLE_NAME;
const ddb = new aws.DynamoDB.DocumentClient();

async function fetchDistances(userLat, userLng, destinations) {
  const googleMapsUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${userLat},${userLng}&destinations=${destinations.join(
    "|"
  )}&key=${GOOGLE_MAPS_API_KEY}`;
  const googleMapsResponse = await fetch(googleMapsUrl);

  if (googleMapsResponse.ok) {
    return await googleMapsResponse.json();
  } else {
    throw new Error(
      `Failed to fetch data from Google Maps: ${googleMapsResponse.status}`
    );
  }
}

export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  console.log("event.body:", event.body);
  console.log(`Received event: ${JSON.stringify(event, null, 2)}`);

  let body;
  let statusCode = 200;

  try {
    const params = {
      TableName: SITES_TABLE,
      ProjectionExpression: "id, siteLat, siteLng",
    };

    const dynamoData = await ddb.scan(params).promise();

    if (!dynamoData.Items || dynamoData.Items.length === 0) {
      statusCode = 404;
      throw new Error("No sites found.");
    }

    const parsedBody = JSON.parse(event.body || "{}");
    console.log(`Parsed body: ${JSON.stringify(parsedBody, null, 2)}`);
    const userLat = parsedBody.userLat;
    const userLng = parsedBody.userLng;

    if (!userLat || !userLng) {
      statusCode = 400;
      throw new Error("User latitude and longitude must be provided");
    }

    const chunks = [];
    for (let i = 0; i < dynamoData.Items.length; i += 25) {
      chunks.push(dynamoData.Items.slice(i, i + 25));
    }

    for (const chunk of chunks) {
      const destinations = chunk.map(
        (item) => `${item.siteLat},${item.siteLng}`
      );
      const googleMapsData = await fetchDistances(
        userLat,
        userLng,
        destinations
      );

      console.log("Google Maps Data:", JSON.stringify(googleMapsData, null, 2));

      if (googleMapsData && googleMapsData.rows && googleMapsData.rows[0]) {
        const elements = googleMapsData.rows[0].elements;

        if (elements) {
          chunk.forEach((item, index) => {
            const element = elements[index];
            if (element && element.distance && element.distance.text) {
              item.distance = element.distance.text;
            } else {
              console.log("Missing or undefined properties", element);
            }
          });
        } else {
          console.log("Elements are missing", googleMapsData.rows[0]);
        }
      } else {
        console.log(
          "Invalid structure received from Google Maps API",
          googleMapsData
        );
      }
    }

    body = { sites: dynamoData.Items };
  } catch (error) {
    console.log(`Error caught: ${error.message}`);
    statusCode = statusCode || 500;
    body = { errors: [{ message: error.message }] };
  }

  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(body),
  };
};
