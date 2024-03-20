import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Input } from "@rneui/themed";
import BrraSuperior from "../components/BrraSuperior";
import { useNavigation } from "@react-navigation/native";
import MessageSignUp from "../components/MessageSignUp";
import PasswordForm from "../components/PasswordForm";
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
      <View style={[styles.signUp, styles.signFlexBox]}>
        <BrraSuperior
          wifi={require("../assets/wifi.png")}
          cellularConnection={require("../assets/cellular-connection.png")}
          cap={require("../assets/cap.png")}
          brraSuperiorPosition="unset"
          brraSuperiorHeight="unset"
        />
        <Image
          style={[styles.fondoIcon, styles.signUpLayout]}
          contentFit="cover"
          source={require("../assets/fondo2.png")}
        />
        <View style={styles.returnsignin}>
          <Text style={[styles.alreadyAMemberContainer, styles.name1FlexBox]}>
            <Text style={styles.alreadyAMember}>Already a member</Text>
            <Text style={styles.textTypo}>{`? `}</Text>
          </Text>
          <Pressable
            style={styles.signIn}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={[styles.signIn1, styles.signIn1Typo]}>Sign In</Text>
          </Pressable>
        </View>
        <Pressable style={styles.botoncreate} onPress={openBotonCreate}>
          <Text style={[styles.createAccount, styles.signIn1Typo]}>
            Create Account
          </Text>
        </Pressable>
        <View style={[styles.name, styles.namePosition]}>
          <Text style={[styles.name1, styles.textTypo]}>Name</Text>
          <Input
            style={styles.childBorder}
            maxLength={25}
            minLength={2}
            required={true}
            leftIcon={{ name: "account", type: "material-community" }}
            inputStyle={{}}
            containerStyle={styles.rectangleTextInputInput}
          />
        </View>
        <View style={[styles.username, styles.namePosition]}>
          <Text style={[styles.name1, styles.textTypo]}>Username</Text>
          <Input
            style={styles.childBorder}
            maxLength={15}
            minLength={2}
            required={true}
            leftIcon={{ name: "account", type: "material-community" }}
            inputStyle={{}}
            containerStyle={styles.rectangleTextInput1Input}
          />
        </View>
        <View style={[styles.email, styles.namePosition]}>
          <Text style={[styles.name1, styles.textTypo]}>E-mail address</Text>
          <Input
            style={[styles.emailChild, styles.childBorder]}
            placeholder="Example@gmail.com"
            maxLength={25}
            minLength={15}
            required={true}
            leftIcon={{ name: "email", type: "material-community" }}
            inputStyle={{}}
            containerStyle={styles.frameTextInputInput}
          />
        </View>
        <PasswordForm passwordInputValue="Password" />
        <PasswordForm
          passwordInputValue="Confirm Password"
          inputPlaceholderText="default"
          propMarginTop={127}
          propMarginTop1="unset"
          propFlex={1}
        />
        <View style={styles.intro}>
          <Image
            style={styles.advenscapeMesaDeTrabajo11}
            contentFit="cover"
            source={require("../assets/advenscape-mesa-de-trabajo-1-12.png")}
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
  rectangleTextInputInput: {
    height: 38,
    position: "relative",
  },
  rectangleTextInput1Input: {
    height: 38,
    position: "relative",
  },
  frameTextInputInput: {
    height: 38,
  },
  signFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  signUpLayout: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  name1FlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  signIn1Typo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0,
    flex: 1,
  },
  namePosition: {
    top: "50%",
    marginLeft: -144,
    left: "50%",
    position: "absolute",
    alignSelf: "stretch",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  childBorder: {
    borderWidth: 2,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
  },
  fondoIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 1,
    alignSelf: "stretch",
  },
  alreadyAMember: {
    fontFamily: FontFamily.poppinsRegular,
  },
  alreadyAMemberContainer: {
    fontSize: FontSize.size_xs,
    flex: 1,
    color: Color.colorBlack,
    letterSpacing: 0,
  },
  signIn1: {
    display: "flex",
    height: 36,
    fontSize: FontSize.size_xs,
    justifyContent: "center",
    alignItems: "center",
  },
  signIn: {
    marginLeft: -5,
  },
  returnsignin: {
    marginLeft: -100,
    bottom: 8,
    paddingBottom: Padding.p_9xs,
    zIndex: 2,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
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
  },
  botoncreate: {
    marginLeft: -143,
    bottom: 58,
    backgroundColor: Color.colorGray_100,
    paddingHorizontal: 52,
    paddingVertical: 11,
    zIndex: 3,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  name1: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  name: {
    marginTop: -183,
    zIndex: 4,
  },
  username: {
    marginTop: -119,
    alignItems: "flex-end",
    zIndex: 5,
  },
  emailChild: {
    justifyContent: "center",
  },
  email: {
    marginTop: -49,
    zIndex: 6,
  },
  advenscapeMesaDeTrabajo11: {
    width: 224,
    height: 105,
  },
  intro: {
    marginLeft: -129,
    top: 31,
    height: 95,
    zIndex: 9,
    left: "50%",
    position: "absolute",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  signUp: {
    backgroundColor: Color.colorWhite,
    height: 650,
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default SignUp;
