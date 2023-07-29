import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LanguagePicker from "./LanguagePicker";

interface ModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setLanguage: React.Dispatch<React.SetStateAction<any>>;
}

const LanguageModal = ({ visible, setVisible, setLanguage }: ModalProps) => {
  const languages = [
    {
      isoCode: "br",
      languageCode: "pt_BR",
      name: "Português",
    },
    {
      isoCode: "us",
      languageCode: "en_US",
      name: "English",
    },
    {
      isoCode: "es",
      languageCode: "es_ES",
      name: "Español",
    },
    {
      isoCode: "fr",
      languageCode: "fr_FR",
      name: "Français",
    },

    {
      isoCode: "de",
      languageCode: "de_DE",
      name: "Deutsch",
    },
    {
      isoCode: "it",
      languageCode: "it_IT",
      name: "Italiano",
    },
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}
    >
      <View
        style={styles.centeredView}
        onTouchEnd={() => {
          setVisible(!visible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={{ color: "#C89B3C" }}>Selecione o idioma</Text>
          <ScrollView
            style={{
              width: "100%",
              height: "100%",
              marginTop: 10,
            }}
            contentContainerStyle={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {languages.map((language) => (
              <LanguagePicker
                key={language.isoCode}
                isoCode={language.isoCode}
                languageCode={language.languageCode}
                language={language.name}
                setLanguage={setLanguage}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default LanguageModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalView: {
    margin: 10,
    backgroundColor: "#1F1F1F",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    width: 300,
    height: 180,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    elevation: 5,
  },
});
