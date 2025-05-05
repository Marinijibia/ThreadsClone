import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { Link } from 'expo-router';
import React, { useState } from "react";
import { ActivityIndicator, Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from "../../../assets/images/react-logo.png"; // Adjust the path based on your project structure

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password
  const [loading, setLoading] = useState(false); // State for loading
  const navigation = useNavigation(); // Initialize navigation

  const handleSignup = async () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        setLoading(true); // Start loading
        try {
          // Simulate an API call with a timeout
          await new Promise((resolve) => setTimeout(resolve, 2000));
          Alert.alert("Signup Successful", `Welcome, ${email}!`);
          navigation.navigate("Home"); // Navigate to the home screen or dashboard
        } catch (error) {
          Alert.alert("Error", "Something went wrong. Please try again.");
        } finally {
          setLoading(false); // Stop loading
        }
      } else {
        Alert.alert("Error", "Passwords do not match.");
      }
    } else {
      Alert.alert("Error", "Please fill in all fields.");
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
      <Text className="text-white text-4xl font-bold mb-6">Create Account</Text>
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
      {/* Confirm Password Input */}
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="#9CA3AF"
        className="w-full border-b border-gray-700 py-2 mb-4 text-lg text-white"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {/* Signup Button */}
      <TouchableOpacity
        className={`w-full py-3 rounded-full mb-4 ${loading ? "bg-gray-400" : "bg-white"}`}
        onPress={handleSignup}
        disabled={loading} // Disable button while loading
      >
        {loading ? (
          <ActivityIndicator color="black" /> // Show loading spinner
        ) : (
          <Text className="text-black text-center text-lg font-bold">Sign Up</Text>
        )}
      </TouchableOpacity>
      {/* Login Link */}
      <View className="flex-row justify-center">
        <Text className="text-gray-400">Already have an account? </Text>
        <Link href={"/login"} asChild>
          <TouchableOpacity>
            <Text className="text-blue-400">Log In</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default SignupScreen;