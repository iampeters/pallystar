//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Chart from 'react-native-chartjs';

// create a component
class Charts extends Component {
    render() {
        
        return (
            <View style={styles.container}>
                <Text>Chart</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 360,
    },
});

//make this component available to the app
export default Charts;
