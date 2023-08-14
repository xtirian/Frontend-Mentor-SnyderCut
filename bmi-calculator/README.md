# Body Mass Index Calculator

This is a solution to the [Body Mass Index Calculator on Frontend Mentor](https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


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

- Solution URL: [📏 Git Repository](https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/feat/2-1/bmi-calculator)
- Live Site URL: [📏 Body Mass Index Calculator - Frontend Mentor](https://bmi-calculator-blond-two.vercel.app/)

## My process

### Built with
- Semantic HTML5 markup
- CSS custom properties
- SASS Pre-processor
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

In this project I had two big challenges:
1 - The custom input
2 - understand the imperial system

I'm trying to take notes of the time a waste in wich project, and to complet, in this specially, I put a mark to work a little every day, but with work and studies is difficult to do that way. So I compensate making this in the weekend. The good is that I could make more commits in my gitHub

Okay, to the main subject:

I took at least 3 hours to figure out how to custom the input radio. The ways I try at first and second time, usin only 

```html
<label>Hi
 <input type="radio">
</label>
```

```css
label{
 position: relative
}
input {
 display: none
}

label::before {
 content: '';
 width: 20px;
 height: 20px;
 background: blue;
 position:absolute
}


label::after {
 content: '';
 width: 20px;
 height: 20px;
 background: blue;
 position:absolute
}

```

The problem in this solution was that the hover didn't work even if I change everything in the code. For some reason, the properties setted don't recognize the hover. So, the lest attempt was with a ```span``` element inside the label. Facing the problem that I couldn't change the after and the before in a hover, I used a true element that I knew the hover work. 


A really good trick I learn in this exercise was the selector "~". In the code I use it to select the ```span``` that are sibling of an input. look the to exemple:
```html
<label>Hi<span></span></label>
<input type="radio"> 

<label>Hello
 <input type="radio">
 <span> </span>
</label>
```

```css
label:hover input ~ .span {
  border-color: #345ff6;
}
```

In the, when I pass the mou over the radio, only the second span will take the attributs, because it is the only that has a sibling input, it means that the css will change the span inside a label and this span must have a sibling input that divide the same parent label. A little confuse, but make sense for me. rs This is a good way to change a item (the span) when another item had some change (the input). 

Using this concep, with before and after, I could create a vision field in the span and the dot to mark the checked with the after property


___

**About the script**, I'm trying to use the concept of the clean code which says that each function must do just one thing. I try to respect this, thats why you could see a lot of function in my script, one function calin another.

First thing I use a Event Listener to capt any change in the form and starts to calc. The "load" event listener is because of a bug. every time a reload the page, the page saved some information. So, if I was in the imperial form before I reload the page, in the new one, the page started with the imperial form checked, but showing the metric form (that is the default).

So, I use both event lisntener to call the "Set Form" function, that is the first functuion that read the radio and call the right form (metric or imperial depending of the visitors will). This function reservers the information of what form the lead is using, and use this informtion to call the function calcBMI. Before this you can find yousel well

The main thing I want to register here in the script is this:

```js
idealWeight = `${Math.floor(
      ((impHeight ** 2 / 703) * 18.5) / 14
    )}st ${Math.floor(
      (((impHeight ** 2 / 703) * 18.5) / 14 -
        Math.floor(((impHeight ** 2 / 703) * 18.5) / 14)) *
        14
    )}lbs - ${Math.floor(((impHeight ** 2 / 703) * 24.9) / 14)}st ${Math.floor(
      (((impHeight ** 2 / 703) * 24.9) / 14 -
        Math.floor(((impHeight ** 2 / 703) * 24.9) / 14)) *
        14
    )}lbs`;

```
This calc was complicated most because I aint used to this system. I used the reverse logic initializing from the impHeight (that is the Visitor / Lead height in Inches ), and then I convert to feets or foots. So I go further and use the same logic to discover the rest and multiply by 14 so I have the lbs.

___
**Selector**

Just a honored mention for another selector I used by the first time. the first one was the " ~ " that I said, and the second was the " + " that isn't a selector, but is a good tool.


### Useful resources

- [W3school](https://www.w3schools.com/howto/howto_css_custom_checkbox.asp) - This helped me in the solution about how change the content from place in the screen.

## Author
- Linkedin - [Clique here](https://www.linkedin.com/in/mf-cunha/)
- GitHub - [Clique here](https://github.com/xtirian/)
- FrontEnd Mentor - [Clique here](https://www.frontendmentor.io/profile/xtirian)