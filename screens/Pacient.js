import React from "react";
import { StyleSheet, Image } from "react-native";
import Layout from "../components/Layout";

const Pacient = () => {
  return (
    <Layout>
      <Image
        style={styles.image}
        source={require("../assets/fin_pacient.jpg")}
      />
    </Layout>
  );
};

export default Pacient;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
  },
});
