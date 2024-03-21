import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ImageBackground,
  Pressable,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NueaPunlicacion from "../components/NueaPunlicacion";
import ResultBuscado from "../components/ResultBuscado";
import BarraInferior from "../components/BarraInferior";
import { FontSize, FontFamily, Padding, Color } from "../GlobalStyles";

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
        <View style={[styles.buscar, styles.buscarPosition]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <TextInput
            style={[styles.search, styles.searchTypo]}
            placeholder="Search"
            placeholderTextColor="#fff"
          />
        </View>
        <View style={[styles.recent, styles.buscarPosition]}>
          <Text style={[styles.recent1, styles.searchTypo]}>Recent</Text>
        </View>
        <View style={[styles.resultadosbuscados, styles.buscarPosition]}>
          <View style={styles.property1default}>
            <ResultBuscado
              ellipse8={require("../assets/ellipse-81.png")}
              venezuela="venezuela"
              mPosts="5.7M posts"
              resultBuscadoPosition="unset"
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              ellipse8={require("../assets/ellipse-81.png")}
              venezuela="Moscú"
              mPosts="144k posts"
              resultBuscadoPosition="unset"
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              ellipse8={require("../assets/ellipse-81.png")}
              venezuela="NewYorkCity"
              mPosts="35.8M posts"
              resultBuscadoPosition="unset"
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              ellipse8={require("../assets/ellipse-811.png")}
              venezuela="Sidney_Bruen43"
              mPosts="Sidney Violet Bruen"
              resultBuscadoPosition="unset"
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              ellipse8={require("../assets/ellipse-82.png")}
              venezuela="Bobbie.traveler"
              mPosts="Bobbie Jackon 🐾"
              resultBuscadoPosition="unset"
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              ellipse8={require("../assets/ellipse-83.png")}
              venezuela="Francisco_Keeling"
              mPosts="Frann Kelling"
              resultBuscadoPosition="unset"
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              ellipse8={require("../assets/ellipse-84.png")}
              venezuela="#Alanna36"
              mPosts="Alanna Sucker"
              resultBuscadoPosition="unset"
            />
          </View>
          <View style={styles.property1default1}>
            <ResultBuscado
              ellipse8={require("../assets/ellipse-85.png")}
              venezuela="travel_agency_kit"
              mPosts="Kit"
              resultBuscadoPosition="unset"
            />
          </View>
        </View>
        <View style={[styles.barrainferiorvariant6, styles.buscarPosition]}>
          <BarraInferior
            ellipse4={require("../assets/ellipse-5.png")}
            vector={require("../assets/vector5.png")}
            vector1={require("../assets/vector6.png")}
            ellipse5={require("../assets/ellipse-5.png")}
            iconFavoritos={require("../assets/iconfavoritos.png")}
            ellipse7={require("../assets/ellipse-5.png")}
            iconPublicar={require("../assets/iconpublicar.png")}
            ellipse71={require("../assets/ellipse-4.png")}
            iconBuscar={require("../assets/iconbuscar1.png")}
            ellipse9={require("../assets/ellipse-93.png")}
            iconPofile={require("../assets/iconpofile2.png")}
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
  buscarPosition: {
    justifyContent: "center",
    left: "50%",
    position: "absolute",
  },
  searchTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    flex: 1,
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
    marginLeft: 6,
  },
  buscar: {
    marginLeft: -174,
    top: 31,
    borderRadius: 15,
    backgroundColor: "#c1cebd",
    width: 349,
    height: 45,
    paddingHorizontal: 14,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
    position: "absolute",
    flexDirection: "row",
  },
  recent1: {
    letterSpacing: 0,
    color: Color.colorBlack,
    textAlign: "center",
  },
  recent: {
    marginLeft: -179,
    top: 79,
    width: 359,
    height: 40,
    padding: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
    position: "absolute",
    flexDirection: "row",
  },
  property1default: {
    width: 340,
    flexDirection: "row",
  },
  property1default1: {
    flexDirection: "row",
  },
  resultadosbuscados: {
    marginLeft: -171,
    top: 125,
    borderRadius: 5,
    width: 342,
    height: 475,
    paddingHorizontal: 0,
    paddingVertical: 20,
    justifyContent: "center",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  barrainferiorvariant6: {
    marginLeft: -180,
    bottom: 0,
    width: 360,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
    position: "absolute",
  },
  serch: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 650,
    overflow: "hidden",
    flex: 1,
  },
});

export default Serch;
