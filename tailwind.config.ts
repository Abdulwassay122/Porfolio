import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        slideInLeft:{
        '0%':{ transform:'translateX(-100%)', opacity:'0'},
        '100%':{ transform:'translateX(0)', opacity:'1'}
        },
        slideInRight:{
        '0%':{ transform:'translateX(100%)', opacity:'0'},
        '100%':{ transform:'translateX(0)', opacity:'1'}
        },
        widthExpand65:{
        '0%':{ width: '0%'},
        '100%':{ width: '65%'}
        },
        widthExpand90:{
        '0%':{ width: '0%'},
        '100%':{ width: '90%'}
        },
        widthExpand85:{
        '0%':{ width: '0%'},
        '100%':{ width: '85%'}
        },
        widthExpand75:{
        '0%':{ width: '0%'},
        '100%':{ width: '75%'}
        },
        widthExpand70:{
        '0%':{ width: '0%'},
        '100%':{ width: '70%'}
        },
        widthExpand60:{
        '0%':{ width: '0%'},
        '100%':{ width: '60%'}
        },
        widthExpand40:{
        '0%':{ width: '0%'},
        '100%':{ width: '40%'}
        },
        widthExpand80:{
        '0%':{ width: '0%'},
        '100%':{ width: '80%'}
        },
        widthExpand100:{
        '0%':{ width: '0%'},
        '100%':{ width: '100%'},
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-100px)' },
        },
        slideInNav: {
          '0%': { right: '-150' },
          '100%': { right: '0' },
        },
        slideOutNav: {
          '0%': { transform: '0' },
          '100%': { transform: '-150' },
        },
        height0to100: {
          '0%': { height: '0%' },
          '100%': {  height: '100%' },
        },
      },
      animation:{
        slideInLeft: 'slideInLeft 0.5s ease-out forwards',
        slideInRight: 'slideInRight 0.5s ease-out forwards',
        widthExpand65: 'widthExpand65 1s ease-out forwards',
        widthExpand90: 'widthExpand90 1s ease-out forwards',
        widthExpand60: 'widthExpand60 1s ease-out forwards',
        widthExpand85: 'widthExpand85 1s ease-out forwards',
        widthExpand40: 'widthExpand40 1s ease-out forwards',
        widthExpand75: 'widthExpand75 1s ease-out forwards',
        widthExpand70: 'widthExpand70 1s ease-out forwards',
        widthExpand80: 'widthExpand80 1s ease-out forwards',
        widthExpand100: 'widthExpand100 0.2s ease-out forwards',
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        fadeOut: 'fadeOut 0.3s ease-out forwards',
        slideInNav: 'slideInNav 0.2s ease-out forwards',
        slideOutNav: 'slideOutNav 0.2s ease-out forwards',
        height0to100: 'height0to100 0.5s ease-out forwards',
      
      },
      screens:{
        'xs': '475px',       // Custom screen size for extra small devices
      },
      fontFamily:{
          sen: ["Sen", 'serif'],
          roboto:[  "Roboto", 'sans-serif'],
          kanit:[  "Kanit", 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;