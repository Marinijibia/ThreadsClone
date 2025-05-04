import PostListItem from "@/src/components/PostListItem";
import { Link } from "expo-router";
import { FlatList, Text } from "react-native";
import { posts } from "../../../data";



const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) =><PostListItem post={item} />}
      ListHeaderComponent={() => (
        <Link href="/create" >
          <Text style={{ color: "white", fontSize: 16 }}>Create New Post</Text>
        </Link>
      )
      }
    />
  );
};

export default HomeScreen;
