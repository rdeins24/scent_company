const defaultTheme = require("tailwindcss/defaultTheme");

// Sistemul de design (paleta și tipografia Doré, accent coral Scentio): vezi DESIGN-SYSTEM.md.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f4eee6",
        "cream-alt": "#eae2d6",
        "cream-muted": "#c9c0b3",
        ink: "#211d18",
        "ink-soft": "#33291f",
        "ink-soft-2": "#2a231a",
        border: "#e2d8c8",
        muted: "#6e665a",
        "muted-strong": "#5c534a",
        "line-dark": "#8d857b",
        error: "#a13b2a",
        // Accentul de brand Scentio (culoarea „MILANO” din logo): doar detalii mici, niciodată text lung sau suprafețe mari.
        coral: "#f97e76",
      },
      fontFamily: {
        sans: ["var(--font-work-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-newsreader)", ...defaultTheme.fontFamily.serif],
      },
      letterSpacing: {
        tight: "-.015em",
        eyebrow: "0.16em",
      },
      height: {
        "half-screen": "50vh",
      },
    },
  },
};
