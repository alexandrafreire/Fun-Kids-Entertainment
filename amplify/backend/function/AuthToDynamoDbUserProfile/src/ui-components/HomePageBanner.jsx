/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Image, SearchField, View } from "@aws-amplify/ui-react";
export default function HomePageBanner(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="5686px"
      height="1458px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HomePageBanner")}
      {...rest}
    >
      <Image
        width="100%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <SearchField
        width="470px"
        height="46px"
        position="absolute"
        top="48.97%"
        bottom="47.87%"
        left="39.41%"
        right="52.32%"
        borderRadius="6px"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
      <Button
        width="249px"
        height="48px"
        position="absolute"
        border="1px SOLID rgba(34,66,38,1)"
        borderRadius="7px"
        top="48.9%"
        bottom="47.81%"
        left="48.63%"
        right="46.99%"
        backgroundColor="rgba(0,148,0,1)"
        size="large"
        isDisabled={false}
        variation="default"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
