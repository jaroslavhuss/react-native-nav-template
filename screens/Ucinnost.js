import React, { useContext } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import Layout from "../components/Layout";
import { GlobalContext } from "../context/GlobalContext";

const Ucinnost = () => {
  const { vypniZapniSeparovanouComponentu, vyberComponentu } = useContext(
    GlobalContext
  );
  const zpracujHelpera = () => {
    vypniZapniSeparovanouComponentu(true);
    vyberComponentu("UCINNOST");
  };

  return (
    <Layout>
      <Image
        style={styles.image}
        source={require("../assets/fin_ucinnost.jpg")}
      />
      <TouchableOpacity onPress={zpracujHelpera}>
        <Image
          style={styles.study}
          source={require("../assets/study-icon.png")}
        />
      </TouchableOpacity>
    </Layout>
  );
};

export default Ucinnost;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
  },
  study: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 222,
    width: 60,
    height: 50,
    marginLeft: 100,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
