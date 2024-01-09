# Frontend Mentor - Frontend quiz app solution

This is a solution to the [Frontend quiz app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Select a quiz subject
- Select a single answer from each question from a choice of four
- See an error message when trying to submit an answer without making a selection
- See if they have made a correct or incorrect choice when they submit an answer
- Move on to the next question after seeing the question result
- See a completed state with the score after the final question
- Play again to choose another subject
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Navigate the entire app only using their keyboard
- **Bonus**: Change the app's theme between light and dark

### Screenshot

![](./result.jpg)

### Links

- Solution URL: [Not done yet](https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/quiz-app)
- Live Site URL: [Not done yet](https://frontend-mentor-snyder-cut.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite.js](https://nextjs.org/) - React framework

### What I learned

This project was a pretty good challenge, not in case of require complex tools, but was pretty tought by the logical i have to infer to do this.

Fo this project, I think the most valuable thing I learnd, is that I have to plan better. So I'll look araound for more workflows to see how people are doing their apps. My difficult was that, since it was a bigger applicaton compared to the others I've made, I lost in the middle of the workflows some references. An example, the first thing I made was the Theme configuration, but afterwards I changed everything from what I did to a useContext config. Due that, i had to remake part of the application, and even remaking, I forgot some parts and I had to stop what I'm doing to fix the theme in some part again.

Now, think about that problem with a bug. I had a pretty strange in one button, that was submiting despite I setting it to not submit. It takes me hours just to figure out a way. I couldn't, so I simply called it outside the form. This isn't the best way, I think, but worked.

#### **Switch Toggle**

I really liked to do that. I always wanted to do this kind of button, and I thought it was pretty funny. I found it in the Material UI library, but as it hasn't the same look, I preferred to create by myself the component.

#### **ContextAPI**

Since the middle of this project I didn't heard about the useContext. I was doing my breakfest one day, watching my daily favorite programing YT Channel, and the person programing taught how to use the Context API in Angular. So I was pretty shocked with the functionality, and runned to the project to change everything to make it work with ContextAPI.
But at that moment I just knew that exist, but didn't know even the how the sintax works and the propeties and limitations. So in themiddle of the project, I started search about it, and since there is no tutorial of "How construct a Quiz App with Context API" I had to figure out. I found one [video](#useful-resources) that thaught me the basis, and with the documentation I took from there.

In this example You'll see how I managed to use in a wrong way the ContextAPI. Here, I create a complex function to call and set the main Theme in the local storage, even I had the theme in the context. This, because at the first moment I wasn't understanding very well the concept. I'll let it in the code to remember how not to do it.

```tsx
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  //HANDLE THEME
  const [mainTheme, setMainTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    //this use effect it's to take the settings theme from the browser when opening the page an set the mainTheme
    setMainTheme(HandleTheme.getPreferredTheme());
  }, []);

  //this function will change the theme
  function changeTheme(newTheme: string) {
    setMainTheme(newTheme);
    HandleTheme.setStoredTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme: mainTheme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

After that I understood how it works and changed for more summarized applications of the concept, like:

```tsx
export const SubjectProvider = ({ children }: SubjectProviderProps) => {
  const [actualContent, setActualContent] = useState<string | undefined>(undefined);
  const startContent = (newContent: string) => {
    setActualContent(newContent);
  };
  return (
    <SubjectContext.Provider value={{content: actualContent,setContent: startContent,}}>
      {children}
    </SubjectContext.Provider>
  );
};
```

The thing is, since I never used it, I didn't planned very xtiwell how I would approach the challenge with this concept. So at the final, I faced a code that I looked and calle "Frankenstein", considering every time I wanted use the context, I created a new one, instead of creating one big contextAPI with all data setted.. If you look tha `main.tsx` you'll see what I'm saying.

Well, even I didn't liked it, it doesn't mean it was awlful. Still working , and it's the goal of the project.

### Continued development

- I need to see more videos or find some book to teach me best practices or better way to programing.

### Useful resources

**ContextAPI ** - https://www.youtube.com/watch?v=g4lw8__0Mow

## Author

- Website - [My Portifolio](https://xtirian-portfolio.vercel.app/)
- Github - [Github](https://github.com/xtirian)
- Frontend Mentor - [@xtirian](https://www.frontendmentor.io/profile/xtirian)
- Linkedin - [@mf-cunha](https://www.linkedin.com/in/mf-cunha/)
- Twitter - [@xTirian](https://twitter.com/xTirian)

