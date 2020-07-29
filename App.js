import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
//Routes component
import HlavniStranka from "./screens/HlavniStranka";
import Ucinnost from "./screens/Ucinnost";
import Bezpecnost from "./screens/Bezpecnost";
import Ochrana from "./screens/OchranaKloubu";
import Pacient from "./screens/Pacient";
import Dostupnost from "./screens/Dostopnost";
import SPC from "./screens/Spc";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='HlavniStranka'>
        <Drawer.Screen name='HlavniStranka' component={HlavniStranka} />
        <Drawer.Screen name='Ucinnost' component={Ucinnost} />
        <Drawer.Screen name='Bezpecnost' component={Bezpecnost} />
        <Drawer.Screen name='Ochrana' component={Ochrana} />
        <Drawer.Screen name='Pacient' component={Pacient} />
        <Drawer.Screen name='Dostupnost' component={Dostupnost} />
        <Drawer.Screen name='Spc' component={SPC} />
      </Drawer.Navigator>
      <StatusBar hidden={true} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
