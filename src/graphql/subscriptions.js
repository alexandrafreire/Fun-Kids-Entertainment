/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers(
    $filter: ModelSubscriptionUsersFilterInput
    $id: String
  ) {
    onCreateUsers(filter: $filter, id: $id) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers(
    $filter: ModelSubscriptionUsersFilterInput
    $id: String
  ) {
    onUpdateUsers(filter: $filter, id: $id) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers(
    $filter: ModelSubscriptionUsersFilterInput
    $id: String
  ) {
    onDeleteUsers(filter: $filter, id: $id) {
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
      __typename
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
      __typename
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
      __typename
    }
  }
`;
export const onCreateCity = /* GraphQL */ `
  subscription OnCreateCity($filter: ModelSubscriptionCityFilterInput) {
    onCreateCity(filter: $filter) {
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
export const onUpdateCity = /* GraphQL */ `
  subscription OnUpdateCity($filter: ModelSubscriptionCityFilterInput) {
    onUpdateCity(filter: $filter) {
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
export const onDeleteCity = /* GraphQL */ `
  subscription OnDeleteCity($filter: ModelSubscriptionCityFilterInput) {
    onDeleteCity(filter: $filter) {
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
export const onCreateSites = /* GraphQL */ `
  subscription OnCreateSites($filter: ModelSubscriptionSitesFilterInput) {
    onCreateSites(filter: $filter) {
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
export const onUpdateSites = /* GraphQL */ `
  subscription OnUpdateSites($filter: ModelSubscriptionSitesFilterInput) {
    onUpdateSites(filter: $filter) {
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
export const onDeleteSites = /* GraphQL */ `
  subscription OnDeleteSites($filter: ModelSubscriptionSitesFilterInput) {
    onDeleteSites(filter: $filter) {
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
export const onCreateFavoriteSites = /* GraphQL */ `
  subscription OnCreateFavoriteSites(
    $filter: ModelSubscriptionFavoriteSitesFilterInput
    $owner: String
  ) {
    onCreateFavoriteSites(filter: $filter, owner: $owner) {
      id
      userID
      siteID
      user {
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
        favoriteSites {
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
        favoritedBy {
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
export const onUpdateFavoriteSites = /* GraphQL */ `
  subscription OnUpdateFavoriteSites(
    $filter: ModelSubscriptionFavoriteSitesFilterInput
    $owner: String
  ) {
    onUpdateFavoriteSites(filter: $filter, owner: $owner) {
      id
      userID
      siteID
      user {
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
        favoriteSites {
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
        favoritedBy {
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
export const onDeleteFavoriteSites = /* GraphQL */ `
  subscription OnDeleteFavoriteSites(
    $filter: ModelSubscriptionFavoriteSitesFilterInput
    $owner: String
  ) {
    onDeleteFavoriteSites(filter: $filter, owner: $owner) {
      id
      userID
      siteID
      user {
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
        favoriteSites {
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
        favoritedBy {
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
export const onCreateGames = /* GraphQL */ `
  subscription OnCreateGames($filter: ModelSubscriptionGamesFilterInput) {
    onCreateGames(filter: $filter) {
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
export const onUpdateGames = /* GraphQL */ `
  subscription OnUpdateGames($filter: ModelSubscriptionGamesFilterInput) {
    onUpdateGames(filter: $filter) {
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
export const onDeleteGames = /* GraphQL */ `
  subscription OnDeleteGames($filter: ModelSubscriptionGamesFilterInput) {
    onDeleteGames(filter: $filter) {
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
export const onCreateMovies = /* GraphQL */ `
  subscription OnCreateMovies($filter: ModelSubscriptionMoviesFilterInput) {
    onCreateMovies(filter: $filter) {
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
export const onUpdateMovies = /* GraphQL */ `
  subscription OnUpdateMovies($filter: ModelSubscriptionMoviesFilterInput) {
    onUpdateMovies(filter: $filter) {
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
export const onDeleteMovies = /* GraphQL */ `
  subscription OnDeleteMovies($filter: ModelSubscriptionMoviesFilterInput) {
    onDeleteMovies(filter: $filter) {
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
export const onCreateBooks = /* GraphQL */ `
  subscription OnCreateBooks($filter: ModelSubscriptionBooksFilterInput) {
    onCreateBooks(filter: $filter) {
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
export const onUpdateBooks = /* GraphQL */ `
  subscription OnUpdateBooks($filter: ModelSubscriptionBooksFilterInput) {
    onUpdateBooks(filter: $filter) {
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
export const onDeleteBooks = /* GraphQL */ `
  subscription OnDeleteBooks($filter: ModelSubscriptionBooksFilterInput) {
    onDeleteBooks(filter: $filter) {
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
