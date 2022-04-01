import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import plugin from "windicss/plugin";

export default defineConfig({
  extract: {
    // accepts globs and file paths relative to project root
    include: ["index.html", "src/**/*.svelte"],
    exclude: ["node_modules/**/*", ".git/**/*"],
  },
  darkMode: "class", // or 'media'
  safelist: ["flex", "flex-col", "gap-5", "md:gap-8", "items-center"],
  theme: {
    extend: {
      boxShadow: {
        overlay: "0 0 0 5000px rgba(0,0,0,0.75)",
        cart: "0px 20px 50px -20px rgba(29, 32, 38, 0.503143)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        orange: {
          55: "hsl(26, 100%, 55%)",
          71: "hsl(26, 100%, 71%)",
          94: "hsl(25, 100%, 94%)",
        },
        blue: {
          13: "hsl(220, 13%, 13%)",
          45: "hsl(219, 9%, 45%)",
          75: "hsl(220, 14%, 75%)",
          92: "hsl(219, 35%, 92%)",
          98: "hsl(223, 64%, 98%)",
        },
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
      container: {
        screens: {
          xl: "1110px",
        },
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      const buttons = {
        ".btn": {
          alignItems: "center",
          backgroundColor: "hsla(26, 100%, 55%, 1)",
          border: "none",
          borderRadius: ".625rem",
          color: "white",
          columnGap: "1rem",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          fontWeight: "700",
          padding: "1rem 4.75rem",
          textAlign: "center",
          transitionDuration: "400ms",
          transitionProperty: "background-color, box-shadow",
          transitionTimingFunction: theme("transitionTimingFunction.DEFAULT"),
          "&:hover": {
            backgroundColor: "hsla(26, 100%, 71%, 1)",
            boxShadow: "0px 20px 50px -20px #FF7E1B",
          },
        },
      };
      addComponents(buttons);
    }),
  ],
});
