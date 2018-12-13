//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../../utils/styles';
import { Container, Left, Right, Body, Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/dist/FontAwesome5';

// create a component
class Rewards extends Component {
    render() {
        return (
            <Container style={styles.tab}>
                <View style={styles.progress}>
                    <Left style={{flex: 1}}>
                        <Ionicons name="money-bill" size={40} />
                        <Text note>&#x20a6; 1000</Text>
                    </Left>
                    <Body style={{flex: 4, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                        <Text style={styles.h5}>Gaining Experience</Text>
                        <Text note style={styles.pLight}>Complete 50 challenges using one weapon</Text>
                    </Body>
                </View>
            </Container>
        );
    }
}

//make this component available to the app
export default Rewards;
