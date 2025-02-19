/* eslint-disable @typescript-eslint/no-require-imports */
import { heroui } from "@heroui/theme";
import { type Config } from "tailwindcss";
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
        // Korean
        "pretendard-thin": ["PretendardJP-Thin"],
        "pretendard-extralight": ["PretendardJP-ExtraLight"],
        "pretendard-light": ["PretendardJP-Light"],
        "pretendard-regular": ["PretendardJP-Regular"],
        "pretendard-medium": ["PretendardJP-Medium"],
        "pretendard-semibold": ["PretendardJP-SemiBold"],
        "pretendard-bold": ["PretendardJP-Bold"],
        "pretendard-extrabold": ["PretendardJP-ExtraBold"],
        "pretendard-black": ["PretendardJP-Black"],

        // TODO
        // Japanese
        // "zen-old-mincho-regular": [
        //   "ZenOldMincho-Regular",
        //   "PretendardJP-Regular",
        //   "Roboto",
        //   "sans-serif",
        // ],
        // "zen-old-mincho-medium": [
        //   "ZenOldMincho-Medium",
        //   "PrentendardJP-Medium",
        //   "Roboto",
        //   "sans-serif",
        // ],
        // "zen-old-mincho-semibold": [
        //   "ZenOldMincho-SemiBold",
        //   "PretendardJP-SemiBold",
        //   "Roboto",
        //   "sans-serif",
        // ],
        // "zen-old-mincho-bold": [
        //   "ZenOldMincho-Bold",
        //   "PretendardJP-Bold",
        //   "Roboto",
        //   "sans-serif",
        // ],
        // "zen-old-mincho-black": [
        //   "ZenOldMincho-Black",
        //   "PretendardJP-Black",
        //   "Roboto",
        //   "sans-serif",
        // ],
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
