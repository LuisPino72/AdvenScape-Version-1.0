import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NueaPunlicacion from "../components/NueaPunlicacion";
import BrraSuperior from "../components/BrraSuperior";
import CoverContainer from "../components/CoverContainer";
import BarraInferior from "../components/BarraInferior";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Profile = () => {
  const [iconPubContainerVisible, setIconPubContainerVisible] = useState(false);
  const navigation = useNavigation();

  const openIconPubContainer = useCallback(() => {
    setIconPubContainerVisible(true);
  }, []);

  const closeIconPubContainer = useCallback(() => {
    setIconPubContainerVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.profile, styles.profileBg]}>
        <BrraSuperior
          wifi={require("../assets/wifi1.png")}
          cellularConnection={require("../assets/cellular-connection1.png")}
          cap={require("../assets/cap1.png")}
          brraSuperiorPosition="unset"
          brraSuperiorHeight={32}
        />
        <CoverContainer />
        <View style={styles.infouserprofile}>
          <View style={[styles.infoseguidores, styles.botoneditprofFlexBox]}>
            <View style={styles.parent}>
              <Text style={[styles.text, styles.textFlexBox]}>8</Text>
              <Text style={[styles.post, styles.postTypo]}>post</Text>
            </View>
            <View style={styles.group}>
              <Text style={[styles.text1, styles.textFlexBox]}>823</Text>
              <Text style={[styles.followers, styles.postTypo]}>followers</Text>
            </View>
            <View style={styles.container}>
              <Text style={[styles.text2, styles.text2FlexBox]}>302</Text>
              <Text style={[styles.following, styles.text2FlexBox]}>
                following
              </Text>
            </View>
          </View>
          <Pressable
            style={[styles.botoneditprof, styles.infouserSpaceBlock]}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={[styles.editProfile, styles.editProfileTypo]}>
              Edit profile
            </Text>
          </Pressable>
          <View style={[styles.infouser, styles.infouserSpaceBlock]}>
            <View style={styles.isurname}>
              <Text style={[styles.nombre, styles.nombreFlexBox]}>
                Thomas Weber
              </Text>
              <Text style={[styles.username, styles.nombreFlexBox]}>
                @th.Weber
              </Text>
            </View>
            <Text style={[styles.descripcion, styles.editProfileTypo]}>
              A lover of unique experiences and unforgettable memories 🌟
            </Text>
          </View>
        </View>
        <ScrollView
          style={[styles.scrollprof, styles.profileBg]}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <Image
            style={styles.imgguardadasIcon}
            contentFit="cover"
            source={require("../assets/imgguardadas.png")}
          />
        </ScrollView>
        <View style={styles.barrainferiorvariant6}>
          <BarraInferior
            ellipse4={require("../assets/ellipse-4.png")}
            vector={require("../assets/vector21.png")}
            vector1={require("../assets/vector31.png")}
            ellipse5={require("../assets/ellipse-4.png")}
            iconFavoritos={require("../assets/iconfavoritos1.png")}
            ellipse7={require("../assets/ellipse-4.png")}
            iconPublicar={require("../assets/iconpublicar1.png")}
            ellipse71={require("../assets/ellipse-4.png")}
            iconBuscar={require("../assets/iconbuscar1.png")}
            ellipse9={require("../assets/ellipse-911.png")}
            iconPofile={require("../assets/iconpofile1.png")}
            barraInferiorPosition="unset"
            barraInferiorWidth={360}
            barraInferiorHeight={50}
            barraInferiorMarginLeft="unset"
            barraInferiorBottom="unset"
            barraInferiorLeft="unset"
            iconPofileTop="9.09%"
            iconPofileBottom="18.18%"
            onIconHomePress={() => navigation.navigate("Feed")}
            onIconFavPress={() => navigation.navigate("Fovorite")}
            onIconPubPress={openIconPubContainer}
            onIconBusPress={() => navigation.navigate("Serch")}
            onIconProfPress={() => navigation.navigate("Profile")}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={iconPubContainerVisible}>
        <View style={styles.iconPubContainerOverlay}>
          <Pressable
            style={styles.iconPubContainerBg}
            onPress={closeIconPubContainer}
          />
          <NueaPunlicacion onClose={closeIconPubContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  profileBg: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  botoneditprofFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  textFlexBox: {
    height: 13,
    textAlign: "center",
    letterSpacing: 0,
    display: "flex",
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  postTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  text2FlexBox: {
    height: 10,
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  infouserSpaceBlock: {
    marginTop: 6,
    alignItems: "center",
  },
  editProfileTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
  },
  nombreFlexBox: {
    height: 27,
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  iconPubContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  iconPubContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  text: {
    marginLeft: -10.5,
    width: 20,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    fontSize: FontSize.size_mini,
  },
  post: {
    marginLeft: -17.5,
    top: 10,
    fontSize: FontSize.size_smi,
    fontWeight: "300",
    height: 13,
    textAlign: "center",
    letterSpacing: 0,
    display: "flex",
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 35,
  },
  parent: {
    height: 23,
    width: 35,
  },
  text1: {
    marginLeft: -15,
    width: 30,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    fontSize: FontSize.size_mini,
  },
  followers: {
    marginLeft: -34,
    top: 12,
    width: 68,
    fontSize: FontSize.size_smi,
    fontWeight: "300",
    height: 13,
    textAlign: "center",
    letterSpacing: 0,
    display: "flex",
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  group: {
    height: 25,
    width: 68,
  },
  text2: {
    marginLeft: -19,
    width: 33,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    fontSize: FontSize.size_mini,
  },
  following: {
    marginLeft: -36,
    top: 11,
    width: 72,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
  },
  container: {
    height: 21,
    width: 72,
  },
  infoseguidores: {
    width: 360,
  },
  editProfile: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    flex: 1,
  },
  botoneditprof: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_100,
    width: 122,
    height: 34,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  nombre: {
    left: 0,
    fontSize: FontSize.size_xl,
    width: 225,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
  },
  username: {
    top: 27,
    left: 69,
    width: 87,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_mini,
  },
  isurname: {
    height: 54,
    width: 225,
  },
  descripcion: {
    width: 303,
    height: 28,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    display: "flex",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    justifyContent: "center",
    alignItems: "center",
  },
  infouser: {
    width: 360,
  },
  infouserprofile: {
    zIndex: 2,
    marginTop: 3,
    alignItems: "center",
  },
  imgguardadasIcon: {
    top: 5,
    left: 7,
    width: 345,
    height: 501,
    position: "absolute",
  },
  scrollprof: {
    width: 359,
    maxWidth: 359,
    zIndex: 3,
    marginTop: 3,
  },
  barrainferiorvariant6: {
    marginLeft: -180,
    bottom: 0,
    height: 50,
    zIndex: 4,
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    width: 360,
    alignItems: "center",
  },
  profile: {
    width: "100%",
    height: 650,
    alignItems: "center",
  },
});

export default Profile;
