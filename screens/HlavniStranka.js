import React from "react";
import {
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import bg from "../assets/1.png";
import { useNavigation } from "@react-navigation/native";

const HlavniStranka = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Ucinnost");
      }}
    >
      <ImageBackground source={bg} style={styles.back}></ImageBackground>
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
