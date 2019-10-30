import PropTypes from "prop-types";
import React from "react";
import { View, Image } from "react-native";
import Styles from "./styles";

const Icon = ({ visible, checkMark }) => {
  const iconStyles = [Styles.icon];
  if (visible) {
    iconStyles.push(Styles.iconVisible);
  }
  return (
    <View style={iconStyles}>
      {checkMark ? (
        <Image
          source={require("./images/check.png")}
          style={Styles.checkIcon}
          resizeMode="contain"
        />
      ) : null}
    </View>
  );
};

Icon.propTypes = {
  visible: PropTypes.bool,
  checkMark: PropTypes.bool
};

export default Icon;
