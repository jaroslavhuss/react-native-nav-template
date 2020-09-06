import React from "react";
import { WebView } from "react-native-webview";
import pdf from "../assets/gordius-spc.pdf";
import Layout from "../components/Layout";
const Spc = () => {
  return (
    <Layout>
      <WebView
        originWhitelist={["file://*", "http://*", "https://*"]}
        source={pdf}
        allowFileAccess
        allowUniversalAccessFromFileURLs
        allowFileAccessFromFileURLs
      ></WebView>
    </Layout>
  );
};

export default Spc;
