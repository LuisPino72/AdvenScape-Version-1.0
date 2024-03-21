const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SignIn from "./screens/SignIn";
import Feed from "./screens/Feed";
import ResultBuscado from "./components/ResultBuscado";
import FrontPage from "./screens/FrontPage";
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassword";
import MessageEmail from "./components/MessageEmail";
import NueaPunlicacion from "./components/NueaPunlicacion";
import EditProfile from "./screens/EditProfile";
import ChangePassword from "./screens/ChangePassword";
import MessageChangePassword from "./components/MessageChangePassword";
import Serch from "./screens/Serch";
import Fovorite from "./screens/Fovorite";
import SaveMessage from "./components/SaveMessage";
import MessageSignUp from "./components/MessageSignUp";
import MenuProfile from "./components/MenuProfile";
import SignOutMessage from "./components/SignOutMessage";
import BarraInferior from "./components/BarraInferior";
import Profile from "./screens/Profile";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="FrontPage"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Feed"
                component={Feed}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FrontPage"
                component={FrontPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Serch"
                component={Serch}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Fovorite"
                component={Fovorite}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
