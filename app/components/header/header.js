import { PropTypes } from "prop-types";
import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Styles from "./styles";

const Header = ({ onPress }) => (
  <View style={Styles.container}>
    <TouchableOpacity onPress={onPress} style={Styles.button}>
      <Image
        style={Styles.icon}
        resizeMode="contain"
        source={require("./images/gear.png")}
      />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func
};

export default Header;
