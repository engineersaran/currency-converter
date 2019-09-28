import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import Styles from './styles';

const Logo = () => (
    <View style={Styles.container}>
        <ImageBackground
            resizeMode="contain"
            style={Styles.containerImage}
            source={require('./images/background.png')}>
            <Image
                resizeMode="contain"
                style={Styles.logo}
                source={require('./images/logo.png')} />
        </ImageBackground>
        <Text style={Styles.text}>
            Currency Converter
        </Text>
    </View>

);
export default Logo;