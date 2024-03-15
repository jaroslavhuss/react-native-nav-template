import React,{useState} from "react";
import { WebView } from "react-native-webview";
import pdf from "../assets/gordius-spc.pdf";
import Layout from "../components/Layout";
import * as Analytics from 'expo-firebase-analytics'; 
import { useFocusEffect } from "@react-navigation/native";
import { View } from "react-native";
const Spc = () => {
  Analytics.logEvent('gordius_spc', {
    contentType: 'text', 
    itemId: 'Expo rocks!', 
    method: 'facebook'
  });
  const [loadComponent, setLoadComponent] = useState(false)
  useFocusEffect(() => {
      setLoadComponent(true)
      return () => {
          setLoadComponent(false)
      }
  })
  return (
    <Layout>
      <View style={{ width: "100%", height: "100%" }}>
                    {
                        loadComponent && <WebView
                            originWhitelist={["file://*", "http://*", "https://*"]}
                            source={pdf}
                            allowFileAccess
                            allowUniversalAccessFromFileURLs
                            allowFileAccessFromFileURLs
                        ></WebView>
                    }

                </View>
    </Layout>
  );
};

export default Spc;
