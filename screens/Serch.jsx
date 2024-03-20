import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NueaPunlicacion from "../components/NueaPunlicacion";
import BrraSuperior from "../components/BrraSuperior";
import ResultBuscado from "../components/ResultBuscado";
import BarraInferior from "../components/BarraInferior";
import { FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const Serch = () => {
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
      <View style={styles.serch}>
        <BrraSuperior
          wifi={require("../assets/wifi1.png")}
          cellularConnection={require("../assets/cellular-connection1.png")}
          cap={require("../assets/cap1.png")}
          brraSuperiorPosition="unset"
          brraSuperiorHeight={32}
        />
        <View style={styles.buscar}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector10.png")}
          />
          <Text style={[styles.search, styles.searchFlexBox]}>Search</Text>
        </View>
        <View style={[styles.recent, styles.recentFlexBox]}>
          <Text style={[styles.recent1, styles.mPostsTypo]}>Recent</Text>
        </View>
        <View style={styles.resultadosbuscados}>
          <View style={styles.property1default}>
            <ResultBuscado
              countryCode={require("../assets/ellipse-81.png")}
              venezuelaTag="venezuela"
              postCountText="5.7M posts"
              resultBuscadoPosition="unset"
              resultBuscadoWidth={359}
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              countryCode={require("../assets/ellipse-81.png")}
              venezuelaTag="Moscú"
              postCountText="144k posts"
              resultBuscadoPosition="unset"
              resultBuscadoWidth={359}
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              countryCode={require("../assets/ellipse-81.png")}
              venezuelaTag="NewYorkCity"
              postCountText="35.8M posts"
              resultBuscadoPosition="unset"
              resultBuscadoWidth={359}
            />
          </View>
          <View style={styles.property1default1}>
            <View style={[styles.resultbuscado, styles.recentFlexBox]}>
              <ImageBackground
                style={styles.property1default1}
                resizeMode="cover"
                source={require("../assets/imgbuscado.png")}
              >
                <Image
                  style={styles.imgbuscadoChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-82.png")}
                />
              </ImageBackground>
              <View style={styles.textbuscado}>
                <Text style={[styles.venezuela, styles.mPostsTypo]}>
                  Sidney_Bruen43
                </Text>
                <Text style={[styles.mPosts, styles.mPostsTypo]}>
                  Sidney Violet Bruen
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              countryCode={require("../assets/ellipse-83.png")}
              venezuelaTag="Bobbie.traveler"
              postCountText="Bobbie Jackon 🐾"
              resultBuscadoPosition="unset"
              resultBuscadoWidth={359}
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              countryCode={require("../assets/ellipse-84.png")}
              venezuelaTag="Francisco_Keeling"
              postCountText="Frann Kelling"
              resultBuscadoPosition="unset"
              resultBuscadoWidth={359}
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              countryCode={require("../assets/ellipse-85.png")}
              venezuelaTag="#Alanna36"
              postCountText="Alanna Sucker"
              resultBuscadoPosition="unset"
              resultBuscadoWidth={359}
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              countryCode={require("../assets/ellipse-86.png")}
              venezuelaTag="travel_agency_kit"
              postCountText="Kit"
              resultBuscadoPosition="unset"
              resultBuscadoWidth={359}
            />
          </View>
        </View>
        <View style={styles.barrainferiorvariant6}>
          <BarraInferior
            ellipse4={require("../assets/ellipse-4.png")}
            vector={require("../assets/vector21.png")}
            vector1={require("../assets/vector31.png")}
            ellipse5={require("../assets/ellipse-4.png")}
            iconFavoritos={require("../assets/iconfavoritos1.png")}
            ellipse7={require("../assets/ellipse-4.png")}
            iconPublicar={require("../assets/iconpublicar3.png")}
            ellipse71={require("../assets/ellipse-54.png")}
            iconBuscar={require("../assets/iconbuscar4.png")}
            ellipse9={require("../assets/ellipse-93.png")}
            iconPofile={require("../assets/iconpofile4.png")}
            barraInferiorPosition="unset"
            barraInferiorWidth={360}
            barraInferiorHeight={50}
            barraInferiorMarginLeft="unset"
            barraInferiorBottom="unset"
            barraInferiorLeft="unset"
            iconPofileTop="12.12%"
            iconPofileBottom="15.15%"
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
  searchFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  recentFlexBox: {
    width: 359,
    flexDirection: "row",
    alignItems: "center",
  },
  mPostsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
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
  vectorIcon: {
    width: 24,
    height: 24,
  },
  search: {
    color: Color.colorWhite,
    textAlign: "center",
    height: 19,
    marginLeft: 6,
    justifyContent: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    display: "flex",
    flex: 1,
  },
  buscar: {
    borderRadius: 15,
    backgroundColor: "#c1cebd",
    width: 349,
    paddingHorizontal: 14,
    paddingVertical: Padding.p_4xs,
    zIndex: 1,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  recent1: {
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    flex: 1,
  },
  recent: {
    padding: Padding.p_3xs,
    zIndex: 2,
    justifyContent: "center",
    marginTop: 5,
  },
  property1default: {
    width: 340,
    flexDirection: "row",
  },
  property1default1: {
    flexDirection: "row",
  },
  imgbuscadoChild: {
    width: 30,
    height: 30,
  },
  venezuela: {
    height: 46,
    alignSelf: "stretch",
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    display: "flex",
    alignItems: "center",
  },
  mPosts: {
    fontSize: FontSize.size_3xs,
    color: Color.colorGainsboro_200,
    height: 12,
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
  },
  textbuscado: {
    alignSelf: "stretch",
    justifyContent: "center",
    flex: 1,
  },
  resultbuscado: {
    height: 56,
    backgroundColor: Color.colorWhite,
  },
  resultadosbuscados: {
    borderRadius: 5,
    width: 342,
    height: 473,
    paddingHorizontal: 0,
    paddingVertical: 20,
    zIndex: 3,
    justifyContent: "center",
    marginTop: 5,
    overflow: "hidden",
  },
  barrainferiorvariant6: {
    position: "absolute",
    marginLeft: -180,
    bottom: 0,
    left: "50%",
    width: 360,
    height: 50,
    zIndex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  serch: {
    width: "100%",
    height: 650,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Serch;
