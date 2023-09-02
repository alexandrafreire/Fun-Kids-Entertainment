import React from "react";
import "../../App.css";
import { Flex, Text, Divider } from "@aws-amplify/ui-react";

function CustomDivider() {
  return (
    <>
      <div className="container-divider">
        <Flex direction="column">
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
          <Divider orientation="horizontal" />
        </Flex>
      </div>
    </>
  );
}

export default CustomDivider;
