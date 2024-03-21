import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const MessageChangePassword = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.messageChangePassword}>
      <Image
        style={styles.messageChangePasswordChild}
        contentFit="cover"
        source={require("../assets/group-42.png")}
      />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.passwordReset, styles.passwordFlexBox]}>
          Password Reset!
        </Text>
        <Text style={[styles.yourPasswordHas, styles.passwordFlexBox]}>
          Your password has been successfully reset, click below to continue
          your access
        </Text>
      </View>
      <Pressable style={[styles.frame1, styles.frameFlexBox]}>
        <Pressable onPress={() => navigation.navigate("SignIn")}>
          <Text style={[styles.continue1, styles.passwordFlexBox]}>
            Continue
          </Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  passwordFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  messageChangePasswordChild: {
    width: 58,
    height: 58,
  },
  passwordReset: {
    color: Color.colorBlack,
    alignSelf: "stretch",
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  yourPasswordHas: {
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    alignSelf: "stretch",
    textAlign: "center",
    letterSpacing: 0,
  },
  frame: {
    width: 235,
  },
  continue1: {
    color: Color.colorGray_100,
    display: "flex",
    width: 94,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "center",
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  frame1: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 2,
    width: 242,
    height: 36,
  },
  messageChangePassword: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    width: 250,
    height: 230,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: 13,
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default MessageChangePassword;
