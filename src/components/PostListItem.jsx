import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
dayjs.extend(relativeTime); 

const PostListItem = ({ post }) => {
  return (
    <View className="flex-row p-4 border-b bg-neutral-900 " style={{gap : 10, borderBottomWidth: 1}}>
      <View className="mr-3">
        <Image
          source={{ uri: post.user.image }}
          style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "#eee" }}
          onError={(e) => console.log("Image load error", e.nativeEvent.error)}
        />
      </View>

      <View className="flex-1 ml-3">
        <View className="flex-row items-center " style={{gap : 10}}>
          <Text className="font-bold mr-2" style={{color: "white"}}>{post.user.username}</Text>
          <Text className="text-gray-500">{dayjs(post.createdAt).fromNow()}</Text>
        </View>
        <Text style={{color: "white"}}>{post.content}</Text>
        {/* Post Actions */}
        <View style={{ flexDirection: 'row', justifyContent: 'start', marginTop: 8, gap: 16 }}>
          <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="heart-outline" size={20} color="#d1d5db" />
            <Text style={{ color: '#d1d5db', marginLeft: 4 }}>{post.replies.length}</Text>
          </Pressable>

          <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="chatbubble-outline" size={20} color="#d1d5db" />
            <Text style={{ color: '#d1d5db', marginLeft: 4 }}>{post.replies.length}</Text>
          </Pressable>

          <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="repeat-outline" size={20} color="#d1d5db" />
            <Text style={{ color: '#d1d5db', marginLeft: 4 }}>{post.replies.length}</Text>
          </Pressable>

          <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="send-outline" size={20} color="#d1d5db" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PostListItem;