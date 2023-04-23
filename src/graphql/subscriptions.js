/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContactUs = /* GraphQL */ `
  subscription OnCreateContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
    $owner: String
  ) {
    onCreateContactUs(filter: $filter, owner: $owner) {
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
export const onUpdateContactUs = /* GraphQL */ `
  subscription OnUpdateContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
    $owner: String
  ) {
    onUpdateContactUs(filter: $filter, owner: $owner) {
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
export const onDeleteContactUs = /* GraphQL */ `
  subscription OnDeleteContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
    $owner: String
  ) {
    onDeleteContactUs(filter: $filter, owner: $owner) {
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
export const onCreateUsersProfile = /* GraphQL */ `
  subscription OnCreateUsersProfile(
    $filter: ModelSubscriptionUsersProfileFilterInput
    $owner: String
  ) {
    onCreateUsersProfile(filter: $filter, owner: $owner) {
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
export const onUpdateUsersProfile = /* GraphQL */ `
  subscription OnUpdateUsersProfile(
    $filter: ModelSubscriptionUsersProfileFilterInput
    $owner: String
  ) {
    onUpdateUsersProfile(filter: $filter, owner: $owner) {
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
export const onDeleteUsersProfile = /* GraphQL */ `
  subscription OnDeleteUsersProfile(
    $filter: ModelSubscriptionUsersProfileFilterInput
    $owner: String
  ) {
    onDeleteUsersProfile(filter: $filter, owner: $owner) {
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
export const onCreateSiteComments = /* GraphQL */ `
  subscription OnCreateSiteComments(
    $filter: ModelSubscriptionSiteCommentsFilterInput
    $owner: String
  ) {
    onCreateSiteComments(filter: $filter, owner: $owner) {
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
export const onUpdateSiteComments = /* GraphQL */ `
  subscription OnUpdateSiteComments(
    $filter: ModelSubscriptionSiteCommentsFilterInput
    $owner: String
  ) {
    onUpdateSiteComments(filter: $filter, owner: $owner) {
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
export const onDeleteSiteComments = /* GraphQL */ `
  subscription OnDeleteSiteComments(
    $filter: ModelSubscriptionSiteCommentsFilterInput
    $owner: String
  ) {
    onDeleteSiteComments(filter: $filter, owner: $owner) {
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
export const onCreateSites = /* GraphQL */ `
  subscription OnCreateSites(
    $filter: ModelSubscriptionSitesFilterInput
    $owner: String
  ) {
    onCreateSites(filter: $filter, owner: $owner) {
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
export const onUpdateSites = /* GraphQL */ `
  subscription OnUpdateSites(
    $filter: ModelSubscriptionSitesFilterInput
    $owner: String
  ) {
    onUpdateSites(filter: $filter, owner: $owner) {
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
export const onDeleteSites = /* GraphQL */ `
  subscription OnDeleteSites(
    $filter: ModelSubscriptionSitesFilterInput
    $owner: String
  ) {
    onDeleteSites(filter: $filter, owner: $owner) {
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
