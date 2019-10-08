import PropTypes from 'prop-types';
import React from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import Styles from './styles';

const SwapButton = ({text, onPress}) => (
    <TouchableOpacity style={Styles.container} onPress={onPress}>
        <View style={Styles.wrapper}>
            <Image resizeMode="contain" style={Styles.icon} source={require('./images/icon.png')} />
            <Text style={Styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

export default SwapButton;