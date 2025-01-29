/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [ 
    "variant", 
    [
      "@media (prefers-color-scheme: dark) { &:not(.light *) }",
      "&:is(.dark *)",
    ],
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        s15:  '1500px',
        s16: '1600px',
        s18: '1800px',
      },
      colors: {
        yellow: "#EBBC13",
        lightblue: "rgba(12, 34, 64, 0.3)",
        extralightblue: "rgba(12, 34, 64, 0.2)",
        darkblue: "#0C2240",
        blueshade: "#4F5F75",
        lightyellow: "rgba(235, 188, 19, 0.15)",
        lightborderyellow: "rgba(235, 188, 19, 0.2)",
        lightshadeblue: "rgba(55, 65, 81, 0.6)",
        bordercolor: "rgba(12, 34, 64, 0.2)",
        bglightblue: "rgba(12, 34, 64, 0.05)",
        lightblueborder: "rgba(12, 61, 140, 0.2)",
        lightbluebg: "rgba(12, 61, 140, 0.05)",
        bluedarkmode: "#3A4C64",
        bluedarkmodecolor: "#243853",
        lightwhite: "rgba(255, 255, 255, 0.6)",
        lightwhiteborder: "rgba(255, 255, 255, 0.15)",
        extralightwhite: "rgba(255, 255, 255, 0.5)",
        extrathinwhite: "rgba(255, 255, 255, 0.05)",
        doubleextralightwhite: "rgba(255, 255, 255, 0.2)",
        mutedblue: "#374151",
        extralightblack: "rgba(0, 0, 0, 0.05)",
        extrathinblack: "rgba(0, 0, 0, 0.1)",
        lightblack: "rgba(0, 0, 0, 0.2)",
        thinblack: "rgba(0, 0, 0, 0.5)",
        tableblue: "rgba(12, 61, 140, 0.05)",
      },
      boxShadow: {
        inputshadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.10)",
        dashboardshadow: "0px 4.532px 15.863px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
};
