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
      cityID
      preferredLocation {
        id
        cityName
        cityLat
        citylng
        sites {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      preferredAgeRanges
      preferredAmusementTypes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
        cityID
        preferredLocation {
          id
          cityName
          cityLat
          citylng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        preferredAgeRanges
        preferredAmusementTypes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
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
        cityID
        preferredLocation {
          id
          cityName
          cityLat
          citylng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        preferredAgeRanges
        preferredAmusementTypes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
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
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCity = /* GraphQL */ `
  query GetCity($id: ID!) {
    getCity(id: $id) {
      id
      cityName
      cityLat
      citylng
      sites {
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
          cityID
          siteCounty
          siteAddress
          siteLat
          siteLng
          SiteDistanceToPrefLocation
          SiteWebsite
          siteImage
          SiteMapURL
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listCities = /* GraphQL */ `
  query ListCities(
    $filter: ModelCityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cityName
        cityLat
        citylng
        sites {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCities = /* GraphQL */ `
  query SyncCities(
    $filter: ModelCityFilterInput
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
        cityLat
        citylng
        sites {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
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
      cityID
      siteCity {
        id
        cityName
        cityLat
        citylng
        sites {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      siteCounty
      siteAddress
      siteLat
      siteLng
      SiteDistanceToPrefLocation
      SiteWebsite
      siteImage
      SiteMapURL
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
        cityID
        siteCity {
          id
          cityName
          cityLat
          citylng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        siteCounty
        siteAddress
        siteLat
        siteLng
        SiteDistanceToPrefLocation
        SiteWebsite
        siteImage
        SiteMapURL
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
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
        cityID
        siteCity {
          id
          cityName
          cityLat
          citylng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        siteCounty
        siteAddress
        siteLat
        siteLng
        SiteDistanceToPrefLocation
        SiteWebsite
        siteImage
        SiteMapURL
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getGames = /* GraphQL */ `
  query GetGames($id: ID!) {
    getGames(id: $id) {
      id
      gameName
      gameDescription
      gameImage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGamesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gameName
        gameDescription
        gameImage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncGames = /* GraphQL */ `
  query SyncGames(
    $filter: ModelGamesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        gameName
        gameDescription
        gameImage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMovies = /* GraphQL */ `
  query GetMovies($id: ID!) {
    getMovies(id: $id) {
      id
      movieName
      moviesDescription
      movieImage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listMovies = /* GraphQL */ `
  query ListMovies(
    $filter: ModelMoviesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        movieName
        moviesDescription
        movieImage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMovies = /* GraphQL */ `
  query SyncMovies(
    $filter: ModelMoviesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMovies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        movieName
        moviesDescription
        movieImage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getBooks = /* GraphQL */ `
  query GetBooks($id: ID!) {
    getBooks(id: $id) {
      id
      bookName
      bookDescription
      bookImage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBooksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bookName
        bookDescription
        bookImage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBooks = /* GraphQL */ `
  query SyncBooks(
    $filter: ModelBooksFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBooks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        bookName
        bookDescription
        bookImage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getSuggestedActivities = /* GraphQL */ `
  query GetSuggestedActivities($id: ID!) {
    getSuggestedActivities(id: $id) {
      id
      activityName
      activityAddress
      activityDescription
      activityAgeRange
      activityType
      activityImageURLs
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const listSuggestedActivities = /* GraphQL */ `
  query ListSuggestedActivities(
    $filter: ModelSuggestedActivitiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuggestedActivities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        activityName
        activityAddress
        activityDescription
        activityAgeRange
        activityType
        activityImageURLs
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSuggestedActivities = /* GraphQL */ `
  query SyncSuggestedActivities(
    $filter: ModelSuggestedActivitiesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSuggestedActivities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        activityName
        activityAddress
        activityDescription
        activityAgeRange
        activityType
        activityImageURLs
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
