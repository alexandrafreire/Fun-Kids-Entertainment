/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
      name
      email
      username
      profilePic
      preferredLocation
      preferredAgeRanges
      preferredAmusementTypes
      Sites {
        items {
          id
          siteName
          siteDescription
          siteTotalRating
          siteNumberOfRatings
          siteAgeRange
          amusementTypeName
          siteType
          siteVillage
          siteCity
          siteCounty
          siteAddress
          siteLat
          siteLng
          SiteDistanceToGeoLoc
          SiteTimeToGeoLocation
          SiteWebsite
          siteImage
          SiteMapURL
          cityLat
          cityLng
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
      name
      email
      username
      profilePic
      preferredLocation
      preferredAgeRanges
      preferredAmusementTypes
      Sites {
        items {
          id
          siteName
          siteDescription
          siteTotalRating
          siteNumberOfRatings
          siteAgeRange
          amusementTypeName
          siteType
          siteVillage
          siteCity
          siteCounty
          siteAddress
          siteLat
          siteLng
          SiteDistanceToGeoLoc
          SiteTimeToGeoLocation
          SiteWebsite
          siteImage
          SiteMapURL
          cityLat
          cityLng
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      id
      name
      email
      username
      profilePic
      preferredLocation
      preferredAgeRanges
      preferredAmusementTypes
      Sites {
        items {
          id
          siteName
          siteDescription
          siteTotalRating
          siteNumberOfRatings
          siteAgeRange
          amusementTypeName
          siteType
          siteVillage
          siteCity
          siteCounty
          siteAddress
          siteLat
          siteLng
          SiteDistanceToGeoLoc
          SiteTimeToGeoLocation
          SiteWebsite
          siteImage
          SiteMapURL
          cityLat
          cityLng
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createContactUs = /* GraphQL */ `
  mutation CreateContactUs(
    $input: CreateContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    createContactUs(input: $input, condition: $condition) {
      id
      firstname
      email
      feedbackType
      overallSiteRating
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateContactUs = /* GraphQL */ `
  mutation UpdateContactUs(
    $input: UpdateContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    updateContactUs(input: $input, condition: $condition) {
      id
      firstname
      email
      feedbackType
      overallSiteRating
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteContactUs = /* GraphQL */ `
  mutation DeleteContactUs(
    $input: DeleteContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    deleteContactUs(input: $input, condition: $condition) {
      id
      firstname
      email
      feedbackType
      overallSiteRating
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSites = /* GraphQL */ `
  mutation CreateSites(
    $input: CreateSitesInput!
    $condition: ModelSitesConditionInput
  ) {
    createSites(input: $input, condition: $condition) {
      id
      siteName
      siteDescription
      siteTotalRating
      siteNumberOfRatings
      siteAgeRange
      amusementTypeName
      siteType
      siteVillage
      siteCity
      siteCounty
      siteAddress
      siteLat
      siteLng
      SiteDistanceToGeoLoc
      SiteTimeToGeoLocation
      SiteWebsite
      siteImage
      SiteMapURL
      cityLat
      cityLng
      usersID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateSites = /* GraphQL */ `
  mutation UpdateSites(
    $input: UpdateSitesInput!
    $condition: ModelSitesConditionInput
  ) {
    updateSites(input: $input, condition: $condition) {
      id
      siteName
      siteDescription
      siteTotalRating
      siteNumberOfRatings
      siteAgeRange
      amusementTypeName
      siteType
      siteVillage
      siteCity
      siteCounty
      siteAddress
      siteLat
      siteLng
      SiteDistanceToGeoLoc
      SiteTimeToGeoLocation
      SiteWebsite
      siteImage
      SiteMapURL
      cityLat
      cityLng
      usersID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteSites = /* GraphQL */ `
  mutation DeleteSites(
    $input: DeleteSitesInput!
    $condition: ModelSitesConditionInput
  ) {
    deleteSites(input: $input, condition: $condition) {
      id
      siteName
      siteDescription
      siteTotalRating
      siteNumberOfRatings
      siteAgeRange
      amusementTypeName
      siteType
      siteVillage
      siteCity
      siteCounty
      siteAddress
      siteLat
      siteLng
      SiteDistanceToGeoLoc
      SiteTimeToGeoLocation
      SiteWebsite
      siteImage
      SiteMapURL
      cityLat
      cityLng
      usersID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
