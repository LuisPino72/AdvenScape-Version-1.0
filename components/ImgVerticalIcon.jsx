import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const ImgVerticalIcon = ({ dimensionsCode }) => {
  return (
    <Image
      style={styles.imgverticalIcon}
      contentFit="cover"
      source={dimensionsCode}
    />
  );
};

const styles = StyleSheet.create({
  imgverticalIcon: {
    width: 340,
    height: 160,
    overflow: "hidden",
  },
});

export default ImgVerticalIcon;
