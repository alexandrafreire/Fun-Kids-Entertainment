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
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
} from "@aws-amplify/ui-react";
export default function SiteDetail(props) {
  const { sites, siteComments, usersProfile, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: sites?.SiteMapURL,
  });
  return (
    <Flex
      gap="24px"
      direction="row"
      width="1160px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SiteDetail")}
      {...rest}
    >
      <Flex
        gap="32px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 401")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="1171px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 418")}
        >
          <Image
            width="1160px"
            height="480px"
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
            gap="8px"
            direction="column"
            width="1160px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame Description")}
          >
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={sites?.siteName}
              {...getOverrideProps(overrides, "SiteName")}
            ></Text>
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
              {...getOverrideProps(overrides, "Options36572889")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="700"
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
                {...getOverrideProps(overrides, "4.736572890")}
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
                {...getOverrideProps(overrides, "Vector36572891")}
              ></Icon>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="600"
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
                {...getOverrideProps(overrides, "# of reviews36572892")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={sites?.siteDescription}
              {...getOverrideProps(overrides, "SiteDescription")}
            ></Text>
          </Flex>
          <Flex
            gap="32px"
            direction="column"
            width="1160px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 6")}
          >
            <Divider
              width="unset"
              height="1px"
              shrink="0"
              alignSelf="stretch"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider29766957")}
            ></Divider>
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame Highlights")}
            >
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="800"
                color="rgba(13,26,38,1)"
                lineHeight="20px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children=" Highlights"
                {...getOverrideProps(overrides, "Highlights")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={`${sites?.amusementTypeName}${" for "}${
                  sites?.siteAgeRange
                }`}
                {...getOverrideProps(overrides, "Amusement Type:")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Suitable for "
                {...getOverrideProps(overrides, "Suitable for")}
              ></Text>
            </Flex>
            <Divider
              width="unset"
              height="1px"
              shrink="0"
              alignSelf="stretch"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider29766961")}
            ></Divider>
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame Location")}
            >
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="700"
                color="rgba(13,26,38,1)"
                lineHeight="20px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children=" Location Details"
                {...getOverrideProps(overrides, "Location Details")}
              ></Text>
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame Address")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(13,26,38,1)"
                  lineHeight="20px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="1015px"
                  height="30px"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={sites?.siteAddress}
                  {...getOverrideProps(overrides, "Site Address")}
                ></Text>
                <Button
                  width="unset"
                  height="unset"
                  border="1px SOLID rgba(54,94,61,1)"
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
            <Divider
              width="unset"
              height="1px"
              shrink="0"
              alignSelf="stretch"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider36572774")}
            ></Divider>
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame Reviews")}
            >
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="800"
                color="rgba(13,26,38,1)"
                lineHeight="20px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children=""
                {...getOverrideProps(overrides, "Reviews")}
              ></Text>
              <Flex
                gap="8px"
                direction="row"
                width="1144px"
                height="95px"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame Reviews Frame")}
              >
                <Button
                  width="218px"
                  height="44px"
                  border="1px SOLID rgba(54,94,61,1)"
                  shrink="0"
                  size="default"
                  isDisabled={false}
                  variation="default"
                  children="Add a New Review"
                  {...getOverrideProps(overrides, "Add a New Review")}
                ></Button>
                <Flex
                  gap="16px"
                  direction="row"
                  width="513px"
                  height="39px"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  padding="16px 438px 16px 16px"
                  {...getOverrideProps(overrides, "Options36572893")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="14px"
                    fontWeight="700"
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
                    children="4.7"
                    {...getOverrideProps(overrides, "4.736572894")}
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
                    {...getOverrideProps(overrides, "Vector36572895")}
                  ></Icon>
                  <Text
                    fontFamily="Inter"
                    fontSize="14px"
                    fontWeight="600"
                    color="rgba(0,0,0,1)"
                    lineHeight="24px"
                    textAlign="left"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="130px"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="# of reviews"
                    {...getOverrideProps(overrides, "# of reviews36572896")}
                  ></Text>
                </Flex>
              </Flex>
              <Divider
                width="unset"
                height="1px"
                shrink="0"
                alignSelf="stretch"
                size="small"
                orientation="horizontal"
                {...getOverrideProps(overrides, "Divider36572830")}
              ></Divider>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
