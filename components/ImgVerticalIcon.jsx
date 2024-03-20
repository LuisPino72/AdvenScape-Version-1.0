import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ImgVerticalIcon = ({ imageDimensionsId, propTop, propLeft }) => {
  const imgVerticalIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <Image
      style={[styles.imgverticalIcon, imgVerticalIconStyle]}
      contentFit="cover"
      source={imageDimensionsId}
    />
  );
};

const styles = StyleSheet.create({
  imgverticalIcon: {
    position: "absolute",
    top: 1688,
    left: 185,
    width: 164,
    height: 240,
    overflow: "hidden",
  },
});

export default ImgVerticalIcon;
