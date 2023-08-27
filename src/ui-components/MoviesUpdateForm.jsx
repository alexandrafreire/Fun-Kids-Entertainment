/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Movies } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MoviesUpdateForm(props) {
  const {
    id: idProp,
    movies: moviesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    movieName: "",
    moviesDescription: "",
    movieImage: "",
  };
  const [movieName, setMovieName] = React.useState(initialValues.movieName);
  const [moviesDescription, setMoviesDescription] = React.useState(
    initialValues.moviesDescription
  );
  const [movieImage, setMovieImage] = React.useState(initialValues.movieImage);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = moviesRecord
      ? { ...initialValues, ...moviesRecord }
      : initialValues;
    setMovieName(cleanValues.movieName);
    setMoviesDescription(cleanValues.moviesDescription);
    setMovieImage(cleanValues.movieImage);
    setErrors({});
  };
  const [moviesRecord, setMoviesRecord] = React.useState(moviesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Movies, idProp)
        : moviesModelProp;
      setMoviesRecord(record);
    };
    queryData();
  }, [idProp, moviesModelProp]);
  React.useEffect(resetStateValues, [moviesRecord]);
  const validations = {
    movieName: [{ type: "Required" }],
    moviesDescription: [{ type: "Required" }],
    movieImage: [{ type: "URL" }],
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
          movieName,
          moviesDescription,
          movieImage,
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
            Movies.copyOf(moviesRecord, (updated) => {
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
      {...getOverrideProps(overrides, "MoviesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Movie name"
        isRequired={true}
        isReadOnly={false}
        value={movieName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              movieName: value,
              moviesDescription,
              movieImage,
            };
            const result = onChange(modelFields);
            value = result?.movieName ?? value;
          }
          if (errors.movieName?.hasError) {
            runValidationTasks("movieName", value);
          }
          setMovieName(value);
        }}
        onBlur={() => runValidationTasks("movieName", movieName)}
        errorMessage={errors.movieName?.errorMessage}
        hasError={errors.movieName?.hasError}
        {...getOverrideProps(overrides, "movieName")}
      ></TextField>
      <TextField
        label="Movies description"
        isRequired={true}
        isReadOnly={false}
        value={moviesDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              movieName,
              moviesDescription: value,
              movieImage,
            };
            const result = onChange(modelFields);
            value = result?.moviesDescription ?? value;
          }
          if (errors.moviesDescription?.hasError) {
            runValidationTasks("moviesDescription", value);
          }
          setMoviesDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("moviesDescription", moviesDescription)
        }
        errorMessage={errors.moviesDescription?.errorMessage}
        hasError={errors.moviesDescription?.hasError}
        {...getOverrideProps(overrides, "moviesDescription")}
      ></TextField>
      <TextField
        label="Movie image"
        isRequired={false}
        isReadOnly={false}
        value={movieImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              movieName,
              moviesDescription,
              movieImage: value,
            };
            const result = onChange(modelFields);
            value = result?.movieImage ?? value;
          }
          if (errors.movieImage?.hasError) {
            runValidationTasks("movieImage", value);
          }
          setMovieImage(value);
        }}
        onBlur={() => runValidationTasks("movieImage", movieImage)}
        errorMessage={errors.movieImage?.errorMessage}
        hasError={errors.movieImage?.hasError}
        {...getOverrideProps(overrides, "movieImage")}
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
          isDisabled={!(idProp || moviesModelProp)}
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
              !(idProp || moviesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
