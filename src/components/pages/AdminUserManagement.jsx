import React, { useState, useEffect } from "react";
import { Amplify, Auth, API } from "aws-amplify";
import "./Admin.css";

import awsconfig from "./../../aws-exports";
Amplify.configure(awsconfig);

let nextToken;

// Enable User
async function enableUser(username) {
  try {
    let apiName = "AdminQueries";
    let path = "/enableUser";
    let myInit = {
      body: {
        username,
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
    console.error("Error enabling user:", error);
  }
}

// Disable User
async function disableUser(username) {
  try {
    let apiName = "AdminQueries";
    let path = "/disableUser";
    let myInit = {
      body: {
        username,
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
    console.error("Error disabling user:", error);
  }
}

// List all Users
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

function AdminUserManagement() {
  const [enableUsername, setEnableUsername] = useState("");
  const [disableUsername, setDisableUsername] = useState("");
  const [enableUserResponse, setEnableUserResponse] = useState(null);
  const [disableUserResponse, setDisableUserResponse] = useState(null);
  const [userListResponse, setUserListResponse] = useState(null);

  const fetchUsers = async () => {
    const response = await listUsers(10);
    setUserListResponse(response);
  };

  const handleEnableUsernameChange = (event) => {
    setEnableUsername(event.target.value);
  };

  const handleDisableUsernameChange = (event) => {
    setDisableUsername(event.target.value);
  };

  const handleEnableUserSubmit = async (event) => {
    event.preventDefault();
    if (!enableUsername) {
      setEnableUserResponse({
        success: false,
        message: "User Id is required",
      });
      return;
    }
    const response = await enableUser(enableUsername);
    setEnableUserResponse(response);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    fetchUsers();
  };

  const handleDisableUserSubmit = async (event) => {
    event.preventDefault();
    if (!disableUsername) {
      setDisableUserResponse({
        success: false,
        message: "User Id is required",
      });
      return;
    }
    const response = await disableUser(disableUsername);
    setDisableUserResponse(response);

    setTimeout(() => {
      window.location.reload();
    }, 1000);

    fetchUsers();
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
      <div className="userContainer">
        <div className="userActions">
          <h2>Enable User</h2>
          <form onSubmit={handleEnableUserSubmit}>
            <label>
              User Id:
              <input
                type="text"
                value={enableUsername}
                onChange={handleEnableUsernameChange}
              />
            </label>
            <input type="submit" value="Enable User" />
          </form>

          <h3>User Response:</h3>
          {enableUserResponse &&
            (enableUserResponse.success ? (
              <p style={{ color: "green" }}>{enableUserResponse.message}</p>
            ) : (
              <p style={{ color: "red" }}>{enableUserResponse.message}</p>
            ))}
        </div>

        <div className="userActions">
          <h2>Disable User</h2>
          <form onSubmit={handleDisableUserSubmit}>
            <label>
              User Id:
              <input
                type="text"
                value={disableUsername}
                onChange={handleDisableUsernameChange}
              />
            </label>
            <input type="submit" value="Disable User" />
          </form>

          <h3>User Response:</h3>
          {disableUserResponse &&
            (disableUserResponse.success ? (
              <p style={{ color: "green" }}>{disableUserResponse.message}</p>
            ) : (
              <p style={{ color: "red" }}>{disableUserResponse.message}</p>
            ))}
        </div>
      </div>
      <br></br>
      <h2> Users Table:</h2>
      <div>
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

export default AdminUserManagement;
