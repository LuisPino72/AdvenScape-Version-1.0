import React, { useCallback } from "react";
import { View, Text, StyleSheet, Pressable, Share } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const NueaPunlicacion = ({ onClose }) => {
  const navigation = useNavigation();

  const onBotonGuardarClick = useCallback(async () => {
    try {
      const result = await Share.share({
        message: "Publicado",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <View style={styles.nueapunlicacion}>
      <View style={styles.descrioncuadro}>
        <Text style={styles.descripcin}>Descripción</Text>
        <View style={styles.descrioncuadroChild} />
      </View>
      <View style={styles.botonesDeAbajo}>
        <Pressable style={styles.botonfoto}>
          <Text style={[styles.fotovideo, styles.publicarFlexBox]}>
            Foto/Video
          </Text>
        </Pressable>
        <Pressable
          style={[styles.botonguardar, styles.botonguardarBorder]}
          onPress={onBotonGuardarClick}
        >
          <Text style={[styles.publicar, styles.publicarFlexBox]}>
            Publicar
          </Text>
        </Pressable>
        <Pressable
          style={[styles.botoncancelar, styles.botonguardarBorder]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.publicar, styles.publicarFlexBox]}>
            Cancelar
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  publicarFlexBox: {
    flex: 1,
    textAlign: "center",
    letterSpacing: 0,
  },
  botonguardarBorder: {
    paddingVertical: Padding.p_5xs,
    borderColor: Color.colorGainsboro_200,
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  descripcin: {
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    alignSelf: "stretch",
  },
  descrioncuadroChild: {
    backgroundColor: Color.colorGray_200,
    borderColor: Color.colorGray_100,
    height: 86,
    marginTop: 1,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
  },
  descrioncuadro: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  fotovideo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    flex: 1,
  },
  botonfoto: {
    width: 149,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
    borderColor: Color.colorGainsboro_200,
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  publicar: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray_100,
  },
  botonguardar: {
    width: 102,
    paddingHorizontal: Padding.p_6xs,
  },
  botoncancelar: {
    width: 111,
    paddingHorizontal: Padding.p_3xs,
  },
  botonesDeAbajo: {
    width: 240,
    flexWrap: "wrap",
    marginTop: 4,
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  nueapunlicacion: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    width: 269,
    height: 235,
    alignItems: "flex-end",
    paddingVertical: Padding.p_8xs,
    maxWidth: "100%",
    maxHeight: "100%",
    paddingHorizontal: Padding.p_3xs,
    overflow: "hidden",
  },
});

export default NueaPunlicacion;
