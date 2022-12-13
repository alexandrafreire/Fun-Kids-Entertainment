import React, { useEffect, useState } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import "./App.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from V2</h1>
      </header>
    </div>
  );
}

export default App;
