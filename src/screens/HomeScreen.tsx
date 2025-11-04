import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TopTbas from "../components/TopTbas";
import MeditationCards from "../components/MeditationCards";

const HomeScreen = () => {
  return (
    <View
      style={{
        paddingTop: vs(50),
        paddingHorizontal: s(16),
      }}
    >
      <Text
        style={{
          color: "#1D150F",
          fontSize: s(20),
          fontWeight: "semibold",
          marginBottom: vs(6),
        }}
      >
        Meditation
      </Text>
      <Text
        style={{
          color: "#2C2016",
          marginBottom: vs(16),
          fontSize: s(14),
        }}
      >
        Lorem Ipsum is simply dummy text
      </Text>
      <TopTbas />
      <MeditationCards />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
