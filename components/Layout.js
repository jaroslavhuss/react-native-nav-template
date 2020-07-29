import React from "react";
import { View, StyleSheet } from "react-native";
import Menu from "../components/Menu";
const Layout = ({ children }) => {
  return (
    <View style={styles.flexniTo}>
      <View style={styles.menu}>
        <Menu />
      </View>
      <View style={styles.obsah}>{children}</View>
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
