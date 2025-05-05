import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";
import "../../global.css";


export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Slot/>
    </ThemeProvider>
  );
}

