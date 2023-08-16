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
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { FavoriteSites, Users, Sites } from "../models";
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
export default function FavoriteSitesUpdateForm(props) {
  const {
    id: idProp,
    favoriteSites: favoriteSitesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    user: undefined,
    site: undefined,
  };
  const [user, setUser] = React.useState(initialValues.user);
  const [site, setSite] = React.useState(initialValues.site);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = favoriteSitesRecord
      ? { ...initialValues, ...favoriteSitesRecord, user, site }
      : initialValues;
    setUser(cleanValues.user);
    setCurrentUserValue(undefined);
    setCurrentUserDisplayValue("");
    setSite(cleanValues.site);
    setCurrentSiteValue(undefined);
    setCurrentSiteDisplayValue("");
    setErrors({});
  };
  const [favoriteSitesRecord, setFavoriteSitesRecord] = React.useState(
    favoriteSitesModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(FavoriteSites, idProp)
        : favoriteSitesModelProp;
      setFavoriteSitesRecord(record);
      const userRecord = record ? await record.user : undefined;
      setUser(userRecord);
      const siteRecord = record ? await record.site : undefined;
      setSite(siteRecord);
    };
    queryData();
  }, [idProp, favoriteSitesModelProp]);
  React.useEffect(resetStateValues, [favoriteSitesRecord, user, site]);
  const [currentUserDisplayValue, setCurrentUserDisplayValue] =
    React.useState("");
  const [currentUserValue, setCurrentUserValue] = React.useState(undefined);
  const userRef = React.createRef();
  const [currentSiteDisplayValue, setCurrentSiteDisplayValue] =
    React.useState("");
  const [currentSiteValue, setCurrentSiteValue] = React.useState(undefined);
  const siteRef = React.createRef();
  const getIDValue = {
    user: (r) => JSON.stringify({ id: r?.id }),
    site: (r) => JSON.stringify({ id: r?.id }),
  };
  const userIdSet = new Set(
    Array.isArray(user)
      ? user.map((r) => getIDValue.user?.(r))
      : getIDValue.user?.(user)
  );
  const siteIdSet = new Set(
    Array.isArray(site)
      ? site.map((r) => getIDValue.site?.(r))
      : getIDValue.site?.(site)
  );
  const usersRecords = useDataStoreBinding({
    type: "collection",
    model: Users,
  }).items;
  const sitesRecords = useDataStoreBinding({
    type: "collection",
    model: Sites,
  }).items;
  const getDisplayValue = {
    user: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    site: (r) => `${r?.siteName ? r?.siteName + " - " : ""}${r?.id}`,
  };
  const validations = {
    user: [],
    site: [],
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
          user,
          site,
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
          await DataStore.save(
            FavoriteSites.copyOf(favoriteSitesRecord, (updated) => {
              Object.assign(updated, modelFields);
              if (!modelFields.user) {
                updated.userID = undefined;
              }
              if (!modelFields.site) {
                updated.siteID = undefined;
              }
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
      {...getOverrideProps(overrides, "FavoriteSitesUpdateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              user: value,
              site,
            };
            const result = onChange(modelFields);
            value = result?.user ?? value;
          }
          setUser(value);
          setCurrentUserValue(undefined);
          setCurrentUserDisplayValue("");
        }}
        currentFieldValue={currentUserValue}
        label={"User"}
        items={user ? [user] : []}
        hasError={errors?.user?.hasError}
        errorMessage={errors?.user?.errorMessage}
        getBadgeText={getDisplayValue.user}
        setFieldValue={(model) => {
          setCurrentUserDisplayValue(model ? getDisplayValue.user(model) : "");
          setCurrentUserValue(model);
        }}
        inputFieldRef={userRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="User"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Users"
          value={currentUserDisplayValue}
          options={usersRecords
            .filter((r) => !userIdSet.has(getIDValue.user?.(r)))
            .map((r) => ({
              id: getIDValue.user?.(r),
              label: getDisplayValue.user?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentUserValue(
              usersRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUserDisplayValue(label);
            runValidationTasks("user", label);
          }}
          onClear={() => {
            setCurrentUserDisplayValue("");
          }}
          defaultValue={user}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.user?.hasError) {
              runValidationTasks("user", value);
            }
            setCurrentUserDisplayValue(value);
            setCurrentUserValue(undefined);
          }}
          onBlur={() => runValidationTasks("user", currentUserDisplayValue)}
          errorMessage={errors.user?.errorMessage}
          hasError={errors.user?.hasError}
          ref={userRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "user")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              user,
              site: value,
            };
            const result = onChange(modelFields);
            value = result?.site ?? value;
          }
          setSite(value);
          setCurrentSiteValue(undefined);
          setCurrentSiteDisplayValue("");
        }}
        currentFieldValue={currentSiteValue}
        label={"Site"}
        items={site ? [site] : []}
        hasError={errors?.site?.hasError}
        errorMessage={errors?.site?.errorMessage}
        getBadgeText={getDisplayValue.site}
        setFieldValue={(model) => {
          setCurrentSiteDisplayValue(model ? getDisplayValue.site(model) : "");
          setCurrentSiteValue(model);
        }}
        inputFieldRef={siteRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Site"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Sites"
          value={currentSiteDisplayValue}
          options={sitesRecords
            .filter((r) => !siteIdSet.has(getIDValue.site?.(r)))
            .map((r) => ({
              id: getIDValue.site?.(r),
              label: getDisplayValue.site?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentSiteValue(
              sitesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentSiteDisplayValue(label);
            runValidationTasks("site", label);
          }}
          onClear={() => {
            setCurrentSiteDisplayValue("");
          }}
          defaultValue={site}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.site?.hasError) {
              runValidationTasks("site", value);
            }
            setCurrentSiteDisplayValue(value);
            setCurrentSiteValue(undefined);
          }}
          onBlur={() => runValidationTasks("site", currentSiteDisplayValue)}
          errorMessage={errors.site?.errorMessage}
          hasError={errors.site?.hasError}
          ref={siteRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "site")}
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
          isDisabled={!(idProp || favoriteSitesModelProp)}
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
              !(idProp || favoriteSitesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
