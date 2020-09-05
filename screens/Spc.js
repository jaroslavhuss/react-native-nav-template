import React from "react";
import { WebView } from "react-native-webview";
import pdf from "../assets/gordius-spc.pdf";
const Spc = () => {
  return <WebView source={pdf}></WebView>;
};

export default Spc;
