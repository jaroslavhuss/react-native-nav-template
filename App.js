import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GlobalProvider } from "./context/GlobalContext";

//Routes component
import HlavniStranka from "./screens/HlavniStranka";
import Ucinnost from "./screens/Ucinnost";
import Bezpecnost from "./screens/Bezpecnost";
import Ochrana from "./screens/OchranaKloubu";
import Pacient from "./screens/Pacient";
import Dostupnost from "./screens/Dostopnost";
import SPC from "./screens/Spc";

//Studie
import UcinnostStudie from "./screens/generickeKomponenty/Ucinnost";
import BezpecnostStudie from "./screens/generickeKomponenty/BezpecnostStudie";
import OchranaKloubuStudie from "./screens/generickeKomponenty/OchranaKloubuStudie";
import PacientStudie from "./screens/generickeKomponenty/PacientStudie";
import DostupnostStudieJedna from "./screens/generickeKomponenty/DostupnostJedna";
import DostupnostStudieDva from "./screens/generickeKomponenty/DostupnostDva";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <GlobalProvider>
        <Drawer.Navigator initialRouteName='HlavniStranka'>
          <Drawer.Screen name='HlavniStranka' component={HlavniStranka} />

          <Drawer.Screen name='Ucinnost' component={Ucinnost} />
          <Drawer.Screen name='UcinnostStudie' component={UcinnostStudie} />

          <Drawer.Screen name='Bezpecnost' component={Bezpecnost} />
          <Drawer.Screen name='BezpecnostStudie' component={BezpecnostStudie} />

          <Drawer.Screen name='Ochrana' component={Ochrana} />
          <Drawer.Screen name='OchranaStudie' component={OchranaKloubuStudie} />

          <Drawer.Screen name='Pacient' component={Pacient} />
          <Drawer.Screen name='PacientStudie' component={PacientStudie} />

          <Drawer.Screen name='Dostupnost' component={Dostupnost} />
          <Drawer.Screen
            name='DostupnostJedna'
            component={DostupnostStudieJedna}
          />
          <Drawer.Screen name='DostupnostDva' component={DostupnostStudieDva} />

          <Drawer.Screen name='Spc' component={SPC} />
        </Drawer.Navigator>
        <StatusBar hidden={true} />
      </GlobalProvider>
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
