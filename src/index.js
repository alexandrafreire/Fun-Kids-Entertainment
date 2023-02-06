import React from "react";
import ReactDOM from "react-dom/client";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { Storage } from "@aws-amplify/storage";
import "@aws-amplify/ui-react/styles.css";
import config from "./aws-exports";
import App from "./App";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(config);

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AmplifyProvider>
    <App />
  </AmplifyProvider>
);
