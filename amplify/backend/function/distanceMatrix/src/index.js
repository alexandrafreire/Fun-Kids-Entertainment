const axios = require("axios");
const awsServerlessExpress = require("aws-serverless-express");
const express = require("express");

const app = express();
app.use(express.json());

app.post("/getdistance", async (req, res) => {
  try {
    const { origin, destinations } = req.body;

    // Transform 'origin' and 'destinations' to the format required by the API
    const formattedOrigin = `${origin.lat},${origin.lng}`;
    const formattedDestinations = destinations
      .map((d) => `${d.lat},${d.lng}`)
      .join("|");

    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${formattedOrigin}&destinations=${formattedDestinations}&key=AIzaSyBijxVDTAafvGRW2ZRSJ7Z8lBAtaDj6tzc`
    );

    // Construct a response object suitable for Lambda Proxy Integration
    const result = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      },
      body: JSON.stringify(response.data),
    };

    // Send response
    res.send(result);
  } catch (error) {
    console.error(error);
    const result = {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      },
      body: JSON.stringify({
        error: "An error occurred while processing your request.",
      }),
    };
    res.send(result);
  }
});

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return awsServerlessExpress.proxy(server, event, context, "PROMISE").promise;
};
