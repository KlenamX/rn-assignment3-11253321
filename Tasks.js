import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Search from "./components/Search";
import Categories from "./components/Categories";

export default function Tasks() {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <Categories />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(247, 240, 232, 1)",
    // marginTop: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
