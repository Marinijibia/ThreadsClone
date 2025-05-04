import PostListItem from "@/src/components/PostListItem";
import { FlatList } from "react-native";
import { posts } from "../../data";



const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) =><PostListItem post={item} />}
    />
  );
};

export default HomeScreen;
