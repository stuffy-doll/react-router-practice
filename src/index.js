import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const { BrowserRouter } = require("react-router-dom");

const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
