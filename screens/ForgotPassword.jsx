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
import MessageEmail from "../components/MessageEmail";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const ForgotPassword = () => {
  const [botonSendVisible, setBotonSendVisible] = useState(false);
  const navigation = useNavigation();

  const openBotonSend = useCallback(() => {
    setBotonSendVisible(true);
  }, []);

  const closeBotonSend = useCallback(() => {
    setBotonSendVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.forgotPassword, styles.emailoruserFlexBox]}>
        <Image
          style={[styles.fondoIcon, styles.fondoIconLayout]}
          contentFit="cover"
          source={require("../assets/fondo2.png")}
        />
        <Pressable
          style={[styles.botonsend, styles.barraFlexBox]}
          onPress={openBotonSend}
        >
          <Text style={[styles.sendAccessLink, styles.backFlexBox]}>
            Send access link
          </Text>
        </Pressable>
        <View style={[styles.emailoruser, styles.introPosition]}>
          <Text style={styles.eMailOrUsername}>E-mail or username</Text>
          <View style={[styles.barra, styles.barraFlexBox]}>
            <TextInput
              style={styles.examplegmailcom}
              placeholder="example@gmail.com"
              keyboardType="email-address"
              placeholderTextColor="#000"
            />
          </View>
        </View>
        <Pressable
          style={[styles.botonback, styles.introPosition]}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={[styles.back, styles.backFlexBox]}>Back</Text>
        </Pressable>
        <View style={[styles.intro, styles.introPosition]}>
          <View style={[styles.logo, styles.logoFlexBox]}>
            <Image
              style={[styles.advenscapeMesaDeTrabajo11, styles.fondoIconLayout]}
              contentFit="cover"
              source={require("../assets/advenscape-mesa-de-trabajo-1-13.png")}
            />
          </View>
          <View style={[styles.descrip, styles.logoFlexBox]}>
            <Text style={[styles.recoverYourAccount, styles.yourFlexBox]}>
              Recover your account
            </Text>
            <Text style={[styles.enterYourEmail, styles.yourFlexBox]}>
              Enter your email or username and we'll send you a link to log back
              into your account.
            </Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={botonSendVisible}>
        <View style={styles.botonSendOverlay}>
          <Pressable style={styles.botonSendBg} onPress={closeBotonSend} />
          <MessageEmail onClose={closeBotonSend} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  emailoruserFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  fondoIconLayout: {
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  barraFlexBox: {
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  backFlexBox: {
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  introPosition: {
    left: "50%",
    position: "absolute",
    alignSelf: "stretch",
  },
  logoFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  yourFlexBox: {
    width: 255,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  fondoIcon: {
    maxHeight: "100%",
    zIndex: 0,
    flex: 1,
    maxWidth: "100%",
  },
  botonSendOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  botonSendBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  sendAccessLink: {
    fontSize: FontSize.size_lg,
    width: 170,
    height: 27,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  botonsend: {
    marginTop: 137,
    marginLeft: -90,
    backgroundColor: Color.colorGray_100,
    height: 45,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    zIndex: 1,
    left: "50%",
    position: "absolute",
    alignSelf: "stretch",
    top: "50%",
    width: 241,
    height: 38,
    left: 160,
    textAlign: "center",

  },
  eMailOrUsername: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    left:-5,

  },
  examplegmailcom: {
    paddingLeft: 10,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    fontSize: FontSize.size_sm,
    alignSelf: "stretch",

  },
  barra: {
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 2,
    width: 223,
    height: 38,
    marginTop: 7,
  },
  emailoruser: {
    marginTop: 49,
    marginLeft: -116,
    zIndex: 2,
    top: "50%",
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
    alignSelf: "stretch",
    flex: 1,
  },
  botonback: {
    marginLeft: -16,
    bottom: 26,
    height: 20,
    justifyContent: "flex-end",
    zIndex: 3,
    position: "absolute",
    left: "50%",
    alignItems: "center",
  },
  advenscapeMesaDeTrabajo11: {
    height: 111,
  },
  logo: {
    height: 131,
    padding: Padding.p_3xs,
    alignSelf: "stretch",
  },
  recoverYourAccount: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  enterYourEmail: {
    fontSize: FontSize.size_mini,
    width: 255,
    color: Color.colorWhite,
  },
  descrip: {
    height: 121,
    alignSelf: "stretch",
  },
  intro: {
    marginLeft: -133,
    top: 32,
    height: 261,
    zIndex: 4,
    position: "absolute",
    left: "50%",
    alignItems: "center",
  },
  forgotPassword: {
    backgroundColor: Color.colorWhite,
    height: 650,
    overflow: "hidden",
    width: "100%",
    justifyContent: "center",
    flex: 1,
  },
});

export default ForgotPassword;
