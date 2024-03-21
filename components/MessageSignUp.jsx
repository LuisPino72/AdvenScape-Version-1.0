import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const MessageSignUp = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.messageSignUp}>
      <Image
        style={styles.messageSignUpChild}
        contentFit="cover"
        source={require("../assets/group-421.png")}
      />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.accountCreated, styles.accountFlexBox]}>
          Account created
        </Text>
        <Text style={[styles.yourAdvenscapeAccount, styles.accountFlexBox]}>
          Your AdvenScape account has been successfully created, please sign in.
        </Text>
      </View>
      <Pressable style={[styles.frame1, styles.frameFlexBox]}>
        <Pressable
          style={styles.accept}
          onPress={() => navigation.navigate("Feed")}
        >
          <Text style={[styles.accept1, styles.accountFlexBox]}>Accept</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    marginTop: 7,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  accountFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  messageSignUpChild: {
    width: 58,
    height: 58,
  },
  accountCreated: {
    color: Color.colorBlack,
    alignSelf: "stretch",
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  yourAdvenscapeAccount: {
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
  accept1: {
    marginTop: -14.5,
    marginLeft: -50,
    color: Color.colorGray_100,
    display: "flex",
    width: 100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "center",
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  accept: {
    position: "absolute",
    left: "50%",
    top: "50%",
    zIndex: 0,
  },
  frame1: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 2,
    width: 227,
    height: 36,
  },
  messageSignUp: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_7xs,
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default MessageSignUp;
