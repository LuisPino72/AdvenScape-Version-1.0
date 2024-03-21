import React, { useMemo } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const UserCard = ({ displayName, userInfoText, propMarginTop }) => {
  const emailOrUserStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.emailoruser, styles.nameFlexBox, emailOrUserStyle]}>
      <Text style={[styles.name, styles.nameFlexBox]}>{displayName}</Text>
      <View style={[styles.barra, styles.nameFlexBox]}>
        <TextInput
          style={styles.examplegmailcom}
          keyboardType="email-address"
          placeholderTextColor="#000"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    height: 23,
    alignSelf: "stretch",
  },
  examplegmailcom: {
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    fontSize: FontSize.size_sm,
    alignSelf: "stretch",
  },
  barra: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 2,
    width: 223,
    height: 38,
    marginTop: 10,
  },
  emailoruser: {
    position: "absolute",
    marginTop: -195.5,
    marginLeft: -117,
    top: "50%",
    left: "50%",
    width: 233,
    zIndex: 4,
  },
});

export default UserCard;
