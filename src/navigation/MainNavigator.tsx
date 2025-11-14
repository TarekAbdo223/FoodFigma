import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import HomeScreen from "../screens/HomeScreen";
import ContactUs from "../screens/ContactUs";
import PaymentScreen from "../screens/PaymentScreen";
import IntroScreen from "../screens/IntroScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Intro" component={IntroScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
