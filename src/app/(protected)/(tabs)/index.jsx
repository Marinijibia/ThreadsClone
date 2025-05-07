import PostListItem from "@/src/components/PostListItem";
import { supabase } from "@/src/lib/superbase";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";


const HomeScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect( () => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*, user:profiles(*)")
        .order("created_at", { ascending: false });
      if (error) {
        console.error("Error fetching posts: ", error.message);
      }
      if (data) {
        setPosts(data);
      };
    }
    fetchPosts();
  }
  , []);

  console.log(JSON.stringify(posts, null, 2));

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