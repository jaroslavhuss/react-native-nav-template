import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { GlobalContext } from "../context/GlobalContext";
import BezpecnostStudie from "../screens/generickeKomponenty/BezpecnostStudie";
import OchranaKloubuStudie from "../screens/generickeKomponenty/OchranaKloubuStudie";
import PacientStudie from "../screens/generickeKomponenty/PacientStudie";
import UcinnostStudie from "../screens/generickeKomponenty/Ucinnost";
import DostupnostJedna from "../screens/generickeKomponenty/DostupnostJedna";
import DostupnostDva from "../screens/generickeKomponenty/DostupnostDva";
const GenerickaKomponenta = () => {
  const { komponenta } = useContext(GlobalContext);
  return (
    <View style={styles.popik}>
      {komponenta === "BEZPECNOST" ? <BezpecnostStudie /> : <></>}
      {komponenta === "OCHRANA-KLOUBU" ? <OchranaKloubuStudie /> : <></>}
      {komponenta === "PACIENT" ? <PacientStudie /> : <></>}
      {komponenta === "UCINNOST" ? <UcinnostStudie /> : <></>}
      {komponenta === "DOSTUPNOST" ? <DostupnostJedna /> : <></>}
      {komponenta === "DOSTUPNOST2" ? <DostupnostDva /> : <></>}
    </View>
  );
};

export default GenerickaKomponenta;
const styles = StyleSheet.create({
  popik: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    right: 0,
  },
});
