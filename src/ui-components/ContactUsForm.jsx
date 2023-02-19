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
  Radio,
  RadioGroupField,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ContactUs } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ContactUsForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    feedbackType: undefined,
    overallSiteRating: undefined,
    message: "",
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [email, setEmail] = React.useState(initialValues.email);
  const [feedbackType, setFeedbackType] = React.useState(
    initialValues.feedbackType
  );
  const [overallSiteRating, setOverallSiteRating] = React.useState(
    initialValues.overallSiteRating
  );
  const [message, setMessage] = React.useState(initialValues.message);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setEmail(initialValues.email);
    setFeedbackType(initialValues.feedbackType);
    setOverallSiteRating(initialValues.overallSiteRating);
    setMessage(initialValues.message);
    setErrors({});
  };
  const validations = {
    firstName: [{ type: "Required" }],
    lastName: [],
    email: [{ type: "Required" }, { type: "Email" }],
    feedbackType: [],
    overallSiteRating: [],
    message: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
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
      rowGap={tokens.space.medium.value}
      columnGap={tokens.space.medium.value}
      padding={tokens.space.large.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          firstName,
          lastName,
          email,
          feedbackType,
          overallSiteRating,
          message,
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
          await DataStore.save(new ContactUs(modelFields));
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
      {...getOverrideProps(overrides, "ContactUsForm")}
      {...rest}
    >
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid0")}
      >
        <TextField
          label="First name"
          isRequired={true}
          isReadOnly={false}
          value={firstName}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                firstName: value,
                lastName,
                email,
                feedbackType,
                overallSiteRating,
                message,
              };
              const result = onChange(modelFields);
              value = result?.firstName ?? value;
            }
            if (errors.firstName?.hasError) {
              runValidationTasks("firstName", value);
            }
            setFirstName(value);
          }}
          onBlur={() => runValidationTasks("firstName", firstName)}
          errorMessage={errors.firstName?.errorMessage}
          hasError={errors.firstName?.hasError}
          {...getOverrideProps(overrides, "firstName")}
        ></TextField>
        <TextField
          label="Last name"
          isRequired={false}
          isReadOnly={false}
          value={lastName}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                firstName,
                lastName: value,
                email,
                feedbackType,
                overallSiteRating,
                message,
              };
              const result = onChange(modelFields);
              value = result?.lastName ?? value;
            }
            if (errors.lastName?.hasError) {
              runValidationTasks("lastName", value);
            }
            setLastName(value);
          }}
          onBlur={() => runValidationTasks("lastName", lastName)}
          errorMessage={errors.lastName?.errorMessage}
          hasError={errors.lastName?.hasError}
          {...getOverrideProps(overrides, "lastName")}
        ></TextField>
      </Grid>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email: value,
              feedbackType,
              overallSiteRating,
              message,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid2")}
      >
        <RadioGroupField
          label="Feedback type"
          name="feedbackType"
          isReadOnly={false}
          isRequired={false}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                firstName,
                lastName,
                email,
                feedbackType: value,
                overallSiteRating,
                message,
              };
              const result = onChange(modelFields);
              value = result?.feedbackType ?? value;
            }
            if (errors.feedbackType?.hasError) {
              runValidationTasks("feedbackType", value);
            }
            setFeedbackType(value);
          }}
          onBlur={() => runValidationTasks("feedbackType", feedbackType)}
          errorMessage={errors.feedbackType?.errorMessage}
          hasError={errors.feedbackType?.hasError}
          {...getOverrideProps(overrides, "feedbackType")}
        >
          <Radio
            children="General feedback"
            value="GENERAL_FEEDBACK"
            {...getOverrideProps(overrides, "feedbackTypeRadio0")}
          ></Radio>
          <Radio
            children="Report a problem"
            value="REPORT_PROBLEM"
            {...getOverrideProps(overrides, "feedbackTypeRadio1")}
          ></Radio>
          <Radio
            children="Feature request"
            value="FEATURE_REQUEST"
            {...getOverrideProps(overrides, "feedbackTypeRadio2")}
          ></Radio>
        </RadioGroupField>
        <RadioGroupField
          label="Overall site rating"
          name="overallSiteRating"
          isReadOnly={false}
          isRequired={false}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                firstName,
                lastName,
                email,
                feedbackType,
                overallSiteRating: value,
                message,
              };
              const result = onChange(modelFields);
              value = result?.overallSiteRating ?? value;
            }
            if (errors.overallSiteRating?.hasError) {
              runValidationTasks("overallSiteRating", value);
            }
            setOverallSiteRating(value);
          }}
          onBlur={() =>
            runValidationTasks("overallSiteRating", overallSiteRating)
          }
          errorMessage={errors.overallSiteRating?.errorMessage}
          hasError={errors.overallSiteRating?.hasError}
          {...getOverrideProps(overrides, "overallSiteRating")}
        >
          <Radio
            children="Good"
            value="GOOD"
            {...getOverrideProps(overrides, "overallSiteRatingRadio0")}
          ></Radio>
          <Radio
            children="Average"
            value="AVERAGE"
            {...getOverrideProps(overrides, "overallSiteRatingRadio1")}
          ></Radio>
          <Radio
            children="Bad"
            value="BAD"
            {...getOverrideProps(overrides, "overallSiteRatingRadio2")}
          ></Radio>
        </RadioGroupField>
      </Grid>
      <TextAreaField
        label="Message"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              feedbackType,
              overallSiteRating,
              message: value,
            };
            const result = onChange(modelFields);
            value = result?.message ?? value;
          }
          if (errors.message?.hasError) {
            runValidationTasks("message", value);
          }
          setMessage(value);
        }}
        onBlur={() => runValidationTasks("message", message)}
        errorMessage={errors.message?.errorMessage}
        hasError={errors.message?.hasError}
        {...getOverrideProps(overrides, "message")}
      ></TextAreaField>
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
          gap={tokens.space.medium.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
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
