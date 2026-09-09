/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F8F9FA",
        panel: "#F1F2F6",
        primary: {
          DEFAULT: "#6C5CE7",
          light: "#EDEBFD",
          dark: "#5A4BD6",
        },
        accent: {
          DEFAULT: "#00B894",
          light: "#E4FBF4",
        },
        brand: "#FFC048",
        danger: "#FF6B6B",
        ink: {
          DEFAULT: "#1E1E2F",
          muted: "#8A8D9F",
          soft: "#B4B6C2",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 8px 24px -8px rgba(30, 30, 47, 0.08)",
        soft: "0 4px 14px -4px rgba(108, 92, 231, 0.25)",
      },
    },
  },
  plugins: [],
};
