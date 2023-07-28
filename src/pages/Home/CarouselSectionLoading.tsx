import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Skeleton } from "@rneui/themed";

const CarouselSectionLoading = () => {
  return (
    <View style={styles.loadingContainer}>
      <Skeleton
        animation="wave"
        width={170}
        height={30}
        style={styles.titleLoading}
      />
      <View style={styles.loadingCardsContainer}>
        <Skeleton
          animation="wave"
          width={170}
          height={300}
          style={styles.loadingCard}
        />
        <Skeleton
          animation="wave"
          width={170}
          height={270}
          style={styles.loadingCard}
        />
      </View>
    </View>
  );
};

export default CarouselSectionLoading;

const styles = StyleSheet.create({
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    margin: 10,
  },
  titleLoading: {
    borderRadius: 10,
    marginBottom: 10,
  },
  loadingCardsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loadingCard: {
    borderRadius: 10,
  },
});
