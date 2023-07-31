import React from "react";
import AdminUserManagement from "./AdminUserManagement";
import AdminGroupManagement from "./AdminGroupManagement";

function Admin() {
  return (
    <div className="Admin">
      <AdminUserManagement />
      <br></br>
      <AdminGroupManagement />
    </div>
  );
}

export default Admin;
