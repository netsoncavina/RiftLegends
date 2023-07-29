import React, { useState, useEffect } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Appbar from "../../components/Appbar";
import CarouselSection from "./CarouselSection";
import { getChampionsData } from "../../api/api";

interface Region {
  name: string;
}

interface HomeProps {
  language: string;
}

const Home = ({ language }: HomeProps) => {
  const [champions, setChampions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getChampionsData(language).then((champions) => {
      setChampions(champions as any);
      setIsLoading(false);
    });
  }, [language]);

  const regions = [
    {
      name: "Noxus",
    },
    {
      name: "Demacia",
    },
    {
      name: "Ionia",
    },
  ];

  return (
    <>
      <ScrollView style={styles.container}>
        {regions.map((region: Region) => {
          return (
            <CarouselSection
              key={region.name}
              regionName={region.name}
              champions={champions}
              isLoading={isLoading}
            />
          );
        })}
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",
  },
});
