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
import BarraInferior from "../components/BarraInferior";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Feed = () => {
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
      <View style={styles.feed}>
        <BrraSuperior
          wifi={require("../assets/wifi1.png")}
          cellularConnection={require("../assets/cellular-connection1.png")}
          cap={require("../assets/cap1.png")}
          brraSuperiorPosition="unset"
          brraSuperiorHeight={32}
        />
        <View style={[styles.barrainferiorvariant6, styles.imgpubliPosition]}>
          <BarraInferior
            ellipse4={require("../assets/ellipse-54.png")}
            vector={require("../assets/vector12.png")}
            vector1={require("../assets/vector13.png")}
            ellipse5={require("../assets/ellipse-4.png")}
            iconFavoritos={require("../assets/iconfavoritos1.png")}
            ellipse7={require("../assets/ellipse-4.png")}
            iconPublicar={require("../assets/iconpublicar3.png")}
            ellipse71={require("../assets/ellipse-4.png")}
            iconBuscar={require("../assets/iconbuscar1.png")}
            ellipse9={require("../assets/ellipse-94.png")}
            iconPofile={require("../assets/iconpofile5.png")}
            barraInferiorPosition="absolute"
            barraInferiorWidth={360}
            barraInferiorHeight={50}
            barraInferiorMarginLeft={-180}
            barraInferiorBottom={0}
            barraInferiorLeft="50%"
            iconPofileTop="12.12%"
            iconPofileBottom="15.15%"
            onIconHomePress={() => navigation.navigate("Feed")}
            onIconFavPress={() => navigation.navigate("Fovorite")}
            onIconPubPress={openIconPubContainer}
            onIconBusPress={() => navigation.navigate("Serch")}
            onIconProfPress={() => navigation.navigate("Profile")}
          />
        </View>
        <View style={[styles.scroll, styles.scrollPosition]}>
          <ScrollView
            style={[styles.publicaciones, styles.fondoPosition]}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.publicacionesScrollViewContent}
          >
            <View style={[styles.publicacion, styles.infolikedFlexBox]}>
              <View style={[styles.fondo, styles.fondoPosition]}>
                <View style={styles.fondopubli} />
              </View>
              <View style={[styles.imgpubli, styles.imgpubliPosition]}>
                <Image
                  style={styles.imgpubliChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-7.png")}
                />
              </View>
              <View style={[styles.iconinteractivos, styles.likedPosition]}>
                <Image
                  style={styles.mdiheartIcon}
                  contentFit="cover"
                  source={require("../assets/mdiheart.png")}
                />
                <Image
                  style={[styles.mdiLightcommentIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/mdilightcomment.png")}
                />
                <Image
                  style={[styles.mdiLightcommentIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/circumshare1.png")}
                />
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
              </View>
              <View style={styles.userdescrip}>
                <Text style={[styles.alanna36, styles.alannaLayout]}>
                  Alanna36
                </Text>
                <Text
                  style={[styles.paseoPorLas, styles.alanna36FlexBox]}
                >{`Paseo por las calles de New York
`}</Text>
              </View>
              <View style={[styles.comments, styles.commentsPosition]}>
                <Text style={styles.viewAll12}>View all 12 comments</Text>
              </View>
              <View style={[styles.liked, styles.likedPosition]}>
                <Image
                  style={styles.imglikedIcon}
                  contentFit="cover"
                  source={require("../assets/imgliked.png")}
                />
                <View style={[styles.infoliked, styles.infolikedFlexBox]}>
                  <Text style={styles.likedByGonzalo99Container}>
                    <Text style={styles.likedBy}>Liked by</Text>
                    <Text style={styles.gonzalo99}> gonzalo99</Text>
                    <Text style={styles.text}>{` `}</Text>
                    <Text style={styles.likedBy}>and</Text>
                    <Text style={styles.text}>{` `}</Text>
                    <Text style={styles.others}>310 others</Text>
                  </Text>
                </View>
              </View>
              <View style={[styles.rectsuperior, styles.commentsPosition]}>
                <View style={styles.user}>
                  <Image
                    style={styles.imguserIcon}
                    contentFit="cover"
                    source={require("../assets/imguser.png")}
                  />
                  <Text style={[styles.nombreuser, styles.alanna362Typo]}>
                    Alanna36
                  </Text>
                </View>
                <Text style={styles.textTypo}>...</Text>
              </View>
            </View>
            <View style={[styles.publicacion, styles.infolikedFlexBox]}>
              <View style={[styles.fondo, styles.fondoPosition]}>
                <View style={styles.fondopubli} />
              </View>
              <View style={[styles.imgpubli, styles.imgpubliPosition]}>
                <Image
                  style={styles.imgpubliChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-71.png")}
                />
              </View>
              <View style={[styles.iconinteractivos, styles.likedPosition]}>
                <Image
                  style={styles.mdiheartIcon}
                  contentFit="cover"
                  source={require("../assets/mdiheart.png")}
                />
                <Image
                  style={[styles.mdiLightcommentIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/mdilightcomment.png")}
                />
                <Image
                  style={[styles.mdiLightcommentIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/circumshare11.png")}
                />
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
              </View>
              <View style={styles.userdescrip}>
                <Text style={[styles.alanna36, styles.alannaLayout]}>
                  Halle_Kunze
                </Text>
                <Text
                  style={[styles.paseoPorLas, styles.alanna36FlexBox]}
                >{`Quebec city `}</Text>
              </View>
              <View style={[styles.comments, styles.commentsPosition]}>
                <Text style={styles.viewAll12}>View all 7 comments</Text>
              </View>
              <View style={[styles.liked, styles.likedPosition]}>
                <Image
                  style={styles.imglikedIcon}
                  contentFit="cover"
                  source={require("../assets/imgliked.png")}
                />
                <View style={[styles.infoliked, styles.infolikedFlexBox]}>
                  <Text style={styles.likedByGonzalo99Container}>
                    <Text style={styles.likedBy}>Liked by</Text>
                    <Text style={styles.gonzalo99}> gonzalo99</Text>
                    <Text style={styles.text}>{` `}</Text>
                    <Text style={styles.likedBy}>and</Text>
                    <Text style={styles.text}>{` `}</Text>
                    <Text style={styles.others}>310 others</Text>
                  </Text>
                </View>
              </View>
              <View style={[styles.rectsuperior, styles.commentsPosition]}>
                <View style={styles.user}>
                  <Image
                    style={styles.imguserIcon}
                    contentFit="cover"
                    source={require("../assets/imguser1.png")}
                  />
                  <Text style={[styles.nombreuser, styles.alanna362Typo]}>
                    Halle_Kunze
                  </Text>
                </View>
                <Text style={styles.textTypo}>...</Text>
              </View>
            </View>
            <View style={[styles.publicacion, styles.infolikedFlexBox]}>
              <View style={[styles.fondo, styles.fondoPosition]}>
                <View style={styles.fondopubli} />
              </View>
              <View style={[styles.imgpubli, styles.imgpubliPosition]}>
                <Image
                  style={styles.imgpubliChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-72.png")}
                />
              </View>
              <View style={[styles.iconinteractivos, styles.likedPosition]}>
                <Image
                  style={styles.mdiheartIcon}
                  contentFit="cover"
                  source={require("../assets/mdiheart.png")}
                />
                <Image
                  style={[styles.mdiLightcommentIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/mdilightcomment.png")}
                />
                <Image
                  style={[styles.mdiLightcommentIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/circumshare11.png")}
                />
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
              </View>
              <View style={styles.userdescrip}>
                <Text style={[styles.alanna362, styles.alanna362Typo]}>
                  Beatrice
                </Text>
                <Text style={[styles.paseoPorLas, styles.alanna36FlexBox]}>
                  omg, the beauty of the valley of monuments
                </Text>
              </View>
              <View style={[styles.comments, styles.commentsPosition]}>
                <Text style={styles.viewAll12}>View all 111 comments</Text>
              </View>
              <View style={[styles.liked, styles.likedPosition]}>
                <Image
                  style={styles.imglikedIcon}
                  contentFit="cover"
                  source={require("../assets/imgliked1.png")}
                />
                <View style={[styles.infoliked, styles.infolikedFlexBox]}>
                  <Text style={styles.likedByGonzalo99Container}>
                    <Text style={styles.likedBy}>Liked by</Text>
                    <Text style={styles.gonzalo99}> Alanna36</Text>
                    <Text style={styles.text}>{` `}</Text>
                    <Text style={styles.likedBy}>and</Text>
                    <Text style={styles.text}>{` `}</Text>
                    <Text style={styles.others}>637 others</Text>
                  </Text>
                </View>
              </View>
              <View style={[styles.rectsuperior, styles.commentsPosition]}>
                <View style={styles.user}>
                  <Image
                    style={styles.imguserIcon}
                    contentFit="cover"
                    source={require("../assets/imguser2.png")}
                  />
                  <Text style={[styles.nombreuser, styles.alanna362Typo]}>
                    Beatrice
                  </Text>
                </View>
                <Text style={styles.textTypo}>...</Text>
              </View>
            </View>
            <View style={[styles.publicacion, styles.infolikedFlexBox]}>
              <View style={[styles.fondo, styles.fondoPosition]}>
                <View style={styles.fondopubli} />
              </View>
              <View style={[styles.imgpubli, styles.imgpubliPosition]}>
                <Image
                  style={styles.imgpubliChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-73.png")}
                />
              </View>
              <View style={[styles.iconinteractivos, styles.likedPosition]}>
                <Image
                  style={styles.mdiheartIcon}
                  contentFit="cover"
                  source={require("../assets/mdiheart.png")}
                />
                <Image
                  style={[styles.mdiLightcommentIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/mdilightcomment.png")}
                />
                <Image
                  style={[styles.mdiLightcommentIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/circumshare11.png")}
                />
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
              </View>
              <View style={styles.userdescrip}>
                <Text style={[styles.alanna362, styles.alanna362Typo]}>
                  Francisco_Keeling
                </Text>
                <Text style={[styles.paseoPorLas, styles.alanna36FlexBox]}>
                  Happy Place ♡
                </Text>
              </View>
              <View style={[styles.comments, styles.commentsPosition]}>
                <Text style={styles.viewAll12}>View all 53 comments</Text>
              </View>
              <View style={[styles.liked, styles.likedPosition]}>
                <Image
                  style={styles.imglikedIcon}
                  contentFit="cover"
                  source={require("../assets/imgliked.png")}
                />
                <View style={[styles.infoliked, styles.infolikedFlexBox]}>
                  <Text style={styles.likedByGonzalo99Container}>
                    <Text style={styles.likedBy}>Liked by</Text>
                    <Text style={styles.gonzalo99}> gonzalo99</Text>
                    <Text style={styles.text}>{` `}</Text>
                    <Text style={styles.likedBy}>and</Text>
                    <Text style={styles.text}>{` `}</Text>
                    <Text style={styles.others}>456 others</Text>
                  </Text>
                </View>
              </View>
              <View style={[styles.rectsuperior, styles.commentsPosition]}>
                <View style={styles.user}>
                  <Image
                    style={styles.imguserIcon}
                    contentFit="cover"
                    source={require("../assets/imguser.png")}
                  />
                  <Text style={[styles.nombreuser, styles.alanna362Typo]}>
                    Francisco_Keeling
                  </Text>
                </View>
                <Text style={styles.textTypo}>...</Text>
              </View>
            </View>
          </ScrollView>
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
  publicacionesScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imgpubliPosition: {
    zIndex: 1,
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
  },
  scrollPosition: {
    width: 360,
    left: "50%",
    marginLeft: -180,
  },
  fondoPosition: {
    zIndex: 0,
    flex: 1,
  },
  infolikedFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  likedPosition: {
    left: 21,
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    marginLeft: 70,
    width: 25,
    maxHeight: "100%",
    alignSelf: "stretch",
  },
  alannaLayout: {
    width: 120,
    alignSelf: "stretch",
  },
  alanna36FlexBox: {
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: FontSize.size_smi,
    alignItems: "center",
  },
  commentsPosition: {
    left: 19,
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
  },
  alanna362Typo: {
    fontSize: FontSize.size_mini,
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
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
  barrainferiorvariant6: {
    height: 50,
    width: 360,
    left: "50%",
    marginLeft: -180,
    bottom: 0,
  },
  fondopubli: {
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    height: 350,
    borderRadius: Border.br_base,
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  fondo: {
    padding: Padding.p_3xs,
    alignSelf: "stretch",
  },
  imgpubliChild: {
    borderRadius: Border.br_xs,
    maxWidth: "100%",
    maxHeight: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  imgpubli: {
    marginTop: -131,
    right: 5,
    left: 5,
    height: 214,
    top: "50%",
    padding: Padding.p_3xs,
  },
  mdiheartIcon: {
    width: 25,
    maxHeight: "100%",
    borderRadius: Border.br_base,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  mdiLightcommentIcon: {
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  iconinteractivos: {
    marginTop: 78,
    height: 24,
    right: 15,
    top: "50%",
    zIndex: 2,
  },
  alanna36: {
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: FontSize.size_smi,
    alignItems: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    width: 120,
  },
  paseoPorLas: {
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    marginLeft: 5,
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: FontSize.size_smi,
    alignSelf: "stretch",
    flex: 1,
  },
  userdescrip: {
    bottom: 28,
    left: 14,
    zIndex: 3,
    height: 32,
    right: 15,
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
  },
  viewAll12: {
    height: 16,
    color: Color.colorSilver,
    fontSize: FontSize.size_3xs,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  comments: {
    bottom: 11,
    height: 19,
    zIndex: 4,
    right: 145,
    padding: Padding.p_3xs,
  },
  imglikedIcon: {
    width: 15,
    height: 13,
    borderRadius: Border.br_base,
  },
  likedBy: {
    color: Color.colorSilver,
  },
  gonzalo99: {
    color: Color.colorGray_300,
  },
  text: {
    color: Color.colorGainsboro_200,
  },
  others: {
    color: Color.colorDimgray,
  },
  likedByGonzalo99Container: {
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
  },
  infoliked: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  liked: {
    bottom: 55,
    height: 22,
    zIndex: 5,
    right: 145,
    alignItems: "center",
  },
  imguserIcon: {
    width: 34,
    height: 32,
    borderRadius: Border.br_base,
  },
  nombreuser: {
    width: 193,
    height: 11,
  },
  user: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  textTypo: {
    marginLeft: 10,
    transform: [
      {
        rotate: "-89.48deg",
      },
    ],
    height: 27,
    width: 23,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  rectsuperior: {
    top: 22,
    right: 19,
    zIndex: 6,
    flexDirection: "row",
  },
  publicacion: {
    height: 370,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  alanna362: {
    width: 120,
    alignSelf: "stretch",
  },
  publicaciones: {
    top: 0,
    maxWidth: 360,
    width: 360,
    left: "50%",
    marginLeft: -180,
    bottom: 0,
    position: "absolute",
    overflow: "hidden",
  },
  scroll: {
    top: 32,
    bottom: 53,
    backgroundColor: Color.colorGray_100,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    zIndex: 2,
    left: "50%",
    marginLeft: -180,
    position: "absolute",
    alignItems: "center",
    overflow: "hidden",
  },
  feed: {
    height: 650,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Feed;
