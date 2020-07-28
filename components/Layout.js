import React from "react";
import { View } from "react-native";
import Menu from "../components/Menu";
const Layout = ({ children }) => {
  return (
    <View>
      <Menu />
      {children}
    </View>
  );
};

export default Layout;
