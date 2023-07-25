import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Feather } from "@expo/vector-icons";
import SettingsMenu from "./SettingsMenu";

const Appbar = () => {
  const [loaded] = useFonts({
    "League of Legends": require("../assets/fonts/Friz Quadrata Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Feather
        name="menu"
        size={30}
        color="#C89B3C"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Text style={styles.text}>Rift Legends</Text>
      <SettingsMenu />
    </View>
  );
};

export default Appbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#001A6C",
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: "League of Legends",
    color: "#C89B3C",
    fontSize: 30,
  },
});