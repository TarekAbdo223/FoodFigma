import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SendButton from "./SendButton";
import SocialCircle from "./SocialCircle";
import { s, vs } from "react-native-size-matters";

const SocialScreen = () => {
  return (
    <View style={styles.container}>
      <SocialCircle />
      <Text style={styles.text}>WhatsApp</Text>
      <SendButton />
    </View>
  );
};

export default SocialScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: vs(16),
    borderBottomWidth: 1,
    borderBottomColor: "#E4E6E8",
  },
  text: {
    flex: 1,
    marginStart: s(14),
    color: "#8083A3",
    fontSize: s(12),
  },
});
