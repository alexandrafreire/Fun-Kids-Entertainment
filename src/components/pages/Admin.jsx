import React, { useState, useEffect } from "react";
import { Amplify, Auth, API } from "aws-amplify";
import "./Admin.css";

import awsconfig from "./../../aws-exports";
Amplify.configure(awsconfig);

async function addToGroup(username, groupname) {
  try {
    let apiName = "AdminQueries";
    let path = "/addUserToGroup";
    let myInit = {
      body: {
        username,
        groupname,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    return await API.post(apiName, path, myInit);
  } catch (error) {
    console.error("Error adding user to group:", error);
  }
}

let nextToken;

async function listUsers(limit) {
  try {
    let apiName = "AdminQueries";
    let path = "/listUsers";
    let myInit = {
      queryStringParameters: {
        limit: limit,
        token: nextToken,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    const { NextToken, ...rest } = await API.get(apiName, path, myInit);
    nextToken = NextToken;
    return rest;
  } catch (error) {
    console.error("Error listing users:", error);
  }
}

function Admin() {
  const [groupResponse, setGroupResponse] = useState(null);
  const [userListResponse, setUserListResponse] = useState(null);
  const [username, setUsername] = useState("");
  const [groupname, setGroupname] = useState("");
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleGroupnameChange = (event) => {
    setGroupname(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await addToGroup(username, groupname);
    setGroupResponse(response);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await listUsers(10);
      setUserListResponse(response);
    };

    fetchUsers();
  }, []);

  return (
    <div className="Admin">
      <div>
        <h1>User Administration Panel</h1>
      </div>
      <div>
        <h2>Add User to Group</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Group Name:
          <input
            type="text"
            value={groupname}
            onChange={handleGroupnameChange}
          />
        </label>
        <input type="submit" value="Add to Group" />
      </form>

      <div>
        <h3>Group Response:</h3>
        <pre>{JSON.stringify(groupResponse, null, 2)}</pre>
      </div>

      <h2> Users Table:</h2>

      <div>
        <h2></h2>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Preferred Username</th>
              <th>Email</th>
              <th>Created</th>
              <th>Last Modified</th>
              <th>Enabled</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userListResponse &&
              userListResponse.Users &&
              userListResponse.Users.map((user) => {
                const emailObj = user.Attributes.find(
                  (attr) => attr.Name === "email"
                );
                const nameObj = user.Attributes.find(
                  (attr) => attr.Name === "name"
                );
                const preferredUsernameObj = user.Attributes.find(
                  (attr) => attr.Name === "preferred_username"
                );
                return (
                  <tr key={user.Username}>
                    <td>{user.Username}</td>
                    <td>{nameObj ? nameObj.Value : "N/A"}</td>
                    <td>
                      {preferredUsernameObj
                        ? preferredUsernameObj.Value
                        : "N/A"}
                    </td>
                    <td>{emailObj ? emailObj.Value : "N/A"}</td>
                    <td>{new Date(user.UserCreateDate).toLocaleString()}</td>
                    <td>
                      {new Date(user.UserLastModifiedDate).toLocaleString()}
                    </td>
                    <td>{user.Enabled.toString()}</td>
                    <td>{user.UserStatus}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
