//Sites Create

import { DataStore } from '@aws-amplify/datastore';
import { Sites } from './models';

await DataStore.save(
    new Sites({
		"siteName": "Corkagh Park Playground",
		"siteDescription": "C3.orkagh Park is located near the Naas Road and is a gateway to the Camac Greenway which leads to Clondalkin Village and the Round Tower. Corkagh Park is home to Ireland’s only purpose-built cycle track. This cycle track provides a safe, traffic-free environment in which to learn skills, improve fitness, train and race. You will also find a little magic in the shape of a fairy wood, and an amazing playground.",
		"siteTotalRating": 4.7,
		"siteAgeRange": ["ALL_AGES_KIDS", "ALL_AGES_KIDS", "PRESCHOOLER"]
		"amusementTypeName": ["PLAYGROUND"],
		"siteType": SiteType.OUTDOOR,
		"siteVillage": "Clondalkin",
		"siteCity": "Dublin",
		"siteCounty": "Dublin",
		"siteAddress": "Corkagh Park, Naas Rd, Newlands Cross, Dublin 22",
		"siteLat": 53.313270614024546,
		"siteLng": -6.412613368528426,
		"SiteDistanceToGeoLoc": 5.45,
		"SiteTimeToGeoLocation": 2.45,
		"Website": "https://www.sdcc.ie/en/services/sport-and-recreation/parks/corkagh-park.html",
		"siteImage": "https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/127120977_5068465363196140_4619248068326340673_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=973b4a&_nc_ohc=HqMGwhFHfyAAX_IMf1y&_nc_ht=scontent-dub4-1.xx&oh=00_AfDwGzNSl5Ue1LN0ushoeiEaX5Nm19_VLcFb0T7el3L4Fg&oe=641A453A",
		"SiteComments": [],
		"usersprofileID": 
	},
    {
		"siteName": "Dublin Zoo",
		"siteDescription": "It's a fun filled, stimulating day out for all the family and a place to learn about wild animals, especially those which are endangered, and see them in an environment similar to their native habitat. Dublin Zoo, located in the Phoenix Park in the heart of Dublin city, is Ireland's most popular family attraction",
		"siteTotalRating": 4.6,
		"siteAgeRange": ["FAMILY_ACTIVITIES"]
		"amusementTypeName": ["NATURE_ANIMALS"],
		"siteType": SiteType.OUTDOOR,
		"siteVillage": "Saint James",
		"siteCity": "Dublin",
		"siteCounty": "Dublin",
		"siteAddress": "Dublin Zoo, Saint James' (part of Phoenix Park), Dublin 8,
		"siteLat": 53.359551675825415,
		"siteLng": -6.306542385482054,
		"SiteDistanceToGeoLoc": 7.45,
		"SiteTimeToGeoLocation": 5.45,
		"Website": "https://www.sdcc.ie/en/services/sport-and-recreation/parks/corkagh-park.html",
		"siteImage": "https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/23b7009c-8296-49cb-be4c-d96a72e4fc88/dublin-zoo-county-dublin.jpg?fm=webp&q=85&w=1280"
		"SiteComments": [],
		"usersprofileID": 
	}

    
    )
);