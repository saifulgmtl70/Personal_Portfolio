const withMT = require("@material-tailwind/react/utils/withMT");
const {nextui} = require("@nextui-org/react");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {
      
    },
  },
  darkMode: "class",
  plugins: [
    require("daisyui"),
    nextui(),
    // require("@tailwindcss/forms")
  ],
  themes: ["light", "dark", "cupcake"]
});
