//import liraries
import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Container } from 'native-base';
import styles from '../utils/styles';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

// create a component
class Notifications extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-notifications" size={30} color={tintColor}/>
        ),
      };

   constructor(props) {
       super(props)
        this. state = {
            isLoading: true,
            username: ''
        }

        setTimeout(() => {
          this.setState(()=> ({isLoading: false}))
        }, 2000);
    }

    render() {
        // const { navigation } = this.props;
        // const data = navigation.getParam('response', 'NO user');

        if (this.state.isLoading) {
            return (
                <Container style={styles.container}>
                    <ActivityIndicator size="large" color="#319dfa" />
                </Container>
            )
        } else {

            return (
                <Container style={styles.container}>
                    <Text style={styles.text}>Notifications</Text>
                    {/* <Text style={styles.text}>Your fullname is, {data}</Text> */}
                </Container>
            );
        }
    }
}

//make this component available to the app
export default Notifications;
