# Frontend Mentor - Results summary component

![Design preview for the Results summary component coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a basic understanding of HTML and CSS.**

## The challenge

Your challenge is to build out this results summary component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

We provide the data for the results in a local `data.json` file. So you can use that to add the results and total score dynamically if you choose.

Your users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design.

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`.

If you would like the design files (we provide Sketch & Figma versions) to inspect the design in more detail, you can [subscribe as a PRO member](https://www.frontendmentor.io/pro).

All the required assets for this project are in the `/assets` folder. The images are already exported for the correct screen size and optimized.

We also include variable and static font files for the required fonts for this project. You can choose to either link to Google Fonts or use the local font files to host the fonts yourself. Note that we've removed the static font files for the font weights that aren't needed for this project.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

```js
fetch("./data.json").then(function (response){
 // The fetch is used to get acess to the JSON data
// And when the API or in that case the JSON file give te acess to the data (thats why use the property then), he execute a function and have the response as first argument
// The response has useful methods, as like being text or being JSON
// I this example i'll use JSON method on the response object to "convert" the json on actually javascript Object
// So here I'll:
 return response.json();

 //So here this will try to interpret the json data and convert it in Javascript object, and return a new promise
}).then(function (obj){
 //Here I already had the actual objects and could print it in the console:
 console.log(obj)
 //This returned an array with the objects writed in data.json

 // now I'm gonna put an valve in case of error using catch:
}).catch(function (error) {
 console.error("Something went wrong with retrieving the data!");
 console.error(error)

 // This valve will return the error to the console if there is any problem in the 
});
```
