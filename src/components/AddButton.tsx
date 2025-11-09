import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";

const AddButton = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={s(20)} color="#FF7622" />
      <Text
        style={{
          color: "#FF7622",
          fontSize: s(14),
          fontWeight: 700,
          marginStart: s(10),
        }}
      >
        ADD NEW
      </Text>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(15),
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: vs(23),
    borderWidth: s(2),
    borderRadius: s(10),
    borderColor: "#F0F5FA",
    flexDirection: "row",
  },
});
