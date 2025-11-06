npx create-expo-app@latest

npm run reset-project

npx expo install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
npx expo install --dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11

2. Setup Tailwind CSS
Run npx tailwindcss init to create a tailwind.config.js file

Add the paths to all of your component files in your tailwind.config.js file.

tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Include all paths that may contain class names (app/, app-example/, components/, etc.).
  // Adjust these globs if you add other folders that contain Tailwind/nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app-example/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./assets/**/*.{svg,png,jpg,jpeg}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}


Create a CSS file and add the Tailwind directives.

global.css

@tailwind base;
@tailwind components;
@tailwind utilities;

From here onwards, replace ./global.css with the relative path to the CSS file you just created.

3. Add the Babel preset
babel.config.js

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
4. Create or modify your metro.config.js
Create a metro.config.js file in the root of your project if you don't already have one, then add the following configuration:

metro.config.js

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(config, { input: './app/global.css' })

ry it out!
Create a simple component to test your Nativewind setup:

App.tsx

import "./global.css"
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}