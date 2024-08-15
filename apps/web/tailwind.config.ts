import fluid, { extract, fontSize, screens } from 'fluid-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: { files: ['./src/**/*.{html,js,jsx,ts,tsx,astro}'], extract },
  theme: {
    fontSize,
    screens,
    extend: {},
  },
  plugins: [fluid],
};
