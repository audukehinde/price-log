/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "btn-yellow": "#F79A33",
        "orange":"#F86D62",
        "secondary": "rgba(1, 106, 154, 0.5)",
        "primary-color": "#016A9A",
        "sidebar": "rgba(1, 106, 154, 0.18)",
        "sidebar-secondary": "rgba(244, 248, 248, 0.3)",
        "sidebar-tags": "rgba(0, 0, 0, 0.7)",
        "innerbg": "rgba(1, 106, 154, 0.1)",
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      }
    },
  },
  plugins: [],
}
