/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Dancing Script", "cursive"],
        sharetech:[ "Share Tech", "sans-serif"],
      },
      boxShadow: {
        "white-sm":
          "0 5px 10px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)",
        "white-lg":
          "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)",
        "inverted-white-lg":
          "0 -10px 15px -3px rgba(255, 255, 255, 0.1), 0 -4px 6px -2px rgba(255, 255, 255, 0.05)",
      },
      colors: {
        primary: "var(--primary-bg-color)",
        secondary: "var(--secondary-bg-color",
      },
      animation: {
        gallery: "gallery 20s linear infinite",
        fall: "fall 1s linear infinite",
      },
      keyframes: {
        gallery: {
          "0%": {
            backgroundImage:
              'url("https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          },
          "20%": {
            backgroundImage:
              'url("https://images.pexels.com/photos/10528234/pexels-photo-10528234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          },
          "40%": {
            backgroundImage:
              'url("https://images.pexels.com/photos/4338015/pexels-photo-4338015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          },
          "60%": {
            backgroundImage:
              'url("https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          },
          "80%": {
            backgroundImage:
              'url("https://images.pexels.com/photos/2131623/pexels-photo-2131623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          },
          "100%": {
            backgroundImage:
              'url("https://images.pexels.com/photos/1311445/pexels-photo-1311445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          },
        },
        fall:{
          "0%": {
            transform:'translateY(-100%)',
          },
          "100%": {
            transform:'translateY(100%)',
          },
        },
      },
    },
  },
  plugins: [],
};
