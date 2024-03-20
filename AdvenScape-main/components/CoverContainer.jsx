import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Modal } from "react-native";
import MenuProfile from "./MenuProfile";
import { Padding, Border } from "../GlobalStyles";

const CoverContainer = () => {
  const [
    menuPcionesSalirContainerVisible,
    setMenuPcionesSalirContainerVisible,
  ] = useState(false);

  const openMenuPcionesSalirContainer = useCallback(() => {
    setMenuPcionesSalirContainerVisible(true);
  }, []);

  const closeMenuPcionesSalirContainer = useCallback(() => {
    setMenuPcionesSalirContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.cuadroportada}>
        <View style={[styles.portada, styles.portadaSpaceBlock]}>
          <Image
            style={styles.portadaChild}
            contentFit="cover"
            source={require("../assets/rectangle-2.png")}
          />
        </View>
        <View style={[styles.imgperfil, styles.portadaSpaceBlock]}>
          <Image
            style={styles.imgperfilChild}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
        </View>
        <Pressable
          style={styles.menupcionessalir}
          onPress={openMenuPcionesSalirContainer}
        >
          <Image
            style={styles.menupcionessalirChild}
            contentFit="cover"
            source={require("../assets/ellipse-91.png")}
          />
          <Image
            style={styles.mingcutegridLineIcon}
            contentFit="cover"
            source={require("../assets/mingcutegridline.png")}
          />
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={menuPcionesSalirContainerVisible}
      >
        <View style={styles.menuPcionesSalirContainerOverlay}>
          <Pressable
            style={styles.menuPcionesSalirContainerBg}
            onPress={closeMenuPcionesSalirContainer}
          />
          <MenuProfile onClose={closeMenuPcionesSalirContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  portadaSpaceBlock: {
    padding: Padding.p_3xs,
    alignItems: "center",
  },
  portadaChild: {
    borderBottomRightRadius: Border.br_31xl,
    borderBottomLeftRadius: Border.br_31xl,
    width: 364,
    height: 167,
  },
  portada: {
    width: 360,
    zIndex: 0,
  },
  imgperfilChild: {
    width: 110,
    height: 114,
  },
  imgperfil: {
    marginTop: -72,
    zIndex: 1,
  },
  menuPcionesSalirContainerOverlay: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  menuPcionesSalirContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  menupcionessalirChild: {
    width: 30,
    height: 30,
    zIndex: 0,
  },
  mingcutegridLineIcon: {
    top: 3,
    left: 3,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
    zIndex: 1,
  },
  menupcionessalir: {
    marginLeft: 147,
    top: 15,
    left: "50%",
    flexDirection: "row",
    zIndex: 2,
    position: "absolute",
  },
  cuadroportada: {
    marginTop: 3,
    zIndex: 1,
    alignItems: "center",
  },
});

export default CoverContainer;
