import React, { useState, useCallback } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import NueaPunlicacion from "../components/NueaPunlicacion";
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
      <View style={[styles.profile, styles.profileLayout]}>
        <CoverContainer />
        <View style={[styles.infouserprofile, styles.infouserprofilePosition]}>
          <View style={[styles.infoseguidores, styles.imgguardadasFlexBox]}>
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
            style={[styles.botoneditprof, styles.infouserFlexBox]}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={[styles.editProfile, styles.editProfileTypo]}>
              Edit profile
            </Text>
          </Pressable>
          <View style={[styles.infouser, styles.infouserFlexBox]}>
            <View style={styles.isurname}>
              <Text style={[styles.nombre, styles.nombreFlexBox]}>
                Thomas Weber
              </Text>
              <Text style={[styles.username, styles.postTypo]}>@th.Weber</Text>
            </View>
            <Text style={[styles.descripcion, styles.editProfileTypo]}>
              A lover of unique experiences and unforgettable memories 🌟
            </Text>
          </View>
        </View>
        <ScrollView
          style={[styles.scrollprof, styles.scrollprofPosition]}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.scrollProfScrollViewContent}
        >
          <View style={[styles.imgguardadas, styles.scrollprofPosition]}>
            <Image
              style={styles.imgguardadasChild}
              contentFit="cover"
              source={require("../assets/rectangle-11.png")}
            />
            <Image
              style={[styles.imgguardadasItem, styles.imgguardadasLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-12.png")}
            />
            <Image
              style={[styles.imgguardadasInner, styles.imgguardadasLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-19.png")}
            />
            <Image
              style={[styles.imgguardadasInner, styles.imgguardadasLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-14.png")}
            />
            <Image
              style={[styles.imgguardadasItem, styles.imgguardadasLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-121.png")}
            />
            <Image
              style={[styles.imgguardadasInner, styles.imgguardadasLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-18.png")}
            />
            <Image
              style={[styles.imgguardadasItem, styles.imgguardadasLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-17.png")}
            />
            <Image
              style={[styles.imgguardadasItem, styles.imgguardadasLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-15.png")}
            />
            <Image
              style={[styles.imgguardadasInner, styles.imgguardadasLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-16.png")}
            />
          </View>
        </ScrollView>
        <View
          style={[styles.barrainferiorvariant6, styles.infouserprofilePosition]}
        >
          <BarraInferior
            ellipse4={require("../assets/ellipse-5.png")}
            vector={require("../assets/vector5.png")}
            vector1={require("../assets/vector6.png")}
            ellipse5={require("../assets/ellipse-5.png")}
            iconFavoritos={require("../assets/iconfavoritos.png")}
            ellipse7={require("../assets/ellipse-5.png")}
            iconPublicar={require("../assets/iconpublicar11.png")}
            ellipse71={require("../assets/ellipse-5.png")}
            iconBuscar={require("../assets/iconbuscar.png")}
            ellipse9={require("../assets/ellipse-92.png")}
            iconPofile={require("../assets/iconpofile11.png")}
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
  scrollProfScrollViewContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profileLayout: {
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  infouserprofilePosition: {
    alignItems: "center",
    left: "50%",
    marginLeft: -180,
    position: "absolute",
    justifyContent: "center",
  },
  imgguardadasFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textFlexBox: {
    height: 13,
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
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
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  infouserFlexBox: {
    marginTop: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  editProfileTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
  },
  nombreFlexBox: {
    display: "flex",
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollprofPosition: {
    top: "50%",
    height: 163,
    position: "absolute",
  },
  imgguardadasLayout: {
    marginLeft: 10,
    width: 164,
    borderRadius: Border.br_xs,
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
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
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
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
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
    height: 34,
    width: 360,
    justifyContent: "center",
  },
  editProfile: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    flex: 1,
  },
  botoneditprof: {
    backgroundColor: Color.colorGray_100,
    width: 122,
    height: 26,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_xs,
    marginTop: 6,
    flexDirection: "row",
  },
  nombre: {
    marginLeft: -112,
    fontSize: FontSize.size_lg,
    height: 22,
    width: 225,
    textAlign: "center",
    letterSpacing: 0,
    display: "flex",
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
  },
  username: {
    marginLeft: -43,
    top: 22,
    width: 87,
    height: 27,
    display: "flex",
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
    fontSize: FontSize.size_mini,
  },
  isurname: {
    height: 46,
    width: 225,
  },
  descripcion: {
    width: 303,
    height: 28,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    display: "flex",
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    fontSize: FontSize.size_xs,
  },
  infouser: {
    width: 360,
  },
  infouserprofile: {
    top: 244,
    height: 187,
    justifyContent: "center",
  },
  imgguardadasChild: {
    width: 164,
    height: 163,
    borderRadius: Border.br_xs,
  },
  imgguardadasItem: {
    height: 163,
  },
  imgguardadasInner: {
    height: 98,
  },
  imgguardadas: {
    marginTop: -81.5,
    right: 0,
    left: 0,
    zIndex: 0,
    height: 163,
    flexDirection: "row",
    alignItems: "center",
  },
  scrollprof: {
    marginTop: 112,
    right: 7,
    left: 8,
    maxHeight: 163,
    height: 163,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  barrainferiorvariant6: {
    bottom: 0,
    height: 50,
    width: 360,
    justifyContent: "center",
  },
  profile: {
    height: 650,
    overflow: "hidden",
    flex: 1,
  },
});

export default Profile;
