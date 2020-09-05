import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Alert,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PDF from "../assets/gordius-spc.pdf";
const Menu = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{ backgroundColor: "white", height: "100%", position: "relative" }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HlavniStranka");
        }}
      >
        <Image source={require("../assets/jezek.jpg")} />
      </TouchableOpacity>
      <View style={styles.menuFlex}>
        <Text
          index='Indikace'
          style={styles.menuItem}
          onPress={() => {
            navigation.navigate("Indikace");
          }}
        >
          <Text style={styles.item}>INDIKACE</Text>
        </Text>
        <Text
          index='LekovyProfil'
          style={styles.menuItem}
          onPress={() => {
            navigation.navigate("LekovyProfil");
          }}
        >
          <Text style={styles.item}>LÉKOVÝ PROFIL</Text>
        </Text>
        <Text
          index='Davkovani'
          style={styles.menuItem}
          onPress={() => {
            navigation.navigate("Davkovani");
          }}
        >
          <Text style={styles.item}>DÁVKOVÁNÍ</Text>
        </Text>
        <Text
          index='Baleni'
          style={styles.menuItem}
          onPress={() => {
            navigation.navigate("Baleni");
          }}
        >
          <Text style={styles.item}>BALENÍ</Text>
        </Text>

        <Text
          index='Spc'
          style={styles.menuItem}
          onPress={() => {
            Alert.alert(
              "Hodláte otevřít SPC",
              "Z PDF se dostanete přetažením prstu od levého kraje ipadu",
              [{ text: "Rozumím!", onPress: () => navigation.navigate("Spc") }],
              { cancelable: false }
            );
          }}
        >
          {" "}
          <Text style={styles.item}>SPC</Text>
        </Text>
      </View>
      <Image
        style={{ position: "absolute", bottom: 0 }}
        source={require("../assets/krabicka_logo.jpg")}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuItem: {
    padding: 15,
    color: "white",
    textAlign: "left",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  menuFlex: {
    justifyContent: "space-around",
    marginTop: 80,
  },
  active: {
    color: "purple",
  },
  back: {
    width: "100%",
    height: "100%",
  },
  item: {
    color: "grey",
  },
  active: {
    color: "red",
  },
});
