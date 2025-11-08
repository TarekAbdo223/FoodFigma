import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  CashIcon,
  MasterCardIcon,
  PaypalIcon,
  VisaIcon,
} from "../assets/Icons";
import PaymentMethod from "./PaymentMethod";
import { s, vs } from "react-native-size-matters";

const PaymentData = [
  { label: "Cash", icon: <CashIcon /> },
  { label: "Visa", icon: <VisaIcon /> },
  { label: "Master Card", icon: <MasterCardIcon /> },
  { label: "Paypal", icon: <PaypalIcon /> },
];

const PaymentList = () => {
  const [selectedMethod, setSelectedMethod] = useState("Cash");

  return (
    <View>
      <FlatList
        data={PaymentData}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <PaymentMethod
            title={item.label}
            icon={item.icon}
            onPress={() => setSelectedMethod(item.label)}
            isSelected={selectedMethod === item.label}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
          gap: s(16),
          paddingHorizontal: s(16),
          paddingTop: vs(15),
        }}
      />
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});
