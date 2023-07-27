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
            uri:
              name === "Ahri"
                ? "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ahri/skins/base/ahriloadscreen_0.skins_ahri_asu_prepro.jpg"
                : `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${name
                    .toLowerCase()
                    .replace(/\s+/g, "")}/skins/base/${name
                    .toLowerCase()
                    .replace(/\s+/g, "")}loadscreen.jpg`,
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
    width: 170,
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
    width: 170,
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
