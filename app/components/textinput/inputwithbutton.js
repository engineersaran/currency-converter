import PropTypes from 'prop-types';
import React from 'react';
import { View, TextInput, TouchableHighlight, Text } from 'react-native';
import color from 'color';
import Styles from './styles';

const InputWithButton = ({
    editable,
    onPress,
    buttonText,
    ...props,
}) => {

    const underlayColor = color(Styles.$buttonBackgroundColorBase).darken(Styles.$buttonBackgroundColorModifier);
    const containerStyles = [Styles.container];
    if (editable === false) {
        containerStyles.push(Styles.containerDisabled);
    }
    return (
        <View style={containerStyles}>
            <TouchableHighlight
                onPress={onPress}
                style={Styles.buttonContainer}
                underlayColor={underlayColor}>
                <Text style={Styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={Styles.separator} />
            <TextInput style={Styles.input} underlineColorAndroid="transparent" {...props} />
        </View>
    );
};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
};

export default InputWithButton;