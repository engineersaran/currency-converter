import PropTypes from "prop-types";
import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import Styles from "./styles";
import Icon from "./icon";

const ListItem = ({
  text,
  onPress,
  checkMark = true,
  selected = false,
  visible = true,
  customIcon = null,
  iconBackground
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={Styles.$underlayColor}>
    <View style={Styles.row}>
      <Text style={Styles.text}>{text}</Text>
      {selected ? (
        <Icon
          visible={visible}
          checkMark={checkMark}
          iconBackground={iconBackground}
        />
      ) : (
        <Icon />
      )}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  checkMark: PropTypes.bool,
  selected: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string
};

export default ListItem;
