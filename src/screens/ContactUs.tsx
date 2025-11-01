import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import SendButton from "../components/SendButton";
import SocialCircle from "../components/SocialCircle";
import SocialScreen from "../components/SocialScreen";

const ContactUs = () => {
  return (
    <View style={{ marginTop: vs(50), paddingHorizontal: s(17) }}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
      <Text style={styles.contactText}>Contact Us</Text>
      <View style={styles.socialContainer}>
        <Text style={styles.socialText}>Social Media Platforms</Text>
        <SocialScreen />
        <SocialScreen />
        <SocialScreen />
        <SocialScreen />
        <SocialScreen />
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialContainer: {
    backgroundColor: "#F5F5FA",
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: s(15),
    marginVertical: s(18),
  },
  socialText: {
    color: "#000000",
    fontWeight: "600",
    fontSize: s(16),
  },
  contactText: {
    fontWeight: "600",
    fontSize: s(30),
    marginStart: s(19),
    marginTop: s(20),
  },
});
