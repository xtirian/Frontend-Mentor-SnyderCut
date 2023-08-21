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
        'Circle': "url(/public/imagem/bg/pattern-circle.svg",
        'Rings': "url(/public/imagem/bg/pattern-rings.svg",
      },
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

