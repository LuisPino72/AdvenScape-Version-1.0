import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, ImageSourcePropType } from "react-native";
import { Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BarraInferior = ({
  ellipse4,
  vector,
  vector1,
  ellipse5,
  iconFavoritos,
  ellipse7,
  iconPublicar,
  ellipse71,
  iconBuscar,
  ellipse9,
  iconPofile,
  barraInferiorPosition,
  barraInferiorWidth,
  barraInferiorHeight,
  barraInferiorMarginLeft,
  barraInferiorBottom,
  barraInferiorLeft,
  iconPofileTop,
  iconPofileBottom,
  onIconHomePress,
  onIconFavPress,
  onIconPubPress,
  onIconBusPress,
  onIconProfPress,
}) => {
  const barraInferiorStyle = useMemo(() => {
    return {
      ...getStyleValue("position", barraInferiorPosition),
      ...getStyleValue("width", barraInferiorWidth),
      ...getStyleValue("height", barraInferiorHeight),
      ...getStyleValue("marginLeft", barraInferiorMarginLeft),
      ...getStyleValue("bottom", barraInferiorBottom),
      ...getStyleValue("left", barraInferiorLeft),
    };
  }, [
    barraInferiorPosition,
    barraInferiorWidth,
    barraInferiorHeight,
    barraInferiorMarginLeft,
    barraInferiorBottom,
    barraInferiorLeft,
  ]);

  const iconPofileStyle = useMemo(() => {
    return {
      ...getStyleValue("top", iconPofileTop),
      ...getStyleValue("bottom", iconPofileBottom),
    };
  }, [iconPofileTop, iconPofileBottom]);

  return (
    <View
      style={[
        styles.barrainferior,
        styles.iconhome1FlexBox,
        barraInferiorStyle,
      ]}
    >
      <Pressable style={styles.iconhome} onPress={onIconHomePress}>
        <View style={[styles.iconhome1, styles.iconhomeFlexBox]}>
          <Image
            style={[styles.iconhomeChild, styles.iconhomeChildLayout]}
            contentFit="cover"
            source={ellipse4}
          />
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIcon1Position]}
            contentFit="cover"
            source={vector}
          />
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={vector1}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.iconfav, styles.iconfavSpaceBlock]}
        onPress={onIconFavPress}
      >
        <View style={[styles.iconfavorito, styles.iconhome1Layout]}>
          <Image
            style={[styles.iconhomeChild, styles.iconhomeChildLayout]}
            contentFit="cover"
            source={ellipse5}
          />
          <View style={styles.iconpublicar1Position} />
          <Image
            style={[styles.iconfavoritos, styles.vectorIcon1Position]}
            contentFit="cover"
            source={iconFavoritos}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.iconfav, styles.iconfavSpaceBlock]}
        onPress={onIconPubPress}
      >
        <View style={[styles.iconfavorito, styles.iconhome1Layout]}>
          <Image
            style={[styles.iconhomeChild, styles.iconhomeChildLayout]}
            contentFit="cover"
            source={ellipse7}
          />
          <Image
            style={[styles.iconpublicar1, styles.iconpublicar1Position]}
            contentFit="cover"
            source={iconPublicar}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.iconfav, styles.iconfavSpaceBlock]}
        onPress={onIconBusPress}
      >
        <View style={[styles.iconfavorito, styles.iconhome1Layout]}>
          <Image
            style={[styles.iconhomeChild, styles.iconhomeChildLayout]}
            contentFit="cover"
            source={ellipse71}
          />
          <Image
            style={[styles.iconpublicar1, styles.iconpublicar1Position]}
            contentFit="cover"
            source={iconBuscar}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.iconprof, styles.iconfavSpaceBlock]}
        onPress={onIconProfPress}
      >
        <View style={[styles.iciniprofile, styles.iconhome1Layout]}>
          <Image
            style={[styles.iconhomeChild, styles.iconhomeChildLayout]}
            contentFit="cover"
            source={ellipse9}
          />
          <Image
            style={[styles.iconpofile, iconPofileStyle]}
            contentFit="cover"
            source={iconPofile}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconhome1FlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconhomeFlexBox: {
    overflow: "hidden",
    flex: 1,
  },
  iconhomeChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon1Position: {
    zIndex: 2,
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconfavSpaceBlock: {
    marginLeft: 25,
    width: 40,
  },
  iconhome1Layout: {
    height: 33,
    flexDirection: "row",
  },
  iconpublicar1Position: {
    left: "12.25%",
    right: "15%",
    width: "72.75%",
    bottom: "15.15%",
    top: "12.12%",
    height: "72.73%",
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  iconhomeChild: {
    alignSelf: "stretch",
    width: "100%",
    zIndex: 0,
    overflow: "hidden",
    flex: 1,
  },
  vectorIcon: {
    top: 0,
    left: 5,
    width: 24,
    height: 24,
    zIndex: 1,
    position: "absolute",
  },
  vectorIcon1: {
    height: "46.97%",
    width: "88.5%",
    top: "5.45%",
    right: "6.75%",
    bottom: "47.58%",
    left: "4.75%",
  },
  vectorIcon2: {
    height: "45.15%",
    width: "66.75%",
    top: "49.39%",
    right: "16.25%",
    bottom: "5.45%",
    left: "17%",
    zIndex: 3,
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconhome1: {
    height: 33,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconhome: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconfavoritos: {
    height: "57.58%",
    width: "57.75%",
    top: "15.15%",
    right: "21%",
    bottom: "27.27%",
    left: "21.25%",
  },
  iconfavorito: {
    flex: 1,
    height: 33,
  },
  iconfav: {
    flexDirection: "row",
  },
  iconpublicar1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconpofile: {
    width: "68.29%",
    right: "19.43%",
    left: "12.29%",
    bottom: "15.15%",
    top: "12.12%",
    height: "72.73%",
    zIndex: 1,
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iciniprofile: {
    width: 35,
  },
  iconprof: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  barrainferior: {
    backgroundColor: Color.colorWhite,
    width: 361,
    height: 47,
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default BarraInferior;
