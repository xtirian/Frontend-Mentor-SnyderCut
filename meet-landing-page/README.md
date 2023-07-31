# Frontend Mentor - Meet Landing Page

This is a solution to the [Meet Landing Page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

![](./screenshot.png)


### Links

- Solution URL: [Git Repository](https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/meet-landing-page)
- Live Site URL: [Frontend Mentor - Meet landing page](https://meet-landing-page-hazel.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- SASS Preprocessor

### What I learned

In this project has one component that change his place in the screem when goes from a small device for a desktop. So I had to find a way to do that. In my head was perfectly fine how it would happens, but in the practice it wasn't easy.

The first attempt was using the pseudo-class ```*:nth-child()``` to reach the elements I wanted and change ther orders, but by any motivation this didn't work

```CSS
.sect1:nth-child(2) {
 order: 3
}

.sect1:nth-child(3) {
 order: 2
}
```

So, as I ain't kind person who give up, I just gone directly int the element I wanted and added the property. At the final, I saved some words for the christmas.

```CSS

.__bg2{
 order: 3
}
.__banner-content {
 order: 2
 
 }
```



### Continued development


I didn't gone more deep in new things because I wanted to finish this more fast that I could. Next time I should try give a look in a way to make my code more responsive. Like using more calc, max() and min(), so I could create some mixins in SASS that adjust himself and I can use less code in in queries.

I need to study more about better ways to name classes so the CSS became more organizated.

### Useful resources

- [Ordering Flex Items](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) - This helped me in the solution about how change the content from place in the screen.

- [Naming CSS ](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/) - Helped me to see differents ways to name the classes to organize CSS.

## Author
- Linkedin - [Clique aqui](https://www.linkedin.com/in/mf-cunha/x)
- GitHub - [Clique aqui](https://github.com/xtirian/)

## Acknowledgments

