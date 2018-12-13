import React, {Component} from 'react';
import { Button } from "native-base";
import { Text, View, StyleSheet , TextInput } from 'react-native'

const Input = ({ 
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    placeholderTextColor,
    keyboardType,
    style,
    returnKeyType,
    onChange
    }) => {
    return (
        <View>
            <TextInput 
                autoCorrect={false}
                onChangeText={onChangeText}
                onChange={onChange}
                value={value}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style = {style}
                placeholderTextColor = {placeholderTextColor}
                keyboardType ={keyboardType}
                returnKeyType={returnKeyType}
            />
        </View>
    )
}

export { Input }
