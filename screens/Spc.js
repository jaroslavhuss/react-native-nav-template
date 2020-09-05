import React from "react";
import { WebView } from "react-native-webview";
import pdf from "../assets/gordius-spc.pdf";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

const Spc = () => {
  const { goBack } = useNavigation();
  return (
    <>
      <Text
        onPress={() => {
          goBack();
        }}
        style={{
          padding: 4,
          width: 100,
          backgroundColor: "#5290dd",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Jít zpět X
      </Text>
      <WebView
        originWhitelist={["file://*", "http://*", "https://*"]}
        source={pdf}
        allowFileAccess
        allowUniversalAccessFromFileURLs
        allowFileAccessFromFileURLs
      ></WebView>
    </>
  );
};

export default Spc;
