import PropTypes from "prop-types";
import React from "react";
import { View, Image } from "react-native";
import Styles from "./styles";

const Icon = ({ visible, checkMark, iconBackground }) => {
  if (visible) {
    const iconStyles = [Styles.icon];
    if (visible) {
      iconStyles.push(Styles.iconVisible);
    }
    if (iconBackground) {
      iconStyles.push({ backgroundColor: iconBackground });
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
  }
  return <View style={Styles.icon} />;
};

Icon.propTypes = {
  visible: PropTypes.bool,
  checkMark: PropTypes.bool,
  iconBackground: PropTypes.string
};

export default Icon;
