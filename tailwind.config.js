/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1330px",
    },
    extend: {
      colors: {
        primary: "#242a2b",
        secondary: "#808080",
        accent: {
          DEFAULT: "#1cbccf",
          secondary: "#18abbc",
          tertiary: "#90c6cd",
        },
        grey: "#e8f0f1",
      },
      fontFamily: {
        primary: "Poppins",
      },
      boxShadow: {
        custom1: "0px 2px 40px 0px rgba(8, 70, 78, 0.08)",
        custom2: "0px 0px 30px 0px rgba(8, 73, 81, 0.06)",
      },
      backgroundImage: {
        services: "url(../../assets/img/services/bg.svg)",
        testimonials: "url(../../assets/img/testimonials/bg.svg)",
        departments: "url(../../assets/img/departments/bg.svg)",
        quoteLeft: "url(../../assets/icons/testimonials/quote-left.svg)",
        quoteRight: "url(../../assets/icons/testimonials/quote-right.svg)",
      },
    },
  },
  plugins: [],
};
