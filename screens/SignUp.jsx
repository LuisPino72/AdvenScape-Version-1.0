import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MessageSignUp from "../components/MessageSignUp";
import UserCard from "../components/UserCard";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();
  const [botonCreateVisible, setBotonCreateVisible] = useState(false);

  const openBotonCreate = useCallback(() => {
    setBotonCreateVisible(true);
  }, []);

  const closeBotonCreate = useCallback(() => {
    setBotonCreateVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.signUp, styles.signUpFlexBox]}>
        <Image
          style={[styles.fondoIcon, styles.signUpLayout]}
          contentFit="cover"
          source={require("../assets/fondo1.png")}
        />
        <View style={[styles.returnsignin, styles.botoncreatePosition]}>
          <Text
            style={[styles.alreadyAMemberContainer, styles.newPasswordFlexBox]}
          >
            <Text style={styles.alreadyAMember}>Already a member</Text>
            <Text style={styles.textTypo}>{`? `}</Text>
          </Text>
          <Pressable onPress={() => navigation.navigate("SignIn")}>
            <Text style={[styles.signIn1, styles.signIn1Typo]}>Sign In</Text>
          </Pressable>
        </View>
        <Pressable
          style={[styles.botoncreate, styles.botoncreateLayout]}
          onPress={openBotonCreate}
        >
          <Text style={[styles.createAccount, styles.signIn1Typo]}>
            Create Account
          </Text>
        </Pressable>
        <View style={styles.intro}>
          <Image
            style={styles.advenscapeMesaDeTrabajo11}
            contentFit="cover"
            source={require("../assets/advenscape-mesa-de-trabajo-1-12.png")}
          />
        </View>
        <UserCard displayName="Name" />
        <UserCard displayName="Username" propMarginTop={-113} />
        <UserCard
          displayName="E-mail"
          userInfoText="example@gmail.com"
          propMarginTop={-35}
        />
        <View style={[styles.password, styles.passwordPosition]}>
          <Text style={[styles.newPassword, styles.textTypo]}>
            New Password
          </Text>
          <TextInput
            style={[styles.passwordChild, styles.botoncreateLayout]}
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={[styles.password1, styles.passwordPosition]}>
          <Text style={[styles.newPassword, styles.textTypo]}>
            Confim Password
          </Text>
          <TextInput
            style={[styles.passwordChild, styles.botoncreateLayout]}
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={botonCreateVisible}>
        <View style={styles.botonCreateOverlay}>
          <Pressable style={styles.botonCreateBg} onPress={closeBotonCreate} />
          <MessageSignUp onClose={closeBotonCreate} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  signUpFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  signUpLayout: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  botoncreatePosition: {
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  newPasswordFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorBlack,
  },
  signIn1Typo: {
    display: "flex",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  botoncreateLayout: {
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
  },
  passwordPosition: {
    height: 64,
    width: 233,
    top: "50%",
    marginLeft: -117,
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  fondoIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 0,
    alignSelf: "stretch",
  },
  alreadyAMember: {
    fontFamily: FontFamily.poppinsRegular,
  },
  alreadyAMemberContainer: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    flex: 1,
  },
  signIn1: {
    height: 36,
    marginRight:270,
    color: Color.colorBlack,
    display:"flex",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    flex: 1,
  },
  returnsignin: {
    marginLeft: -100,
    bottom: 5,
    paddingBottom: Padding.p_9xs,
    zIndex: 1,
    alignSelf: "stretch",
  },
  botonCreateOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  botonCreateBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  createAccount: {
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    width: 166,
  },
  botoncreate: {
    marginLeft: -134,
    bottom: 71,
    backgroundColor: Color.colorGray_100,
    height: 47,
    paddingHorizontal: 52,
    paddingVertical: 11,
    zIndex: 2,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  advenscapeMesaDeTrabajo11: {
    width: 224,
    height: 105,
  },
  intro: {
    marginLeft: -129,
    top: 31,
    height: 95,
    zIndex: 3,
    left: "50%",
    position: "absolute",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  newPassword: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  passwordChild: {
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 2,
    height: 38,
    marginTop: 10,
  },
  password: {
    marginTop: 44,
    zIndex: 7,
  },
  password1: {
    marginTop: 121,
    zIndex: 8,
  },
  signUp: {
    backgroundColor: Color.colorWhite,
    height: 650,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default SignUp;
