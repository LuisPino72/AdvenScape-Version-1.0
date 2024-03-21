import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn}>
      <Image
        style={[styles.fondoIcon, styles.fondoIconPosition]}
        contentFit="cover"
        source={require("../assets/fondo.png")}
      />
      <View style={[styles.signip, styles.signipPosition]}>
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
        style={styles.login}
        onPress={() => navigation.navigate("Feed")}
      >
        <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
      </Pressable>
      <View style={[styles.email, styles.emailPosition]}>
        <Text style={[styles.eMailAddress, styles.passwordTypo]}>
          E-mail address
        </Text>
        <View style={[styles.cajaDeEmail, styles.barraBorder]}>
          <TextInput
            style={[styles.examplegmailcom, styles.examplegmailcomTypo]}
            placeholder="example@gmail.com"
            keyboardType="email-address"
            placeholderTextColor="#000"
          />
        </View>
      </View>
      <Pressable
        style={[styles.forgotpass, styles.barraPosition]}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={[styles.forgotThePassword, styles.welcomeToFlexBox]}>
            Forgot the password?
          </Text>
        </Pressable>
      </Pressable>
      <View style={[styles.cintrasea, styles.emailPosition]}>
        <View style={[styles.contrasea, styles.fondoIconPosition]}>
          <Text style={styles.passwordTypo}>Password</Text>
        </View>
        <View style={[styles.barra, styles.barraBorder]}>
          <TextInput
            style={styles.examplegmailcomTypo}
            placeholder="Enter your Password"
            secureTextEntry={true}
            placeholderTextColor="#000"
          />
          <View style={styles.mdieyeOutline}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.welcome, styles.signipPosition]}>
        <Text style={[styles.welcomeTo, styles.welcomeToFlexBox]}>{`Welcome 
to  `}</Text>
        <Image
          style={[styles.advenscapeMesaDeTrabajo11, styles.fondoIconLayout]}
          contentFit="cover"
          source={require("../assets/advenscape-mesa-de-trabajo-1-11.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fondoIconPosition: {
    zIndex: 0,
    alignSelf: "stretch",
  },
  signipPosition: {
    left: "50%",
    position: "absolute",
    alignItems: "center",
  },
  signUp1Layout: {
    height: 36,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  login1Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  emailPosition: {
    width: 252,
    marginLeft: -132,
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  passwordTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
  },
  barraBorder: {
    height: 40,

    borderWidth: 2,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  examplegmailcomTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  barraPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  welcomeToFlexBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fondoIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  fondoIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  dontHaveAn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
    height: 36,
  },
  signUp1: {
    height: 36,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  signUp: {
    marginTop: 2,
  },
  signip: {
    marginLeft: -93,
    bottom: 19,
    width: 187,
    justifyContent: "flex-end",
    zIndex: 1,
  },
  login1: {
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    width: 116,
    height: 27,
  },
  login: {
    marginTop: 100,
    marginLeft: -101,
    backgroundColor: Color.colorGray_100,
    width: 241,
    height: 38,
    paddingHorizontal: 101,
    paddingVertical: Padding.p_3xs,
    zIndex: 2,
    borderRadius: Border.br_3xs,
    top: "50%",
    left: "170",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  eMailAddress: {
    height: 23,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  examplegmailcom: {
    top: 5,
    left: 6,
    position: "absolute",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    width:225,
    zIndex: 0,
    flex: 1,
  },
  cajaDeEmail: {
    width: 230,
    marginTop: 12,
  },
  email: {
    top: 243,
    bottom: 334,
    zIndex: 3,
  },
  forgotThePassword: {
    width: 213,
    marginRight: 47,
    height: 60,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
    display: "flex",
    color: Color.colorBlack,
    alignSelf: "stretch",
    fontSize: FontSize.size_xs,

  },
  forgotpass: {
    marginTop: 160,
    marginLeft: 50,
    width: 100,
    height: 60,
    padding: Padding.p_3xs,
    zIndex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  contrasea: {
    height: 68,
    alignItems: "center",
  },
  vectorIcon: {
    width: 25,
    height: 9.5,
    marginRight: 11,
  },
  mdieyeOutline: {
    height: 24,
    alignItems: "flex-end",
    paddingHorizontal: 2,
    paddingVertical: Padding.p_8xs,
    marginLeft: 27,
    justifyContent: "center",
    overflow: "hidden",

  },
  mdieyeOutline: {
    height: 24,
    alignItems: "flex-end",
    paddingHorizontal: 2,
    paddingVertical: Padding.p_8xs,
    marginLeft: 27,
    justifyContent: "center",
    overflow: "hidden",

  },
  mdieyeOutline: {
    height: 24,
    alignItems: "flex-end",
    paddingHorizontal: 2,
    paddingVertical: Padding.p_8xs,
    marginLeft: 27,
    justifyContent: "center",
    overflow: "hidden",
  },
  barra: {
    marginTop: -4,
    marginLeft: -115,
    flexDirection: "row",
    top: "50%",
    left: "50%",
    position: "absolute",
    zIndex: 1,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  cintrasea: {
    top: 324,
    bottom: 258,
    zIndex: 5,
  },
  welcomeTo: {
    fontSize: 28,
    lineHeight: 33,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
    display: "flex",
    color: Color.colorBlack,
    alignSelf: "stretch",
    flex: 1,
  },
  advenscapeMesaDeTrabajo11: {
    alignSelf: "stretch",
  },
  welcome: {
    marginLeft: -111,
    top: 31,
    width: 222,
    height: 141,
    zIndex: 6,
    justifyContent: "center",
  },
  signIn: {
    backgroundColor: Color.colorWhite,
    height: 650,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default SignIn;
