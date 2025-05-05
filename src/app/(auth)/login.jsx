import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { Link } from 'expo-router';
import React, { useState } from "react";
import { ActivityIndicator, Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from "../../../assets/images/react-logo.png"; // Adjust the path based on your project structure

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State for loading
  const navigation = useNavigation(); // Initialize navigation

  const handleLogin = async () => {
    if (email && password) {
      setLoading(true); // Start loading
      try {
        // Simulate an API call with a timeout
        await new Promise((resolve) => setTimeout(resolve, 2000));
        Alert.alert("Login Successful", `Welcome back, ${email}!`);
        navigation.navigate("Home"); // Navigate to the home screen or dashboard
      } catch (error) {
        Alert.alert("Error", "Something went wrong. Please try again.");
      } finally {
        setLoading(false); // Stop loading
      }
    } else {
      Alert.alert("Error", "Please enter both email and password.");
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-neutral-900 p-6">
      {/* Logo */}
      <Image
        source={logo} // Use the imported local image
        style={{ width: 100, height: 100, marginBottom: 20 }}
      />
      {/* Welcome Text */}
      <Text className="text-white text-4xl font-bold mb-6">Welcome Back</Text>
      {/* Email Input */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#9CA3AF" // Light gray for placeholder text
        className="w-full border-b border-gray-700 py-2 mb-4 text-lg text-white"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      {/* Password Input */}
      <TextInput
        placeholder="Password"
        placeholderTextColor="#9CA3AF"
        className="w-full border-b border-gray-700 py-2 mb-4 text-lg text-white"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <Link href={"/forgot-password"} asChild>
        <TouchableOpacity className="self-end mb-6">
            <Text className="text-blue-400">Forgot Password?</Text>
        </TouchableOpacity>
      </Link>

      {/* Login Button */}
      <TouchableOpacity
        className={`w-full py-3 rounded-full mb-4 ${loading ? "bg-gray-400" : "bg-white"}`}
        onPress={handleLogin}
        disabled={loading} // Disable button while loading
      >
        {loading ? (
          <ActivityIndicator color="black" /> // Show loading spinner
        ) : (
          <Text className="text-black text-center text-lg font-bold">Sign in</Text>
        )}
      </TouchableOpacity>

      <View className="flex-row justify-center">
        <Text className="text-gray-400">Don&apos;t have an account? </Text>
        <Link href={"/signup"} asChild>
            <TouchableOpacity>
                <Text className="text-blue-400">Create one</Text>
            </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default LoginScreen;