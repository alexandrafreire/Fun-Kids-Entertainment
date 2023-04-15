/* Amplify Params - DO NOT EDIT
	API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIIDOUTPUT
	API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIKEYOUTPUT
	API_FUNKIDSENTERTAINMENTAPI_USERSPROFILETABLE_ARN
	API_FUNKIDSENTERTAINMENTAPI_USERSPROFILETABLE_NAME
	AUTH_FUNKIDSENTERTAINMENT_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require("aws-sdk");
const awsmobile = require("./../../../../../src/aws-exports");
const urlParse = require("url").URL;
const https = require("https");

const endpoint = awsmobile.aws_appsync_graphqlEndpoint;
const region = awsmobile.aws_appsync_region;
const apiKey = awsmobile.aws_appsync_apiKey;

const createUserProfileMutation = `
  mutation CreateUserProfile($input: CreateUsersProfileInput!) {
    createUsersProfile(input: $input) {
      id
      name
      email
      username
    }
  }
`;

async function callAppSync(query, variables) {
  const req = new AWS.HttpRequest(new urlParse(endpoint), region);
  req.method = "POST";
  req.headers.host = req.endpoint.host;
  req.headers["Content-Type"] = "application/json";
  req.headers["x-api-key"] = apiKey;
  req.body = JSON.stringify({
    query,
    variables,
  });

  return new Promise((resolve, reject) => {
    const httpRequest = https.request(req, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        resolve(JSON.parse(data));
      });
    });

    httpRequest.on("error", (error) => {
      reject(error);
    });

    httpRequest.write(req.body);
    httpRequest.end();
  });
}

exports.handler = async (event) => {
  const { name, email, preferred_username } = event.request.userAttributes;

  const variables = {
    input: {
      name,
      email,
      username: preferred_username,
    },
  };

  try {
    const response = await callAppSync(createUserProfileMutation, variables);

    if (response.errors) {
      console.error("AppSync errors:", response.errors);
      throw new Error("Error creating user profile");
    }

    console.log("User profile created:", response.data.createUsersProfile);
  } catch (error) {
    console.error("Error creating user profile:", error);
    throw error;
  }

  return event;
};
