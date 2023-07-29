import React from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
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
      <StatusBar barStyle="light-content" backgroundColor="#1F1F1F" />
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

const styles = StyleSheet.create({});
