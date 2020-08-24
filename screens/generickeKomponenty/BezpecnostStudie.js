import React, { useContext } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalContext } from "../../context/GlobalContext";

const BezpecnostStudie = () => {
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
          source={require("../../assets/nejnizsi-riziko-help.jpg")}
          resizeMode='contain'
        />
      </TouchableOpacity>
    </View>
  );
};

export default BezpecnostStudie;
const styles = StyleSheet.create({
  obrazek: {
    position: "absolute",
    display: "flex",
    top: 0,
    left: 0,
    width: "100%",
    flex: 1,
    marginTop: -300,
  },
});
