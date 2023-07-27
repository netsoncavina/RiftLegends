import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import Home from "./src/pages/Home/Home";

export default function App() {
  const [load] = useFonts({
    "League of Legends": require("./src/assets/fonts/Friz Quadrata Regular.ttf"),
  });

  if (!load) {
    return null;
  }
  const Drawer = createDrawerNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "League of Legends",
    color: "#C89B3C",
    fontSize: 25,
    // fontWeight: "bold",
  },
});
