import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BrraSuperior = ({
  wifi,
  cellularConnection,
  cap,
  brraSuperiorPosition,
  brraSuperiorHeight,
}) => {
  const brraSuperiorStyle = useMemo(() => {
    return {
      ...getStyleValue("position", brraSuperiorPosition),
      ...getStyleValue("height", brraSuperiorHeight),
    };
  }, [brraSuperiorPosition, brraSuperiorHeight]);

  return (
    <View style={[styles.brraSuperior, brraSuperiorStyle]}>
      <View style={styles.iconsParent}>
        <View style={styles.icons}>
          <View style={[styles.seal, styles.sealLayout]}>
            <Image style={styles.wifiIcon} contentFit="cover" source={wifi} />
          </View>
          <View style={styles.carga}>
            <Image
              style={styles.wifiIcon}
              contentFit="cover"
              source={cellularConnection}
            />
          </View>
          <View style={[styles.battery, styles.sealLayout]}>
            <View style={styles.border} />
            <Image style={styles.capIcon} contentFit="cover" source={cap} />
            <View style={styles.capacity} />
          </View>
        </View>
        <View style={styles.time}>
          <Text style={styles.time1}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sealLayout: {
    width: 35,
    alignItems: "center",
  },
  wifiIcon: {
    maxWidth: "100%",
    height: 13,
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  seal: {
    padding: Padding.p_3xs,
    justifyContent: "center",
  },
  carga: {
    width: 37,
    marginLeft: -4,
    padding: Padding.p_3xs,
    justifyContent: "center",
  },
  border: {
    borderRadius: 3,
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    width: 24,
    height: 15,
    opacity: 0.35,
    zIndex: 0,
    borderStyle: "solid",
  },
  capIcon: {
    width: 1,
    height: 5,
    opacity: 0.4,
    zIndex: 1,
    marginLeft: 1,
  },
  capacity: {
    height: "64.96%",
    width: "74%",
    top: "17.52%",
    right: "17.71%",
    bottom: "17.52%",
    left: "8.29%",
    borderRadius: 1,
    backgroundColor: Color.colorBlack,
    zIndex: 2,
    position: "absolute",
  },
  battery: {
    justifyContent: "flex-end",
    marginLeft: -4,
    flexDirection: "row",
  },
  icons: {
    top: 0,
    right: 0,
    width: 105,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    height: 25,
    alignItems: "center",
  },
  time1: {
    flex: 1,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorBlack,
    textAlign: "center",
  },
  time: {
    top: 1,
    left: 0,
    width: 75,
    height: 23,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
  },
  iconsParent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 25,
    alignSelf: "stretch",
  },
  brraSuperior: {
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorGainsboro_200,
    borderBottomWidth: 1,
    padding: Padding.p_10xs,
    alignItems: "center",
    overflow: "hidden",
    borderStyle: "solid",
    alignSelf: "stretch",
  },
});

export default BrraSuperior;
