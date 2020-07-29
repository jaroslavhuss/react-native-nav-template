import React from "react";
import { StyleSheet, Image } from "react-native";
import Layout from "../components/Layout";
const Bezpecnost = () => {
  return (
    <Layout>
      <Image
        style={styles.image}
        source={require("../assets/fin_bezpecnost.jpg")}
      />
    </Layout>
  );
};

export default Bezpecnost;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
  },
});
