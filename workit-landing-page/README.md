# Frontend Mentor - Workit Landing Page

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/workit-landing-page-2fYnyle5lu).

## Table of contents

- [Overview](#overview)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Author](#author)

## Overview

The Project is on going. I finished the base structure and let some advices for me in future.

I'm trying to approach this with the concepts of Mobile first that I'm learning with [The Net Ninja](https://www.youtube.com/@NetNinja). This project is kind a pratice for html and css, at the same time I'm using this as a opportunity to learn a new approach to code.

### Screenshot

Mobile
![](./assets/result/mobile.png)

Web
![](./assets/result/web.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/workit-landing-page)
- Live Site URL: [Go to site](https://workit-landing-page-indol.vercel.app/#)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

1 - Here I was trying something new. As I said in overview, , implement the mobile-first workflow its something new, and I thought that I could do it well. But as the project was flowing, the new way to approach the CSS and the kind of organization that I was following, made the process I little dificult. Sometimes i was lost in my own notes. But this feel about the project don't last too much.
I know there is a lot to keep learning, but I understand well now what the matter of this. Another difficult I found about that is that I feel that the sizes of boxes and images are easier to manipulate between the frames. Like I created for the frames 375px and 768px and between that the size of the site could be weird.

2 - To make this project, I had to learn how to create the effect of circle at the bottom margin.
At first sight I thought that I could do that using border-radius, but didn't work. I figured out that the shape is more like a ellipse than a circle So I went through internet seaching for that. The way that I found it was using this:

```css
.ellipsePattern {
  width: 100vw;
  height: 4em;
  /* The clip-path make the ellipse form */
  clip-path: ellipse(60% 100% at top center);
}
```

There other shapes that can be explored with this. So I created a div with this class and its job was only be the division between the section, and I used this only pattern in both division in site.

3- The backgrounds that dont appear in mobile versions. This subject took me full 2 hours to make it work.
To make the moile version was easy, just create a space for then and put the display none, But when I needed to use it, began the catastrophe. I tryied to use position relative, and it worked on the tablet-style, but as it growing, the layout doesn't keep up with the prototype. So I had to go back and remake using the position absolute.

```html
<div class="banner">
  <div class="bgDisplay bg-pattern-1">
    <!-- Take it off later to become a bg -->
  </div>
  <h1 class="headingL">Data <span>tailored</span> to your needs.</h1>
  <a href="#" class="button pBody">Learn more</a>
  <div class="bgDisplay bg-pattern-2">
    <!-- Take it off later to become a bg -->
  </div>
</div>
```

```Css

.bg-pattern-1 {
    background-image: url(./assets/images/bg-pattern-1.svg);
    background-size: 270px;
    background-repeat: no-repeat;
    background-position: right;

    width: 135px;
    height: 270px;

    position: absolute;

    left: 0px;
  }
```

I didn't this at first because I ain't used to use the absolute property, but it work and now I understand a little more about how it works and how to position it properly.

4 - The last thig I learned and I'm very happy because it is very simple, was how to change the colors of the svg. until now I was used to put the svg inside the <img> tag.

```css
svg:hover path {
  fill: #24053e;
}
```

### Continued development

Well, I have a lot to learning as I saw today. Even if I study a Lot, there is a world of possibilities.

## Author

- Portifólio - [Clique aqui](https://xtirian.netlify.app/)
- Linkedin - [Clique aqui](https://www.linkedin.com/in/mf-cunha/x)
- GitHub - [Clique aqui](https://github.com/xtirian/)



