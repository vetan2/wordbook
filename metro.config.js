/* eslint-disable @typescript-eslint/no-require-imports */
// Learn more https://docs.expo.io/guides/customizing-metro

const path = require("path");

const withStorybook = require("@storybook/react-native/metro/withStorybook");
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {});

module.exports = withStorybook(
  withNativeWind(config, { input: "./src/app/global.css" }),
  {
    enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
    configPath: path.resolve(__dirname, "./.storybook"),
    onDisabledRemoveStorybook:
      process.env.EXPO_PUBLIC_STORYBOOK_ENABLED !== "true",
  },
);
