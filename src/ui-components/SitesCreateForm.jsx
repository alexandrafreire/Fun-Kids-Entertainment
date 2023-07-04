/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Sites, FavoriteSites } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function SitesCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    siteName: "",
    siteDescription: "",
    siteTotalRating: "",
    siteNumberOfRatings: "",
    siteAgeRange: "",
    amusementTypeName: "",
    siteType: "",
    siteVillage: "",
    siteCity: "",
    siteCounty: "",
    siteAddress: "",
    siteLat: "",
    siteLng: "",
    SiteDistanceToGeoLoc: "",
    SiteTimeToGeoLocation: "",
    SiteWebsite: "",
    siteImage: "",
    SiteMapURL: "",
    cityLat: "",
    cityLng: "",
    favoritedBy: [],
  };
  const [siteName, setSiteName] = React.useState(initialValues.siteName);
  const [siteDescription, setSiteDescription] = React.useState(
    initialValues.siteDescription
  );
  const [siteTotalRating, setSiteTotalRating] = React.useState(
    initialValues.siteTotalRating
  );
  const [siteNumberOfRatings, setSiteNumberOfRatings] = React.useState(
    initialValues.siteNumberOfRatings
  );
  const [siteAgeRange, setSiteAgeRange] = React.useState(
    initialValues.siteAgeRange
  );
  const [amusementTypeName, setAmusementTypeName] = React.useState(
    initialValues.amusementTypeName
  );
  const [siteType, setSiteType] = React.useState(initialValues.siteType);
  const [siteVillage, setSiteVillage] = React.useState(
    initialValues.siteVillage
  );
  const [siteCity, setSiteCity] = React.useState(initialValues.siteCity);
  const [siteCounty, setSiteCounty] = React.useState(initialValues.siteCounty);
  const [siteAddress, setSiteAddress] = React.useState(
    initialValues.siteAddress
  );
  const [siteLat, setSiteLat] = React.useState(initialValues.siteLat);
  const [siteLng, setSiteLng] = React.useState(initialValues.siteLng);
  const [SiteDistanceToGeoLoc, setSiteDistanceToGeoLoc] = React.useState(
    initialValues.SiteDistanceToGeoLoc
  );
  const [SiteTimeToGeoLocation, setSiteTimeToGeoLocation] = React.useState(
    initialValues.SiteTimeToGeoLocation
  );
  const [SiteWebsite, setSiteWebsite] = React.useState(
    initialValues.SiteWebsite
  );
  const [siteImage, setSiteImage] = React.useState(initialValues.siteImage);
  const [SiteMapURL, setSiteMapURL] = React.useState(initialValues.SiteMapURL);
  const [cityLat, setCityLat] = React.useState(initialValues.cityLat);
  const [cityLng, setCityLng] = React.useState(initialValues.cityLng);
  const [favoritedBy, setFavoritedBy] = React.useState(
    initialValues.favoritedBy
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSiteName(initialValues.siteName);
    setSiteDescription(initialValues.siteDescription);
    setSiteTotalRating(initialValues.siteTotalRating);
    setSiteNumberOfRatings(initialValues.siteNumberOfRatings);
    setSiteAgeRange(initialValues.siteAgeRange);
    setAmusementTypeName(initialValues.amusementTypeName);
    setSiteType(initialValues.siteType);
    setSiteVillage(initialValues.siteVillage);
    setSiteCity(initialValues.siteCity);
    setSiteCounty(initialValues.siteCounty);
    setSiteAddress(initialValues.siteAddress);
    setSiteLat(initialValues.siteLat);
    setSiteLng(initialValues.siteLng);
    setSiteDistanceToGeoLoc(initialValues.SiteDistanceToGeoLoc);
    setSiteTimeToGeoLocation(initialValues.SiteTimeToGeoLocation);
    setSiteWebsite(initialValues.SiteWebsite);
    setSiteImage(initialValues.siteImage);
    setSiteMapURL(initialValues.SiteMapURL);
    setCityLat(initialValues.cityLat);
    setCityLng(initialValues.cityLng);
    setFavoritedBy(initialValues.favoritedBy);
    setCurrentFavoritedByValue(undefined);
    setCurrentFavoritedByDisplayValue("");
    setErrors({});
  };
  const [currentFavoritedByDisplayValue, setCurrentFavoritedByDisplayValue] =
    React.useState("");
  const [currentFavoritedByValue, setCurrentFavoritedByValue] =
    React.useState(undefined);
  const favoritedByRef = React.createRef();
  const getIDValue = {
    favoritedBy: (r) => JSON.stringify({ id: r?.id }),
  };
  const favoritedByIdSet = new Set(
    Array.isArray(favoritedBy)
      ? favoritedBy.map((r) => getIDValue.favoritedBy?.(r))
      : getIDValue.favoritedBy?.(favoritedBy)
  );
  const favoriteSitesRecords = useDataStoreBinding({
    type: "collection",
    model: FavoriteSites,
  }).items;
  const getDisplayValue = {
    favoritedBy: (r) => r?.id,
  };
  const validations = {
    siteName: [{ type: "Required" }],
    siteDescription: [{ type: "Required" }],
    siteTotalRating: [{ type: "Required" }],
    siteNumberOfRatings: [],
    siteAgeRange: [{ type: "Required" }],
    amusementTypeName: [{ type: "Required" }],
    siteType: [{ type: "Required" }],
    siteVillage: [{ type: "Required" }],
    siteCity: [{ type: "Required" }],
    siteCounty: [{ type: "Required" }],
    siteAddress: [{ type: "Required" }],
    siteLat: [{ type: "Required" }],
    siteLng: [{ type: "Required" }],
    SiteDistanceToGeoLoc: [],
    SiteTimeToGeoLocation: [],
    SiteWebsite: [{ type: "URL" }],
    siteImage: [{ type: "URL" }],
    SiteMapURL: [{ type: "URL" }],
    cityLat: [],
    cityLng: [],
    favoritedBy: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          siteName,
          siteDescription,
          siteTotalRating,
          siteNumberOfRatings,
          siteAgeRange,
          amusementTypeName,
          siteType,
          siteVillage,
          siteCity,
          siteCounty,
          siteAddress,
          siteLat,
          siteLng,
          SiteDistanceToGeoLoc,
          SiteTimeToGeoLocation,
          SiteWebsite,
          siteImage,
          SiteMapURL,
          cityLat,
          cityLng,
          favoritedBy,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          const modelFieldsToSave = {
            siteName: modelFields.siteName,
            siteDescription: modelFields.siteDescription,
            siteTotalRating: modelFields.siteTotalRating,
            siteNumberOfRatings: modelFields.siteNumberOfRatings,
            siteAgeRange: modelFields.siteAgeRange,
            amusementTypeName: modelFields.amusementTypeName,
            siteType: modelFields.siteType,
            siteVillage: modelFields.siteVillage,
            siteCity: modelFields.siteCity,
            siteCounty: modelFields.siteCounty,
            siteAddress: modelFields.siteAddress,
            siteLat: modelFields.siteLat,
            siteLng: modelFields.siteLng,
            SiteDistanceToGeoLoc: modelFields.SiteDistanceToGeoLoc,
            SiteTimeToGeoLocation: modelFields.SiteTimeToGeoLocation,
            SiteWebsite: modelFields.SiteWebsite,
            siteImage: modelFields.siteImage,
            SiteMapURL: modelFields.SiteMapURL,
            cityLat: modelFields.cityLat,
            cityLng: modelFields.cityLng,
          };
          const sites = await DataStore.save(new Sites(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...favoritedBy.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  FavoriteSites.copyOf(original, (updated) => {
                    updated.site = sites;
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SitesCreateForm")}
      {...rest}
    >
      <TextField
        label="Site name"
        isRequired={true}
        isReadOnly={false}
        value={siteName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteName: value,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.siteName ?? value;
          }
          if (errors.siteName?.hasError) {
            runValidationTasks("siteName", value);
          }
          setSiteName(value);
        }}
        onBlur={() => runValidationTasks("siteName", siteName)}
        errorMessage={errors.siteName?.errorMessage}
        hasError={errors.siteName?.hasError}
        {...getOverrideProps(overrides, "siteName")}
      ></TextField>
      <TextField
        label="Site description"
        isRequired={true}
        isReadOnly={false}
        value={siteDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription: value,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.siteDescription ?? value;
          }
          if (errors.siteDescription?.hasError) {
            runValidationTasks("siteDescription", value);
          }
          setSiteDescription(value);
        }}
        onBlur={() => runValidationTasks("siteDescription", siteDescription)}
        errorMessage={errors.siteDescription?.errorMessage}
        hasError={errors.siteDescription?.hasError}
        {...getOverrideProps(overrides, "siteDescription")}
      ></TextField>
      <TextField
        label="Site total rating"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={siteTotalRating}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating: value,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.siteTotalRating ?? value;
          }
          if (errors.siteTotalRating?.hasError) {
            runValidationTasks("siteTotalRating", value);
          }
          setSiteTotalRating(value);
        }}
        onBlur={() => runValidationTasks("siteTotalRating", siteTotalRating)}
        errorMessage={errors.siteTotalRating?.errorMessage}
        hasError={errors.siteTotalRating?.hasError}
        {...getOverrideProps(overrides, "siteTotalRating")}
      ></TextField>
      <TextField
        label="Site number of ratings"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={siteNumberOfRatings}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings: value,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.siteNumberOfRatings ?? value;
          }
          if (errors.siteNumberOfRatings?.hasError) {
            runValidationTasks("siteNumberOfRatings", value);
          }
          setSiteNumberOfRatings(value);
        }}
        onBlur={() =>
          runValidationTasks("siteNumberOfRatings", siteNumberOfRatings)
        }
        errorMessage={errors.siteNumberOfRatings?.errorMessage}
        hasError={errors.siteNumberOfRatings?.hasError}
        {...getOverrideProps(overrides, "siteNumberOfRatings")}
      ></TextField>
      <TextField
        label="Site age range"
        isRequired={true}
        isReadOnly={false}
        value={siteAgeRange}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange: value,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.siteAgeRange ?? value;
          }
          if (errors.siteAgeRange?.hasError) {
            runValidationTasks("siteAgeRange", value);
          }
          setSiteAgeRange(value);
        }}
        onBlur={() => runValidationTasks("siteAgeRange", siteAgeRange)}
        errorMessage={errors.siteAgeRange?.errorMessage}
        hasError={errors.siteAgeRange?.hasError}
        {...getOverrideProps(overrides, "siteAgeRange")}
      ></TextField>
      <TextField
        label="Amusement type name"
        isRequired={true}
        isReadOnly={false}
        value={amusementTypeName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName: value,
              siteType,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.amusementTypeName ?? value;
          }
          if (errors.amusementTypeName?.hasError) {
            runValidationTasks("amusementTypeName", value);
          }
          setAmusementTypeName(value);
        }}
        onBlur={() =>
          runValidationTasks("amusementTypeName", amusementTypeName)
        }
        errorMessage={errors.amusementTypeName?.errorMessage}
        hasError={errors.amusementTypeName?.hasError}
        {...getOverrideProps(overrides, "amusementTypeName")}
      ></TextField>
      <TextField
        label="Site type"
        isRequired={true}
        isReadOnly={false}
        value={siteType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType: value,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.siteType ?? value;
          }
          if (errors.siteType?.hasError) {
            runValidationTasks("siteType", value);
          }
          setSiteType(value);
        }}
        onBlur={() => runValidationTasks("siteType", siteType)}
        errorMessage={errors.siteType?.errorMessage}
        hasError={errors.siteType?.hasError}
        {...getOverrideProps(overrides, "siteType")}
      ></TextField>
      <TextField
        label="Site village"
        isRequired={true}
        isReadOnly={false}
        value={siteVillage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage: value,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.siteVillage ?? value;
          }
          if (errors.siteVillage?.hasError) {
            runValidationTasks("siteVillage", value);
          }
          setSiteVillage(value);
        }}
        onBlur={() => runValidationTasks("siteVillage", siteVillage)}
        errorMessage={errors.siteVillage?.errorMessage}
        hasError={errors.siteVillage?.hasError}
        {...getOverrideProps(overrides, "siteVillage")}
      ></TextField>
      <TextField
        label="Site city"
        isRequired={true}
        isReadOnly={false}
        value={siteCity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity: value,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.siteCity ?? value;
          }
          if (errors.siteCity?.hasError) {
            runValidationTasks("siteCity", value);
          }
          setSiteCity(value);
        }}
        onBlur={() => runValidationTasks("siteCity", siteCity)}
        errorMessage={errors.siteCity?.errorMessage}
        hasError={errors.siteCity?.hasError}
        {...getOverrideProps(overrides, "siteCity")}
      ></TextField>
      <TextField
        label="Site county"
        isRequired={true}
        isReadOnly={false}
        value={siteCounty}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity,
              siteCounty: value,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.siteCounty ?? value;
          }
          if (errors.siteCounty?.hasError) {
            runValidationTasks("siteCounty", value);
          }
          setSiteCounty(value);
        }}
        onBlur={() => runValidationTasks("siteCounty", siteCounty)}
        errorMessage={errors.siteCounty?.errorMessage}
        hasError={errors.siteCounty?.hasError}
        {...getOverrideProps(overrides, "siteCounty")}
      ></TextField>
      <TextField
        label="Site address"
        isRequired={true}
        isReadOnly={false}
        value={siteAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress: value,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.siteAddress ?? value;
          }
          if (errors.siteAddress?.hasError) {
            runValidationTasks("siteAddress", value);
          }
          setSiteAddress(value);
        }}
        onBlur={() => runValidationTasks("siteAddress", siteAddress)}
        errorMessage={errors.siteAddress?.errorMessage}
        hasError={errors.siteAddress?.hasError}
        {...getOverrideProps(overrides, "siteAddress")}
      ></TextField>
      <TextField
        label="Site lat"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={siteLat}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat: value,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.siteLat ?? value;
          }
          if (errors.siteLat?.hasError) {
            runValidationTasks("siteLat", value);
          }
          setSiteLat(value);
        }}
        onBlur={() => runValidationTasks("siteLat", siteLat)}
        errorMessage={errors.siteLat?.errorMessage}
        hasError={errors.siteLat?.hasError}
        {...getOverrideProps(overrides, "siteLat")}
      ></TextField>
      <TextField
        label="Site lng"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={siteLng}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng: value,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.siteLng ?? value;
          }
          if (errors.siteLng?.hasError) {
            runValidationTasks("siteLng", value);
          }
          setSiteLng(value);
        }}
        onBlur={() => runValidationTasks("siteLng", siteLng)}
        errorMessage={errors.siteLng?.errorMessage}
        hasError={errors.siteLng?.hasError}
        {...getOverrideProps(overrides, "siteLng")}
      ></TextField>
      <TextField
        label="Site distance to geo loc"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={SiteDistanceToGeoLoc}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc: value,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.SiteDistanceToGeoLoc ?? value;
          }
          if (errors.SiteDistanceToGeoLoc?.hasError) {
            runValidationTasks("SiteDistanceToGeoLoc", value);
          }
          setSiteDistanceToGeoLoc(value);
        }}
        onBlur={() =>
          runValidationTasks("SiteDistanceToGeoLoc", SiteDistanceToGeoLoc)
        }
        errorMessage={errors.SiteDistanceToGeoLoc?.errorMessage}
        hasError={errors.SiteDistanceToGeoLoc?.hasError}
        {...getOverrideProps(overrides, "SiteDistanceToGeoLoc")}
      ></TextField>
      <TextField
        label="Site time to geo location"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={SiteTimeToGeoLocation}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation: value,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.SiteTimeToGeoLocation ?? value;
          }
          if (errors.SiteTimeToGeoLocation?.hasError) {
            runValidationTasks("SiteTimeToGeoLocation", value);
          }
          setSiteTimeToGeoLocation(value);
        }}
        onBlur={() =>
          runValidationTasks("SiteTimeToGeoLocation", SiteTimeToGeoLocation)
        }
        errorMessage={errors.SiteTimeToGeoLocation?.errorMessage}
        hasError={errors.SiteTimeToGeoLocation?.hasError}
        {...getOverrideProps(overrides, "SiteTimeToGeoLocation")}
      ></TextField>
      <TextField
        label="Site website"
        isRequired={false}
        isReadOnly={false}
        value={SiteWebsite}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite: value,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.SiteWebsite ?? value;
          }
          if (errors.SiteWebsite?.hasError) {
            runValidationTasks("SiteWebsite", value);
          }
          setSiteWebsite(value);
        }}
        onBlur={() => runValidationTasks("SiteWebsite", SiteWebsite)}
        errorMessage={errors.SiteWebsite?.errorMessage}
        hasError={errors.SiteWebsite?.hasError}
        {...getOverrideProps(overrides, "SiteWebsite")}
      ></TextField>
      <TextField
        label="Site image"
        isRequired={false}
        isReadOnly={false}
        value={siteImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage: value,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.siteImage ?? value;
          }
          if (errors.siteImage?.hasError) {
            runValidationTasks("siteImage", value);
          }
          setSiteImage(value);
        }}
        onBlur={() => runValidationTasks("siteImage", siteImage)}
        errorMessage={errors.siteImage?.errorMessage}
        hasError={errors.siteImage?.hasError}
        {...getOverrideProps(overrides, "siteImage")}
      ></TextField>
      <TextField
        label="Site map url"
        isRequired={false}
        isReadOnly={false}
        value={SiteMapURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL: value,
              cityLat,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.SiteMapURL ?? value;
          }
          if (errors.SiteMapURL?.hasError) {
            runValidationTasks("SiteMapURL", value);
          }
          setSiteMapURL(value);
        }}
        onBlur={() => runValidationTasks("SiteMapURL", SiteMapURL)}
        errorMessage={errors.SiteMapURL?.errorMessage}
        hasError={errors.SiteMapURL?.hasError}
        {...getOverrideProps(overrides, "SiteMapURL")}
      ></TextField>
      <TextField
        label="City lat"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cityLat}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat: value,
              cityLng,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.cityLat ?? value;
          }
          if (errors.cityLat?.hasError) {
            runValidationTasks("cityLat", value);
          }
          setCityLat(value);
        }}
        onBlur={() => runValidationTasks("cityLat", cityLat)}
        errorMessage={errors.cityLat?.errorMessage}
        hasError={errors.cityLat?.hasError}
        {...getOverrideProps(overrides, "cityLat")}
      ></TextField>
      <TextField
        label="City lng"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cityLng}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng: value,
              favoritedBy,
            };
            const result = onChange(modelFields);
            value = result?.cityLng ?? value;
          }
          if (errors.cityLng?.hasError) {
            runValidationTasks("cityLng", value);
          }
          setCityLng(value);
        }}
        onBlur={() => runValidationTasks("cityLng", cityLng)}
        errorMessage={errors.cityLng?.errorMessage}
        hasError={errors.cityLng?.hasError}
        {...getOverrideProps(overrides, "cityLng")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              siteName,
              siteDescription,
              siteTotalRating,
              siteNumberOfRatings,
              siteAgeRange,
              amusementTypeName,
              siteType,
              siteVillage,
              siteCity,
              siteCounty,
              siteAddress,
              siteLat,
              siteLng,
              SiteDistanceToGeoLoc,
              SiteTimeToGeoLocation,
              SiteWebsite,
              siteImage,
              SiteMapURL,
              cityLat,
              cityLng,
              favoritedBy: values,
            };
            const result = onChange(modelFields);
            values = result?.favoritedBy ?? values;
          }
          setFavoritedBy(values);
          setCurrentFavoritedByValue(undefined);
          setCurrentFavoritedByDisplayValue("");
        }}
        currentFieldValue={currentFavoritedByValue}
        label={"Favorited by"}
        items={favoritedBy}
        hasError={errors?.favoritedBy?.hasError}
        errorMessage={errors?.favoritedBy?.errorMessage}
        getBadgeText={getDisplayValue.favoritedBy}
        setFieldValue={(model) => {
          setCurrentFavoritedByDisplayValue(getDisplayValue.favoritedBy(model));
          setCurrentFavoritedByValue(model);
        }}
        inputFieldRef={favoritedByRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Favorited by"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search FavoriteSites"
          value={currentFavoritedByDisplayValue}
          options={favoriteSitesRecords
            .filter((r) => !favoritedByIdSet.has(getIDValue.favoritedBy?.(r)))
            .map((r) => ({
              id: getIDValue.favoritedBy?.(r),
              label: getDisplayValue.favoritedBy?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentFavoritedByValue(
              favoriteSitesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentFavoritedByDisplayValue(label);
            runValidationTasks("favoritedBy", label);
          }}
          onClear={() => {
            setCurrentFavoritedByDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.favoritedBy?.hasError) {
              runValidationTasks("favoritedBy", value);
            }
            setCurrentFavoritedByDisplayValue(value);
            setCurrentFavoritedByValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("favoritedBy", currentFavoritedByDisplayValue)
          }
          errorMessage={errors.favoritedBy?.errorMessage}
          hasError={errors.favoritedBy?.hasError}
          ref={favoritedByRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "favoritedBy")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
