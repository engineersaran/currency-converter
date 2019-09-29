import React from 'react';
import EstyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/home';

EstyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $white: '#FFFFFF',
    $lightGray: '#F0F0F0',
    $border: '#979797',
    $inputText: '#797979',
});
export default () => < Home />