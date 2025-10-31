import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SendIcon } from "../assets/Icons";
import { s } from "react-native-size-matters";

const SocialCircle = () => {
  return <View style={styles.circle}></View>;
};

export default SocialCircle;

const styles = StyleSheet.create({
  circle: {
    width: s(46),
    height: s(46),
    borderRadius: s(23),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E4E6E8",
  },
});
