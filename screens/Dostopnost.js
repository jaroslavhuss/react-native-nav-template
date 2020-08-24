import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import Layout from "../components/Layout";
import { useNavigation } from "@react-navigation/native";

const Dostopnost = () => {
  const { navigate } = useNavigation();
  return (
    <Layout>
      <Image
        style={styles.image}
        source={require("../assets/fin_dostupnost.jpg")}
      />
      <TouchableOpacity
        onPress={() => {
          //CLG
          navigate("DostupnostJedna");
        }}
      >
        <Image
          style={styles.study}
          source={require("../assets/baleni_icon.jpg")}
        />
      </TouchableOpacity>
    </Layout>
  );
};

export default Dostopnost;
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
