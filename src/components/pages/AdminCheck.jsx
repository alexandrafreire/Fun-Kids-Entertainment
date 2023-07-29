import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

const useAdminCheck = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkIfAdmin = async () => {
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
    };
    checkIfAdmin();
  }, []);

  return isAdmin;
};

export default useAdminCheck;
