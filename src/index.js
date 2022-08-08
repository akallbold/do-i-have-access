import React from "react";
import ReactDOM from "react-dom/client";
import { SessionProvider } from "@inrupt/solid-ui-react";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SessionProvider>
      <App />
    </SessionProvider>
  </React.StrictMode>
);
