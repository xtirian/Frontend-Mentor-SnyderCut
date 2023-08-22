/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

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
        'project1' : "url(../images/projects/thumbnail-project1.webp)",
        'project2' : "url(../images/projects/thumbnail-project2.webp)",
        'project3' : "url(../images/projects/thumbnail-project3.webp)",
        'project4' : "url(../images/projects/thumbnail-project4.webp)",
        'project5' : "url(../images/projects/thumbnail-project5.webp)",
        'project6' : "url(../images/projects/thumbnail-project6.webp)",
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
    },   
    screens: {      
      'sm': '576px',

      'md': '708px',

      'lg': '1100px',  
    }
  },
  plugins: [],
}

