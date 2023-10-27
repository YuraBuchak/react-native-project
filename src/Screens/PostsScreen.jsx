import { View, StyleSheet } from "react-native";
import { PostsList } from "../Components/PostList";

export const PostsScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <PostsList route={route} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#ffff",
  },
});
