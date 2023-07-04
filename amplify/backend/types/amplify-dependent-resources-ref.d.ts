export type AmplifyDependentResourcesAttributes = {
  "api": {
    "AdminQueries": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
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
      "AppUsersGroupRole": "string",
      "adminGroupRole": "string"
    }
  },
  "function": {
    "AdminQueriesbc4092b1": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
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