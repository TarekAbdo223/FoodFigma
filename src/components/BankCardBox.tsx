import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { CardIcon } from "../assets/Icons";

const BankCardBox = () => {
  return (
    <View style={styles.container}>
      <CardIcon style={styles.cardIcon} />
      <Text style={styles.bankText}>No master card added</Text>
      <Text style={styles.textDescription}>
        You can add a mastercard and save it for later
      </Text>
    </View>
  );
};

export default BankCardBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F8F9",
    // height: vs(257),
    borderRadius: 10,
    marginTop: vs(25),
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: vs(35),
    paddingHorizontal: s(30),
  },

  bankText: {
    fontSize: s(16),
    fontWeight: "bold",
    color: "#32343E",
    marginTop: s(17),
  },
  textDescription: {
    color: "#2D2D2D",
    fontSize: s(15),
    fontWeight: 400,
    marginTop: vs(6),
    textAlign: "center",
  },
});
