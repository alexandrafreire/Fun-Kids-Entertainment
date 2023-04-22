export const schema = {
    "models": {
        "ContactUs": {
            "name": "ContactUs",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "firstname": {
                    "name": "firstname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": true,
                    "attributes": []
                },
                "feedbackType": {
                    "name": "feedbackType",
                    "isArray": false,
                    "type": {
                        "enum": "FeedbackTypeValues"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "overallSiteRating": {
                    "name": "overallSiteRating",
                    "isArray": false,
                    "type": {
                        "enum": "OverallSiteRatingValues"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Contactuses",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "AppAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "create",
                                    "read",
                                    "update"
                                ],
                                "identityClaim": "cognito:username"
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "read"
                                ],
                                "provider": "userPools"
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "read",
                                    "update"
                                ],
                                "provider": "apiKey"
                            }
                        ]
                    }
                }
            ]
        },
        "UsersProfile": {
            "name": "UsersProfile",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": true,
                    "attributes": []
                },
                "username": {
                    "name": "username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "preferredLocation": {
                    "name": "preferredLocation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "preferredAgeRanges": {
                    "name": "preferredAgeRanges",
                    "isArray": true,
                    "type": {
                        "enum": "SiteAgeRangesValues"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "preferredAmusementTypes": {
                    "name": "preferredAmusementTypes",
                    "isArray": true,
                    "type": {
                        "enum": "AmusementTypeNameValues"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "UsersFavSites": {
                    "name": "UsersFavSites",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "Cities": {
                    "name": "Cities",
                    "isArray": false,
                    "type": {
                        "model": "Sites"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "usersProfileCitiesId"
                        ]
                    }
                },
                "Sites": {
                    "name": "Sites",
                    "isArray": true,
                    "type": {
                        "model": "Sites"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "usersprofileID"
                        ]
                    }
                },
                "profilePic": {
                    "name": "profilePic",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "usersProfileCitiesId": {
                    "name": "usersProfileCitiesId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "UsersProfiles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "AppAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "read",
                                    "update",
                                    "create"
                                ],
                                "identityClaim": "cognito:username"
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "read"
                                ],
                                "provider": "userPools"
                            }
                        ]
                    }
                }
            ]
        },
        "SiteComments": {
            "name": "SiteComments",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "siteRating": {
                    "name": "siteRating",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "username": {
                    "name": "username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "sitess": {
                    "name": "sitess",
                    "isArray": true,
                    "type": {
                        "model": "SitesSiteComments"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "siteComments"
                        ]
                    }
                },
                "createdDate": {
                    "name": "createdDate",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "SiteComments",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "AppAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "create"
                                ],
                                "provider": "userPools"
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ],
                                "provider": "apiKey"
                            }
                        ]
                    }
                }
            ]
        },
        "Sites": {
            "name": "Sites",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "siteName": {
                    "name": "siteName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "siteDescription": {
                    "name": "siteDescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "siteTotalRating": {
                    "name": "siteTotalRating",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "siteNumberOfRatings": {
                    "name": "siteNumberOfRatings",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "siteAgeRange": {
                    "name": "siteAgeRange",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "amusementTypeName": {
                    "name": "amusementTypeName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "siteType": {
                    "name": "siteType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "siteVillage": {
                    "name": "siteVillage",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "siteCity": {
                    "name": "siteCity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "siteCounty": {
                    "name": "siteCounty",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "siteAddress": {
                    "name": "siteAddress",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "siteLat": {
                    "name": "siteLat",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "siteLng": {
                    "name": "siteLng",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "SiteDistanceToGeoLoc": {
                    "name": "SiteDistanceToGeoLoc",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "SiteTimeToGeoLocation": {
                    "name": "SiteTimeToGeoLocation",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "SiteWebsite": {
                    "name": "SiteWebsite",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "siteImage": {
                    "name": "siteImage",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "SiteMapURL": {
                    "name": "SiteMapURL",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "SiteComments": {
                    "name": "SiteComments",
                    "isArray": true,
                    "type": {
                        "model": "SitesSiteComments"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "sites"
                        ]
                    }
                },
                "usersprofileID": {
                    "name": "usersprofileID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Sites",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUsersProfile",
                        "fields": [
                            "usersprofileID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "AppAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "read",
                                    "update"
                                ],
                                "identityClaim": "cognito:username"
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "read",
                                    "update"
                                ],
                                "provider": "userPools"
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ],
                                "provider": "apiKey"
                            }
                        ]
                    }
                }
            ]
        },
        "SitesSiteComments": {
            "name": "SitesSiteComments",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "siteCommentsId": {
                    "name": "siteCommentsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "sitesId": {
                    "name": "sitesId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "siteComments": {
                    "name": "siteComments",
                    "isArray": false,
                    "type": {
                        "model": "SiteComments"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "siteCommentsId"
                        ]
                    }
                },
                "sites": {
                    "name": "sites",
                    "isArray": false,
                    "type": {
                        "model": "Sites"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "sitesId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "SitesSiteComments",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySiteComments",
                        "fields": [
                            "siteCommentsId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySites",
                        "fields": [
                            "sitesId"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "OverallSiteRatingValues": {
            "name": "OverallSiteRatingValues",
            "values": [
                "GOOD",
                "AVERAGE",
                "BAD"
            ]
        },
        "FeedbackTypeValues": {
            "name": "FeedbackTypeValues",
            "values": [
                "GENERAL_FEEDBACK",
                "REPORT_PROBLEM",
                "FEATURE_REQUEST"
            ]
        },
        "AmusementTypeNameValues": {
            "name": "AmusementTypeNameValues",
            "values": [
                "PLAYGROUND",
                "AMUSEMENT_PARK",
                "EXHIBITION",
                "NATURE_ANIMALS",
                "WATER_PARK",
                "MUSEUM",
                "BEACH",
                "LANDSCAPE"
            ]
        },
        "SiteAgeRangesValues": {
            "name": "SiteAgeRangesValues",
            "values": [
                "FAMILY_ACTIVITIES",
                "TODDLER",
                "PRESCHOOLER",
                "SCHOOL_AGED_CHILD",
                "ALL_AGES_KIDS",
                "ADOLESCENTS_ADULTS"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.4.0",
    "version": "392235518b4941bc415f993e0feeae71"
};