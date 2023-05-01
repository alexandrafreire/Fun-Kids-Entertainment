export type AmplifyDependentResourcesAttributes = {
  "api": {
    "funkidsentertainmentAPI": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "FunKidsEntertainment": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "AppAdminGroupRole": "string"
    }
  },
  "function": {
    "InsertUserCognitoToDataStore": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "geo": {
    "MyGeoCodeResource": {
      "Arn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "s3funkidsentertainmentstorage": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}