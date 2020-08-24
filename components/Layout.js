import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import Menu from "../components/Menu";
import GenerickaKomponenta from "./GenerickaKomponenta";
import { GlobalContext } from "../context/GlobalContext";
const Layout = ({ children }) => {
  const { zobrazitSeparovanouComponentu } = useContext(GlobalContext);
  return (
    <View style={styles.flexniTo}>
      <View style={styles.menu}>
        <Menu />
      </View>
      <View style={styles.obsah}>{children}</View>
      {zobrazitSeparovanouComponentu ? <GenerickaKomponenta /> : <></>}
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  flexniTo: {
    flex: 2,
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  menu: {
    width: "20%",
  },
  obsah: {
    width: "80%",
  },
});
