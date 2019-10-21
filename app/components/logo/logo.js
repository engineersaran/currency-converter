import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  View,
  Text,
  Keyboard,
  Animated,
  Platform,
  StyleSheet
} from "react-native";
import Styles from "./styles";

const ANIMATION_DURATION = 250;

class Logo extends Component {
  static propTypes = {
    tintColor: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      containerImageWidth: new Animated.Value(Styles.$largeContainerSize),
      imageWidth: new Animated.Value(Styles.$largeImageSize)
    };
  }
  componentDidMount() {
    const name = Platform.OS === "ios" ? "Will" : "Did";
    this.keyboardDidShowListener = Keyboard.addListener(
      `keyboard${name}Show`,
      this.keyboardWillShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      `keyboard${name}Hide`,
      this.keyboardWillHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardWillShow = () => {
    const { containerImageWidth, imageWidth } = this.state;
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: Styles.$smallContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(imageWidth, {
        toValue: Styles.$smallImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };

  keyboardWillHide = () => {
    const { containerImageWidth, imageWidth } = this.state;
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: Styles.$largeContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(imageWidth, {
        toValue: Styles.$largeImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };
  render() {
    const { containerImageWidth, imageWidth } = this.state;
    const { tintColor } = this.props;
    const containerImageStyles = [
      Styles.containerImage,
      { width: containerImageWidth, height: containerImageWidth }
    ];
    const imageStyles = [
      Styles.logo,
      { width: imageWidth },
      tintColor ? { tintColor } : null
    ];
    return (
      <View style={Styles.container}>
        <Animated.View style={containerImageStyles}>
          <Animated.Image
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, containerImageStyles]}
            source={require("./images/background.png")}
          />
          <Animated.Image
            resizeMode="contain"
            style={imageStyles}
            source={require("./images/logo.png")}
          />
        </Animated.View>
        <Text style={Styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
