import { DataTypes, HandleData } from "./handleData";

export function filterSubject(
  options: DataTypes[],
  content: string | undefined
) {
  const result = options.filter((e: any) => e.title === content);

  return result;
}

export async function checkAnswer(answer: string, content: string, questionId:number) {
  try {    

    let data = await HandleData.getData()
      .then((response) => filterSubject(response, content))
      .then((subject) => subject[0].questions[questionId]);    

    if(answer.toLocaleLowerCase() === data.answer.toLocaleLowerCase()){
      
      return 'correct'
    } else{
      return 'wrong'
    }

    

    //TODO: MAKE THE CHECK AND RETURN IF IT'S RIGHT


  } catch (error) {
    console.error(error);
  }
}
