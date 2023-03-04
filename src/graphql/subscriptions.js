/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContactUs = /* GraphQL */ `
  subscription OnCreateContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
  ) {
    onCreateContactUs(filter: $filter) {
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
export const onUpdateContactUs = /* GraphQL */ `
  subscription OnUpdateContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
  ) {
    onUpdateContactUs(filter: $filter) {
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
export const onDeleteContactUs = /* GraphQL */ `
  subscription OnDeleteContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
  ) {
    onDeleteContactUs(filter: $filter) {
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
export const onCreateCities = /* GraphQL */ `
  subscription OnCreateCities($filter: ModelSubscriptionCitiesFilterInput) {
    onCreateCities(filter: $filter) {
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
export const onUpdateCities = /* GraphQL */ `
  subscription OnUpdateCities($filter: ModelSubscriptionCitiesFilterInput) {
    onUpdateCities(filter: $filter) {
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
export const onDeleteCities = /* GraphQL */ `
  subscription OnDeleteCities($filter: ModelSubscriptionCitiesFilterInput) {
    onDeleteCities(filter: $filter) {
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
export const onCreateUsersProfile = /* GraphQL */ `
  subscription OnCreateUsersProfile(
    $filter: ModelSubscriptionUsersProfileFilterInput
  ) {
    onCreateUsersProfile(filter: $filter) {
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
export const onUpdateUsersProfile = /* GraphQL */ `
  subscription OnUpdateUsersProfile(
    $filter: ModelSubscriptionUsersProfileFilterInput
  ) {
    onUpdateUsersProfile(filter: $filter) {
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
export const onDeleteUsersProfile = /* GraphQL */ `
  subscription OnDeleteUsersProfile(
    $filter: ModelSubscriptionUsersProfileFilterInput
  ) {
    onDeleteUsersProfile(filter: $filter) {
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
export const onCreateSitesSiteComments = /* GraphQL */ `
  subscription OnCreateSitesSiteComments(
    $filter: ModelSubscriptionSitesSiteCommentsFilterInput
    $owner: String
  ) {
    onCreateSitesSiteComments(filter: $filter, owner: $owner) {
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
export const onUpdateSitesSiteComments = /* GraphQL */ `
  subscription OnUpdateSitesSiteComments(
    $filter: ModelSubscriptionSitesSiteCommentsFilterInput
    $owner: String
  ) {
    onUpdateSitesSiteComments(filter: $filter, owner: $owner) {
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
export const onDeleteSitesSiteComments = /* GraphQL */ `
  subscription OnDeleteSitesSiteComments(
    $filter: ModelSubscriptionSitesSiteCommentsFilterInput
    $owner: String
  ) {
    onDeleteSitesSiteComments(filter: $filter, owner: $owner) {
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
