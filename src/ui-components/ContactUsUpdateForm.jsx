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
import { ContactUs } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ContactUsUpdateForm(props) {
  const {
    id: idProp,
    contactUs: contactUsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    firstname: "",
    email: "",
    feedbackType: "",
    overallSiteRating: "",
    message: "",
  };
  const [firstname, setFirstname] = React.useState(initialValues.firstname);
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
    const cleanValues = contactUsRecord
      ? { ...initialValues, ...contactUsRecord }
      : initialValues;
    setFirstname(cleanValues.firstname);
    setEmail(cleanValues.email);
    setFeedbackType(cleanValues.feedbackType);
    setOverallSiteRating(cleanValues.overallSiteRating);
    setMessage(cleanValues.message);
    setErrors({});
  };
  const [contactUsRecord, setContactUsRecord] =
    React.useState(contactUsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ContactUs, idProp)
        : contactUsModelProp;
      setContactUsRecord(record);
    };
    queryData();
  }, [idProp, contactUsModelProp]);
  React.useEffect(resetStateValues, [contactUsRecord]);
  const validations = {
    firstname: [],
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
          firstname,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            ContactUs.copyOf(contactUsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ContactUsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Firstname"
        isRequired={false}
        isReadOnly={false}
        value={firstname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname: value,
              email,
              feedbackType,
              overallSiteRating,
              message,
            };
            const result = onChange(modelFields);
            value = result?.firstname ?? value;
          }
          if (errors.firstname?.hasError) {
            runValidationTasks("firstname", value);
          }
          setFirstname(value);
        }}
        onBlur={() => runValidationTasks("firstname", firstname)}
        errorMessage={errors.firstname?.errorMessage}
        hasError={errors.firstname?.hasError}
        {...getOverrideProps(overrides, "firstname")}
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
              firstname,
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
      <SelectField
        label="Feedback type"
        placeholder="Please select an option"
        isDisabled={false}
        value={feedbackType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
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
        <option
          children="General feedback"
          value="GENERAL_FEEDBACK"
          {...getOverrideProps(overrides, "feedbackTypeoption0")}
        ></option>
        <option
          children="Report problem"
          value="REPORT_PROBLEM"
          {...getOverrideProps(overrides, "feedbackTypeoption1")}
        ></option>
        <option
          children="Feature request"
          value="FEATURE_REQUEST"
          {...getOverrideProps(overrides, "feedbackTypeoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Overall site rating"
        placeholder="Please select an option"
        isDisabled={false}
        value={overallSiteRating}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
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
        <option
          children="Good"
          value="GOOD"
          {...getOverrideProps(overrides, "overallSiteRatingoption0")}
        ></option>
        <option
          children="Average"
          value="AVERAGE"
          {...getOverrideProps(overrides, "overallSiteRatingoption1")}
        ></option>
        <option
          children="Bad"
          value="BAD"
          {...getOverrideProps(overrides, "overallSiteRatingoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Message"
        isRequired={false}
        isReadOnly={false}
        value={message}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
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
      ></TextField>
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
          isDisabled={!(idProp || contactUsModelProp)}
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
              !(idProp || contactUsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
