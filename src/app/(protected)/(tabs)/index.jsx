import PostListItem from "@/src/components/PostListItem";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { posts } from "../../../data";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-neutral-900">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostListItem post={item} />}
        ListHeaderComponent={() => (
          <View className="p-4">
            <Link href="/create">
              <Text className="text-blue-400 text-lg mb-2">Create New Post</Text>
            </Link>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;