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
      __typename
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
      __typename
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
      __typename
    }
  }
`;
export const createCity = /* GraphQL */ `
  mutation CreateCity(
    $input: CreateCityInput!
    $condition: ModelCityConditionInput
  ) {
    createCity(input: $input, condition: $condition) {
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
export const updateCity = /* GraphQL */ `
  mutation UpdateCity(
    $input: UpdateCityInput!
    $condition: ModelCityConditionInput
  ) {
    updateCity(input: $input, condition: $condition) {
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
export const deleteCity = /* GraphQL */ `
  mutation DeleteCity(
    $input: DeleteCityInput!
    $condition: ModelCityConditionInput
  ) {
    deleteCity(input: $input, condition: $condition) {
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
export const createFavoriteSites = /* GraphQL */ `
  mutation CreateFavoriteSites(
    $input: CreateFavoriteSitesInput!
    $condition: ModelFavoriteSitesConditionInput
  ) {
    createFavoriteSites(input: $input, condition: $condition) {
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
export const updateFavoriteSites = /* GraphQL */ `
  mutation UpdateFavoriteSites(
    $input: UpdateFavoriteSitesInput!
    $condition: ModelFavoriteSitesConditionInput
  ) {
    updateFavoriteSites(input: $input, condition: $condition) {
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
export const deleteFavoriteSites = /* GraphQL */ `
  mutation DeleteFavoriteSites(
    $input: DeleteFavoriteSitesInput!
    $condition: ModelFavoriteSitesConditionInput
  ) {
    deleteFavoriteSites(input: $input, condition: $condition) {
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
