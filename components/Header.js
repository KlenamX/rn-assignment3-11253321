import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Hello , Devs</Text>
          <Text style={styles.headerText2}>14 tasks Today</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profile}
            source={require("../assets/gogo.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 30,
    marginTop: 45,
  },
  textContainer: {
    // backgroundColor: "blue",
    height: 52,
    width: 170,
  },

  headerText: {
    // fontFamily: "Lato",
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 38.4,
    textAlign: "left",
  },

  headerText2: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 14.6,
  },
  profileContainer: {
    height: 46,
    width: 46,
    backgroundColor: "#fff",
    borderRadius: 23,
  },

  profile: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});
