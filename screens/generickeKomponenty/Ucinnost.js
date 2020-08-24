import React, { useContext } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalContext } from "../../context/GlobalContext";

const UcinnostStudie = () => {
  const { vypniZapniSeparovanouComponentu } = useContext(GlobalContext);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          vypniZapniSeparovanouComponentu(false);
        }}
      >
        <Image
          style={styles.obrazek}
          source={require("../../assets/ucinnost_studie.jpg")}
          resizeMode='contain'
        />
      </TouchableOpacity>
    </View>
  );
};

export default UcinnostStudie;
const styles = StyleSheet.create({
  obrazek: {
    position: "absolute",
    display: "flex",
    top: 0,
    left: 0,
    width: "100%",
    flex: 1,
    marginTop: -280,
  },
});
