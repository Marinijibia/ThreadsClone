import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";



const HomeTabsLayout = () => {
    return (
        <Tabs screenOptions={{
            // headerShown: false,
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#888",
            tabBarShowLabel: false,
        }}>
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: "Feed",
                    tabBarIcon: ({ size, color }) => <Feather name="home" size={size} color={color} />
                }}
            />
            <Tabs.Screen 
                name="search" 
                options={{ 
                    title: "Search",
                    tabBarIcon: ({ size, color }) => <Feather name="search" size={size} color={color} /> 
                }} 
            />
            {/* <Tabs.Screen 
                name="new" 
                options={{ 
                    title: "New Threads",
                    tabBarIcon: ({ size, color }) => <Feather name="plus" size={size} color={color} /> 
                }} 
            /> */}
            <Tabs.Screen 
                name="notifications" 
                options={{ 
                    title: "Notifications",
                    tabBarIcon: ({ size, color }) => <Feather name="heart" size={size} color={color} /> 
                }} 
            />
            <Tabs.Screen 
                name="profile" 
                options={{ 
                    title: "Profile",
                    tabBarIcon: ({ size, color }) => <Feather name="user" size={size} color={color} />
                }} 
            />
        </Tabs>
    )
}

export default HomeTabsLayout; 