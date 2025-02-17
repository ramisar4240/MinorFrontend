// /** @type {import('tailwindcss').Config} */
// export default {
//     darkMode: ["class"],
//     content: ["./src/**/*.{html,js,jsx}"],
//   theme: {
//   	extend: {
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		},
//   		colors: {
// 			   border: "#d1d5db",
// 			   background: "dark",
// 			    foreground: "#1a202c"
// 		}
	
//   	}
//   },
//   plugins: [require("tailwindcss-animate")],
// }

// /** @type {import('tailwindcss').Config} */
// module.exports={
// 	darkMode:["class"],
// 	content: [
// 		// "./index,html",
// 		// "./src/**/*.{js,ts,jsx,tsx}",
// 		'./pages/**/*.{js,jsx}',
// 		'./components/**/*.{js,jsx}',
// 		'./app/**/*.{js,jsx}',
// 		'./src/**/*.{js,jsx}',
// 	],
// 	prefix:"",
// 	theme: {
// 		container:{
// 			center:true,
// 			padding:"2rem",
// 			screens:{
// 				"2xl": "1400px",
// 			},
// 		},
// 	  extend: {
// 		borderRadius: {
// 			lg: 'var(--radius)',
// 			md: 'calc(var(--radius) - 2px)',
// 			sm: 'calc(var(--radius) - 4px)'
// 		},
// 		colors: {}
// 	  },
// 	},
// 	plugins: [require("tailwindcss-animate")],
//   }






/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class", // Enable dark mode by toggling the "dark" class
	content: ["./src/**/*.{html,js,jsx}"], // Ensure paths are accurate
	theme: {
	  extend: {
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		colors: {
		  border: "hsl(var(--border))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  card: "hsl(var(--card))",
		  "card-foreground": "hsl(var(--card-foreground))",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  