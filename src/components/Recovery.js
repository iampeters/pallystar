//import liraries
import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import styles from '../utils/styles';
import { Container, Button, Item, } from 'native-base';
import { Input } from '../reusable/Inputs';
import Icon from 'react-native-vector-icons/dist/Ionicons';

// create a component
class Recovery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            emailError: null
        }
    }

    //   validate email
    valEmail = () => {
    
        if (this.state.email === '') {
            this.setState(()=> ({emailError: 'Please enter your email'}))
            return false
        } else {
            this.setState(()=> ({emailError: null}))
        }

        re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(this.state.email)) {
            this.setState(()=> ({emailError: 'Email not valid'}))
            return false;
        } else {
            this.setState(()=> ({emailError: null}))
        }
    }

    getData = () => {

        if (this.state.email === '') {
            this.setState(()=> ({emailError: 'Please enter your email'}))
        } else {
            this.setState(()=> ({emailError: null}))
        }

        if (this.state.email !== '') {
            
            Alert.alert(this.state.email)
        }

    }



    static navigationOptions = () => ({
        title: 'Password Recovery',
        headerStyle: {
            backgroundColor: '#f7f8fe',
            
        },
        style:{
            shadowOpacity: 0,
            shadowOffset: {
            height: 0,
        },
            shadowRadius: 0,
        },
        headerTintColor: '#319dfa',
        headerTitleStyle: {
            fontWeight: '300',
            fontFamily: 'product_sans',
            fontSize: 16
        },
        elavation: 0,
    });
    render() {
        return (
            <Container style={styles.container}>
            <View style={{marginBottom: 30}}>
                <Text style={styles.smallText}>Enter your email to recovery your password</Text>
            </View>
                <View style={styles.content}>
                    <View style={styles.inputWrapper}>
                        <View style={styles.inputHolder}>
                            <Icon name="ios-at" size={30} color="#319dfa" />
                                <Input 
                                    style={styles.inputWithIcon}
                                    placeholder = 'Email'
                                    placeholderTextColor= 'rgba(49, 157, 250, .75)'
                                    placeholderStyle={{paddingLeft: 20}}
                                    keyboardType='email-address'
                                    onChangeText={email => this.setState({email})}
                                    value={this.state.email}
                                    onChange={this.valEmail.bind(this)}
                                />
                        </View>
                        <Text style={{fontSize: 10, color: '#ef5350', width: '100%',}}>{this.state.emailError}</Text>
                   </View>
                    <View style={styles.content}>
                        <Button style={styles.loginButton} onPress={this.getData.bind(this)}>
                            <Text style={styles.main_text}>Send my password</Text>
                        </Button>
                    </View>
                </View>
            </Container>
        );
    }
}

//make this component available to the app
export default Recovery;
