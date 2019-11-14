import React from "react";
import EstyleSheet from "react-native-extended-stylesheet";
import Navigator from "./config/routes";
import { AlertProvider } from "./components/alert";

EstyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $primaryGreen: "#00BD9D",
  $primaryOrange: "#D57A66",
  $primaryPurple: "#9E768F",
  $white: "#FFFFFF",
  $lightGray: "#F0F0F0",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $darkText: "#343434"
});
export default () => (
  <AlertProvider>
    <Navigator />
  </AlertProvider>
);
