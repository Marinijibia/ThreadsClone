import { Slot } from "expo-router";

import { DarkTheme, ThemeProvider } from "@react-navigation/native";

const adjustTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#ffffff",
  },
}
export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Slot />
    </ThemeProvider>
  );
}
