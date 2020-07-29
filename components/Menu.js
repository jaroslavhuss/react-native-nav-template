import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../assets/white_logo.png";
import bgImg from "../assets/menu_background.jpg";

const Menu = () => {
  const navigation = useNavigation();
  const [menuPolozka, setMenuPolozka] = useState(
    navigation.dangerouslyGetState().index
  );
  return (
    <ImageBackground source={bgImg} style={styles.back}>
      <View>
        <TouchableOpacity
          onPress={() => {
            setMenuPolozka(navigation.dangerouslyGetState().index);
            navigation.navigate("HlavniStranka");
          }}
          style={{ padding: 10 }}
        >
          <Image source={Logo} style={styles.logo} />
        </TouchableOpacity>
        <View style={styles.menuFlex}>
          <Text
            style={styles.menuItem}
            onPress={(e) => {
              setMenuPolozka(navigation.dangerouslyGetState().index);
              navigation.navigate("Ucinnost");
            }}
          >
            <Text style={menuPolozka === 1 ? styles.active : ""}>Účinnost</Text>
          </Text>
          <Text
            style={styles.menuItem}
            onPress={(e) => {
              setMenuPolozka(navigation.dangerouslyGetState().index);
              navigation.navigate("Bezpecnost");
            }}
          >
            <Text style={menuPolozka === 2 ? styles.active : ""}>
              Bezpečnost
            </Text>
          </Text>
          <Text
            style={styles.menuItem}
            onPress={() => {
              setMenuPolozka(navigation.dangerouslyGetState().index);
              navigation.navigate("Ochrana");
            }}
          >
            <Text style={menuPolozka === 3 ? styles.active : ""}>
              Ochrana kloubů
            </Text>
          </Text>
          <Text
            style={styles.menuItem}
            onPress={() => {
              setMenuPolozka(navigation.dangerouslyGetState().index);
              navigation.navigate("Pacient");
            }}
          >
            <Text style={menuPolozka === 4 ? styles.active : ""}>Pacient</Text>
          </Text>
          <Text
            style={styles.menuItem}
            onPress={() => {
              setMenuPolozka(navigation.dangerouslyGetState().index);
              navigation.navigate("Dostupnost");
            }}
          >
            <Text style={menuPolozka === 5 ? styles.active : ""}>
              Dostupnost
            </Text>
          </Text>
          <Text
            style={styles.menuItem}
            onPress={() => {
              setMenuPolozka(navigation.dangerouslyGetState().index);
              navigation.navigate("Spc");
            }}
          >
            {" "}
            <Text style={menuPolozka === 6 ? styles.active : ""}>SPC</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
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
    marginTop: 180,
  },
  active: {
    color: "purple",
  },
  back: {
    width: "100%",
    height: "100%",
  },
});
