/* Amplify Params - DO NOT EDIT
	API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIIDOUTPUT
	API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIKEYOUTPUT
	API_FUNKIDSENTERTAINMENTAPI_USERSPROFILETABLE_ARN
	API_FUNKIDSENTERTAINMENTAPI_USERSPROFILETABLE_NAME
	ENV
	REGION
	STORAGE_S3FUNKIDSENTERTAINMENTSTORAGE_BUCKETNAME
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const https = require("https");
const urlParse = require("url").URL;
const region = process.env.REGION;
const apiGWEndpoint =
  process.env.API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIENDPOINTOUTPUT;
const tableName =
  process.env.API_FUNKIDSENTERTAINMENTAPI_USERSPROFILETABLE_NAME;
const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08", region });
const appsyncUrl = new urlParse(apiGWEndpoint).hostname.toString();
const endpoint = new AWS.Endpoint(appsyncUrl);

AWS.config.update({
  region: region,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const request = new AWS.HttpRequest(endpoint, region);

exports.handler = async (event) => {
  const date = new Date().toISOString();

  const params = {
    TableName: tableName,
    Item: {
      id: { S: event.request.userAttributes.sub },
      __typename: { S: "UsersProfile" },
      name: { S: event.request.userAttributes.name },
      email: { S: event.request.userAttributes.email },
      username: { S: event.request.userAttributes.preferred_username },
      createdAt: { S: date },
      updatedAt: { S: date },
      version: { N: "1" }, // Changed this to a Number (N) attribute
    },
  };

  try {
    await ddb.putItem(params).promise();
    console.log("User successfully inserted into DynamoDB");
  } catch (error) {
    console.error("Error inserting user into DynamoDB:", error);
  }

  const mutation = `
  mutation CreateUsers($input: CreateUsersProfileInput!) {
      createUsersProfile(input: $input) {
          id
          name
          email
          username
          createdAt
          updatedAt
          _version
          _lastChangedAt
      }
  }
`;

  const variables = {
    input: {
      id: event.request.userAttributes.sub,
      name: event.request.userAttributes.name,
      email: event.request.userAttributes.email,
      username: event.request.userAttributes.preferred_username,
      createdAt: date,
      updatedAt: date,
      _version: 1,
      _lastChangedAt: new Date().getTime(),
    },
  };

  request.method = "POST";
  request.path = "/graphql";
  request.headers.host = appsyncUrl;
  request.headers["Content-Type"] = "application/json";
  request.headers["x-api-key"] =
    process.env.API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIKEYOUTPUT;
  request.body = JSON.stringify({
    query: mutation,
    variables,
  });

  const signer = new AWS.Signers.V4(request, "appsync", true);
  signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());

  const data = await new Promise((resolve, reject) => {
    const httpRequest = https.request(
      { ...request, host: appsyncUrl },
      (result) => {
        result.on("data", (data) => {
          resolve(data);
        });
      }
    );

    httpRequest.write(request.body);
    httpRequest.end();
  });

  return event;
};
