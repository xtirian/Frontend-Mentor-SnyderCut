import { useContext } from "react";
import {
  PointsContext,
  QuestionNumberContext,
  StartSubjectContext,
  SubjectContext,
} from "./subjectContext";

export interface DataTypes {
  title: string;
  icon: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
}

export class HandleData {
  static getStartContext() {
    const context = useContext(StartSubjectContext);

    if (!context) {
      throw new Error("error with the useTheme");
    }
    return context;
  }
  static getSubjectContent() {
    const context = useContext(SubjectContext);

    if (!context) {
      throw new Error("error with the Subject Content");
    }

    return context;
  }

  static setQuestionNumberContext(actualQuestion: number) {
    const context = useContext(QuestionNumberContext);

    if (!context) {
      throw new Error("error with the Subject Content");
    }

    context.setQuestion(actualQuestion);
  }

  static getQuestionNumberContext() {
    const context = useContext(QuestionNumberContext);

    if (!context) {
      throw new Error("error with the Subject Content");
    }

    return context;
  }

  static getPointsContext(){
    const context = useContext(PointsContext);

    if (!context) {
      throw new Error("error with the Subject Content");
    }

    return context;
  }

  static async getData() {
    const response = await fetch("../data/data.json");

    const data = await response.json();

    return data.quizzes;
  }
}
