import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { CashIcon } from "../assets/Icons";
import { s, vs } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";

interface PayMethodCard {
  isSelected?: boolean;
  title: string;
  icon: ReactNode;
}

const PaymentMethod = ({ isSelected = false, title, icon }: PayMethodCard) => {
  return (
    <View style={{ width: s(85) }}>
      {isSelected && (
        <View style={styles.checkcontainer}>
          <Entypo name="check" size={s(14)} color="white" />
        </View>
      )}
      <View style={[styles.card, isSelected && styles.activeCard]}>
        <CashIcon />
      </View>
      <Text style={styles.label}>Cash</Text>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  card: {
    height: vs(72),
    width: s(85),
    borderRadius: s(10),
    backgroundColor: "#F0F5FA",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    textAlign: "center",
    fontSize: s(14),
    color: "#464E57",
    marginTop: vs(4),
  },
  activeCard: {
    borderColor: "#FF7622",
    borderWidth: s(2),
    backgroundColor: "#fff",
  },

  checkcontainer: {
    width: s(24),
    height: s(24),
    borderRadius: s(20),
    backgroundColor: "#FF7622",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: s(2),
    borderColor: "#fff",
    position: "absolute",
    top: s(-8),
    right: s(-8),
    zIndex: 1,
  },
});
