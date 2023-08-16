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
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Users, City, FavoriteSites } from "../models";
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
export default function UsersCreateForm(props) {
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
    name: "",
    email: "",
    username: "",
    profilePic: "",
    preferredLocation: undefined,
    preferredAgeRanges: "",
    preferredAmusementTypes: "",
    favoriteSites: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [username, setUsername] = React.useState(initialValues.username);
  const [profilePic, setProfilePic] = React.useState(initialValues.profilePic);
  const [preferredLocation, setPreferredLocation] = React.useState(
    initialValues.preferredLocation
  );
  const [preferredAgeRanges, setPreferredAgeRanges] = React.useState(
    initialValues.preferredAgeRanges
  );
  const [preferredAmusementTypes, setPreferredAmusementTypes] = React.useState(
    initialValues.preferredAmusementTypes
  );
  const [favoriteSites, setFavoriteSites] = React.useState(
    initialValues.favoriteSites
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setEmail(initialValues.email);
    setUsername(initialValues.username);
    setProfilePic(initialValues.profilePic);
    setPreferredLocation(initialValues.preferredLocation);
    setCurrentPreferredLocationValue(undefined);
    setCurrentPreferredLocationDisplayValue("");
    setPreferredAgeRanges(initialValues.preferredAgeRanges);
    setPreferredAmusementTypes(initialValues.preferredAmusementTypes);
    setFavoriteSites(initialValues.favoriteSites);
    setCurrentFavoriteSitesValue(undefined);
    setCurrentFavoriteSitesDisplayValue("");
    setErrors({});
  };
  const [
    currentPreferredLocationDisplayValue,
    setCurrentPreferredLocationDisplayValue,
  ] = React.useState("");
  const [currentPreferredLocationValue, setCurrentPreferredLocationValue] =
    React.useState(undefined);
  const preferredLocationRef = React.createRef();
  const [
    currentFavoriteSitesDisplayValue,
    setCurrentFavoriteSitesDisplayValue,
  ] = React.useState("");
  const [currentFavoriteSitesValue, setCurrentFavoriteSitesValue] =
    React.useState(undefined);
  const favoriteSitesRef = React.createRef();
  const getIDValue = {
    preferredLocation: (r) => JSON.stringify({ id: r?.id }),
    favoriteSites: (r) => JSON.stringify({ id: r?.id }),
  };
  const preferredLocationIdSet = new Set(
    Array.isArray(preferredLocation)
      ? preferredLocation.map((r) => getIDValue.preferredLocation?.(r))
      : getIDValue.preferredLocation?.(preferredLocation)
  );
  const favoriteSitesIdSet = new Set(
    Array.isArray(favoriteSites)
      ? favoriteSites.map((r) => getIDValue.favoriteSites?.(r))
      : getIDValue.favoriteSites?.(favoriteSites)
  );
  const cityRecords = useDataStoreBinding({
    type: "collection",
    model: City,
  }).items;
  const favoriteSitesRecords = useDataStoreBinding({
    type: "collection",
    model: FavoriteSites,
  }).items;
  const getDisplayValue = {
    preferredLocation: (r) =>
      `${r?.cityName ? r?.cityName + " - " : ""}${r?.id}`,
    favoriteSites: (r) => r?.id,
  };
  const validations = {
    name: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    username: [{ type: "Required" }],
    profilePic: [],
    preferredLocation: [],
    preferredAgeRanges: [],
    preferredAmusementTypes: [],
    favoriteSites: [],
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
          name,
          email,
          username,
          profilePic,
          preferredLocation,
          preferredAgeRanges,
          preferredAmusementTypes,
          favoriteSites,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            email: modelFields.email,
            username: modelFields.username,
            profilePic: modelFields.profilePic,
            preferredLocation: modelFields.preferredLocation,
            preferredAgeRanges: modelFields.preferredAgeRanges,
            preferredAmusementTypes: modelFields.preferredAmusementTypes,
          };
          const users = await DataStore.save(new Users(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...favoriteSites.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  FavoriteSites.copyOf(original, (updated) => {
                    updated.user = users;
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
      {...getOverrideProps(overrides, "UsersCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              email,
              username,
              profilePic,
              preferredLocation,
              preferredAgeRanges,
              preferredAmusementTypes,
              favoriteSites,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email: value,
              username,
              profilePic,
              preferredLocation,
              preferredAgeRanges,
              preferredAmusementTypes,
              favoriteSites,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              username: value,
              profilePic,
              preferredLocation,
              preferredAgeRanges,
              preferredAmusementTypes,
              favoriteSites,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Profile pic"
        isRequired={false}
        isReadOnly={false}
        value={profilePic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              username,
              profilePic: value,
              preferredLocation,
              preferredAgeRanges,
              preferredAmusementTypes,
              favoriteSites,
            };
            const result = onChange(modelFields);
            value = result?.profilePic ?? value;
          }
          if (errors.profilePic?.hasError) {
            runValidationTasks("profilePic", value);
          }
          setProfilePic(value);
        }}
        onBlur={() => runValidationTasks("profilePic", profilePic)}
        errorMessage={errors.profilePic?.errorMessage}
        hasError={errors.profilePic?.hasError}
        {...getOverrideProps(overrides, "profilePic")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              email,
              username,
              profilePic,
              preferredLocation: value,
              preferredAgeRanges,
              preferredAmusementTypes,
              favoriteSites,
            };
            const result = onChange(modelFields);
            value = result?.preferredLocation ?? value;
          }
          setPreferredLocation(value);
          setCurrentPreferredLocationValue(undefined);
          setCurrentPreferredLocationDisplayValue("");
        }}
        currentFieldValue={currentPreferredLocationValue}
        label={"Preferred location"}
        items={preferredLocation ? [preferredLocation] : []}
        hasError={errors?.preferredLocation?.hasError}
        errorMessage={errors?.preferredLocation?.errorMessage}
        getBadgeText={getDisplayValue.preferredLocation}
        setFieldValue={(model) => {
          setCurrentPreferredLocationDisplayValue(
            model ? getDisplayValue.preferredLocation(model) : ""
          );
          setCurrentPreferredLocationValue(model);
        }}
        inputFieldRef={preferredLocationRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Preferred location"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search City"
          value={currentPreferredLocationDisplayValue}
          options={cityRecords
            .filter(
              (r) =>
                !preferredLocationIdSet.has(getIDValue.preferredLocation?.(r))
            )
            .map((r) => ({
              id: getIDValue.preferredLocation?.(r),
              label: getDisplayValue.preferredLocation?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentPreferredLocationValue(
              cityRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentPreferredLocationDisplayValue(label);
            runValidationTasks("preferredLocation", label);
          }}
          onClear={() => {
            setCurrentPreferredLocationDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.preferredLocation?.hasError) {
              runValidationTasks("preferredLocation", value);
            }
            setCurrentPreferredLocationDisplayValue(value);
            setCurrentPreferredLocationValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "preferredLocation",
              currentPreferredLocationDisplayValue
            )
          }
          errorMessage={errors.preferredLocation?.errorMessage}
          hasError={errors.preferredLocation?.hasError}
          ref={preferredLocationRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "preferredLocation")}
        ></Autocomplete>
      </ArrayField>
      <SelectField
        label="Preferred age ranges"
        placeholder="Please select an option"
        isDisabled={false}
        value={preferredAgeRanges}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              username,
              profilePic,
              preferredLocation,
              preferredAgeRanges: value,
              preferredAmusementTypes,
              favoriteSites,
            };
            const result = onChange(modelFields);
            value = result?.preferredAgeRanges ?? value;
          }
          if (errors.preferredAgeRanges?.hasError) {
            runValidationTasks("preferredAgeRanges", value);
          }
          setPreferredAgeRanges(value);
        }}
        onBlur={() =>
          runValidationTasks("preferredAgeRanges", preferredAgeRanges)
        }
        errorMessage={errors.preferredAgeRanges?.errorMessage}
        hasError={errors.preferredAgeRanges?.hasError}
        {...getOverrideProps(overrides, "preferredAgeRanges")}
      >
        <option
          children="Family activities"
          value="FAMILY_ACTIVITIES"
          {...getOverrideProps(overrides, "preferredAgeRangesoption0")}
        ></option>
        <option
          children="Toddler"
          value="TODDLER"
          {...getOverrideProps(overrides, "preferredAgeRangesoption1")}
        ></option>
        <option
          children="Preschooler"
          value="PRESCHOOLER"
          {...getOverrideProps(overrides, "preferredAgeRangesoption2")}
        ></option>
        <option
          children="School aged child"
          value="SCHOOL_AGED_CHILD"
          {...getOverrideProps(overrides, "preferredAgeRangesoption3")}
        ></option>
        <option
          children="All ages kids"
          value="ALL_AGES_KIDS"
          {...getOverrideProps(overrides, "preferredAgeRangesoption4")}
        ></option>
        <option
          children="Adolescents adults"
          value="ADOLESCENTS_ADULTS"
          {...getOverrideProps(overrides, "preferredAgeRangesoption5")}
        ></option>
      </SelectField>
      <SelectField
        label="Preferred amusement types"
        placeholder="Please select an option"
        isDisabled={false}
        value={preferredAmusementTypes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              username,
              profilePic,
              preferredLocation,
              preferredAgeRanges,
              preferredAmusementTypes: value,
              favoriteSites,
            };
            const result = onChange(modelFields);
            value = result?.preferredAmusementTypes ?? value;
          }
          if (errors.preferredAmusementTypes?.hasError) {
            runValidationTasks("preferredAmusementTypes", value);
          }
          setPreferredAmusementTypes(value);
        }}
        onBlur={() =>
          runValidationTasks("preferredAmusementTypes", preferredAmusementTypes)
        }
        errorMessage={errors.preferredAmusementTypes?.errorMessage}
        hasError={errors.preferredAmusementTypes?.hasError}
        {...getOverrideProps(overrides, "preferredAmusementTypes")}
      >
        <option
          children="Playground"
          value="PLAYGROUND"
          {...getOverrideProps(overrides, "preferredAmusementTypesoption0")}
        ></option>
        <option
          children="Amusement park"
          value="AMUSEMENT_PARK"
          {...getOverrideProps(overrides, "preferredAmusementTypesoption1")}
        ></option>
        <option
          children="Exhibition"
          value="EXHIBITION"
          {...getOverrideProps(overrides, "preferredAmusementTypesoption2")}
        ></option>
        <option
          children="Nature animals"
          value="NATURE_ANIMALS"
          {...getOverrideProps(overrides, "preferredAmusementTypesoption3")}
        ></option>
        <option
          children="Water park"
          value="WATER_PARK"
          {...getOverrideProps(overrides, "preferredAmusementTypesoption4")}
        ></option>
        <option
          children="Museum"
          value="MUSEUM"
          {...getOverrideProps(overrides, "preferredAmusementTypesoption5")}
        ></option>
        <option
          children="Beach"
          value="BEACH"
          {...getOverrideProps(overrides, "preferredAmusementTypesoption6")}
        ></option>
        <option
          children="Landscape"
          value="LANDSCAPE"
          {...getOverrideProps(overrides, "preferredAmusementTypesoption7")}
        ></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              email,
              username,
              profilePic,
              preferredLocation,
              preferredAgeRanges,
              preferredAmusementTypes,
              favoriteSites: values,
            };
            const result = onChange(modelFields);
            values = result?.favoriteSites ?? values;
          }
          setFavoriteSites(values);
          setCurrentFavoriteSitesValue(undefined);
          setCurrentFavoriteSitesDisplayValue("");
        }}
        currentFieldValue={currentFavoriteSitesValue}
        label={"Favorite sites"}
        items={favoriteSites}
        hasError={errors?.favoriteSites?.hasError}
        errorMessage={errors?.favoriteSites?.errorMessage}
        getBadgeText={getDisplayValue.favoriteSites}
        setFieldValue={(model) => {
          setCurrentFavoriteSitesDisplayValue(
            model ? getDisplayValue.favoriteSites(model) : ""
          );
          setCurrentFavoriteSitesValue(model);
        }}
        inputFieldRef={favoriteSitesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Favorite sites"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search FavoriteSites"
          value={currentFavoriteSitesDisplayValue}
          options={favoriteSitesRecords
            .filter(
              (r) => !favoriteSitesIdSet.has(getIDValue.favoriteSites?.(r))
            )
            .map((r) => ({
              id: getIDValue.favoriteSites?.(r),
              label: getDisplayValue.favoriteSites?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentFavoriteSitesValue(
              favoriteSitesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentFavoriteSitesDisplayValue(label);
            runValidationTasks("favoriteSites", label);
          }}
          onClear={() => {
            setCurrentFavoriteSitesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.favoriteSites?.hasError) {
              runValidationTasks("favoriteSites", value);
            }
            setCurrentFavoriteSitesDisplayValue(value);
            setCurrentFavoriteSitesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "favoriteSites",
              currentFavoriteSitesDisplayValue
            )
          }
          errorMessage={errors.favoriteSites?.errorMessage}
          hasError={errors.favoriteSites?.hasError}
          ref={favoriteSitesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "favoriteSites")}
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
