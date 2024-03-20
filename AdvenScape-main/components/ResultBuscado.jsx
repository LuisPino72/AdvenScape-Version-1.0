import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ResultBuscado = ({
  countryCode,
  venezuelaTag,
  postCountText,
  resultBuscadoPosition,
  resultBuscadoWidth,
}) => {
  const resultBuscadoStyle = useMemo(() => {
    return {
      ...getStyleValue("position", resultBuscadoPosition),
      ...getStyleValue("width", resultBuscadoWidth),
    };
  }, [resultBuscadoPosition, resultBuscadoWidth]);

  return (
    <View style={[styles.resultbuscado, resultBuscadoStyle]}>
      <View style={styles.imgbuscado}>
        <Image
          style={styles.imgbuscadoChild}
          contentFit="cover"
          source={countryCode}
        />
      </View>
      <View style={styles.textbuscado}>
        <Text style={[styles.venezuela, styles.mPostsFlexBox]}>
          {venezuelaTag}
        </Text>
        <Text style={[styles.mPosts, styles.mPostsFlexBox]}>
          {postCountText}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mPostsFlexBox: {
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  imgbuscadoChild: {
    width: 30,
    height: 30,
  },
  imgbuscado: {
    flexDirection: "row",
  },
  venezuela: {
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    height: 46,
  },
  mPosts: {
    fontSize: FontSize.size_3xs,
    color: Color.colorGainsboro_200,
    height: 12,
  },
  textbuscado: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  resultbuscado: {
    backgroundColor: Color.colorWhite,
    width: 359,
    height: 56,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default ResultBuscado;
