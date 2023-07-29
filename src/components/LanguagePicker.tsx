import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CountryFlag from "react-native-country-flag";

interface LanguagePickerProps {
  isoCode: string;
  languageCode: string;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<any>>;
}

const LanguagePicker = ({
  isoCode,
  languageCode,
  language,
  setLanguage,
}: LanguagePickerProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setLanguage(languageCode);
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: 100,
          marginTop: 10,
        }}
      >
        <View
          style={{
            display: "flex",

            marginRight: 10,
          }}
        >
          <CountryFlag isoCode={isoCode} size={20} />
        </View>
        <Text style={{ color: "#C89B3C", alignSelf: "flex-end" }}>
          {language}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LanguagePicker;

const styles = StyleSheet.create({});
