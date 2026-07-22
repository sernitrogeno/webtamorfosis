import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Identidad Webtamorfosis. Se apoya en variables CSS para el modo oscuro.
        brand: {
          50: "#f4f1ff",
          100: "#ebe5ff",
          200: "#d9ceff",
          300: "#bda6ff",
          400: "#9d73ff",
          500: "#7c3aed", // Violeta principal de marca
          600: "#6d28d9",
          700: "#5b21b6",
          800: "#4c1d95",
          900: "#3b0f7a",
          950: "#25064f",
        },
        electric: {
          50: "#eff5ff",
          100: "#dbe8ff",
          200: "#bfd6ff",
          300: "#93baff",
          400: "#6094ff", // Azul eléctrico secundario
          500: "#3b6dff",
          600: "#1f4bf5",
          700: "#1839e1",
          800: "#1a30b6",
          900: "#1c2f8f",
        },
        warm: {
          // Acento cálido, usado con moderación.
          400: "#ffb27a",
          500: "#ff8a3d",
          600: "#f97316",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-jakarta)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #7c3aed 0%, #3b6dff 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(59,109,255,0.12) 100%)",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(16, 12, 40, 0.06), 0 12px 40px -12px rgba(59, 40, 120, 0.18)",
        glow: "0 0 0 1px rgba(124,58,237,0.12), 0 20px 60px -20px rgba(124,58,237,0.45)",
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "gradient-pan": "gradient-pan 8s ease infinite",
        "fade-up": "fade-up 0.6s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
