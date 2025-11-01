import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SendButton from "./SendButton";
import SocialCircle from "./SocialCircle";
import { s, vs } from "react-native-size-matters";

const SocialScreen = ({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) => {
  return (
    <View style={styles.container}>
      {/* <SocialCircle /> */}
      <View style={styles.circle}>{icon}</View>
      <Text style={styles.text}>{text}</Text>
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
