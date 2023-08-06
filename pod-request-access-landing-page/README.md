# Frontend Mentor - Pod Request Landing Page

This is a solution to the [Pod Request Landing Page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
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

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [🎧 Git Repository](https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/pod-request-access-landing-page)
- Live Site URL: [🎧 Frontend Mentor - Pod](https://pod-alpha.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- SASS Preprocessor
- Form validation with JS

### What I learned

This project was a fine challenge. I didn't take much hours than I thought but still giving me the some emotion. And I liked that this project gave me chance to use again the `order` attribute in CSS, and that was good.

well the first problem I had was the SVG. I really don't know if I'm using SVG type right, but the only way I could find to change his color with CSS was in two ways

1. In this way I change the path attribute directly from the CSS. But it don't work if the SVG wasn't clear with the colors.

```CSS
svg path{
 fill: #5a668a;
}
```

2. In this way I had to change all the attributes fill `<path fill="currentColor" />` to take the current color, like an inherit concept, and then set a color for the SVG. This look easy but some SVG has lot of paths in one SVG file, so if you don't pay atention, could let one behind.

```HTML
<svg> <path fill="currentColor" />
</svg>
```

```CSS
svg {
 color: #5a668a;
}
```

Other problem I had with SVG was with his `width & height`. When I setted in CSS, the SVG became smaller, but the image stayed in the same size. So I searched and foundout about the `view-box`, but it should be setted directly in HTML and to do that I would create an JS file to listen the size of device and change the viewbox and adapt to the size I wanted.

I'm glad I realize that it should take hours to learn and solve this problem, so I took a step back and tried in a different way using:

```CSS
svg{
 transform: scale(x);
 transform-origin: left
}
```

This allow me to change the size of the content without any distortion. But with that came a problem, this solution creates a margin between the content and the SVG. To erease that, I used the `transform-origin: left` so the content kept in the left side and align in the way I wanted

The third thing I'm glad to learn was how to put the button inside the input. So, as it is only one input, I setted the form as an input, and the button with absolute

```CSS
form{
 position: relative;
 background-color: variables.$bg3
};

button{
 position: absolute;
 right: 5px
}
```

And it is important to conserve this right to align with the top and bottom margins

The last thing was the validation. I could insert the validation required, but I prefer maitin the text type and create all the validation with JS. The logic was easy for me, but I had some problems that made me write and rewrite at least 3 times.

The logic is, an e-mail has to have an "@" and a "." after the "@", so I create a function to make this validation. The I create another function to recieve this validation and go in the DOM and change it with the Error Message.

Well, it didn't work, because, it show the message but still making the submit even with the error. I try to fix but didn't work, so I delete and rewrite until work.

The problem was that I create to validation, but the if was returning the confirmation even if the second validation return false

```JS
if (email.indexOf("@") !== -1) {
   let newData = email.slice(email.indexOf("@"));
   if (newData.indexOf(".") !== -1){
    return true;
   }
} else {
    return false;
  }
```
So I simplified in one if with two parameters:
```JS
if (email.indexOf("@") !== -1 && newData.indexOf(".") !== -1) {}
```
The second part of this problem was to manipulate the error message. At first time i tried with ```toggle```, but if the error persisted the error message kep showing and disappearing. So I solved pu the ```add & remove``` attributes.

```JS
 if (true) {
   classList.add("showValidation");    
  } else {
    classList.remove("showValidation");
    
  }
```
I know the name is confuse, but this class name should be named "hideValidation", but it works anyway. I'll keep this name to confuse myself in future. 

### Continued development

Is this project I tried start the GiHub Workflow using a different branch to work and then when its finished bing to the main and make the pull request and merge.

The other thing I was studying and tried here was document and keep with trello. 

### Useful resources

- [Ordering Flex Items](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) - This helped me in the solution about how change the content from place in the screen.

- [Naming CSS ](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/) - Helped me to see differents ways to name the classes to organize CSS.

## Author

- Linkedin - [Clique aqui](https://www.linkedin.com/in/mf-cunha/x)
- GitHub - [Clique aqui](https://github.com/xtirian/)

## Acknowledgments
