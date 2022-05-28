import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BarContextProvider } from "./bar-context/BarContext";

ReactDOM.render(
  <React.StrictMode>
    <BarContextProvider>
        <App />
      </BarContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
