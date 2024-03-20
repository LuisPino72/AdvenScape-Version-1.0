import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SaveMessage = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.saveMessage}>
      <Image
        style={styles.saveMessageChild}
        contentFit="cover"
        source={require("../assets/group-42.png")}
      />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.savedChanges, styles.changesFlexBox]}>
          Saved changes!
        </Text>
        <Text
          style={[styles.changesHaveBeen, styles.changesFlexBox]}
        >{`Changes have been successfully saved `}</Text>
      </View>
      <Pressable
        style={[styles.frame1, styles.frameFlexBox]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <Text style={[styles.continue1, styles.changesFlexBox]}>
            Continue
          </Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  changesFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  saveMessageChild: {
    width: 58,
    height: 58,
  },
  savedChanges: {
    color: Color.colorBlack,
    alignSelf: "stretch",
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  changesHaveBeen: {
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    alignSelf: "stretch",
    textAlign: "center",
    letterSpacing: 0,
  },
  frame: {
    width: 260,
  },
  continue1: {
    color: Color.colorGray_100,
    display: "flex",
    width: 107,
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
    width: 228,
    height: 49,
  },
  saveMessage: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    width: 278,
    height: 226,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_10xs,
    maxWidth: "100%",
    maxHeight: "100%",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default SaveMessage;
