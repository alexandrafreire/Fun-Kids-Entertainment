import React, { useState, useEffect } from "react";
import { Auth, DataStore } from "aws-amplify";
import axios from "axios";
import { Users, Sites } from "../../models";

function withDistanceToPrefLocation(SitesCollectionCardsWithDistance) {
  return function (props) {
    const { users, ...restProps } = props;
    const [user, setUser] = useState(null);

    useEffect(() => {
      const fetchUser = async () => {
        const userAuth = await Auth.currentAuthenticatedUser();
        if (userAuth.signInUserSession.accessToken.payload.auth_time === 0) {
          console.log("User is authenticated with an API key");
        } else {
          const user = users.find((u) => u.id === userAuth.attributes.sub);
          setUser(user);
        }
      };

      fetchUser();
    }, [users]);

    useEffect(() => {
      if (user && user.preferredLocation) {
        const fetchAndSetDistances = async () => {
          const geoCodeResponse = await axios
            .get("https://maps.googleapis.com/maps/api/geocode/json", {
              params: {
                address: user.preferredLocation,
                key: "AIzaSyBijxVDTAafvGRW2ZRSJ7Z8lBAtaDj6tzc",
              },
            })
            .catch((err) => {
              console.error(
                "There was an error with the geocode API request:",
                err
              );
            });

          if (
            !geoCodeResponse ||
            !geoCodeResponse.data ||
            geoCodeResponse.data.status !== "OK"
          ) {
            console.error("No results from geocode API", geoCodeResponse.data);
            return;
          }

          const location = geoCodeResponse.data.results[0].geometry.location;

          const sites = await DataStore.query(Sites);

          for (const site of sites) {
            const drivingDistance = await getDrivingDistance(location, {
              lat: site.siteLat,
              lng: site.siteLng,
            });
            // Save the distance to the site
            await DataStore.save(
              Sites.copyOf(site, (updated) => {
                updated.SiteDistanceToGeoLoc = drivingDistance;
              })
            );
          }

          // After fetching all sites, sort them by distance.
          sites.sort((a, b) => a.SiteDistanceToGeoLoc - b.SiteDistanceToGeoLoc);
        };

        fetchAndSetDistances();
      }
    }, [user]);

    const getDrivingDistance = async (origin, destination) => {
      const response = await axios.post(
        "https://d5d0x1t8y6.execute-api.eu-west-1.amazonaws.com/Prod/getdistance",
        {
          origin: origin,
          destinations: [destination],
        }
      );
      const calculatedDistance =
        response.data.rows[0].elements[0].distance.value / 1000; // convert to km
      return calculatedDistance;
    };

    return <SitesCollectionCardsWithDistance {...restProps} />;
  };
}

export default withDistanceToPrefLocation;
