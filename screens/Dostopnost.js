import React from "react";
import { StyleSheet, Image } from "react-native";
import Layout from "../components/Layout";

const Dostopnost = () => {
  return (
    <Layout>
      <Image
        style={styles.image}
        source={require("../assets/fin_dostupnost.jpg")}
      />
    </Layout>
  );
};

export default Dostopnost;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
  },
});
