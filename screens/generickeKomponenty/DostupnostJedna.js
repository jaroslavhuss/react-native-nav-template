import React, { useContext } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { GlobalContext } from "../../context/GlobalContext";

const DostupnostJedna = () => {
  const { vypniZapniSeparovanouComponentu, vyberComponentu } = useContext(
    GlobalContext
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          vypniZapniSeparovanouComponentu(false);
        }}
      >
        <Image
          style={styles.obrazek}
          source={require("../../assets/dostupnost_jedna.jpg")}
          resizeMode='contain'
        />
      </TouchableOpacity>
      <Text
        onPress={() => {
          vyberComponentu("DOSTUPNOST2");
        }}
        style={styles.sipka}
      >
        POKRAČOVAT
      </Text>
    </View>
  );
};

export default DostupnostJedna;
const styles = StyleSheet.create({
  obrazek: {
    position: "absolute",
    display: "flex",
    top: 0,
    left: 0,
    width: "100%",

    flex: 1,
    marginTop: -385,
  },
  sipka: {
    position: "absolute",
    bottom: 0,
    left: "55%",
    marginBottom: 30,
    fontWeight: "bold",
    padding: 10,
  },
  container: {
    width: "100%",
    height: "100%",

    position: "relative",
  },
});
