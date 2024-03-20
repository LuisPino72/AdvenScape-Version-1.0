import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import BrraSuperior from "../components/BrraSuperior";
import { useNavigation } from "@react-navigation/native";
import PasswordFormInputGroup from "../components/PasswordFormInputGroup";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signIn, styles.loginFlexBox]}>
      <BrraSuperior
        wifi={require("../assets/wifi2.png")}
        cellularConnection={require("../assets/cellular-connection.png")}
        cap={require("../assets/cap.png")}
        brraSuperiorPosition="unset"
        brraSuperiorHeight="unset"
      />
      <Image
        style={[styles.fondoIcon, styles.fondoIconLayout]}
        contentFit="cover"
        source={require("../assets/fondo1.png")}
      />
      <View style={[styles.signip, styles.emailPosition]}>
        <Text
          style={[styles.dontHaveAn, styles.signUp1Layout]}
        >{`Don’t have an account? `}</Text>
        <Pressable
          style={styles.signUp}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={[styles.signUp1, styles.login1Typo]}>Sign Up</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.login, styles.loginPosition]}
        onPress={() => navigation.navigate("Feed")}
      >
        <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
      </Pressable>
      <View style={[styles.email, styles.emailPosition]}>
        <Text style={[styles.eMailAddress, styles.welcomeToFlexBox]}>
          E-mail address
        </Text>
        <View style={[styles.cajaDeEmail, styles.forgotpassFlexBox]}>
          <TextInput
            style={styles.examplegmailcom}
            placeholder="example@gmail.com"
            keyboardType="email-address"
            placeholderTextColor="#000"
          />
        </View>
      </View>
      <Pressable
        style={[styles.forgotpass, styles.forgotpassFlexBox]}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={[styles.forgotThePassword, styles.welcomeToFlexBox]}>
            Forgot the password?
          </Text>
        </Pressable>
      </Pressable>
      <PasswordFormInputGroup />
      <View style={[styles.welcome, styles.emailPosition]}>
        <Text style={[styles.welcomeTo, styles.welcomeToFlexBox]}>{`Welcome 
to  `}</Text>
        <Image
          style={styles.fondoIconLayout}
          contentFit="cover"
          source={require("../assets/advenscape-mesa-de-trabajo-1-11.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginFlexBox: {
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "center",
  },
  fondoIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  emailPosition: {
    left: "50%",
    position: "absolute",
    alignItems: "center",
  },
  signUp1Layout: {
    height: 36,
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  login1Typo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  loginPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  welcomeToFlexBox: {
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotpassFlexBox: {
    height: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  fondoIcon: {
    zIndex: 1,
  },
  dontHaveAn: {
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  signUp1: {
    height: 36,
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  signUp: {
    marginTop: 2,
  },
  signip: {
    marginLeft: -93,
    bottom: 6,
    width: 187,
    justifyContent: "flex-end",
    zIndex: 2,
  },
  login1: {
    fontSize: FontSize.size_lg,
    width: 116,
    height: 27,
  },
  login: {
    marginTop: 100,
    marginLeft: -101,
    backgroundColor: Color.colorGray_100,
    width: 203,
    height: 47,
    paddingHorizontal: 101,
    paddingVertical: Padding.p_3xs,
    zIndex: 3,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  eMailAddress: {
    fontSize: FontSize.size_mini,
    height: 23,
    alignSelf: "stretch",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
  },
  examplegmailcom: {
    top: 9,
    left: 6,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    fontSize: FontSize.size_sm,
    zIndex: 0,
    position: "absolute",
    flex: 1,
  },
  cajaDeEmail: {
    backgroundColor: Color.colorGray_200,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 2,
    width: 238,
    marginTop: 12,
    borderRadius: Border.br_3xs,
  },
  email: {
    marginLeft: -132,
    top: 243,
    bottom: 334,
    width: 252,
    zIndex: 4,
    justifyContent: "center",
  },
  forgotThePassword: {
    height: 18,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  forgotpass: {
    marginTop: 160,
    marginLeft: 85,
    width: 92,
    padding: Padding.p_3xs,
    zIndex: 5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  welcomeTo: {
    fontSize: 28,
    lineHeight: 33,
    alignSelf: "stretch",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
    flex: 1,
  },
  welcome: {
    marginLeft: -111,
    top: 31,
    width: 222,
    height: 141,
    zIndex: 7,
    justifyContent: "center",
  },
  signIn: {
    backgroundColor: Color.colorWhite,
    height: 650,
    justifyContent: "center",
    width: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default SignIn;
