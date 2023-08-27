/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Books } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BooksCreateForm(props) {
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
    bookName: "",
    bookDescription: "",
    bookImage: "",
  };
  const [bookName, setBookName] = React.useState(initialValues.bookName);
  const [bookDescription, setBookDescription] = React.useState(
    initialValues.bookDescription
  );
  const [bookImage, setBookImage] = React.useState(initialValues.bookImage);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setBookName(initialValues.bookName);
    setBookDescription(initialValues.bookDescription);
    setBookImage(initialValues.bookImage);
    setErrors({});
  };
  const validations = {
    bookName: [{ type: "Required" }],
    bookDescription: [{ type: "Required" }],
    bookImage: [{ type: "URL" }],
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
          bookName,
          bookDescription,
          bookImage,
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
          await DataStore.save(new Books(modelFields));
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
      {...getOverrideProps(overrides, "BooksCreateForm")}
      {...rest}
    >
      <TextField
        label="Book name"
        isRequired={true}
        isReadOnly={false}
        value={bookName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bookName: value,
              bookDescription,
              bookImage,
            };
            const result = onChange(modelFields);
            value = result?.bookName ?? value;
          }
          if (errors.bookName?.hasError) {
            runValidationTasks("bookName", value);
          }
          setBookName(value);
        }}
        onBlur={() => runValidationTasks("bookName", bookName)}
        errorMessage={errors.bookName?.errorMessage}
        hasError={errors.bookName?.hasError}
        {...getOverrideProps(overrides, "bookName")}
      ></TextField>
      <TextField
        label="Book description"
        isRequired={true}
        isReadOnly={false}
        value={bookDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bookName,
              bookDescription: value,
              bookImage,
            };
            const result = onChange(modelFields);
            value = result?.bookDescription ?? value;
          }
          if (errors.bookDescription?.hasError) {
            runValidationTasks("bookDescription", value);
          }
          setBookDescription(value);
        }}
        onBlur={() => runValidationTasks("bookDescription", bookDescription)}
        errorMessage={errors.bookDescription?.errorMessage}
        hasError={errors.bookDescription?.hasError}
        {...getOverrideProps(overrides, "bookDescription")}
      ></TextField>
      <TextField
        label="Book image"
        isRequired={false}
        isReadOnly={false}
        value={bookImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bookName,
              bookDescription,
              bookImage: value,
            };
            const result = onChange(modelFields);
            value = result?.bookImage ?? value;
          }
          if (errors.bookImage?.hasError) {
            runValidationTasks("bookImage", value);
          }
          setBookImage(value);
        }}
        onBlur={() => runValidationTasks("bookImage", bookImage)}
        errorMessage={errors.bookImage?.errorMessage}
        hasError={errors.bookImage?.hasError}
        {...getOverrideProps(overrides, "bookImage")}
      ></TextField>
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
