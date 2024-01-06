import { ReactNode, createContext, useState } from "react";

//START SUBJECT CONTEXT
interface StartSubjectContextProp {
  // CHENGE THE IS STARTED TO STATUS
  // Because since there is a 3rd screen for the results
  // i'll create a context so it render a 3rd view when finish the test
  isStarted: boolean;
  setIsStarted: () => void;
}

export const StartSubjectContext = createContext<
  StartSubjectContextProp | undefined
>(undefined);

interface SubjectProviderProps {
  children: ReactNode;
}

export const StartSubjectProvider = ({ children }: SubjectProviderProps) => {
  const [isStarted, setIsStarted] = useState(false);

  function startSubject() {
    setIsStarted(!isStarted);
  }

  return (
    <StartSubjectContext.Provider
      value={{ isStarted: isStarted, setIsStarted: startSubject }}
    >
      {children}
    </StartSubjectContext.Provider>
  );
};

//SET SUBJECT CONTEXT

interface SubjectContextProps {
  content: string | undefined;
  setContent: (content: string) => void;
}

export const SubjectContext = createContext<SubjectContextProps | undefined>(
  undefined
);

export const SubjectProvider = ({ children }: SubjectProviderProps) => {
  const [actualContent, setActualContent] = useState<string | undefined>(
    undefined
  );

  const startContent = (newContent: string) => {
    setActualContent(newContent);
  };

  return (
    <SubjectContext.Provider
      value={{
        content: actualContent,
        setContent: startContent,
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
};

interface questionNumberProps{
  question: number,
  setQuestion: (question:number) => void
}

export const QuestionNumberContext=createContext<questionNumberProps|undefined>(undefined)


export const QuestionNumberProvider = ({children}:SubjectProviderProps) => {

const [questionNumber, setQuestionNumber] = useState<number>(0)

function setNumber(x:number){

  setQuestionNumber(x)
  
}

return <QuestionNumberContext.Provider value={{
  question: questionNumber,
  setQuestion:setNumber
}}>
  {children}
</QuestionNumberContext.Provider>


}
