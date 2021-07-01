import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

//Routes component
import HlavniStranka from "./screens/HlavniStranka";
import Indikace from "./screens/Indikace";
import LekovyProfil from "./screens/LekovyProfil";
import Davkovani from "./screens/Davkovani";
import Baleni from "./screens/Baleni";
import SPC from "./screens/Spc";

//Studie

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='HlavniStranka'>
        <Drawer.Screen name='HlavniStranka' component={HlavniStranka} />
        <Drawer.Screen name='Indikace' component={Indikace} />
        <Drawer.Screen name='LekovyProfil' component={LekovyProfil} />
        <Drawer.Screen name='Davkovani' component={Davkovani} />
        <Drawer.Screen name='Baleni' component={Baleni} />
        <Drawer.Screen name='Spc' component={SPC} />
      </Drawer.Navigator>
      <StatusBar hidden={true} />
    </NavigationContainer>
  );
}
