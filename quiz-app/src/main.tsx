import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./sass/global.scss";
import { ThemeProvider } from "./services/themeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
