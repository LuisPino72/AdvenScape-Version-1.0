import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import BrraSuperior from "../components/BrraSuperior";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, FontSize } from "../GlobalStyles";

const FrontPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frontPage}>
      <BrraSuperior
        wifi={require("../assets/wifi.png")}
        cellularConnection={require("../assets/cellular-connection.png")}
        cap={require("../assets/cap.png")}
        brraSuperiorPosition="unset"
        brraSuperiorHeight="unset"
      />
      <Image
        style={styles.frontPageChild}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <View style={[styles.welcome, styles.introPosition]}>
        <Image
          style={styles.advenscapeMesaDeTrabajo11}
          contentFit="cover"
          source={require("../assets/advenscape-mesa-de-trabajo-1-1.png")}
        />
      </View>
      <View style={[styles.intro, styles.introPosition]}>
        <Text style={[styles.connectWithTravelersContainer, styles.go1Typo]}>
          <Text>
            <Text style={styles.connect}>{`Connect  `}</Text>
            <Text style={styles.withTravelersFrom}>
              with travelers from around the word
            </Text>
          </Text>
        </Text>
      </View>
      <Pressable
        style={[styles.botongo, styles.introPosition]}
        onLongPress={() => navigation.navigate("SignIn")}
      >
        <Image
          style={[styles.botongoChild, styles.go1Layout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <TouchableOpacity
          style={styles.go}
          activeOpacity={0.5}
          onLongPress={() => navigation.navigate("SignIn")}
        >
          <Text style={[styles.go1, styles.go1Layout]}>Go</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  introPosition: {
    left: "50%",
    position: "absolute",
    alignItems: "center",
  },
  go1Typo: {
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
    alignItems: "center",
  },
  go1Layout: {
    height: 46,
    width: 49,
  },
  frontPageChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 1,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  advenscapeMesaDeTrabajo11: {
    width: 308,
    height: 141,
  },
  welcome: {
    marginLeft: -152,
    top: 32,
    width: 303,
    zIndex: 2,
    height: 141,
    justifyContent: "center",
  },
  connect: {
    color: Color.colorBlack,
  },
  withTravelersFrom: {
    color: Color.colorWhite,
  },
  connectWithTravelersContainer: {
    fontSize: 30,
    alignSelf: "stretch",
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
    flex: 1,
  },
  intro: {
    marginTop: -56,
    marginLeft: -164,
    top: "50%",
    width: 327,
    height: 155,
    padding: Padding.p_3xs,
    zIndex: 3,
    justifyContent: "center",
  },
  botongoChild: {
    zIndex: 0,
  },
  go1: {
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  go: {
    left: 0,
    top: 0,
    position: "absolute",
    zIndex: 1,
  },
  botongo: {
    marginLeft: -25,
    bottom: 53,
    justifyContent: "flex-end",
    zIndex: 4,
  },
  frontPage: {
    backgroundColor: Color.colorWhite,
    height: 650,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default FrontPage;
