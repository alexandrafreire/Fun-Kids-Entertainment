/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Games } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function GamesUpdateForm(props) {
  const {
    id: idProp,
    games: gamesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    gameName: "",
    gameDescription: "",
    gameImage: "",
  };
  const [gameName, setGameName] = React.useState(initialValues.gameName);
  const [gameDescription, setGameDescription] = React.useState(
    initialValues.gameDescription
  );
  const [gameImage, setGameImage] = React.useState(initialValues.gameImage);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = gamesRecord
      ? { ...initialValues, ...gamesRecord }
      : initialValues;
    setGameName(cleanValues.gameName);
    setGameDescription(cleanValues.gameDescription);
    setGameImage(cleanValues.gameImage);
    setErrors({});
  };
  const [gamesRecord, setGamesRecord] = React.useState(gamesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Games, idProp)
        : gamesModelProp;
      setGamesRecord(record);
    };
    queryData();
  }, [idProp, gamesModelProp]);
  React.useEffect(resetStateValues, [gamesRecord]);
  const validations = {
    gameName: [{ type: "Required" }],
    gameDescription: [{ type: "Required" }],
    gameImage: [{ type: "URL" }],
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
          gameName,
          gameDescription,
          gameImage,
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
            Games.copyOf(gamesRecord, (updated) => {
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
      {...getOverrideProps(overrides, "GamesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Game name"
        isRequired={true}
        isReadOnly={false}
        value={gameName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameName: value,
              gameDescription,
              gameImage,
            };
            const result = onChange(modelFields);
            value = result?.gameName ?? value;
          }
          if (errors.gameName?.hasError) {
            runValidationTasks("gameName", value);
          }
          setGameName(value);
        }}
        onBlur={() => runValidationTasks("gameName", gameName)}
        errorMessage={errors.gameName?.errorMessage}
        hasError={errors.gameName?.hasError}
        {...getOverrideProps(overrides, "gameName")}
      ></TextField>
      <TextField
        label="Game description"
        isRequired={true}
        isReadOnly={false}
        value={gameDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameName,
              gameDescription: value,
              gameImage,
            };
            const result = onChange(modelFields);
            value = result?.gameDescription ?? value;
          }
          if (errors.gameDescription?.hasError) {
            runValidationTasks("gameDescription", value);
          }
          setGameDescription(value);
        }}
        onBlur={() => runValidationTasks("gameDescription", gameDescription)}
        errorMessage={errors.gameDescription?.errorMessage}
        hasError={errors.gameDescription?.hasError}
        {...getOverrideProps(overrides, "gameDescription")}
      ></TextField>
      <TextField
        label="Game image"
        isRequired={false}
        isReadOnly={false}
        value={gameImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameName,
              gameDescription,
              gameImage: value,
            };
            const result = onChange(modelFields);
            value = result?.gameImage ?? value;
          }
          if (errors.gameImage?.hasError) {
            runValidationTasks("gameImage", value);
          }
          setGameImage(value);
        }}
        onBlur={() => runValidationTasks("gameImage", gameImage)}
        errorMessage={errors.gameImage?.errorMessage}
        hasError={errors.gameImage?.hasError}
        {...getOverrideProps(overrides, "gameImage")}
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
          isDisabled={!(idProp || gamesModelProp)}
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
              !(idProp || gamesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
