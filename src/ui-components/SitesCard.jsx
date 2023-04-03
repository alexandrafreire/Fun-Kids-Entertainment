/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
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
  const { sites, sitesCard, header, usersProfile, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: sites?.SiteMapURL,
  });
  return (
    <Flex
      gap="8px"
      direction="column"
      width="392px"
      height="506px"
      justifyContent="center"
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
        width="392px"
        height="284px"
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
        gap="16px"
        direction="row"
        width="366px"
        height="21px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="16px 49px 16px 16px"
        {...getOverrideProps(overrides, "Header")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="276px"
          height="18px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="800"
            color="rgba(0,0,0,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="356px"
            height="25px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={sites?.siteName}
            {...getOverrideProps(overrides, "Site Name")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="382px"
        height="38px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="16px 438px 16px 16px"
        {...getOverrideProps(overrides, "Options")}
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
          width="45px"
          height="22px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={sites?.siteTotalRating}
          {...getOverrideProps(overrides, "4.7")}
        ></Text>
        <Icon
          width="115px"
          height="17px"
          viewBox={{ minX: 0, minY: 0, width: 115, height: 17 }}
          paths={[
            {
              d: "M7.77027 13.6626L12.5723 17L11.298 10.71L15.5405 6.47789L9.95372 5.93211L7.77027 0L5.58682 5.93211L0 6.47789L4.24257 10.71L2.96824 17L7.77027 13.6626Z",
              fill: "rgba(239,240,240,1)",
              fillRule: "nonzero",
            },
            {
              d: "M32.6351 13.6626L37.4372 17L36.1628 10.71L40.4054 6.47789L34.8186 5.93211L32.6351 0L30.4517 5.93211L24.8649 6.47789L29.1074 10.71L27.8331 17L32.6351 13.6626Z",
              fill: "rgba(239,240,240,1)",
              fillRule: "nonzero",
            },
            {
              d: "M57.5 13.6626L62.302 17L61.0277 10.71L65.2703 6.47789L59.6834 5.93211L57.5 0L55.3166 5.93211L49.7297 6.47789L53.9723 10.71L52.698 17L57.5 13.6626Z",
              fill: "rgba(239,240,240,1)",
              fillRule: "nonzero",
            },
            {
              d: "M82.3649 13.6626L87.1669 17L85.8926 10.71L90.1351 6.47789L84.5483 5.93211L82.3649 0L80.1814 5.93211L74.5946 6.47789L78.8372 10.71L77.5628 17L82.3649 13.6626Z",
              fill: "rgba(239,240,240,1)",
              fillRule: "nonzero",
            },
            {
              d: "M107.23 13.6626L112.032 17L110.757 10.71L115 6.47789L109.413 5.93211L107.23 0L105.046 5.93211L99.4595 6.47789L103.702 10.71L102.428 17L107.23 13.6626Z",
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
          width="130px"
          height="19px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${sites?.siteNumberOfRatings}${" "}${"Reviews"}`}
          {...getOverrideProps(overrides, "# of reviews")}
        ></Text>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="366px"
        height="54px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="16px 49px 16px 16px"
        {...getOverrideProps(overrides, "Badges")}
      >
        <Badge
          width="151px"
          height="unset"
          justifyContent="center"
          backgroundColor="rgba(54,94,61,1)"
          shrink="0"
          size="default"
          variation="default"
          color="white"
          children={sites?.amusementTypeName}
          {...getOverrideProps(overrides, "Badge35692749")}
        ></Badge>
        <Badge
          width="173px"
          height="30px"
          backgroundColor="rgba(54,94,61,1)"
          shrink="0"
          size="default"
          variation="default"
          color="white"
          justifyContent="center"
          children={sites?.siteAgeRange}
          {...getOverrideProps(overrides, "Badge35692753")}
        ></Badge>
      </Flex>
      <Divider
        width="350px"
        height="1px"
        shrink="0"
        opacity="0.5"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Flex
        gap="8px"
        direction="column"
        width="382px"
        height="71px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Flex
          gap="8px"
          direction="row"
          width="366px"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="16px 0px 16px 16px"
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
            width="141px"
            height="22px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${sites?.siteVillage}${",  "}${sites?.siteCity}`}
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
            width="112px"
            height="24px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${sites?.SiteDistanceToGeoLoc}${" Km away"}`}
            {...getOverrideProps(overrides, "10,45")}
          ></Text>
          <Button
            width="unset"
            height="unset"
            border="1px SOLID rgba(0,0,0,1)"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="default"
            children="Map"
            onClick={() => {
              buttonOnClick();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
