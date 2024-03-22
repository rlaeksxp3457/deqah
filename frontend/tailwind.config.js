/** @type {import('tailwindcss').Config} */
export default {
  content: ['./build/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /^bg-[a-zA-Z0-9-]+$/,
    },
  ],
  plugins: [],
};
