import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/index.scss";
import "@fontsource/roboto";
import "@fontsource/raleway";
import "@fontsource/bona-nova";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
