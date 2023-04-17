/* Amplify Params - DO NOT EDIT
	API_FUNKIDSENTERTAINMENTAPI_GRAPHQLAPIIDOUTPUT
	API_FUNKIDSENTERTAINMENTAPI_USERSPROFILETABLE_ARN
	API_FUNKIDSENTERTAINMENTAPI_USERSPROFILETABLE_NAME
	ENV
	REGION
	STORAGE_S3FUNKIDSENTERTAINMENTSTORAGE_BUCKETNAME
Amplify Params - DO NOT EDIT */

var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  let date = new Date();

  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: "User" },
        name: { S: event.request.userAttributes.name },
        email: { S: event.request.userAttributes.email },
        username: { S: event.request.userAttributes.referred_username },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
      },
      TableName:
        process.env.API_funkidsentertainmentAPI_UsersProfile -
        dzrrg4e5obe6pcmhcqmzhxvr3u -
        staging,
    };

    // Call DynamoDB
    try {
      await ddb.putItem(params).promise();
      console.log("Success");
    } catch (err) {
      console.log("Error", err);
    }

    console.log("Success: Everything executed correctly");
    context.done(null, event);
  } else {
    // Nothing to do, the user's email ID is unknown
    console.log("Error: Nothing was written to DynamoDB");
    context.done(null, event);
  }
};
