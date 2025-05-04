import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { posts, users } from "../../../data"; // Import posts and users data

const Profile = () => {
  const user = users[0]; // Example: Display the first user as the profile owner
  const userPosts = posts.filter((post) => post.user_id === user.id); // Filter posts by user

  return (
    <View className="flex-1 bg-white">
      {/* Profile Header */}
      <View className="p-4 bg-gray-100 border-b border-gray-300">
        <Image
          source={{ uri: user.image }}
          className="w-24 h-24 rounded-full self-center mb-4"
        />
        <Text className="text-2xl font-bold text-center">{user.name}</Text>
        <Text className="text-gray-500 text-center">@{user.username}</Text>
        <Text className="text-gray-700 text-center mt-2">{user.bio}</Text>
      </View>

      {/* User's Posts */}
      <FlatList
        data={userPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row p-4 border-b border-gray-200">
            {/* User Profile Image */}
            <Image
              source={{ uri: user.image }}
              className="w-12 h-12 rounded-full mr-4"
            />
            {/* Post Content */}
            <View className="flex-1">
              <Text className="text-gray-800">{item.content}</Text>
              <Text className="text-gray-400 text-sm mt-2">
                {new Date(item.createdAt).toLocaleString()}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Profile;