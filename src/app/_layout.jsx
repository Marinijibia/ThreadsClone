import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";
import "../../global.css";

// const adjustTheme = {
//   ...DarkTheme,
//   colors: {
//     ...DarkTheme.colors,
//     primary: "#ffffff",
//     card : "#101010",
//   },
// }
export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Slot />
    </ThemeProvider>
  );
}
