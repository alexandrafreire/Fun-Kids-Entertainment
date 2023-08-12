/* Amplify Params - DO NOT EDIT
	API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIIDOUTPUT
	API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIKEYOUTPUT
	API_FUNKIDSENTERTAINMENTAPI_USERSTABLE_ARN
	API_FUNKIDSENTERTAINMENTAPI_USERSTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import crypto from "@aws-crypto/sha256-js";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { default as fetch, Request } from "node-fetch";
import aws from "aws-sdk";

const GRAPHQL_ENDPOINT =
  process.env.API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIENDPOINTOUTPUT;
//const GRAPHQL_API_KEY =process.env.API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIKEYOUTPUT;
const AWS_REGION = process.env.AWS_REGION || "us-east-1";
const USERS_TABLE = process.env.API_FUNKIDSENTERTAINMENTAPI_USERSTABLE_NAME;
const { Sha256 } = crypto;

const { DynamoDB } = aws;
const ddb = new DynamoDB.DocumentClient();

export const handler = async (event) => {
  const date = new Date();
  const userId = event.request.userAttributes.sub;
  const name = event.request.userAttributes.name;
  const email = event.request.userAttributes.email;
  const username = event.request.userAttributes.preferred_username;
  const createdAt = date.toISOString();
  const updatedAt = date.toISOString();

  // Insert user data into DynamoDB table
  const params = {
    TableName: USERS_TABLE,
    Item: {
      id: userId,
      name,
      email,
      username,
      createdAt,
      updatedAt,
      _version: 1,
      _lastChangedAt: date.getTime(),
    },
  };
  await ddb.put(params).promise();

  // Sync data with Amplify DataStore via AppSync API
  const createUserInput = {
    id: userId,
    name,
    email,
    username,
    createdAt,
    updatedAt,
    _version: 1,
    _lastChangedAt: date.getTime(),
  };
  const createUserMutation = /* GraphQL */ `
    mutation CreateUser($input: CreateUserInput!) {
      createUser(input: $input) {
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
  await callGraphQL(createUserMutation, { input: createUserInput });

  return event;
};

async function callGraphQL(query, variables) {
  const endpoint = new URL(GRAPHQL_ENDPOINT);

  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region: AWS_REGION,
    service: "appsync",
    sha256: Sha256,
  });

  const requestToBeSigned = new HttpRequest({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      host: endpoint.host,
    },
    hostname: endpoint.host,
    body: JSON.stringify({ query, variables }),
    path: endpoint.pathname,
  });

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(endpoint, signed);

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    body = await response.json();
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 500;
    body = {
      errors: [
        {
          message: error.message,
        },
      ],
    };
  }

  return {
    statusCode,
    body: JSON.stringify(body),
  };
}
