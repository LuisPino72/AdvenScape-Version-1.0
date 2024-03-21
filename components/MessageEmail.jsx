import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const MessageEmail = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.messageEmail}>
      <Image
        style={styles.messageEmailChild}
        contentFit="cover"
        source={require("../assets/group-42.png")}
      />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.eMailSent, styles.accept1FlexBox]}>
          E-mail sent
        </Text>
        <Text style={[styles.weSendAn, styles.accept1FlexBox]}>
          We send an email to your email address with a link to regain access to
          your account.
        </Text>
      </View>
      <Pressable
        style={[styles.frame1, styles.frameFlexBox]}
        onPress={() => navigation.navigate("ChangePassword")}
      >
        <Pressable onPress={() => navigation.navigate("ChangePassword")}>
          <Text style={[styles.accept1, styles.accept1FlexBox]}>Accept</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  accept1FlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  messageEmailChild: {
    width: 58,
    height: 58,
  },
  eMailSent: {
    color: Color.colorBlack,
    alignSelf: "stretch",
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  weSendAn: {
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    alignSelf: "stretch",
    textAlign: "center",
    letterSpacing: 0,
  },
  frame: {
    width: 240,
  },
  accept1: {
    color: Color.colorGray_100,
    display: "flex",
    width: 98,
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
    width: 219,
    height: 36,
  },
  messageEmail: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    width: 250,
    height: 230,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_3xs,
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default MessageEmail;
