export const schema = {
    "models": {
        "Users": {
            "name": "Users",
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
                "profilePic": {
                    "name": "profilePic",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
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
                    "isArray": false,
                    "type": {
                        "enum": "SiteAgeRangesValues"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "preferredAmusementTypes": {
                    "name": "preferredAmusementTypes",
                    "isArray": false,
                    "type": {
                        "enum": "AmusementTypeNameValues"
                    },
                    "isRequired": false,
                    "attributes": []
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
                            "usersID"
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
            "pluralName": "Users",
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
                                    "update"
                                ],
                                "identityClaim": "cognito:username"
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "read"
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
                                    "read",
                                    "update",
                                    "delete"
                                ]
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "read",
                                    "update"
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
                "cityLat": {
                    "name": "cityLat",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "cityLng": {
                    "name": "cityLng",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "usersID": {
                    "name": "usersID",
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
                        "name": "byUsers",
                        "fields": [
                            "usersID"
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
    "codegenVersion": "3.4.2",
    "version": "5a752773b2f46f33307dc07021f6b63f"
};