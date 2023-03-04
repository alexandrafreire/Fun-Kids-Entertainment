/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContactUs = /* GraphQL */ `
  query GetContactUs($id: ID!) {
    getContactUs(id: $id) {
      id
      firstName
      lastName
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
export const listContactuses = /* GraphQL */ `
  query ListContactuses(
    $filter: ModelContactUsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
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
        firstName
        lastName
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
      nextToken
      startedAt
    }
  }
`;
export const getCities = /* GraphQL */ `
  query GetCities($id: ID!) {
    getCities(id: $id) {
      id
      cityName
      cityCounty
      cityCountry
      cityLat
      cityLng
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCities = /* GraphQL */ `
  query ListCities(
    $filter: ModelCitiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cityName
        cityCounty
        cityCountry
        cityLat
        cityLng
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
export const syncCities = /* GraphQL */ `
  query SyncCities(
    $filter: ModelCitiesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        cityName
        cityCounty
        cityCountry
        cityLat
        cityLng
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
export const getUsersProfile = /* GraphQL */ `
  query GetUsersProfile($id: ID!) {
    getUsersProfile(id: $id) {
      id
      firstName
      lastName
      email
      username
      preferredLocation
      preferredAgeRanges
      preferredAmusementTypes
      UsersFavSites
      Cities {
        id
        cityName
        cityCounty
        cityCountry
        cityLat
        cityLng
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
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
          usersprofileID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      profilePic
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      usersProfileCitiesId
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
        firstName
        lastName
        email
        username
        preferredLocation
        preferredAgeRanges
        preferredAmusementTypes
        UsersFavSites
        Cities {
          id
          cityName
          cityCounty
          cityCountry
          cityLat
          cityLng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Sites {
          nextToken
          startedAt
        }
        profilePic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usersProfileCitiesId
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
        firstName
        lastName
        email
        username
        preferredLocation
        preferredAgeRanges
        preferredAmusementTypes
        UsersFavSites
        Cities {
          id
          cityName
          cityCounty
          cityCountry
          cityLat
          cityLng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Sites {
          nextToken
          startedAt
        }
        profilePic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usersProfileCitiesId
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
      sitess {
        items {
          id
          siteCommentsId
          sitesId
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
      createdDate
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
        sitess {
          nextToken
          startedAt
        }
        createdDate
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
        sitess {
          nextToken
          startedAt
        }
        createdDate
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
          siteCommentsId
          sitesId
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
      usersprofileID
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
        SiteComments {
          nextToken
          startedAt
        }
        usersprofileID
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
        SiteComments {
          nextToken
          startedAt
        }
        usersprofileID
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
export const sitesByUsersprofileID = /* GraphQL */ `
  query SitesByUsersprofileID(
    $usersprofileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSitesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sitesByUsersprofileID(
      usersprofileID: $usersprofileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
        usersprofileID
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
export const getSitesSiteComments = /* GraphQL */ `
  query GetSitesSiteComments($id: ID!) {
    getSitesSiteComments(id: $id) {
      id
      siteCommentsId
      sitesId
      siteComments {
        id
        siteRating
        message
        email
        username
        sitess {
          nextToken
          startedAt
        }
        createdDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      sites {
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
        usersprofileID
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
export const listSitesSiteComments = /* GraphQL */ `
  query ListSitesSiteComments(
    $filter: ModelSitesSiteCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSitesSiteComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        siteCommentsId
        sitesId
        siteComments {
          id
          siteRating
          message
          email
          username
          createdDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        sites {
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
          usersprofileID
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
export const syncSitesSiteComments = /* GraphQL */ `
  query SyncSitesSiteComments(
    $filter: ModelSitesSiteCommentsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSitesSiteComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        siteCommentsId
        sitesId
        siteComments {
          id
          siteRating
          message
          email
          username
          createdDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        sites {
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
          usersprofileID
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
export const sitesSiteCommentsBySiteCommentsId = /* GraphQL */ `
  query SitesSiteCommentsBySiteCommentsId(
    $siteCommentsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSitesSiteCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sitesSiteCommentsBySiteCommentsId(
      siteCommentsId: $siteCommentsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        siteCommentsId
        sitesId
        siteComments {
          id
          siteRating
          message
          email
          username
          createdDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        sites {
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
          usersprofileID
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
export const sitesSiteCommentsBySitesId = /* GraphQL */ `
  query SitesSiteCommentsBySitesId(
    $sitesId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSitesSiteCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sitesSiteCommentsBySitesId(
      sitesId: $sitesId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        siteCommentsId
        sitesId
        siteComments {
          id
          siteRating
          message
          email
          username
          createdDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        sites {
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
          usersprofileID
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
