/* eslint-disable @typescript-eslint/no-require-imports */
import { heroui } from "@heroui/theme";
import { type Config } from "tailwindcss";
import { type DarkModeConfig } from "tailwindcss/types/config";

export default {
  darkMode: (process.env.DARK_MODE as DarkModeConfig | undefined) ?? "media",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./storybook/**/*.{js,jsx,ts,tsx}"],
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
        pretendard: ["Pretendard-Medium", "Pretendard", "Roboto", "sans-serif"],
        sans: ["Pretendard", "Roboto", "sans-serif"],
        heading: ["Pretendard", "Roboto", "sans-serif"],
        body: ["Pretendard", "Roboto", "sans-serif"],
        mono: ["Pretendard", "Roboto", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
