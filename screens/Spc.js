import React from "react";
import { WebView } from "react-native-webview";
import pdf from "../assets/gordius-spc.pdf";
import Layout from "../components/Layout";
import * as Analytics from 'expo-firebase-analytics'; 
const Spc = () => {
  Analytics.logEvent('gordius_spc', {
    contentType: 'text', 
    itemId: 'Expo rocks!', 
    method: 'facebook'
  });
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
