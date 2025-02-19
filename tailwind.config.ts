/* eslint-disable @typescript-eslint/no-require-imports */
import { heroui } from "@heroui/theme";
import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { type DarkModeConfig } from "tailwindcss/types/config";

export default {
  darkMode: (process.env.DARK_MODE as DarkModeConfig | undefined) ?? "media",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./.storybook/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  safelist: [
    {
      pattern:
        /(bg|border|text|stroke|fill)-(primary|secondary|tertiary|error|success|warning|info|typography|outline|background|indicator)-(0|50|100|200|300|400|500|600|700|800|900|950|white|gray|black|error|warning|muted|success|info|light|dark|primary)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard-Medium", "Roboto", "sans-serif"],
        sans: ["Pretendard-Medium", "Roboto", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    heroui(),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".pretendard-thin": {
          "font-family": "Pretendard-Thin, Roboto, sans-serif",
          "font-weight": "100",
        },
        ".pretendard-extralight": {
          "font-family": "Pretendard-ExtraLight, Roboto, sans-serif",
          "font-weight": "200",
        },
        ".pretendard-light": {
          "font-family": "Pretendard-Light, Roboto, sans-serif",
          "font-weight": "300",
        },
        ".pretendard-regular": {
          "font-family": "Pretendard-Regular, Roboto, sans-serif",
          "font-weight": "400",
        },
        ".pretendard-medium": {
          "font-family": "Pretendard-Medium, Roboto, sans-serif",
          "font-weight": "500",
        },
        ".pretendard-semibold": {
          "font-family": "Pretendard-SemiBold, Roboto, sans-serif",
          "font-weight": "600",
        },
        ".pretendard-bold": {
          "font-family": "Pretendard-Bold, Roboto, sans-serif",
          "font-weight": "700",
        },
        ".pretendard-extrabold": {
          "font-family": "Pretendard-ExtraBold, Roboto, sans-serif",
          "font-weight": "800",
        },
        ".pretendard-black": {
          "font-family": "Pretendard-Black, Roboto, sans-serif",
          "font-weight": "900",
        },
      });
    }),
  ],
} satisfies Config;
