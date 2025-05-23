import { useAuth } from "@/src/providers/AuthProvider";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {

  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return (
      <Redirect href={"/login"} />
    );
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen 
        name="create" 
        options={{ 
          presentation: "modal",
          animation: "slide_from_bottom",
          headerShown: true,
          title: "New Threads",
          headerTitleAlign: "center"
        }} 
      />
    </Stack>
  );
}
