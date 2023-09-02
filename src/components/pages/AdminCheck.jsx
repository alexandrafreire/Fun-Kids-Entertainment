import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

const useAdminCheck = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkIfAdmin = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const {
          signInUserSession: {
            idToken: { payload },
          },
        } = user;

        // Log the payload to the console
        console.log("Payload: ", payload);

        if (
          payload["cognito:groups"] &&
          payload["cognito:groups"].includes("admin")
        ) {
          setIsAdmin(true);
        }
      } catch (error) {
        console.log("The user is not authenticated: ", error);
        setIsAdmin(false);
      }
    };

    checkIfAdmin();
  }, []);

  return isAdmin;
};

export default useAdminCheck;
