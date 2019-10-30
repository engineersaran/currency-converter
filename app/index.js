import React from "react";
import EstyleSheet from "react-native-extended-stylesheet";
import CurrencyList from "./screens/currencyList";

EstyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $white: "#FFFFFF",
  $lightGray: "#F0F0F0",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $darkText: "#343434"
});
export default () => <CurrencyList />;
