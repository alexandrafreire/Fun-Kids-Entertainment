/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      owner
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
      owner
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
      owner
    }
  }
`;
export const createUsersProfile = /* GraphQL */ `
  mutation CreateUsersProfile(
    $input: CreateUsersProfileInput!
    $condition: ModelUsersProfileConditionInput
  ) {
    createUsersProfile(input: $input, condition: $condition) {
      id
      name
      email
      username
      preferredLocation
      preferredAgeRanges
      preferredAmusementTypes
      UsersFavSites
      profilePic
      SiteComments {
        items {
          id
          siteRating
          message
          email
          username
          createdDate
          sitesID
          usersprofileID
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
export const updateUsersProfile = /* GraphQL */ `
  mutation UpdateUsersProfile(
    $input: UpdateUsersProfileInput!
    $condition: ModelUsersProfileConditionInput
  ) {
    updateUsersProfile(input: $input, condition: $condition) {
      id
      name
      email
      username
      preferredLocation
      preferredAgeRanges
      preferredAmusementTypes
      UsersFavSites
      profilePic
      SiteComments {
        items {
          id
          siteRating
          message
          email
          username
          createdDate
          sitesID
          usersprofileID
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
export const deleteUsersProfile = /* GraphQL */ `
  mutation DeleteUsersProfile(
    $input: DeleteUsersProfileInput!
    $condition: ModelUsersProfileConditionInput
  ) {
    deleteUsersProfile(input: $input, condition: $condition) {
      id
      name
      email
      username
      preferredLocation
      preferredAgeRanges
      preferredAmusementTypes
      UsersFavSites
      profilePic
      SiteComments {
        items {
          id
          siteRating
          message
          email
          username
          createdDate
          sitesID
          usersprofileID
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
export const createSiteComments = /* GraphQL */ `
  mutation CreateSiteComments(
    $input: CreateSiteCommentsInput!
    $condition: ModelSiteCommentsConditionInput
  ) {
    createSiteComments(input: $input, condition: $condition) {
      id
      siteRating
      message
      email
      username
      createdDate
      sitesID
      usersprofileID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateSiteComments = /* GraphQL */ `
  mutation UpdateSiteComments(
    $input: UpdateSiteCommentsInput!
    $condition: ModelSiteCommentsConditionInput
  ) {
    updateSiteComments(input: $input, condition: $condition) {
      id
      siteRating
      message
      email
      username
      createdDate
      sitesID
      usersprofileID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteSiteComments = /* GraphQL */ `
  mutation DeleteSiteComments(
    $input: DeleteSiteCommentsInput!
    $condition: ModelSiteCommentsConditionInput
  ) {
    deleteSiteComments(input: $input, condition: $condition) {
      id
      siteRating
      message
      email
      username
      createdDate
      sitesID
      usersprofileID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      SiteComments {
        items {
          id
          siteRating
          message
          email
          username
          createdDate
          sitesID
          usersprofileID
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
      SiteComments {
        items {
          id
          siteRating
          message
          email
          username
          createdDate
          sitesID
          usersprofileID
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
      SiteComments {
        items {
          id
          siteRating
          message
          email
          username
          createdDate
          sitesID
          usersprofileID
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
