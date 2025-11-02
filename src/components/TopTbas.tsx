import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";
import { Color } from "react-native/types_generated/Libraries/Animated/AnimatedExports";

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
            <Text
              style={[
                styles.text,
                tabName === activeTab ? styles.active : styles.notActive,
              ]}
            >
              {tabName}
            </Text>
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
    padding: s(4),
    borderRadius: s(12),
    backgroundColor: "#F5F5F4",
    height: vs(40),
    alignItems: "center",
  },
  active: {
    backgroundColor: activeBg,
    color: activeColor,
    fontSize: s(14),
    fontWeight: "semibold",
  },
  notActive: {
    color: "#2C2016",
    fontSize: s(14),
    fontWeight: "semibold",
  },
  buttonContainer: {
    borderRadius: s(8),
    flex: 1,
    textAlign: "center",
    height: s(32),
    justifyContent: "center",
    alignItems: "center",
  },
});
