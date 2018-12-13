import React, {Component} from 'react';
import { Button } from "native-base";
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from '../utils/styles';

const Buttons = ({ onPress, children, style}) => {
    return (
        <TouchableOpacity onPress={ onPress } style={style}>
            <Text style={styles.text}> { children } </Text>
        </TouchableOpacity>
    )
}

export { Buttons }