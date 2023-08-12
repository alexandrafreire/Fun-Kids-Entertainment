import { useEffect } from "react";
import { Hub } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, DataStore, Auth } from "aws-amplify";
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
          })
        ).catch((err) => console.error(err));
      }
    });

    let isClosing = false;

    const beforeUnloadHandler = (e) => {
      isClosing = true;
      // The delay allows the visibility change event to check if it's a tab/window close
      setTimeout(() => {
        isClosing = false;
      }, 50);
    };

    const visibilityChangeHandler = async () => {
      if (document.hidden && isClosing) {
        await Auth.signOut();
      }
    };

    window.addEventListener("beforeunload", beforeUnloadHandler);
    document.addEventListener("visibilitychange", visibilityChangeHandler);

    return () => {
      listener();
      window.removeEventListener("beforeunload", beforeUnloadHandler);
      document.removeEventListener("visibilitychange", visibilityChangeHandler);
    };
  }, []);

  return (
    <Authenticator>
      {({ signOut }) => <Button onClick={signOut}>Sign Out</Button>}
    </Authenticator>
  );
}
