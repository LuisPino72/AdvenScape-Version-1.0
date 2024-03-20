import React, { useMemo } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PasswordForm = ({
  passwordInputValue,
  inputPlaceholderText,
  propMarginTop,
  propMarginTop1,
  propFlex,
}) => {
  const passWordStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop1),
    };
  }, [propMarginTop1]);

  const enterYourPasswordStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex),
    };
  }, [propFlex]);

  return (
    <View style={[styles.password, passWordStyle]}>
      <Text style={styles.password1}>{passwordInputValue}</Text>
      <View style={[styles.enterYourPasswordParent, frameViewStyle]}>
        <TextInput
          style={[styles.enterYourPassword, enterYourPasswordStyle]}
          placeholder="Enter your Password"
          secureTextEntry={true}
          placeholderTextColor="#000"
        />
        <Image
          style={styles.mdieyeOutlineIcon}
          contentFit="cover"
          source={require("../assets/mdieyeoutline.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  password1: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    textAlign: "center",
    alignSelf: "stretch",
  },
  enterYourPassword: {
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    fontSize: FontSize.size_xs,
  },
  mdieyeOutlineIcon: {
    width: 34,
    height: 24,
    overflow: "hidden",
  },
  enterYourPasswordParent: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_200,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    marginTop: 9,
    alignSelf: "stretch",
  },
  password: {
    position: "absolute",
    marginTop: 28,
    marginLeft: -104,
    top: "50%",
    left: "50%",
    zIndex: 7,
    alignSelf: "stretch",
  },
});

export default PasswordForm;
