import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, ScrollView, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NueaPunlicacion from "../components/NueaPunlicacion";
import BarraInferior from "../components/BarraInferior";
import ImgHorizontalIcon from "../components/ImgHorizontalIcon";
import ImgVerticalIcon from "../components/ImgVerticalIcon";
import { Color, Padding } from "../GlobalStyles";

const Fovorite = () => {
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
      <View style={styles.fovorite}>
        <View style={[styles.barrainferiorvariant6, styles.scrollfavPosition]}>
          <BarraInferior
            ellipse4={require("../assets/ellipse-5.png")}
            vector={require("../assets/vector5.png")}
            vector1={require("../assets/vector6.png")}
            ellipse5={require("../assets/ellipse-4.png")}
            iconFavoritos={require("../assets/iconfavoritos1.png")}
            ellipse7={require("../assets/ellipse-5.png")}
            iconPublicar={require("../assets/iconpublicar.png")}
            ellipse71={require("../assets/ellipse-5.png")}
            iconBuscar={require("../assets/iconbuscar.png")}
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
        <View style={[styles.scrollfav, styles.scrollfavPosition]}>
          <ScrollView
            style={styles.scrollfav1}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollFavScrollViewContent}
          >
            <ImgHorizontalIcon
              dimensionsCode={require("../assets/imghorizontal.png")}
            />
            <ImgVerticalIcon
              dimensionsCode={require("../assets/imgvertical.png")}
            />
            <ImgVerticalIcon
              dimensionsCode={require("../assets/imgvertical1.png")}
            />
            <ImgHorizontalIcon
              dimensionsCode={require("../assets/imghorizontal1.png")}
            />
            <ImgHorizontalIcon
              dimensionsCode={require("../assets/imghorizontal2.png")}
            />
            <ImgVerticalIcon
              dimensionsCode={require("../assets/imgvertical2.png")}
            />
            <ImgVerticalIcon
              dimensionsCode={require("../assets/imgvertical3.png")}
            />
            <ImgHorizontalIcon
              dimensionsCode={require("../assets/imghorizontal3.png")}
            />
            <ImgVerticalIcon
              dimensionsCode={require("../assets/imgvertical4.png")}
            />
            <ImgHorizontalIcon
              dimensionsCode={require("../assets/imghorizontal4.png")}
            />
            <ImgHorizontalIcon
              dimensionsCode={require("../assets/imghorizontal5.png")}
            />
            <ImgVerticalIcon
              dimensionsCode={require("../assets/imgvertical5.png")}
            />
            <ImgHorizontalIcon
              dimensionsCode={require("../assets/imghorizontal6.png")}
            />
            <ImgVerticalIcon
              dimensionsCode={require("../assets/imgvertical6.png")}
            />
            <ImgVerticalIcon
              dimensionsCode={require("../assets/imgvertical7.png")}
            />
            <ImgHorizontalIcon
              dimensionsCode={require("../assets/imghorizontal7.png")}
            />
            <ImgHorizontalIcon
              dimensionsCode={require("../assets/imghorizontal8.png")}
            />
            <ImgVerticalIcon
              dimensionsCode={require("../assets/imgvertical8.png")}
            />
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
  scrollFavScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  scrollfavPosition: {
    alignItems: "center",
    marginLeft: -180,
    left: "50%",
    position: "absolute",
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
    bottom: -1,
    width: 360,
    height: 50,
    justifyContent: "center",
  },
  scrollfav1: {
    marginLeft: -174.5,
    top: 0,
    bottom: 0,
    backgroundColor: Color.colorGray_100,
    width: 349,
    maxWidth: 349,
    zIndex: 0,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
    flex: 1,
  },
  scrollfav: {
    top: 31,
    bottom: 52,
    width: 359,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    overflow: "hidden",
  },
  fovorite: {
    width: "100%",
    height: 650,
    overflow: "hidden",
    flex: 1,
  },
});

export default Fovorite;
