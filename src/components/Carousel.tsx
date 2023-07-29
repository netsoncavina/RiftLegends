import Carousel from "react-native-snap-carousel";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import ChampionCard from "./ChampionCard";

const SLIDER_WIDTH =
  Dimensions.get("window").width - Dimensions.get("window").width / 2;
const ITEM_WIDTH = 200;

type Props = {
  item: any;
  index: number;
};

function carouselCard({ item, index }: Props) {
  return (
    <TouchableOpacity onPress={() => {}}>
      <ChampionCard
        id={item.id}
        name={item.name}
        title={item.title}
        imageUri={item.imageUri}
      />
    </TouchableOpacity>
  );
}

const CarouselComponent = ({ data }: any) => {
  return (
    <Carousel
      data={data}
      renderItem={carouselCard as any}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
    />
  );
};

export default CarouselComponent;
