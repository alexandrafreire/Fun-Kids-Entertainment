import { Amplify, DataStore } from "aws-amplify";
import React, { useState, useEffect } from "react";
//import { Users } from "./../../models";
//mport { Auth } from "aws-amplify";

import "@aws-amplify/ui-react/styles.css";

import awsExports from "./../../aws-exports";
Amplify.configure(awsExports);

const Admin = () => {
  /*const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const users = await DataStore.query(User);
    setUsers(users);
  };

  const deleteUser = async (user) => {
    await DataStore.delete(user);
    fetchUsers();
  };

  const updateUser = async (user) => {
    await DataStore.save(
      User.copyOf(user, (updated) => {
        updated.status = "UPDATED";
      })
    );
    fetchUsers();
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => updateUser(user)}>Update</button>
                <button onClick={() => deleteUser(user)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   
  );
   */
};

export default Admin;
