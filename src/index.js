import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Amplify } from "aws-amplify";
import { Storage } from "aws-amplify";
import {
  ThemeProvider,
  createTheme,
  AmplifyProvider,
} from "@aws-amplify/ui-react";
import studioTheme from "./ui-components/studioTheme";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import config from "./aws-exports";
import awsconfig from "./aws-exports";
Amplify.configure(config);

Amplify.configure(awsExports);

const MyTheme = createTheme(
  {
    // Extend the theme to update the button color
    name: "forms",
    tokens: {
      components: {
        button: {
          primary: {
            backgroundColor: {
              value: "#009400",
            },
          },
        },
      },
    },
  },
  studioTheme
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AmplifyProvider>
      <ThemeProvider theme={MyTheme}>
        <App />
      </ThemeProvider>
    </AmplifyProvider>
  </React.StrictMode>
);
