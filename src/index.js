import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Authenticator } from "@aws-amplify/ui-react";

import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify, AuthModeStrategyType } from "aws-amplify";
import awsconfig from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";

import config from "./aws-exports";
import awsExports from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(config);
Amplify.configure(awsExports);
Amplify.configure(awsconfig);

Amplify.configure({
  ...awsconfig,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Authenticator.Provider>
    <ThemeProvider theme={studioTheme}>
      <App />
    </ThemeProvider>
  </Authenticator.Provider>
);
