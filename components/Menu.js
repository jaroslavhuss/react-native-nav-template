import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        style={styles.menuItem}
        onPress={() => {
          navigation.navigate("HlavniStranka");
        }}
      >
        Hlavní Stranka
      </Text>
      <Text
        style={styles.menuItem}
        onPress={() => {
          navigation.navigate("PrvniStranka");
        }}
      >
        První Stranka
      </Text>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuItem: {
    margin: 10,
  },
});
