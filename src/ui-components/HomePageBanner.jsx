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
  const { Banner, overrides, ...rest } = props;
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
        backgroundImage="s3://fun-kids-entertainment-storage151408-staging.s3.eu-west-1.amazonaws.com/public/Banner.mp4?AWSAccessKeyId=ASIAYMAP572QKRYK4HJ6&Expires=1678061020&Signature=ujbG5BF3JLbMAdgGsdfq%2FmPxn7E%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEFAaCWV1LXdlc3QtMSJGMEQCIBaaWcMaGpDRuUmDSzq5RaFe29EwZfbjGsAebBzK3JbJAiAcQw%2ByaLNaFWn5lu7SSBsB%2FS7PHetUYQupcpHmHpIU4yrNBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDU3NTU1OTA0MDY3MiIM8ZXcTHET6U5jg9S0KqEEvBlXnaIx7dqzP7OVXQh0V7E%2B9QJlmeECYUXZRxy6Sz9%2FH8JvcMvQ75qI61AcwR5yPul02luwkjRtRW7c%2FiL2IOwtEtxJUcrp71dPLsIYmmhFSnzJB%2BQRlevGOm0dMUywIDwUrVdWbRomjzs0Dup5wt2fItjUg%2Fz9fEzI90QUyhiu6rzXr2nRyi%2FUpcbEbqbhZZSyEPFKxcc7EPHR4B%2B56NF6p7IExbEte0q%2Fr%2BJ0v7moSzCFGFc5U%2BYX%2FTOkhi%2BoyjBQ09zkM9TBrYKTgyIqFuP95vSNqgc4SOtKTNDPv1w8yPzX66QyKrlIXMqcZNZhduIGp6q5eHrDYjdtmf9Eud%2FQ1eJh4l0nCgjANq3KIPp4NckdZhckjeMsLEJlZ8n3G1%2BV4ez96m6VMHFtyUjvX8Asv33jbN3rjfXNdxAe8%2FnrISAP60JqxEf0zGUj6vHHOv87bZtpNEzGeX4JB%2FIchPUI2arA%2Bi000dk248tHwvWpGA78bhfFc%2B0PxR9%2Bquif56i%2BLTxSY7V62hNnUtW9gPrdx84ofl90gcKSLnVY9LbqlME1rHHVcsgTlx8CrIjWLuDKu%2FGaBFAQlMfYS4HORDKBmYPZYU5BDx4xfTBewxO9zoy%2BsLTZTDp%2FMFZ3UtrdGpw2fphvL22Zg7MbNG64OccbWsypZdkCF5zdGYqCNcg28HsHYcnqWkFJo5xLT4hbRKUnRRPIIKPqHxQs8ajdPiowmtmUoAY6hgK0lx%2F2BHA%2BWVkCAcZWT%2FQbLHoGdSthVleHLJ7PZralx7lMAW3Czgwuq9cN6aQmsP6363zN9JdXG4IaMZTCD0RRDm9Eby9gJQq%2FCgbZ6Fd06x9Z44wWzFQfFxdCQR1cf%2FFHGouqMqbqwZnbldTdJ%2BfvDwGAeyobGYSDE9VDDpT9rC2wUOycFJoQhN5XhH7%2BSoIQguiPjf%2Fliz%2BTmAN0DVs2C3KjlKXUcDTDBB2uCN5EqTGslRjwRJCDUeHhkLGf1p%2BX4LsiOPzKcJg0KZnB%2FpoYCxSo5eKZHUbOAtxziFKVZEw0hNwoOEg%2BesvR%2BdFqvipYFO4cOHyR92Gz5AUrboLnn%2Bo%2Bdhts"
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
        aria-label="Search"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
      <Button
        width="249px"
        height="48px"
        position="absolute"
        border="1px SOLID rgba(54,94,61,1)"
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
