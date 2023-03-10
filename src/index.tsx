import React from "react";
import ReactDOM from "react-dom/client";

import HomePage from "./pages/index";

import "./styles/main.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
