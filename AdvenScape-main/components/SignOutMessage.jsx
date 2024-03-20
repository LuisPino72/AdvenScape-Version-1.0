import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SignOutMessage = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.signOutMessage}>
      <Image
        style={styles.signOutMessageChild}
        contentFit="cover"
        source={require("../assets/group-421.png")}
      />
      <View style={[styles.frame, styles.frameSpaceBlock]}>
        <Text style={styles.signOutOf}>Sign out of your account?</Text>
      </View>
      <View style={[styles.frame1, styles.frameSpaceBlock]}>
        <View style={styles.frame2}>
          <Pressable onPress={() => navigation.navigate("MenuProfile")}>
            <Text style={[styles.cancel1, styles.cancel1Typo]}>Cancel</Text>
          </Pressable>
          <Pressable
            style={styles.signOut}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={[styles.signOut1, styles.cancel1Typo]}>Sign out</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameSpaceBlock: {
    marginTop: 33,
    justifyContent: "center",
    overflow: "hidden",
  },
  cancel1Typo: {
    display: "flex",
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    justifyContent: "center",
    alignItems: "center",
  },
  signOutMessageChild: {
    width: 58,
    height: 58,
  },
  signOutOf: {
    alignSelf: "stretch",
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  frame: {
    width: 170,
  },
  cancel1: {
    width: 65,
    height: 41,
  },
  signOut1: {
    width: 85,
  },
  signOut: {
    marginLeft: 56,
  },
  frame2: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 2,
    width: 229,
    height: 37,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  frame1: {
    width: 243,
    height: 32,
    alignItems: "center",
  },
  signOutMessage: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    width: 277,
    height: 230,
    paddingHorizontal: 17,
    paddingVertical: Padding.p_3xs,
    maxWidth: "100%",
    maxHeight: "100%",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default SignOutMessage;
