/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      name
      email
      username
      profilePic
      preferredLocation
      preferredAgeRanges
      preferredAmusementTypes
      favoriteSites {
        items {
          id
          userID
          siteID
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
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        username
        profilePic
        preferredLocation
        preferredAgeRanges
        preferredAmusementTypes
        favoriteSites {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
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
        profilePic
        preferredLocation
        preferredAgeRanges
        preferredAmusementTypes
        favoriteSites {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
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
      cityLat
      cityLng
      favoritedBy {
        items {
          id
          userID
          siteID
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
        cityLat
        cityLng
        favoritedBy {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        cityLat
        cityLng
        favoritedBy {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFavoriteSites = /* GraphQL */ `
  query GetFavoriteSites($id: ID!) {
    getFavoriteSites(id: $id) {
      id
      userID
      siteID
      user {
        id
        name
        email
        username
        profilePic
        preferredLocation
        preferredAgeRanges
        preferredAmusementTypes
        favoriteSites {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      site {
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
        favoritedBy {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
export const listFavoriteSites = /* GraphQL */ `
  query ListFavoriteSites(
    $filter: ModelFavoriteSitesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavoriteSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        siteID
        user {
          id
          name
          email
          username
          profilePic
          preferredLocation
          preferredAgeRanges
          preferredAmusementTypes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        site {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
export const syncFavoriteSites = /* GraphQL */ `
  query SyncFavoriteSites(
    $filter: ModelFavoriteSitesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFavoriteSites(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        siteID
        user {
          id
          name
          email
          username
          profilePic
          preferredLocation
          preferredAgeRanges
          preferredAmusementTypes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        site {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
