import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./sass/global.scss";
import { ThemeProvider } from "./services/themeContext.tsx";
import {
  PointsProvider,
  QuestionNumberProvider,
  StartSubjectProvider,
  SubjectProvider,
} from "./services/subjectContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <StartSubjectProvider>
        <SubjectProvider>
          <PointsProvider>
            <QuestionNumberProvider>
              <App />
            </QuestionNumberProvider>
          </PointsProvider>
        </SubjectProvider>
      </StartSubjectProvider>
    </ThemeProvider>
  </React.StrictMode>
);
