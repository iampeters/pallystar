//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, ToastAndroid, AsyncStorage, } from 'react-native';
import InputStyles from '../utils/styles'
import { Input } from '../reusable/Inputs'
import { Container, Button, Content,} from 'native-base'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import styles from '../utils/styles';

// create a component
class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            shouldDisable: true,
            emailError: null,
            passError: null,
        }
    }

    apiCall = ()=> {
        var url = 'http://192.168.43.191:3000/login';
        var data = {username: this.state.email, password: this.state.password};

        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json())
        .then(response => {
            
            if (response.success) {
                // Persisting data
                if (AsyncStorage.setItem('username', response.username)) {
                    this.props.navigation.navigate('Profile', { response })
                } else {
                    ToastAndroid.show('Could not persist user', 20000)
                }

            } else {
                ToastAndroid.show(response.message, 20000)
            }

        })
        .catch(error => {
            const msg = JSON.stringify(error)
            ToastAndroid.show(msg, 6000)
        });
    }

    getData = () => {
        if (this.state.email.length < 1) {
            this.setState(()=> ({emailError: 'Email is required'}))
            return false;
        } else {
            this.setState(()=> ({emailError: ''}))
        }
        if (this.state.password.length < 1) {
            this.setState(()=> ({passError: 'Password is required'}))
            return false;
        } else {
            this.setState(()=> ({passError: ''}))
        }

        if (this.state.email.length > 1 && this.state.password.length > 1) {
            // post credentials to api server
            // this.apiCall()
            this.props.navigation.navigate('DrawerNavigator');
        }
    }

    // validate password
    valPass = () => {
        
        if (this.state.password.length < 1) {
            this.setState(()=> ({passError: 'Password is required'}))
        } else {
            this.setState(()=> ({passError: null}))
        }
    }

    // validate email
    valUser = () => {
        if (this.state.email.length < 1) {
            this.setState(()=> ({emailError: 'Email is required'}))
        } else {
            this.setState(()=> ({emailError: null}))
        }
    }


    static navigationOptions = () => ({
        title: 'Sign in',
        headerStyle: {
            backgroundColor: '#f7f8fe',
        },
        headerTintColor: '#319dfa',
        headerTitleStyle: {
            fontWeight: '300',
            fontFamily: 'product_sans',
            fontSize: 16
        }
    });

    render() {
        return (
            <Container style={InputStyles.container}>
                <View style={styles.content}>
                    <View style={styles.inputWrapper}>
                        <View style={styles.inputHolder}>

                            <Icon name="ios-person" size={30} color="#319dfa" />
                            <Input 
                                style={styles.inputWithIcon}
                                placeholder = 'Username or Email'
                                placeholderTextColor= 'rgba(49, 157, 250, .75)'
                                placeholderStyle={{paddingLeft: 20}}
                                keyboardType='email-address'
                                onChangeText={email => this.setState({email})}
                                value={this.state.email}
                                returnKeyType='next'
                                onChange={this.valUser.bind(this)}
                            />
                        </View>
                        <Text style={{fontSize: 10, color: '#ef5350', width: '100%', paddingLeft: 16}}>{this.state.emailError}</Text>
                   </View>
                    <View style={styles.inputWrapper}>
                        <View style={styles.inputHolder}>
                        <Icon name="ios-lock" size={30} color="#319dfa" />
                        <Input 
                            style={styles.inputWithIcon}
                            placeholder = 'Password'
                            placeholderTextColor= 'rgba(49, 157, 250, .75)'
                            secureTextEntry = {true}
                            placeholderStyle={styles.textBoxField}
                            onChangeText={password => this.setState({password})}
                            value={this.state.password}
                            onChange={this.valPass.bind(this)}
                        
                        />
                        </View>
                        <Text style={{fontSize: 10, color: '#ef5350', width: '100%', paddingLeft: 16}}>{this.state.passError}</Text>
                   </View>
                    <View style={styles.content}>
                        <Button style={styles.loginButton} onPress={this.getData.bind(this)} >
                            <Text style={styles.main_text}>Sign in</Text>
                        </Button>
                        <Text style={styles.smallText} onPress={() => this.props.navigation.navigate('Recovery')}>Forgot password? Click here</Text>
                    </View>
                </View>
            </Container>
        );
    }
}

//make this component available to the app
export default Login;
