/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue" : "#18417E" ,
        "btn-orange" : "#FA8E1F" ,
        "text-black" : "#272D37" ,
        "p-gray" : "#5F6D7E" ,
      } ,
      screens : {
        "768" : {'max' : "768px"} ,
        "450" : {'max' : "450px"} ,
        "1024" : {'max' : "1024px"} ,
        "min768" : {'min' : '768px'}
      } ,
      fontFamily : {
        "inter" : ["Inter" , "sans-serif"] ,
      }
    },
  },
  plugins: [],
}

