//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ProgressBarAndroid } from 'react-native';
import { Container, Left, Right, Body, Icon } from 'native-base';
import styles from '../../utils/styles';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

// create a component
class Rating extends Component {
    render() {
        return (
            <Container style={styles.tab}>
                <View style={styles.bar}>
                    <Text style={styles.h5}>Ratings</Text>
                </View>
                <View style={styles.progress}>
                    <Left style={{flex: 2}}>
                        <Text style={styles.p}>
                            5 <Ionicons name="md-star" size={15} color="#fbc02d" />
                            <Ionicons name="md-star" size={15} color="#fbc02d" />
                            <Ionicons name="md-star" size={15} color="#fbc02d" />
                            <Ionicons name="md-star" size={15} color="#fbc02d" />
                            <Ionicons name="md-star" size={15} color="#fbc02d" />
                        </Text>
                    </Left>
                    <Body style={{flex: 3}}>
                        <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.5}
                        style={{width: '100%', color: '#fbc02d'}}
                        />
                    </Body>
                    <Right>
                        <Text>( 2 )</Text>
                    </Right>
                </View>
                <View style={styles.progress}>
                    <Left style={{flex: 2}}>
                        <Text style={styles.p}>
                            4 <Ionicons name="md-star" size={15} color="#fbc02d" />
                            <Ionicons name="md-star" size={15} color="#fbc02d" />
                            <Ionicons name="md-star" size={15} color="#fbc02d" />
                            <Ionicons name="md-star" size={15} color="#fbc02d" />
                        </Text>
                    </Left>
                    <Body style={{flex: 3}}>
                        <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.5}
                        style={{width: '100%', color: '#fbc02d'}}
                        />
                    </Body>
                    <Right>
                        <Text style={styles.p}>( 12 )</Text>
                    </Right>
                </View>
                <View style={styles.progress}>
                    <Left style={{flex: 2}}>
                        <Text style={styles.p}>
                            3 <Ionicons name="md-star" size={15} color="#fbc02d" />
                            <Ionicons name="md-star" size={15} color="#fbc02d" />
                            <Ionicons name="md-star" size={15} color="#fbc02d" />
                        </Text>
                    </Left>
                    <Body style={{flex: 3}}>
                        <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.5}
                        style={{width: '100%', color: '#fbc02d'}}
                        />
                    </Body>
                    <Right>
                        <Text style={styles.p}>( 7 )</Text>
                    </Right>
                </View>
                <View style={styles.progress}>
                    <Left style={{flex: 2}}>
                        <Text style={styles.p}>
                            2 <Ionicons name="md-star" size={15} color="#fbc02d" />
                            <Ionicons name="md-star" size={15} color="#fbc02d" />
                        </Text>
                    </Left>
                    <Body style={{flex: 3}}>
                        <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.5}
                        style={{width: '100%', color: '#fbc02d'}}
                        />
                    </Body>
                    <Right>
                        <Text style={styles.p}>( 5 )</Text>
                    </Right>
                </View>
                <View style={styles.progress}>
                    <Left style={{flex: 2}}>
                        <Text style={styles.p}>1 <Ionicons name="md-star" size={15} color="#fbc02d" /></Text>
                    </Left>
                    <Body style={{flex: 3}}>
                        <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.5}
                        style={{width: '100%', color: '#fbc02d'}}
                        />
                    </Body>
                    <Right>
                        <Text style={styles.p}>( 15 )</Text>
                    </Right>
                </View>

                <View style={styles.bar}>
                    <Text style={styles.h5}>Average Rating</Text>
                    
                    <View style={styles.bar}>
                        <Text style={{fontSize: 48, color: '#fbc02d', fontFamily: 'product_sans'}}>2.5</Text>
                    </View>
                    <View style={styles.bar}>
                        <Text style={styles.p}>Base on 41 ratings</Text>
                    </View>
                </View>
            </Container>
        );
    }
}

//make this component available to the app
export default Rating;
