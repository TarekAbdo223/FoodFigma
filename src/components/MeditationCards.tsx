import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { VideoIcon } from "../assets/Icons";

const phoneWidth = Dimensions.get("window").width;
console.log(phoneWidth);
const cardWidth = (phoneWidth - s(14) * 3) / 2;

interface MeditationCardProps {
  imageURL: string;
  title: string;
  date: string;
}

const MeditationCards = ({ imageURL, title, date }: MeditationCardProps) => {
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={{
        uri: imageURL,
      }}
      imageStyle={styles.image}
    >
      <View style={styles.overLay}></View>
      <View style={styles.liveBadge}>
        <Text style={styles.liveText}>Live</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.dateContainer}>
          <VideoIcon />
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MeditationCards;

const styles = StyleSheet.create({
  imageContainer: {
    width: cardWidth,
    height: vs(141),
    borderRadius: s(12),
    overflow: "hidden",
  },
  image: { opacity: 0.7, width: "100%", height: "100%", resizeMode: "cover" },
  cardContent: {
    position: "absolute",
    bottom: s(10),
    left: s(10),
  },
  title: {
    color: "#fff",
    fontWeight: "semibold",
    fontSize: s(12),
  },
  overLay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: s(3),
  },
  dateText: {
    marginStart: s(7),
    fontSize: s(12),
    color: "#fff",
  },
  liveBadge: {
    backgroundColor: "#E41111",
    width: s(39),
    height: s(22),
    borderRadius: s(90),
    top: s(7),
    right: s(10),
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  liveText: {
    fontWeight: "semibold",
    color: "#fff",
    fontSize: 11,
  },
});
