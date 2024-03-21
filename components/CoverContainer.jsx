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
      <View style={[styles.cuadroportada, styles.portadaLayout]}>
        <View style={[styles.portada, styles.portadaPosition]}>
          <Image
            style={styles.portadaChild}
            contentFit="cover"
            source={require("../assets/rectangle-2.png")}
          />
        </View>
        <View style={[styles.imgperfil, styles.portadaPosition]}>
          <Image
            style={styles.imgperfilChild}
            contentFit="cover"
            source={require("../assets/ellipse-51.png")}
          />
        </View>
        <Pressable
          style={[styles.menupcionessalir, styles.cuadroportadaPosition]}
          onPress={openMenuPcionesSalirContainer}
        >
          <Image
            style={styles.menupcionessalirChild}
            contentFit="cover"
            source={require("../assets/icon.png")}
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
  portadaLayout: {
    width: 360,
    marginLeft: -180,
  },
  portadaPosition: {
    padding: Padding.p_3xs,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  cuadroportadaPosition: {
    left: "50%",
    position: "absolute",
  },
  portadaChild: {
    borderBottomRightRadius: Border.br_31xl,
    borderBottomLeftRadius: Border.br_31xl,
    width: 364,
    height: 167,
  },
  portada: {
    top: 0,
    width: 360,
    marginLeft: -180,
  },
  imgperfilChild: {
    width: 110,
    height: 114,
  },
  imgperfil: {
    marginLeft: -65,
    top: 89,
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
    zIndex: 1,
    position: "absolute",
  },
  menupcionessalir: {
    marginLeft: 147,
    top: 15,
    flexDirection: "row",
  },
  cuadroportada: {
    top: 31,
    height: 223,
    left: "50%",
    position: "absolute",
  },
});

export default CoverContainer;
