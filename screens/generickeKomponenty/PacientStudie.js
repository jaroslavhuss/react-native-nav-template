import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PacientStudie = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigate("Pacient");
        }}
      >
        <Image
          style={styles.obrazek}
          source={require("../../assets/pacient_studie.jpg")}
          resizeMode='contain'
        />
      </TouchableOpacity>
    </View>
  );
};

export default PacientStudie;
const styles = StyleSheet.create({
  obrazek: {
    position: "absolute",
    display: "flex",
    top: 0,
    left: 0,
    width: "100%",
    flex: 1,
    marginTop: -390,
    padding: 200,
  },
});
