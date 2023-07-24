import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { Feather } from "@expo/vector-icons";

const SettingsMenu = () => {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return (
    <Menu
      visible={visible}
      anchor={
        <Feather
          name="settings"
          size={30}
          color="#C89B3C"
          onPress={() => setVisible(true)}
        />
      }
      onRequestClose={hideMenu}
    >
      <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
      <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
      <MenuItem disabled>Disabled item</MenuItem>
      <MenuDivider />
      <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
    </Menu>
  );
};

export default SettingsMenu;

const styles = StyleSheet.create({});
