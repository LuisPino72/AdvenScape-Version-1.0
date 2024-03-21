import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const ImgHorizontalIcon = ({ dimensionsCode }) => {
  return (
    <Image
      style={styles.imghorizontalIcon}
      contentFit="cover"
      source={dimensionsCode}
    />
  );
};

const styles = StyleSheet.create({
  imghorizontalIcon: {
    width: 340,
    height: 160,
    overflow: "hidden",
  },
});

export default ImgHorizontalIcon;
