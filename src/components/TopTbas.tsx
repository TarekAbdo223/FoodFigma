import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const tabsArr = ["Live", "Recorded"];
const activeColor = "#FFFFFF";
const activeBg = "#75563B";

const TopTbas = () => {
  const [activeTab, setActiveTab] = useState("Live");

  return (
    <View style={styles.container}>
      {tabsArr.map((tabName) => {
        return (
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              tabName === activeTab ? styles.active : "",
            ]}
            onPress={() => setActiveTab(tabName)}
          >
            <Text>{tabName}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopTbas;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 4,
    borderRadius: 12,
    backgroundColor: "#F5F5F4",
    height: 40,
  },
  active: {
    backgroundColor: activeBg,
    color: activeColor,
  },
  buttonContainer: { borderRadius: 8 },
});
