import { useAuth } from "@/src/providers/AuthProvider";
import { Redirect, Stack } from "expo-router";

const AuthLayout = () => {

  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href={"/(protected)/"} />;
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
          headerTitle: "Create Account",
        }}
      />
    </Stack>
  );
};

export default AuthLayout;