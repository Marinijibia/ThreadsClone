import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";
import "../../global.css";
import { AuthProvider } from "../providers/AuthProvider";


export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <AuthProvider>
        <Slot/>
      </AuthProvider>
    </ThemeProvider>
  );
}

