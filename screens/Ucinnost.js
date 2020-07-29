import React from "react";
import { Image, StyleSheet } from "react-native";
import Layout from "../components/Layout";

const Ucinnost = () => {
  return (
    <Layout>
      <Image
        style={styles.image}
        source={require("../assets/fin_ucinnost.jpg")}
      />
    </Layout>
  );
};

export default Ucinnost;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
  },
});
