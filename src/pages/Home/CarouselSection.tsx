import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Carousel from "../../components/Carousel";
import {
  NoxusChampions,
  DemaciaChampions,
  IoniaChampions,
} from "../../utils/regions";

interface Champion {
  name: string;
  title: string;
  imageUri: string;
}

interface CarouselSectionProps {
  regionName: string;
  champions: Champion[];
}

const getChampionsByRegion = (champions: Champion[], regionName: string) => {
  let championsByRegion: Champion[] = [];

  if (regionName === "Noxus") {
    championsByRegion = champions.filter((champion: Champion) => {
      return NoxusChampions.includes(champion.name);
    });
  }

  if (regionName === "Demacia") {
    championsByRegion = champions.filter((champion: Champion) => {
      return DemaciaChampions.includes(champion.name);
    });
  }

  if (regionName === "Ionia") {
    championsByRegion = champions.filter((champion: Champion) => {
      return IoniaChampions.includes(champion.name);
    });
  }
  return championsByRegion;
};

const CarouselSection = ({ regionName, champions }: CarouselSectionProps) => {
  return (
    <View>
      <Text
        style={{
          color: "#C89B3C",
          fontSize: 30,
          fontFamily: "League of Legends",
        }}
      >
        {regionName}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          margin: 10,
        }}
      >
        <Carousel data={getChampionsByRegion(champions, regionName)} />
      </View>
    </View>
  );
};

export default CarouselSection;

const styles = StyleSheet.create({});
