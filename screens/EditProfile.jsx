import React, { useState, useCallback } from "react";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Input } from "@rneui/themed";
import DropDownPicker from "react-native-dropdown-picker";
import { Datepicker as RNKDatepicker, Icon } from "@ui-kitten/components";
import { Image } from "expo-image";
import SaveMessage from "../components/SaveMessage";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const EditProfile = ({ state, navigation }) => {
  const [drawerItemsNormal] = useState([]);
  const [drawerItemsActive] = useState([]);
  const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const [frameDropdownValue, setFrameDropdownValue] = useState();
  const [frameDropdownItems, setFrameDropdownItems] = useState([
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "No Binary", label: "No Binary" },
  ]);
  const [casillasDatePicker, setCasillasDatePicker] = useState(
    new Date("2024-03-19")
  );
  const [botonGuardarVisible, setBotonGuardarVisible] = useState(false);
  const stateIndex = !state ? 0 : state.index;

  const openBotonGuardar = useCallback(() => {
    setBotonGuardarVisible(true);
  }, []);

  const closeBotonGuardar = useCallback(() => {
    setBotonGuardarVisible(false);
  }, []);

  return (
    <>
      <View style={styles.editProfile}>
        <View style={[styles.fondoParent, styles.fondoParentPosition]}>
          <LinearGradient
            style={styles.fondo}
            locations={[0, 1]}
            colors={["#6e7f62", "rgba(222, 221, 217, 0)"]}
          />
          <Pressable
            style={[styles.botoncancel, styles.botoncancelFlexBox]}
            onPress={() => navigation.navigate("Profile")}
          >
            <Text style={styles.name1Typo}>Cancel</Text>
          </Pressable>
          <Pressable
            style={[styles.botonguardar, styles.botoncancelFlexBox]}
            onPress={openBotonGuardar}
          >
            <Text style={styles.name1Typo}>Save</Text>
          </Pressable>
        </View>
        <View style={[styles.name, styles.namePosition]}>
          <Text style={[styles.name1, styles.name1Typo]}>Name</Text>
          <Input
            style={[styles.nameChild, styles.childBorder]}
            placeholder="Thomas  Weber"
            maxLength={20}
            minLength={2}
            required={true}
            inputStyle={{ color: "#000" }}
            containerStyle={styles.frameTextInputInput}
          />
        </View>
        <View style={[styles.username, styles.namePosition1]}>
          <Text style={[styles.name1, styles.name1Typo]}>Username</Text>
          <Input
            style={[styles.nameChild, styles.childBorder]}
            placeholder="th.weber"
            maxLength={15}
            minLength={2}
            required={true}
            inputStyle={{ color: "#000" }}
            containerStyle={styles.frameTextInput1Input}
          />
        </View>
        <View style={[styles.aboutme, styles.namePosition1]}>
          <Text style={[styles.name1, styles.name1Typo]}>About me</Text>
          <Input
            style={[styles.aboutmeChild, styles.childBorder]}
            placeholder="A lover of unique experiences and unforgettable memories 🌟"
            maxLength={30}
            minLength={2}
            required={true}
            inputStyle={{}}
            containerStyle={styles.frameTextInput2Input}
          />
        </View>
        <View style={[styles.enailaddress, styles.namePosition1]}>
          <Text style={[styles.name1, styles.name1Typo]}>E-mail address</Text>
          <Input
            style={[styles.enailaddressChild, styles.childBorder]}
            placeholder="thomasweber22@gmail.com"
            maxLength={20}
            minLength={10}
            required={true}
            leftIcon={{ name: "email", type: "material-community" }}
            inputStyle={{ color: "#000" }}
            containerStyle={styles.frameTextInput3Input}
          />
        </View>
        <View style={[styles.gender, styles.genderLayout]}>
          <View style={styles.wrapper}>
            <DropDownPicker
              style={styles.childBorder}
              open={frameDropdownOpen}
              setOpen={setFrameDropdownOpen}
              value={frameDropdownValue}
              setValue={setFrameDropdownValue}
              placeholder="Male"
              items={frameDropdownItems}
              labelStyle={styles.frameDropdownValue}
              dropDownContainerStyle={styles.frameDropdowndropDownContainer}
            />
          </View>
          <Text style={[styles.name1, styles.name1Typo]}>Gender</Text>
        </View>
        <View style={[styles.bithday, styles.genderLayout]}>
          <RNKDatepicker
            style={styles.casillas}
            placeholder={() => (
              <Text style={styles.casillasDatePickerPlaceHolder}>
                19/03/2024
              </Text>
            )}
            accessoryLeft={<Icon name="calendar-account" pack="material" />}
            date={casillasDatePicker}
            onSelect={setCasillasDatePicker}
            status="success"
            controlStyle={styles.casillasDatePickerValue}
          />
          <Text style={[styles.birthday, styles.name1Typo]}>Birthday</Text>
        </View>
        <View style={styles.imgperfil}>
          <Image
            style={[styles.imgperfilChild, styles.imgperfilLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-52.png")}
          />
          <Image
            style={[styles.imgperfilItem, styles.imgperfilLayout]}
            contentFit="cover"
            source={require("../assets/group-39.png")}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={botonGuardarVisible}>
        <View style={styles.botonGuardarOverlay}>
          <Pressable
            style={styles.botonGuardarBg}
            onPress={closeBotonGuardar}
          />
          <SaveMessage onClose={closeBotonGuardar} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  frameTextInputInput: {
    height: 38,
  },
  frameTextInput1Input: {
    height: 38,
  },
  frameTextInput2Input: {
    height: 32,
  },
  frameTextInput3Input: {
    height: 38,
  },
  frameDropdownValue: {
    color: "#000",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
  frameDropdowndropDownContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderStyle: "solid",
    borderColor: "#6e7f62",
    borderWidth: 2,
  },
  casillasDatePickerPlaceHolder: {
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
    color: "#000",
    fontSize: 12,
  },
  casillasDatePickerValue: {
    height: 34,
  },
  fondoParentPosition: {
    zIndex: 0,
    flex: 1,
  },
  botoncancelFlexBox: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    top: 47,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  namePosition: {
    zIndex: 1,
    position: "absolute",
  },
  name1Typo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
  },
  childBorder: {
    borderWidth: 2,
    borderColor: Color.colorGray_100,
    backgroundColor: Color.colorGray_300,
    borderStyle: "solid",
  },
  namePosition1: {
    width: 233,
    marginLeft: -116,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  genderLayout: {
    height: 64,
    width: 155,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  imgperfilLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  fondo: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "transparent",
    position: "absolute",
  },
  botoncancel: {
    left: 5,
  },
  botonGuardarOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  botonGuardarBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  botonguardar: {
    right: 6,
  },
  fondoParent: {
    alignSelf: "stretch",
  },
  name1: {
    alignSelf: "stretch",
  },
  nameChild: {
    borderRadius: Border.br_3xs,
    borderColor: Color.colorGray_100,
    backgroundColor: Color.colorGray_300,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    top: 159,
    bottom: 434,
    width: 233,
    marginLeft: -116,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    top: 220,
    bottom: 373,
    zIndex: 2,
    position: "absolute",
  },
  aboutmeChild: {
    borderRadius: Border.br_3xs,
    borderColor: Color.colorGray_100,
    backgroundColor: Color.colorGray_300,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutme: {
    top: 292,
    bottom: 307,
    zIndex: 3,
    position: "absolute",
  },
  enailaddressChild: {
    paddingHorizontal: 13,
    paddingVertical: 0,
    marginTop: 11,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorGray_100,
    backgroundColor: Color.colorGray_300,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  enailaddress: {
    top: 359,
    bottom: 223,
    zIndex: 4,
    position: "absolute",
  },
  wrapper: {
    paddingHorizontal: 5,
    paddingVertical: Padding.p_5xs,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  gender: {
    bottom: 19,
    left: 13,
    zIndex: 5,
  },
  casillas: {
    height: 34,
  },
  birthday: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  bithday: {
    right: 4,
    bottom: 22,
    zIndex: 6,
  },
  imgperfilChild: {
    height: 97,
    zIndex: 0,
    flex: 1,
  },
  imgperfilItem: {
    height: "10.56%",
    width: "10.93%",
    top: "84.22%",
    right: "-0.05%",
    bottom: "5.22%",
    left: "89.12%",
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
  },
  imgperfil: {
    marginLeft: -91,
    top: 42,
    width: 182,
    height: 90,
    zIndex: 7,
    left: "50%",
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  editProfile: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 654,
    justifyContent: "center",
    overflow: "hidden",
    flex: 1,
    alignItems: "center",
  },
});

export default EditProfile;
