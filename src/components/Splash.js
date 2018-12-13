//import liraries
import { Container } from 'native-base';
import React, { Component } from 'react';
import { Text, StatusBar, } from 'react-native';
import styles from '../utils/styles';

// create a component
class Splash extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('DrawerNavigator')
        }, 2000);
    }
    static navigationOptions = {
        header: null
      }
    render() {
        return (
            <Container style={styles.container}>
                <StatusBar backgroundColor="#056cc7" barStyle="light-content"/>
                <Text style={styles.topText}>wi-monito</Text>
                <Text style={styles.subText}>Quiz App</Text>
            </Container>
        );
    }
}


//make this component available to the app
export default Splash;
