import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";

const UserAvatar = () => {
  return (
    <View>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://www.shutterstock.com/image-vector/june-7-2024-batman-illustration-600nw-2481357159.jpg",
        }}
      />
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  avatar: {
    width: s(32),
    height: s(32),
    borderRadius: s(16),
  },
});
