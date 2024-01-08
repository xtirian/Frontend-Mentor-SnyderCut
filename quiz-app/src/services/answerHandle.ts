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

    console.log(content);
    console.log(answer);
    console.log(data);

    //TODO: MAKE THE CHECK AND RETURN IF IT'S RIGHT


  } catch (error) {
    console.error(error);
  }
}
