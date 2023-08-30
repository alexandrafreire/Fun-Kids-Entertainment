/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
} from "@aws-amplify/ui-react";
export default function SitesCard(props) {
  const { sites, overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="column"
      width="426px"
      height="367px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="10px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SitesCard")}
      {...rest}
    >
      <Image
        width="426px"
        height="169px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={sites?.siteImage}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="10px"
        direction="row"
        width="368px"
        height="34px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Site Name36643417")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="800"
          textIndent="13px"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="366px"
          height="30px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={sites?.siteName}
          {...getOverrideProps(overrides, "Site Name29766765")}
        ></Text>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="420px"
        height="28px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Options")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="46px"
          height="34px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="10px 6px 10px 6px"
          {...getOverrideProps(overrides, "Reviews")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={sites?.siteTotalRating}
            {...getOverrideProps(overrides, "4.7")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="141px"
          height="30px"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Review Stars")}
        >
          <Icon
            width="123px"
            height="19px"
            viewBox={{ minX: 0, minY: 0, width: 123, height: 19 }}
            paths={[
              {
                d: "M8.31081 15.27L13.4469 19L12.0839 11.97L16.6216 7.24L10.6461 6.63L8.31081 0L5.97547 6.63L0 7.24L4.5377 11.97L3.17473 19L8.31081 15.27Z",
                fill: "rgba(239,240,240,1)",
                fillRule: "nonzero",
              },
              {
                d: "M34.9054 15.27L40.0415 19L38.6785 11.97L43.2162 7.24L37.2407 6.63L34.9054 0L32.5701 6.63L26.5946 7.24L31.1323 11.97L29.7693 19L34.9054 15.27Z",
                fill: "rgba(239,240,240,1)",
                fillRule: "nonzero",
              },
              {
                d: "M61.5 15.27L66.6361 19L65.2731 11.97L69.8108 7.24L63.8353 6.63L61.5 0L59.1647 6.63L53.1892 7.24L57.7269 11.97L56.3639 19L61.5 15.27Z",
                fill: "rgba(239,240,240,1)",
                fillRule: "nonzero",
              },
              {
                d: "M88.0946 15.27L93.2307 19L91.8677 11.97L96.4054 7.24L90.4299 6.63L88.0946 0L85.7593 6.63L79.7838 7.24L84.3215 11.97L82.9585 19L88.0946 15.27Z",
                fill: "rgba(239,240,240,1)",
                fillRule: "nonzero",
              },
              {
                d: "M114.689 15.27L119.825 19L118.462 11.97L123 7.24L117.025 6.63L114.689 0L112.354 6.63L106.378 7.24L110.916 11.97L109.553 19L114.689 15.27Z",
                fill: "rgba(239,240,240,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="158px"
          height="30px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "#of Reviews")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${sites?.siteNumberOfRatings}${" Reviews"}`}
            {...getOverrideProps(overrides, "# of reviews")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="410px"
        height="28px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 1px 6px"
        {...getOverrideProps(overrides, "Badges")}
      >
        <Badge
          width="180px"
          height="28px"
          justifyContent="center"
          backgroundColor="rgba(34,66,38,1)"
          shrink="0"
          size="default"
          variation="default"
          color="white"
          children={sites?.amusementTypeName}
          {...getOverrideProps(overrides, "Amusement Type")}
        ></Badge>
        <Badge
          width="214px"
          height="29px"
          justifyContent="center"
          backgroundColor="rgba(34,66,38,1)"
          shrink="0"
          size="default"
          variation="default"
          color="white"
          children={sites?.siteAgeRange}
          {...getOverrideProps(overrides, "Site Age Range")}
        ></Badge>
      </Flex>
      <Divider
        width="408px"
        height="7px"
        shrink="0"
        opacity="0.5"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Flex
        gap="10px"
        direction="column"
        width="378px"
        height="32px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 6px 9px 6px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Flex
          gap="8px"
          direction="row"
          width="372px"
          height="40px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="16px 16px 16px 16px"
          {...getOverrideProps(overrides, "Location")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="26px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="180px"
            height="36px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${sites?.siteVillage}${", "}${sites?.siteCounty}`}
            {...getOverrideProps(overrides, "Site Village, Site City")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="129px"
            height="29px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${sites?.SiteDistanceToPrefLocation}${" Km Away"}`}
            {...getOverrideProps(overrides, "DistanceToLoc")}
          ></Text>
          <Button
            width="67px"
            height="37px"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="default"
            children="Map"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
