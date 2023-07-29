import useAdminCheck from "./AdminCheck";

const withAdminAuthenticator = (Admin) => {
  return (props) => {
    const isAdmin = useAdminCheck();

    return isAdmin ? <Admin {...props} /> : <div>Access denied</div>;
  };
};

export default withAdminAuthenticator;
