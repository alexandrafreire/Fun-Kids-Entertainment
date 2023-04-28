/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers(
    $filter: ModelSubscriptionUsersFilterInput
    $owner: String
  ) {
    onCreateUsers(filter: $filter, owner: $owner) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers(
    $filter: ModelSubscriptionUsersFilterInput
    $owner: String
  ) {
    onUpdateUsers(filter: $filter, owner: $owner) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers(
    $filter: ModelSubscriptionUsersFilterInput
    $owner: String
  ) {
    onDeleteUsers(filter: $filter, owner: $owner) {
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
export const onCreateContactUs = /* GraphQL */ `
  subscription OnCreateContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
  ) {
    onCreateContactUs(filter: $filter) {
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
export const onUpdateContactUs = /* GraphQL */ `
  subscription OnUpdateContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
  ) {
    onUpdateContactUs(filter: $filter) {
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
export const onDeleteContactUs = /* GraphQL */ `
  subscription OnDeleteContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
  ) {
    onDeleteContactUs(filter: $filter) {
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
