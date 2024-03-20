import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  Modal,
} from "react-native";
import BrraSuperior from "../components/BrraSuperior";
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
        <BrraSuperior
          wifi={require("../assets/wifi2.png")}
          cellularConnection={require("../assets/cellular-connection.png")}
          cap={require("../assets/cap.png")}
          brraSuperiorPosition="unset"
          brraSuperiorHeight="unset"
        />
        <Image
          style={[styles.changePasswordChild, styles.changeLayout]}
          contentFit="cover"
          source={require("../assets/fondo3.png")}
        />
        <Pressable
          style={[styles.botonconfirm, styles.botonconfirmLayout]}
          onPress={openBotonConfirm}
        >
          <Text style={[styles.confirm, styles.confirmTypo]}>Confirm</Text>
        </Pressable>
        <View style={[styles.password, styles.passwordPosition]}>
          <Text style={[styles.confirmPassword, styles.setYourNewTypo]}>
            Confirm Password
          </Text>
          <TextInput
            style={[styles.passwordChild, styles.botonconfirmLayout]}
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={[styles.password1, styles.passwordPosition]}>
          <Text style={[styles.confirmPassword, styles.setYourNewTypo]}>
            New Password
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
            <Text style={[styles.setYourNew, styles.setYourNewTypo]}>
              Set your new password
            </Text>
            <Text style={styles.yourNewPassword}>
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
            <Text style={[styles.returnToThe, styles.confirmTypo]}>
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
  confirmTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  passwordPosition: {
    height: 64,
    marginLeft: -81,
    left: "50%",
    top: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  setYourNewTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
  changePasswordChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 1,
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
    zIndex: 2,
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    borderRadius: Border.br_3xs,
  },
  confirmPassword: {
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  passwordChild: {
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 2,
    height: 38,
    marginTop: 3,
  },
  password: {
    marginTop: 64,
    zIndex: 3,
    alignSelf: "stretch",
  },
  password1: {
    marginTop: -21,
    width: 163,
    zIndex: 4,
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
  },
  yourNewPassword: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
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
    zIndex: 5,
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
    alignSelf: "stretch",
  },
  text: {
    flex: 1,
    alignItems: "center",
  },
  return: {
    marginLeft: -115,
    bottom: 14,
    height: 21,
    flexDirection: "row",
    zIndex: 6,
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
