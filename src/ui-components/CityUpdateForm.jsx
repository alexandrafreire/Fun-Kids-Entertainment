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
import { City, Sites } from "../models";
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
export default function CityUpdateForm(props) {
  const {
    id: idProp,
    city: cityModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    cityName: "",
    cityLat: "",
    citylng: "",
    sites: [],
  };
  const [cityName, setCityName] = React.useState(initialValues.cityName);
  const [cityLat, setCityLat] = React.useState(initialValues.cityLat);
  const [citylng, setCitylng] = React.useState(initialValues.citylng);
  const [sites, setSites] = React.useState(initialValues.sites);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cityRecord
      ? { ...initialValues, ...cityRecord, sites: linkedSites }
      : initialValues;
    setCityName(cleanValues.cityName);
    setCityLat(cleanValues.cityLat);
    setCitylng(cleanValues.citylng);
    setSites(cleanValues.sites ?? []);
    setCurrentSitesValue(undefined);
    setCurrentSitesDisplayValue("");
    setErrors({});
  };
  const [cityRecord, setCityRecord] = React.useState(cityModelProp);
  const [linkedSites, setLinkedSites] = React.useState([]);
  const canUnlinkSites = true;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(City, idProp)
        : cityModelProp;
      setCityRecord(record);
      const linkedSites = record ? await record.sites.toArray() : [];
      setLinkedSites(linkedSites);
    };
    queryData();
  }, [idProp, cityModelProp]);
  React.useEffect(resetStateValues, [cityRecord, linkedSites]);
  const [currentSitesDisplayValue, setCurrentSitesDisplayValue] =
    React.useState("");
  const [currentSitesValue, setCurrentSitesValue] = React.useState(undefined);
  const sitesRef = React.createRef();
  const getIDValue = {
    sites: (r) => JSON.stringify({ id: r?.id }),
  };
  const sitesIdSet = new Set(
    Array.isArray(sites)
      ? sites.map((r) => getIDValue.sites?.(r))
      : getIDValue.sites?.(sites)
  );
  const sitesRecords = useDataStoreBinding({
    type: "collection",
    model: Sites,
  }).items;
  const getDisplayValue = {
    sites: (r) => `${r?.siteName ? r?.siteName + " - " : ""}${r?.id}`,
  };
  const validations = {
    cityName: [{ type: "Required" }],
    cityLat: [{ type: "Required" }],
    citylng: [{ type: "Required" }],
    sites: [],
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
          cityName,
          cityLat,
          citylng,
          sites,
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
          const promises = [];
          const sitesToLink = [];
          const sitesToUnLink = [];
          const sitesSet = new Set();
          const linkedSitesSet = new Set();
          sites.forEach((r) => sitesSet.add(getIDValue.sites?.(r)));
          linkedSites.forEach((r) => linkedSitesSet.add(getIDValue.sites?.(r)));
          linkedSites.forEach((r) => {
            if (!sitesSet.has(getIDValue.sites?.(r))) {
              sitesToUnLink.push(r);
            }
          });
          sites.forEach((r) => {
            if (!linkedSitesSet.has(getIDValue.sites?.(r))) {
              sitesToLink.push(r);
            }
          });
          sitesToUnLink.forEach((original) => {
            if (!canUnlinkSites) {
              throw Error(
                `Sites ${original.id} cannot be unlinked from City because undefined is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Sites.copyOf(original, (updated) => {
                  updated.siteCity = null;
                })
              )
            );
          });
          sitesToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Sites.copyOf(original, (updated) => {
                  updated.siteCity = cityRecord;
                })
              )
            );
          });
          const modelFieldsToSave = {
            cityName: modelFields.cityName,
            cityLat: modelFields.cityLat,
            citylng: modelFields.citylng,
          };
          promises.push(
            DataStore.save(
              City.copyOf(cityRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CityUpdateForm")}
      {...rest}
    >
      <TextField
        label="City name"
        isRequired={true}
        isReadOnly={false}
        value={cityName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cityName: value,
              cityLat,
              citylng,
              sites,
            };
            const result = onChange(modelFields);
            value = result?.cityName ?? value;
          }
          if (errors.cityName?.hasError) {
            runValidationTasks("cityName", value);
          }
          setCityName(value);
        }}
        onBlur={() => runValidationTasks("cityName", cityName)}
        errorMessage={errors.cityName?.errorMessage}
        hasError={errors.cityName?.hasError}
        {...getOverrideProps(overrides, "cityName")}
      ></TextField>
      <TextField
        label="City lat"
        isRequired={true}
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
              cityName,
              cityLat: value,
              citylng,
              sites,
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
        label="Citylng"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={citylng}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              cityName,
              cityLat,
              citylng: value,
              sites,
            };
            const result = onChange(modelFields);
            value = result?.citylng ?? value;
          }
          if (errors.citylng?.hasError) {
            runValidationTasks("citylng", value);
          }
          setCitylng(value);
        }}
        onBlur={() => runValidationTasks("citylng", citylng)}
        errorMessage={errors.citylng?.errorMessage}
        hasError={errors.citylng?.hasError}
        {...getOverrideProps(overrides, "citylng")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              cityName,
              cityLat,
              citylng,
              sites: values,
            };
            const result = onChange(modelFields);
            values = result?.sites ?? values;
          }
          setSites(values);
          setCurrentSitesValue(undefined);
          setCurrentSitesDisplayValue("");
        }}
        currentFieldValue={currentSitesValue}
        label={"Sites"}
        items={sites}
        hasError={errors?.sites?.hasError}
        errorMessage={errors?.sites?.errorMessage}
        getBadgeText={getDisplayValue.sites}
        setFieldValue={(model) => {
          setCurrentSitesDisplayValue(
            model ? getDisplayValue.sites(model) : ""
          );
          setCurrentSitesValue(model);
        }}
        inputFieldRef={sitesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Sites"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Sites"
          value={currentSitesDisplayValue}
          options={sitesRecords
            .filter((r) => !sitesIdSet.has(getIDValue.sites?.(r)))
            .map((r) => ({
              id: getIDValue.sites?.(r),
              label: getDisplayValue.sites?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentSitesValue(
              sitesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentSitesDisplayValue(label);
            runValidationTasks("sites", label);
          }}
          onClear={() => {
            setCurrentSitesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.sites?.hasError) {
              runValidationTasks("sites", value);
            }
            setCurrentSitesDisplayValue(value);
            setCurrentSitesValue(undefined);
          }}
          onBlur={() => runValidationTasks("sites", currentSitesDisplayValue)}
          errorMessage={errors.sites?.errorMessage}
          hasError={errors.sites?.hasError}
          ref={sitesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "sites")}
        ></Autocomplete>
      </ArrayField>
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
          isDisabled={!(idProp || cityModelProp)}
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
              !(idProp || cityModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
