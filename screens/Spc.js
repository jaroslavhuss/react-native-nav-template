import React from "react";
import { WebView } from "react-native-webview";
import pdf from "../assets/biofenac-spc.pdf";
import Layout from "../components/Layout";
const Spc = () => {
  return (
    <Layout>
      <WebView source={pdf}></WebView>
    </Layout>
  );
};

export default Spc;
