import React from "react";
import "../../App.css";
import "../pages/Home.css";
import { Flex, Text, Divider } from "@aws-amplify/ui-react";

function CustomDivider() {
  return (
    <>
      <div className="container-divider">
        <Flex direction="row">
          <Divider orientation="horizontal" size="large" />
          <Text
            variation="primary"
            as="span"
            color="green"
            isTruncated={false}
            lineHeight=""
            fontWeight={800}
            fontSize="30px"
            fontStyle="normal"
            textDecoration=""
            width="45vw"
          >
            SUGGESTIONS FOR TODAY
          </Text>

          <Divider orientation="horizontal" size="large" />
        </Flex>
      </div>
    </>
  );
}

export default CustomDivider;
