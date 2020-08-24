import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../assets/white_logo.png";
import bgImg from "../assets/menu_background.jpg";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={bgImg} style={styles.back}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HlavniStranka");
          }}
          style={{ padding: 10 }}
        >
          <Image source={Logo} style={styles.logo} />
        </TouchableOpacity>
        <View style={styles.menuFlex}>
          <Text
            style={styles.menuItem}
            onPress={(e) => {
              navigation.navigate("Ucinnost");
            }}
          >
            <Text>Účinnost</Text>
          </Text>
          <Text
            style={styles.menuItem}
            onPress={(e) => {
              navigation.navigate("Bezpecnost");
            }}
          >
            <Text>Bezpečnost</Text>
          </Text>
          <Text
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate("Ochrana");
            }}
          >
            <Text>Ochrana kloubů</Text>
          </Text>
          <Text
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate("Pacient");
            }}
          >
            <Text>Pacient</Text>
          </Text>
          <Text
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate("Dostupnost");
            }}
          >
            <Text>Dostupnost</Text>
          </Text>
          <Text
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate("Spc");
            }}
          >
            {" "}
            <Text>SPC</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuItem: {
    padding: 15,
    color: "white",
    textAlign: "left",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  menuFlex: {
    justifyContent: "space-around",
    marginTop: 180,
  },
  active: {
    color: "purple",
  },
  back: {
    width: "100%",
    height: "100%",
  },
});
