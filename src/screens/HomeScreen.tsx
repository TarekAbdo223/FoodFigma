import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TopTbas from "../components/TopTbas";
import MeditationCards from "../components/MeditationCards";
import { dummyData } from "../data/data";

const HomeScreen = () => {
  return (
    <View
      style={{
        paddingTop: vs(50),
        paddingHorizontal: s(14),
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
      {/* <MeditationCards /> */}
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MeditationCards />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom: vs(12),
          justifyContent: "space-between",
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
