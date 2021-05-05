import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Analytics from 'expo-firebase-analytics'; 

const HlavniStranka = () => {
  Analytics.logEvent('hlavni_stranka', {
    contentType: 'text', 
    itemId: 'Expo rocks!', 
    method: 'facebook'
  });
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Indikace");
      }}
    >
      <ImageBackground
        source={require("../assets/splash.png")}
        style={styles.back}
      ></ImageBackground>
    </TouchableOpacity>
  );
};

export default HlavniStranka;
const styles = StyleSheet.create({
  back: {
    width: "100%",
    height: "100%",
  },
});
