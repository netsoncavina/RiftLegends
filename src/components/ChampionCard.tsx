import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

interface ChampionCardProps {
  name: string;
  title: string;
  imageUri: string;
}

const ChampionCard = ({ name, title, imageUri }: ChampionCardProps) => {
  return (
    <TouchableOpacity>
      <View>
        <Image
          source={{
            uri: imageUri,
          }}
          style={styles.image}
        />
        <View style={styles.container}>
          <Text style={styles.textName} numberOfLines={2}>
            {name}
          </Text>
          <Text style={styles.textTitle}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChampionCard;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 300,
    borderRadius: 10,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.8)",
    position: "absolute",
    bottom: 0,
    width: 150,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  textTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
  },
});
