
# Frontend Mentor - QR code component solution

This is a solution to the [Frontend Developer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x  ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Updates](#updates)
- [Author](#author)



## Overview

### Links

- Solution URL: [🧔🏻 Git Repository](https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/sp-developer-portfolio)
- Live Site URL: [🧔🏻 Body Mass Index Calculator - Frontend Mentor](https://xtirian-portifolio.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - For styles


### What I learned

- to set a font from google fonts in your project, you gave to create a component and import from Google fonts NextJs. 

```TS
import { Space_Grotesk } from 'next/font/google'

export const spaceGrotesk = Space_Grotesk({ 
  weight: ['500', '700'],
  display: 'swap',  
  subsets: ['latin'] 
})
```

- As it is my first time using the React with NextJS, that is a little bit different than using from CRA, I would say that I learned how to set the Head by changing the layout.tsx. I know that I can use a text file separeted to the component in a .txt file.

```TS
export function metadata: Metadata = {

  //Colocar sobre os metadatas no README
  title: '🧔🏻 xTirian Portfolio',
  description: "Hi! 👋 I'm Matheus, and I'm passionate about web programming. I'm currently studying to become a full-stack developer 🚀, and I'm excited to share my projects with you !",

}
  ```

- In globalCSS.tsx is where I should set the tailwindCSS and the custom CSS of the page About the Tailwind. 

- Again, about the tailwindCSS, I learned how to create custom settings for my changing the tailwind.config

  ```JS
  module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

    //Colocar sobre importação de cores customizadas no README
    theme: {
      extend: {
       colors: {
          'Black': '#151515',
          },
       fontSize: {
        'base' : '8px',
        'xl': ['11rem', {
          lineHeight: '11rem',
          letterSpacing: '-0.3125rem',
          fontWeight: '700'}]
          }
      }}}
  ```

- At this project I started using Git flow commands. I had a problem with the tag in version set, but I could set manually the tag.

- I learnd how to pass props in Typescript, that's different from reactJs, since I gave to set the type of the data.

  ```TS
  export default function card(props: {
    src: string;
    project: string;
    code: string;
    title: string;
    children:React.ReactNode //honorable metion for this props, because normali I didn't used Children as a props in ReactJS
  }) {
    return ()}
  ```

- Leaned how to import and use the React Hook useEffect to set a eventListener in the body of the page and how to manipulate DOM using the description "HTMLElement" as a type for a DOM data. I tried usin "<HTMLElement>" and the "* as HTMLElement" nd just the second worked here.

  ```TS
  import { useEffect } from 'react'

  useEffect(() => {

      //email verification
      const email = document.getElementById('emailInput') as HTMLInputElement;

      
    
      email.addEventListener('input', e => {     })

  ```

- when I'm passing a custom value for a tailwindCSS className, I can use the calc function of CSS. I have two options:

  - pass all the arguments without space
  - where I what to use Space, I use " _ " like "calc(1_+_1)"

  ```TS
  import React from "react";

  export default function Home() {
  return (
  <div className="sm:right-[calc(100%-(174px/2))]" > </div>
  )}

  ```


### Continued development

I need to cultivate a strong responsive layout. I have  total control about my responsive layout, but I madde it all in breakpoint, and I think I hould do it better implement with relative units.

About the next, the structure of the projet, I that there is a lot of thing to learn, but I'm happy with this result, since I'm start the NextJS classes next week.

### Useful resources

- [Image component](https://medium.com/frontendweb/how-to-add-an-image-in-next-js-5c1065450e3a) - At first it helped me to use images in the project, but when I bade the build and the deploy, all the images are with some bug that the page couldn't find the address of the images. So I rollback for the tag <img> and everything worked well. I should look for that in the future

- [Git flow Tutorial (PT-BR)](https://youtu.be/394mc6PV8t8?si=d-3bCko1WxLxbZ9V)

## Updates

### **Version 1.1**
This version recieve some improvments.The 'Contact Me' Button, now has the scrollIntoView function passed by useRef.

The Home page was divided in three components, HeroBanner, Projects and Staks

I tried to create the card as a component, but the tailwind wasn't helping me, since it keep cant using the image as background. I had to put the addres of the image, so it work, and the put the props. But since it wasn't good looking, I just let the card there and in the next update I'll remake the card.



## Author

- Website - [xTirian](https://xtirian-portifolio.vercel.app/)
- Frontend Mentor - [@xtirian](https://www.frontendmentor.io/profile/xtirian)
- Linkedin - [Matheus Fernandes Cunha](https://www.linkedin.com/in/mf-cunha)

