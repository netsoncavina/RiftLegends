import React, { useState } from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import Appbar from "./src/components/Appbar";
import Home from "./src/pages/Home/Home";

interface ILanguage {
  languageCode: string;
  setLanguage: React.Dispatch<React.SetStateAction<any>>;
}
export default function App() {
  const [language, setLanguage] = useState<ILanguage>("de_DE" as any);

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
        <Appbar language={language as any} setLanguage={setLanguage as any} />
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Drawer.Screen
            name="Home"
            children={() => <Home language={language as any} />}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
