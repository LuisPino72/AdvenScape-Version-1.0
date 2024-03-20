import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ImgHorizontalIcon = ({ dimensionId, propTop, propLeft }) => {
  const imgHorizontalIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <Image
      style={[styles.imghorizontalIcon, imgHorizontalIconStyle]}
      contentFit="cover"
      source={dimensionId}
    />
  );
};

const styles = StyleSheet.create({
  imghorizontalIcon: {
    position: "absolute",
    top: 1688,
    left: 0,
    width: 185,
    height: 182,
    overflow: "hidden",
  },
});

export default ImgHorizontalIcon;
