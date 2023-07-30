import React, { useState, useEffect } from "react";
import { Amplify, Auth, API } from "aws-amplify";
import "./Admin.css";

import awsconfig from "./../../aws-exports";
Amplify.configure(awsconfig);

let nextToken;

//Enable User
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

//Disable User
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

//List all Users
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

//Add User to Group
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
//remove user from group
async function removeUserFromGroup(username, groupname) {
  try {
    let apiName = "AdminQueries";
    let path = "/removeUserFromGroup";
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
    console.error("Error removing user from group:", error);
  }
}

//List all users in the selected group
async function listUsersInGroup(groupname, limit) {
  try {
    let apiName = "AdminQueries";
    let path = "/listUsersInGroup";
    let myInit = {
      queryStringParameters: {
        groupname: groupname,
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
  const [removeUsername, setRemoveUsername] = useState("");
  const [removeGroupname, setRemoveGroupname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleGroupnameChange = (event) => {
    setGroupname(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!groupname) {
      setGroupResponse({ success: false, message: "Group name is required" });
      return;
    }
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

  const [userListGroupResponse, setUserListGroupResponse] = useState(null);
  const [groupToDisplay, setGroupToDisplay] = useState("");

  const handleGroupToDisplayChange = (event) => {
    setGroupToDisplay(event.target.value);
  };

  const handleDisplayGroupUsers = async (event) => {
    event.preventDefault();
    if (!groupToDisplay) {
      setErrorMessage("Please Enter a group name");
      return;
    }
    const response = await listUsersInGroup(groupToDisplay, 10);
    setUserListGroupResponse(response);
    setErrorMessage(""); // Clear the error message upon successful response.
  };

  const [removeGroupResponse, setRemoveGroupResponse] = useState(null);

  const handleRemoveUserSubmit = async (event) => {
    event.preventDefault();
    if (!removeGroupname) {
      setRemoveGroupResponse({
        success: false,
        message: "Group name is required",
      });
      return;
    }
    const response = await removeUserFromGroup(removeUsername, removeGroupname);
    setRemoveGroupResponse(response);
  };

  const handleRemoveUsernameChange = (event) => {
    setRemoveUsername(event.target.value);
  };

  const handleRemoveGroupnameChange = (event) => {
    setRemoveGroupname(event.target.value);
  };

  // Enable and disable user responses
  const [enableUserResponse, setEnableUserResponse] = useState(null);
  const [disableUserResponse, setDisableUserResponse] = useState(null);

  // Enable and disable user submit handlers
  // Enable and disable user submit handlers
  const handleEnableUserSubmit = async (event) => {
    event.preventDefault();
    const response = await enableUser(enableUsername);
    setEnableUserResponse(response);
  };

  const handleDisableUserSubmit = async (event) => {
    event.preventDefault();
    const response = await disableUser(disableUsername);
    setDisableUserResponse(response);
  };

  const [enableUsername, setEnableUsername] = useState("");
  const [disableUsername, setDisableUsername] = useState("");

  const handleEnableUsernameChange = (event) => {
    setEnableUsername(event.target.value);
  };

  const handleDisableUsernameChange = (event) => {
    setDisableUsername(event.target.value);
  };

  return (
    <div className="Admin">
      {/* ... */}

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
      <br></br>
      <div className="groupContainer">
        <div className="groupActions">
          <h2>Add User To Group</h2>
          <form onSubmit={handleSubmit}>
            <label>
              User Id:
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
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
            {groupResponse &&
              (groupResponse.success ? (
                <p style={{ color: "green" }}>{groupResponse.message}</p>
              ) : (
                <p style={{ color: "red" }}>{groupResponse.message}</p>
              ))}
          </div>
        </div>

        <div className="groupActions">
          <h2>Remove User From Group</h2>
          <form onSubmit={handleRemoveUserSubmit}>
            <label>
              User Id:
              <input
                type="text"
                value={removeUsername}
                onChange={handleRemoveUsernameChange}
              />
            </label>
            <label>
              Group Name:
              <input
                type="text"
                value={removeGroupname}
                onChange={handleRemoveGroupnameChange}
              />
            </label>
            <input type="submit" value="Remove from Group" />
          </form>

          <div>
            <h3>Group Response:</h3>
            {removeGroupResponse &&
              (removeGroupResponse.success ? (
                <p style={{ color: "green" }}>{removeGroupResponse.message}</p>
              ) : (
                <p style={{ color: "red" }}>{removeGroupResponse.message}</p>
              ))}
          </div>
        </div>
      </div>
      <br></br>
      <div className="Admin">
        <div>
          <h2>Display Users in Group</h2>
          <label>
            Group Name:
            <input
              type="text"
              value={groupToDisplay}
              onChange={handleGroupToDisplayChange}
            />
          </label>
          <button onClick={handleDisplayGroupUsers}>Display Users</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>

        <div>
          <h2>Users in Group Table:</h2>
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
              {userListGroupResponse &&
                userListGroupResponse.Users &&
                userListGroupResponse.Users.map((user) => {
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
    </div>
  );
}

export default Admin;
