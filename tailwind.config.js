/** @type {import('tailwindcss').Config} */
module.exports = {
  // This is my boilerplate default configuration for Tailwind CSS and daisyUI
  content: [
    './*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light'],
  },
  corePlugins: {},
}