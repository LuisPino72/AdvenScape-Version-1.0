import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  TextInput,
  View,
  Modal,
} from "react-native";
import MessageChangePassword from "../components/MessageChangePassword";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ChangePassword = () => {
  const [botonConfirmVisible, setBotonConfirmVisible] = useState(false);
  const navigation = useNavigation();

  const openBotonConfirm = useCallback(() => {
    setBotonConfirmVisible(true);
  }, []);

  const closeBotonConfirm = useCallback(() => {
    setBotonConfirmVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.changePassword, styles.logoFlexBox]}>
        <Image
          style={[styles.changePasswordChild, styles.changeLayout]}
          contentFit="cover"
          source={require("../assets/fondo2.png")}
        />
        <Pressable
          style={[styles.botonconfirm, styles.botonconfirmLayout]}
          onPress={openBotonConfirm}
        >
          <Text style={[styles.confirm, styles.confirmFlexBox]}>Confirm</Text>
        </Pressable>
        <View style={[styles.password, styles.passwordPosition]}>
          <Text style={[styles.newPassword, styles.newFlexBox]}>
            New Password
          </Text>
          <TextInput
            style={[styles.passwordChild, styles.botonconfirmLayout]}
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={[styles.password1, styles.passwordPosition]}>
          <Text style={[styles.newPassword, styles.newFlexBox]}>
            Confirm Password
          </Text>
          <TextInput
            style={[styles.passwordChild, styles.botonconfirmLayout]}
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={[styles.intro, styles.introPosition]}>
          <View style={[styles.logo, styles.logoFlexBox]}>
            <Image
              style={styles.advenscapeMesaDeTrabajo11}
              contentFit="cover"
              source={require("../assets/advenscape-mesa-de-trabajo-1-14.png")}
            />
          </View>
          <View style={[styles.descrip, styles.logoFlexBox]}>
            <Text style={[styles.setYourNew, styles.newFlexBox]}>
              Set your new password
            </Text>
            <Text style={[styles.yourNewPassword, styles.yourTypo]}>
              Your new password should be different from the password previously
              used
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.return, styles.introPosition]}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Image
            style={styles.arrowIcon}
            contentFit="cover"
            source={require("../assets/arrow.png")}
          />
          <View style={[styles.text, styles.logoFlexBox]}>
            <Text style={[styles.returnToThe, styles.newFlexBox]}>
              Return to the login screen
            </Text>
          </View>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={botonConfirmVisible}>
        <View style={styles.botonConfirmOverlay}>
          <Pressable
            style={styles.botonConfirmBg}
            onPress={closeBotonConfirm}
          />
          <MessageChangePassword onClose={closeBotonConfirm} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  logoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  changeLayout: {
    width: "100%",
    overflow: "hidden",
    flex: 1,
  },
  botonconfirmLayout: {
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
  },
  confirmFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 0,
  },
  passwordPosition: {
    height: 64,
    width: 233,
    marginLeft: -116,
    left: "50%",
    top: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  newFlexBox: {
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  introPosition: {
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  yourTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  changePasswordChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 0,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  botonConfirmOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  botonConfirmBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  confirm: {
    fontSize: FontSize.size_lg,
    display: "flex",
    width: 215,
    height: 27,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },
  botonconfirm: {
    marginTop: 155,
    marginLeft: -109,
    backgroundColor: Color.colorGray_100,
    height: 47,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    zIndex: 1,
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    borderRadius: Border.br_3xs,
  },
  newPassword: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  passwordChild: {
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 2,
    height: 38,
    marginTop: 3,
  },
  password: {
    marginTop: -21,
    zIndex: 2,
  },
  password1: {
    marginTop: 75,
    zIndex: 3,
  },
  advenscapeMesaDeTrabajo11: {
    width: 230,
    height: 111,
  },
  logo: {
    width: 267,
    height: 131,
    padding: Padding.p_3xs,
  },
  setYourNew: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  yourNewPassword: {
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  descrip: {
    alignSelf: "stretch",
  },
  intro: {
    marginLeft: -134,
    top: 32,
    width: 269,
    height: 219,
    zIndex: 4,
    left: "50%",
    position: "absolute",
  },
  arrowIcon: {
    width: 32,
    height: 20,
    overflow: "hidden",
  },
  returnToThe: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  text: {
    flex: 1,
    alignItems: "center",
  },
  return: {
    marginLeft: -115,
    bottom: 48,
    height: 21,
    flexDirection: "row",
    zIndex: 5,
    left: "50%",
    position: "absolute",
    alignSelf: "stretch",
  },
  changePassword: {
    backgroundColor: Color.colorWhite,
    height: 650,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default ChangePassword;
