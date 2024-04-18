/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',
  './public/**/*'],

  //Colocar sobre importação de cores customizadas no README
  theme: {
    extend: {
      colors: {
        'Black': '#151515',
        'Green': '#4ee1a0',
        'DarkGrey': '#242424',
        'Grey': '#d9d9d9',
        'White': '#ffffff',
      },
      backgroundImage: {
        'project1' : "url(/images/projects/project1.webp)",
        'project2' : "url(/images/projects/project7.webp)",
        'project3' : "url(/images/projects/project3.webp)",
        'project4' : "url(/images/projects/project4.webp)",
        'project5' : "url(/images/projects/project5.webp)",
        'project6' : "url(/images/projects/project6.webp)",
        'project7' : "url(/images/projects/project7.webp)",
        'project8' : "url(/images/projects/project8.webp)",
        'project9' : "url(/images/projects/project9.webp)",
        'project10' : "url(/images/projects/project10.webp)",
        "rings" : "url(/images/bg/pattern-rings.svg)",
        "circle" : "url(/images/bg/pattern-circle.svg)",
        "profileDesktop" : "url(/images/profileImage/profile-desktop.jpg)",
        "profileTablet" : "url(/images/profileImage/profile-tablet.jpg)",
        "profileMobile" : "url(/images/profileImage/profile-mobile.png)",

      }
    },
    fontSize: {
      'base' : '8px',
      'xl': ['11rem', {
        lineHeight: '11rem',
        letterSpacing: '-0.3125rem',
        fontWeight: '700'
      }],
      'l': ['6rem', {
        lineHeight: '7rem',
        letterSpacing: '-0.1875rem',
        fontWeight: '700'
      }],
      'm': ['3rem', {
        lineHeight: '4rem',
        fontWeight: '700'
      }],
      'body': ['2.25rem', {
        lineHeight: '3.5rem',
        fontWeight: '500',
      }],
      'form': ['2rem', {
        lineHeight: '3.25rem',
        letterSpacing: '-0.0275rem',
        fontWeight: '500',
      }],
    },   
    screens: {      
      'sm': '343px',

      'md': '708px',

      'lg': '1100px',  
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

