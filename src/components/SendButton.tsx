import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import { SendIcon } from "../assets/Icons";

const SendButton = () => {
  return (
    <View style={styles.circle}>
      <SendIcon />
    </View>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  circle: {
    width: s(46),
    height: s(46),
    borderRadius: s(23),
    backgroundColor: "#1077AF",
    justifyContent: "center",
    alignItems: "center",
  },
});
