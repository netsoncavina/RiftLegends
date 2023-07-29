import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Feather } from "@expo/vector-icons";
import SettingsMenu from "./SettingsMenu";

interface AppbarProps {
  language: string;
  setLanguage: React.SetStateAction<any>;
}

const Appbar = ({ language, setLanguage }: AppbarProps) => {
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
      <SettingsMenu language={language} setLanguage={setLanguage} />
    </View>
  );
};

export default Appbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // backgroundColor: "#001A6C",
    backgroundColor: "#1F1F1F",
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomColor: "#C89B3C",
    borderBottomWidth: 1,
  },
  text: {
    fontFamily: "League of Legends",
    color: "#C89B3C",
    fontSize: 30,
  },
});
