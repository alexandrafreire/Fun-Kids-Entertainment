import { useEffect } from "react";
import { Hub } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, DataStore } from "aws-amplify";
import { Users } from "./../../models";
import awsExports from "./../../aws-exports";
import { Authenticator, Button } from "@aws-amplify/ui-react";

Amplify.configure(awsExports);

export default function SignUp() {
  useEffect(() => {
    const listener = Hub.listen("auth", ({ payload: { event, data } }) => {
      if (event === "signUp") {
        DataStore.save(
          new Users({
            id: data.userSub,
            name: data.username,
            email: data.attributes.email,
            // set other fields if needed
          })
        ).catch((err) => console.error(err));
      }
    });

    return () => listener();
  }, []);

  return (
    <Authenticator>
      {({ signOut }) => <Button onClick={signOut}>Sign Out</Button>}
    </Authenticator>
  );
}
