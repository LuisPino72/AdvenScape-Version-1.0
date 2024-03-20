import * as React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const PasswordFormInputGroup = () => {
  return (
    <View style={styles.cintrasea}>
      <View style={[styles.contrasea, styles.barraFlexBox1]}>
        <Text style={styles.password}>Password</Text>
      </View>
      <View style={[styles.barra, styles.barraFlexBox]}>
        <TextInput
          style={styles.enterYourPassword}
          placeholder="Enter your Password"
          secureTextEntry={true}
          placeholderTextColor="#000"
        />
        <View style={[styles.mdieyeOutline, styles.barraFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector11.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barraFlexBox1: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  barraFlexBox: {
    overflow: "hidden",
    justifyContent: "center",
  },
  password: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    textAlign: "center",
  },
  contrasea: {
    height: 68,
    zIndex: 0,
  },
  enterYourPassword: {
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    fontSize: FontSize.size_sm,
  },
  vectorIcon: {
    width: 36,
    height: 15,
  },
  mdieyeOutline: {
    height: 24,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_8xs,
    marginLeft: 27,
  },
  barra: {
    marginTop: -4,
    marginLeft: -119,
    top: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_200,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 2,
    height: 38,
    flexDirection: "row",
    zIndex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  cintrasea: {
    marginLeft: -132,
    top: 324,
    bottom: 258,
    width: 252,
    zIndex: 6,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
});

export default PasswordFormInputGroup;
