// tailwind.config.js

import flowbitePlugin from 'flowbite/plugin'; // <-- Change this line

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
    // If you are using flowbite-react components, also add this line:
    './node_modules/flowbite-react/lib/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin,
  ],
};