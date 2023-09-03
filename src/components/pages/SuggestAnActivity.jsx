import React, { useState, useEffect } from "react";
import {
  View,
  TextField,
  Button,
  SelectField,
  Alert,
} from "@aws-amplify/ui-react";
import { Amplify, Auth, DataStore, Storage } from "aws-amplify";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { SuggestedActivities } from "./../../models";
import "./SuggestAnActivity.css";

import awsconfig from "./../../aws-exports";
Amplify.configure(awsconfig);

const siteAgeRangesDisplayNames = {
  FAMILY_ACTIVITIES: "Family Activities",
  TODDLER: "Toddler",
  PRESCHOOLER: "Preschooler",
  SCHOOL_AGED_CHILD: "School Aged Child",
  ALL_AGES_KIDS: "All Ages Kids",
  ADOLESCENTS_ADULTS: "Adolescents & Adults",
};

const amusementTypeNameDisplayNames = {
  PLAYGROUND: "Playground",
  AMUSEMENT_PARK: "Amusement Park",
  EXHIBITION: "Exhibition",
  NATURE_ANIMALS: "Nature & Animals",
  WATER_PARK: "Water Park",
  MUSEUM: "Museum",
  BEACH: "Beach",
  LANDSCAPE: "Landscape",
};

export const SuggestAnActivity = () => {
  const [activityName, setActivityName] = useState("");
  const [activityAddress, setActivityAddress] = useState("");
  const [activityDescription, setDescription] = useState("");
  const [activityAgeRange, setAgeRange] = useState("");
  const [activityType, setActivityType] = useState("");
  const [alert, setAlert] = useState(null);
  const [userStatus, setUserStatus] = useState("guest");
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        setUserStatus("authenticated");
      } catch (err) {
        setUserStatus("guest");
      }
    };

    checkAuthentication();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert the selectedFiles array to URLs
    const imageURLs = await Promise.all(
      selectedFiles.map(async (fileKey) => {
        return await Storage.get(fileKey);
      })
    );

    try {
      const newActivity = new SuggestedActivities({
        activityName: activityName.trim(),
        activityAddress: activityAddress.trim(),
        activityDescription: activityDescription.trim(),
        activityAgeRange,
        activityType,
        activityImageURLs: imageURLs,
      });
      await DataStore.save(newActivity);
      setAlert({
        type: "success",
        message: "Activity suggestion submitted successfully!",
      });
    } catch (error) {
      console.error("Error saving the activity suggestion:", error);
      setAlert({
        type: "error",
        message: "Failed to submit activity suggestion.",
      });
    }
  };

  if (userStatus === "guest") {
    return <Alert variation="error">Please login to use this feature!</Alert>;
  }

  return (
    <>
      {alert && <Alert variation={alert.type}>{alert.message}</Alert>}
      <form onSubmit={handleSubmit}>
        <h2>Suggest an Activity</h2>
        <View>
          <TextField
            label="Activity Name"
            name="activityName"
            placeholder="Enter the activity name"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
          />
        </View>

        <View>
          <TextField
            label="Activity Address"
            name="activityAddress"
            placeholder="Enter the activity address"
            value={activityAddress}
            onChange={(e) => setActivityAddress(e.target.value)}
          />
        </View>

        <View>
          <TextField
            label="Activity Description"
            name="description"
            placeholder="Enter the activity description"
            value={activityDescription}
            onChange={(e) => setDescription(e.target.value)}
          />
        </View>

        <View>
          <SelectField
            label="Activity Age Range"
            name="ageRange"
            value={activityAgeRange}
            onChange={(e) => setAgeRange(e.target.value)}
          >
            <option value="" disabled>
              Select an age range
            </option>
            {Object.keys(siteAgeRangesDisplayNames).map((key) => (
              <option value={key} key={key}>
                {siteAgeRangesDisplayNames[key]}
              </option>
            ))}
          </SelectField>
        </View>

        <View>
          <SelectField
            label="Activity Type"
            name="activityType"
            value={activityType}
            onChange={(e) => setActivityType(e.target.value)}
          >
            <option value="" disabled>
              Select an activity type
            </option>
            {Object.keys(amusementTypeNameDisplayNames).map((key) => (
              <option value={key} key={key}>
                {amusementTypeNameDisplayNames[key]}
              </option>
            ))}
          </SelectField>
        </View>

        <View>
          <label>Activity Image</label>
          <StorageManager
            acceptedFileTypes={["image/*"]}
            accessLevel="public"
            maxFileCount={3}
            maxFileSize={100000000}
          />
        </View>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default SuggestAnActivity;
