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
