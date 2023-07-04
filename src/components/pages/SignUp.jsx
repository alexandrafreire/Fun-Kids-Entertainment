import { useEffect } from "react";
import { Hub } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, DataStore } from "aws-amplify";
import { Users } from "./../../models";
import awsExports from "./../../aws-exports";

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
    <Authenticator variation="modal">
      {({ signOut }) => <button onClick={signOut}>Sign out</button>}
    </Authenticator>
  );
}
