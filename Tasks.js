import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Search from "./components/Search";

export default function Tasks() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Search />
    </SafeAreaView>
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
