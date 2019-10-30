import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";
import Styles from "./styles";

const Container = ({ children }) => (
  <View style={Styles.container}>{children}</View>
);

Container.propTypes = {
  childern: PropTypes.any
};

export default Container;
