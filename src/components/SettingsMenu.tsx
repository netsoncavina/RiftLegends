import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { Feather } from "@expo/vector-icons";
import LanguageModal from "./LanguageModal";

const SettingsMenu = () => {
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const [languageModalVisible, setLanguageModalVisible] = useState(false);

  return (
    <>
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
        style={{
          backgroundColor: "#1F1F1F",
          width: 200,
        }}
      >
        <MenuItem
          onPress={() => {
            setLanguageModalVisible(true);
            hideMenu();
          }}
          style={{
            width: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          textStyle={{
            color: "#C89B3C",
          }}
        >
          Selecionar idioma
        </MenuItem>
      </Menu>

      <LanguageModal
        visible={languageModalVisible}
        setVisible={setLanguageModalVisible}
      />
    </>
  );
};

export default SettingsMenu;

const styles = StyleSheet.create({});
