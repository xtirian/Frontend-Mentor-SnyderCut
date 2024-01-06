import { ReactNode, createContext, useState } from "react";

//START SUBJECT CONTEXT
interface StartSubjectContextProp {
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
