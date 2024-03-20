import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NueaPunlicacion from "../components/NueaPunlicacion";
import BrraSuperior from "../components/BrraSuperior";
import ImgHorizontalIcon from "../components/ImgHorizontalIcon";
import ImgVerticalIcon from "../components/ImgVerticalIcon";
import BarraInferior from "../components/BarraInferior";
import { Color } from "../GlobalStyles";

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
        <BrraSuperior
          wifi={require("../assets/wifi1.png")}
          cellularConnection={require("../assets/cellular-connection1.png")}
          cap={require("../assets/cap1.png")}
          brraSuperiorPosition="unset"
          brraSuperiorHeight={32}
        />
        <ScrollView
          style={styles.scrollfav}
          horizontal={false}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
        >
          <ImgHorizontalIcon
            dimensionId={require("../assets/imghorizontal.png")}
            propTop={0}
            propLeft={6}
          />
          <ImgVerticalIcon
            imageDimensionsId={require("../assets/imgvertical.png")}
            propTop={0}
            propLeft={191}
          />
          <ImgVerticalIcon
            imageDimensionsId={require("../assets/imgvertical1.png")}
            propTop={182}
            propLeft={0}
          />
          <ImgHorizontalIcon
            dimensionId={require("../assets/imghorizontal1.png")}
            propTop={240}
            propLeft={164}
          />
          <ImgHorizontalIcon
            dimensionId={require("../assets/imghorizontal2.png")}
            propTop={422}
          />
          <ImgVerticalIcon
            imageDimensionsId={require("../assets/imgvertical2.png")}
            propTop={422}
            propLeft={185}
          />
          <ImgVerticalIcon
            imageDimensionsId={require("../assets/imgvertical3.png")}
            propTop={604}
            propLeft={0}
          />
          <ImgHorizontalIcon
            dimensionId={require("../assets/imghorizontal3.png")}
            propTop={662}
            propLeft={164}
          />
          <ImgVerticalIcon
            imageDimensionsId={require("../assets/imgvertical4.png")}
            propTop={844}
            propLeft={0}
          />
          <ImgHorizontalIcon
            dimensionId={require("../assets/imghorizontal4.png")}
            propTop={844}
            propLeft={164}
          />
          <ImgHorizontalIcon
            dimensionId={require("../assets/imghorizontal5.png")}
            propTop={1084}
          />
          <ImgVerticalIcon
            imageDimensionsId={require("../assets/imgvertical5.png")}
            propTop={1026}
            propLeft={180}
          />
          <ImgHorizontalIcon
            dimensionId={require("../assets/imghorizontal6.png")}
            propTop={1266}
          />
          <ImgVerticalIcon
            imageDimensionsId={require("../assets/imgvertical6.png")}
            propTop={1266}
            propLeft={185}
          />
          <ImgVerticalIcon
            imageDimensionsId={require("../assets/imgvertical7.png")}
            propTop={1448}
            propLeft={0}
          />
          <ImgHorizontalIcon
            dimensionId={require("../assets/imghorizontal7.png")}
            propTop={1506}
            propLeft={164}
          />
          <ImgHorizontalIcon
            dimensionId={require("../assets/imghorizontal8.png")}
          />
          <ImgVerticalIcon
            imageDimensionsId={require("../assets/imgvertical8.png")}
          />
        </ScrollView>
        <View style={styles.barrainferiorvariant6}>
          <BarraInferior
            ellipse4={require("../assets/ellipse-4.png")}
            vector={require("../assets/vector21.png")}
            vector1={require("../assets/vector31.png")}
            ellipse5={require("../assets/ellipse-54.png")}
            iconFavoritos={require("../assets/iconfavoritos4.png")}
            ellipse7={require("../assets/ellipse-4.png")}
            iconPublicar={require("../assets/iconpublicar3.png")}
            ellipse71={require("../assets/ellipse-4.png")}
            iconBuscar={require("../assets/iconbuscar1.png")}
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
  scrollfav: {
    backgroundColor: Color.colorGray_100,
    maxWidth: 360,
    width: 360,
    flex: 1,
  },
  barrainferiorvariant6: {
    height: 50,
    justifyContent: "center",
    width: 360,
    alignItems: "center",
  },
  fovorite: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 650,
    overflow: "hidden",
    alignItems: "center",
    flex: 1,
  },
});

export default Fovorite;
