/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
    }
  }
`;
export const createCities = /* GraphQL */ `
  mutation CreateCities(
    $input: CreateCitiesInput!
    $condition: ModelCitiesConditionInput
  ) {
    createCities(input: $input, condition: $condition) {
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
export const updateCities = /* GraphQL */ `
  mutation UpdateCities(
    $input: UpdateCitiesInput!
    $condition: ModelCitiesConditionInput
  ) {
    updateCities(input: $input, condition: $condition) {
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
export const deleteCities = /* GraphQL */ `
  mutation DeleteCities(
    $input: DeleteCitiesInput!
    $condition: ModelCitiesConditionInput
  ) {
    deleteCities(input: $input, condition: $condition) {
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
export const createUsersProfile = /* GraphQL */ `
  mutation CreateUsersProfile(
    $input: CreateUsersProfileInput!
    $condition: ModelUsersProfileConditionInput
  ) {
    createUsersProfile(input: $input, condition: $condition) {
      id
      name
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
export const updateUsersProfile = /* GraphQL */ `
  mutation UpdateUsersProfile(
    $input: UpdateUsersProfileInput!
    $condition: ModelUsersProfileConditionInput
  ) {
    updateUsersProfile(input: $input, condition: $condition) {
      id
      name
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
export const deleteUsersProfile = /* GraphQL */ `
  mutation DeleteUsersProfile(
    $input: DeleteUsersProfileInput!
    $condition: ModelUsersProfileConditionInput
  ) {
    deleteUsersProfile(input: $input, condition: $condition) {
      id
      name
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
export const createSiteComments = /* GraphQL */ `
  mutation CreateSiteComments(
    $input: CreateSiteCommentsInput!
    $condition: ModelSiteCommentsConditionInput
  ) {
    createSiteComments(input: $input, condition: $condition) {
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
export const updateSiteComments = /* GraphQL */ `
  mutation UpdateSiteComments(
    $input: UpdateSiteCommentsInput!
    $condition: ModelSiteCommentsConditionInput
  ) {
    updateSiteComments(input: $input, condition: $condition) {
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
export const deleteSiteComments = /* GraphQL */ `
  mutation DeleteSiteComments(
    $input: DeleteSiteCommentsInput!
    $condition: ModelSiteCommentsConditionInput
  ) {
    deleteSiteComments(input: $input, condition: $condition) {
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
export const createSitesSiteComments = /* GraphQL */ `
  mutation CreateSitesSiteComments(
    $input: CreateSitesSiteCommentsInput!
    $condition: ModelSitesSiteCommentsConditionInput
  ) {
    createSitesSiteComments(input: $input, condition: $condition) {
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
export const updateSitesSiteComments = /* GraphQL */ `
  mutation UpdateSitesSiteComments(
    $input: UpdateSitesSiteCommentsInput!
    $condition: ModelSitesSiteCommentsConditionInput
  ) {
    updateSitesSiteComments(input: $input, condition: $condition) {
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
export const deleteSitesSiteComments = /* GraphQL */ `
  mutation DeleteSitesSiteComments(
    $input: DeleteSitesSiteCommentsInput!
    $condition: ModelSitesSiteCommentsConditionInput
  ) {
    deleteSitesSiteComments(input: $input, condition: $condition) {
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
