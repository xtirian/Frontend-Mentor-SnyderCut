import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./sass/global.scss";
import { ThemeProvider } from "./services/themeContext.tsx";
import {
  QuestionNumberProvider,
  StartSubjectProvider,
  SubjectProvider,
} from "./services/subjectContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <StartSubjectProvider>
        <SubjectProvider>
          <QuestionNumberProvider>
            <App />
          </QuestionNumberProvider>
        </SubjectProvider>
      </StartSubjectProvider>
    </ThemeProvider>
  </React.StrictMode>
);
