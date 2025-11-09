import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import PaymentMethod from "../components/PaymentMethod";
import PaymentList from "../components/PaymentList";
import BankCardBox from "../components/BankCardBox";
import AddButton from "../components/AddButton";

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: vs(37),
          paddingHorizontal: s(16),
        }}
      >
        <BackButton />
        <Text style={styles.paymentText}>Payment</Text>
      </View>
      <PaymentList />
      <View style={{ paddingHorizontal: 24 }}>
        <BankCardBox />
        <AddButton />
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: vs(50),
  },

  paymentText: {
    color: "#181C2E",
    fontSize: s(17),
    marginStart: s(18),
  },
});
