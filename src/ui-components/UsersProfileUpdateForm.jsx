/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Users } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UsersProfileUpdateForm(props) {
  const {
    id: idProp,
    users: usersModelProp,
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
    preferredLocation: "",
    preferredAgeRanges: "",
    preferredAmusementTypes: "",
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
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = usersRecord
      ? { ...initialValues, ...usersRecord }
      : initialValues;
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setUsername(cleanValues.username);
    setProfilePic(cleanValues.profilePic);
    setPreferredLocation(cleanValues.preferredLocation);
    setPreferredAgeRanges(cleanValues.preferredAgeRanges);
    setPreferredAmusementTypes(cleanValues.preferredAmusementTypes);
    setErrors({});
  };
  const [usersRecord, setUsersRecord] = React.useState(usersModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Users, idProp)
        : usersModelProp;
      setUsersRecord(record);
    };
    queryData();
  }, [idProp, usersModelProp]);
  React.useEffect(resetStateValues, [usersRecord]);
  const validations = {
    name: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    username: [{ type: "Required" }],
    profilePic: [],
    preferredLocation: [],
    preferredAgeRanges: [],
    preferredAmusementTypes: [],
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
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
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
          await DataStore.save(
            Users.copyOf(usersRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UsersProfileUpdateForm")}
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
      <SelectField
        label="Preferred location"
        placeholder="Please select an option"
        isDisabled={false}
        value={preferredLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              username,
              profilePic,
              preferredLocation: value,
              preferredAgeRanges,
              preferredAmusementTypes,
            };
            const result = onChange(modelFields);
            value = result?.preferredLocation ?? value;
          }
          if (errors.preferredLocation?.hasError) {
            runValidationTasks("preferredLocation", value);
          }
          setPreferredLocation(value);
        }}
        onBlur={() =>
          runValidationTasks("preferredLocation", preferredLocation)
        }
        errorMessage={errors.preferredLocation?.errorMessage}
        hasError={errors.preferredLocation?.hasError}
        {...getOverrideProps(overrides, "preferredLocation")}
      ></SelectField>
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || usersModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || usersModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
