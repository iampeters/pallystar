//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { Container, Header, Left, Button, Right } from 'native-base';
import styles from '../utils/styles';

// create a component
class Settings extends Component {
    static navigationOptions = {
        header: true,
        drawerLabel: 'Settings',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-cog" size={30} color={tintColor} />
        ),
      };

    render() {
        return (
            <Container >
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={()=> this.props.navigation.goBack()}>
                            <Ionicons name="ios-arrow-back" size={30} color="#fff" />
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent onPress={()=> this.props.navigation.openDrawer()}>
                            <Ionicons name="md-menu" size={30} color="#fff" />
                        </Button>
                    </Right>
                </Header>
                <View style={styles.container}>
                    <Text style={styles.text}>Settings</Text>
                </View>
            </Container>
        );
    }
}


//make this component available to the app
export default Settings;
