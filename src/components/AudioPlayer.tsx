import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";
import { Slider } from "@react-native-assets/slider";
import { FontAwesome, Foundation } from "@expo/vector-icons";

interface AudioPlayerProps {
  uri: string;
}

const AudioPlayer = ({ uri }: AudioPlayerProps) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  async function playSound() {
    // console.log("Loading Sound");

    const { sound } = await Audio.Sound.createAsync(
      {
        uri: uri,
      },
      {
        shouldPlay: true,
        isLooping: true,
        progressUpdateIntervalMillis: 100,
        positionMillis: 0,
        volume: 1,
      }
    );

    sound.setOnPlaybackStatusUpdate((status) => {
      if (Number.isNaN(status) || !status.isLoaded) {
        // console.log("Error");
        return;
      }

      status.durationMillis === undefined ||
        setProgress(status.positionMillis / status.durationMillis);

      if (status.didJustFinish) {
        sound.stopAsync();
        setIsPlaying(false);
      }
    });

    setSound(sound);

    // console.log("Playing Sound");
    setIsPlaying(true);
    await sound.playAsync();
  }

  async function pauseSound() {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          //   console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      {isPlaying ? (
        <Foundation name="stop" size={24} color="black" onPress={pauseSound} />
      ) : (
        <FontAwesome name="play" size={24} color="black" onPress={playSound} />
      )}
      <Slider
        style={{ width: 200, paddingLeft: 15 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        value={progress}
        onValueChange={(value) => {
          sound && sound.setPositionAsync(value * 1000);
        }}
      />
    </View>
  );
};

export default AudioPlayer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
    borderRadius: 20,
    width: 250,
  },
});
