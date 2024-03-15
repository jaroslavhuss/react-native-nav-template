import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
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
            navigation.navigate("Spc");
          }}
        >
          {" "}
          <Text style={styles.item}>SPC</Text>
        </Text>
      </View>
      <Image
        style={styles.krabicka}
        source={require("../assets/krabicka_logo2.png")}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  krabicka:{
    resizeMode:"contain",
    flex:1,
    width:230
  },
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
