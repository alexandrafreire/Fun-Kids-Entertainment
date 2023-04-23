/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContactUs = /* GraphQL */ `
  query GetContactUs($id: ID!) {
    getContactUs(id: $id) {
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
export const listContactuses = /* GraphQL */ `
  query ListContactuses(
    $filter: ModelContactUsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncContactuses = /* GraphQL */ `
  query SyncContactuses(
    $filter: ModelContactUsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContactuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUsersProfile = /* GraphQL */ `
  query GetUsersProfile($id: ID!) {
    getUsersProfile(id: $id) {
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
export const listUsersProfiles = /* GraphQL */ `
  query ListUsersProfiles(
    $filter: ModelUsersProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsersProfiles = /* GraphQL */ `
  query SyncUsersProfiles(
    $filter: ModelUsersProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsersProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSiteComments = /* GraphQL */ `
  query GetSiteComments($id: ID!) {
    getSiteComments(id: $id) {
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
export const listSiteComments = /* GraphQL */ `
  query ListSiteComments(
    $filter: ModelSiteCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSiteComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncSiteComments = /* GraphQL */ `
  query SyncSiteComments(
    $filter: ModelSiteCommentsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSiteComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const siteCommentsBySitesID = /* GraphQL */ `
  query SiteCommentsBySitesID(
    $sitesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSiteCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    siteCommentsBySitesID(
      sitesID: $sitesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const siteCommentsByUsersprofileID = /* GraphQL */ `
  query SiteCommentsByUsersprofileID(
    $usersprofileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSiteCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    siteCommentsByUsersprofileID(
      usersprofileID: $usersprofileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getSites = /* GraphQL */ `
  query GetSites($id: ID!) {
    getSites(id: $id) {
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
export const listSites = /* GraphQL */ `
  query ListSites(
    $filter: ModelSitesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        SiteComments {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSites = /* GraphQL */ `
  query SyncSites(
    $filter: ModelSitesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSites(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        SiteComments {
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
      nextToken
      startedAt
    }
  }
`;
