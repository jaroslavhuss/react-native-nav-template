import React from "react";
import { StyleSheet, Image } from "react-native";
import Layout from "../components/Layout";

const OchranaKloubu = () => {
  return (
    <Layout>
      <Image
        style={styles.image}
        source={require("../assets/fin_ochrana-kloubu.jpg")}
      />
    </Layout>
  );
};

export default OchranaKloubu;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
  },
});
