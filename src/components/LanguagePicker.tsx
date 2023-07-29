import React from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import CountryFlag from "react-native-country-flag";

interface LanguagePickerProps {
  isoCode: string;
  languageCode: string;
  language: string;
}

const LanguagePicker = ({
  isoCode,
  languageCode,
  language,
}: LanguagePickerProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("LanguagePicker");
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
