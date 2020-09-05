import React, { useState } from "react";
import { WebView } from "react-native-webview";
import pdf from "../assets/gordius-spc.pdf";
import { useNavigation } from "@react-navigation/native";

const Spc1 = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const { goBack } = useNavigation();
  return (
    <WebView
      onTouchStart={(e) => {
        const x = e.nativeEvent.pageX;
        setX(x);
      }}
      onTouchEnd={(e) => {
        const y = e.nativeEvent.pageX;
        setY(y);
        console.log(x, y);
        if (y > x + 100) {
          goBack();
        }
      }}
      source={pdf}
    ></WebView>
  );
};

export default Spc1;
