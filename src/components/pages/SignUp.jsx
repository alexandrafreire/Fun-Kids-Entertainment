import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../../aws-exports";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(awsExports);

export default function SignUp() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.attributes.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
