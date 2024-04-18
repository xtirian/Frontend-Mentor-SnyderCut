import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        project1: "url(./public/images/projects/project1.webp)",
        project2: "[url(/images/projects/project7.webp)]",
        project3: "url(/images/projects/project3.webp)",
        project4: "url(/images/projects/project4.webp)",
        project5: "url(/images/projects/project5.webp)",
        project6: "url(/images/projects/project6.webp)",
        project7: "url(/images/projects/project7.webp)",
        project8: "url(/images/projects/project8.webp)",
        project9: "url(/images/projects/project9.webp)",
        project10: "url(/images/projects/project10.webp)",
        rings: "url(/images/bg/pattern-rings.svg)",
        circle: "url(/images/bg/pattern-circle.svg)",
        profileDesktop: "url(/images/profileImage/profile-desktop.jpg)",
        profileTablet: "url(/images/profileImage/profile-tablet.jpg)",
        profileMobile: "url(/images/profileImage/profile-mobile.png)",
      },
    },
  },
  plugins: [],
};
export default config;
