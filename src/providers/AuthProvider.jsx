import { supabase } from "@/src/lib/superbase";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

// 1. Create the AuthContext and AuthContextType
const AuthContext = createContext(null);

// 2. AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store the user object
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Boolean for authentication status
  const [isLoading, setIsLoading] = useState(true); 


  useEffect(() => {
    // Fetch the current session on mount
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
        setIsAuthenticated(true);
      }
      setIsLoading(false)
    };

    fetchSession();

    // Listen for session changes (login/logout)
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setUser(session.user);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      }
    );

    // Cleanup subscription on unmount
    return () => {
      subscription?.unsubscribe();
    };
  }, []);


  if (isLoading) {
    return (
        <View className="flex-1 justify-center items-center bg-neutral-900 p-6">
            <ActivityIndicator size="large" color="#ffffff" />
        </View>
    ); 
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. useAuth Hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};