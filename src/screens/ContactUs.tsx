import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import SendButton from "../components/SendButton";
import SocialCircle from "../components/SocialCircle";
import SocialScreen from "../components/SocialScreen";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

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
        <SocialScreen
          text={"WhatsApp"}
          icon={<FontAwesome name="whatsapp" size={24} color="#178AD9" />}
        />
        <SocialScreen
          text="X"
          icon={<AntDesign name="x" size={24} color="#178AD9" />}
        />

        <SocialScreen
          text="Instagram"
          icon={<Entypo name="instagram" size={24} color="#178AD9" />}
        />
        <SocialScreen
          text="Snapchat"
          icon={<FontAwesome name="snapchat" size={28} color="#178AD9" />}
        />
        <SocialScreen
          text="TikTok"
          icon={<FontAwesome5 name="tiktok" size={24} color="#178AD9" />}
        />
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
