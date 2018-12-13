//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Container, Button, Content,} from 'native-base'

// components
import { Input } from '../reusable/Inputs'

// icons
import Icon from 'react-native-vector-icons/dist/Ionicons';

// stylesheets
import styles from '../utils/styles';
import InputStyles from '../utils/styles'


// create a component
class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: null,
            password: null,
            shouldDisable: true,
            emailError: null,
            passError: null,
            usernameError: null,
        }
    }

    //   validate username
      valUser = () => {
        if (this.state.username.length > 4) {
            this.setState(()=> ({usernameError: ''}))
        } else {
            this.setState(()=> ({usernameError: 'Username must contain atleast 6 characters'}))
        }
      }
    //   validate email
      valEmail = () => {

        re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(this.state.email)) {
            this.setState(()=> ({emailError: 'Email not valid'}))
            return false;
        } else {
            this.setState(()=> ({emailError: null}))
        }
      }

    //   validate password
      valPass = () => {
        
        if (this.state.password < 6) {
            this.setState(()=> ({passError: 'Password must contain atleast 6 characters'}))
        }
        re2 = /[a-z]/;
        if(!re2.test(this.state.password)) {
            this.setState(()=> ({passError: 'Password must contain atleast one lowercase letter'}))
            return false;
        }
        re3 = /[A-Z]/;
        if(!re3.test(this.state.password)) {
            this.setState(()=> ({passError: 'Password must contain atleast one uppercase letter'}))
            return false;
        }
        re1 = /[0-9]/;
        if(!re1.test(this.state.password)) {
            this.setState(()=> ({passError: 'Password must contain atleast one number'}))
            return false;
        }
        
        else {
            this.setState(()=> ({passError: null}))
        }

      }

    getData = () => {
        if (this.state.username === null) {
            this.setState(()=> ({usernameError: 'Field is required'}))
        } else if (this.state.username.length <= 5) {
            this.setState(()=> ({usernameError: 'Username must contain atleast 5 characters'}))
        } else {
            this.setState(()=> ({usernameError: null}))
        }

        if (this.state.email === null) {
            this.setState(()=> ({emailError: 'Field is required'}))
        } else {
            this.setState(()=> ({emailError: null}))
        }

        if (this.state.password === null) {
            this.setState(()=> ({passError: 'Field is required'}))
        } else {
            this.setState(()=> ({passError: null}))
        }

        if (this.state.email !== null && this.state.username !== null && this.state.password !== null) {
            
            Alert.alert(`${this.state.email} ${this.state.username}`)
        }

    }

    checkBtn() {
        if (this.state.shouldDisable) {
            this.state.shouldDisable = false
        } else {
            this.state.shouldDisable = false
        }
    }


      static navigationOptions = () => ({
        title: 'Sign up',
        headerStyle: {
          backgroundColor: '#f7f7f7',
          
        },
        headerTintColor: '#319dfa',
        headerTitleStyle: {
            fontWeight: '300',
            fontFamily: 'product_sans',
            fontSize: 16
        },
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
                                placeholder = 'Username'
                                placeholderTextColor= 'rgba(49, 157, 250, .75)'
                                placeholderStyle={{paddingLeft: 20}}
                                onChangeText={username => this.setState({username})}
                                value={this.state.username}
                                returnKeyType='next'
                                onChange={this.valUser.bind(this)}
                            />
                        </View>
                        <Text style={{fontSize: 10, color: '#ef5350', width: '100%',}}>{this.state.usernameError}</Text>
                    </View>
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
                                returnKeyType='next'
                                onChange={this.valEmail.bind(this)}
                            />
                        </View>
                        <Text style={{fontSize: 10, color: '#ef5350', width: '100%',}}>{this.state.emailError}</Text>
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
                        <Text style={{fontSize: 10, color: '#ef5350', width: '100%',}}>{this.state.passError}</Text>
                    </View>
                        <View style={styles.content}>
                            <Button style={styles.loginButton} onPress={this.getData.bind(this)}>
                                <Text style={styles.main_text}>Sign me up</Text>
                            </Button>
                        </View>
                </View>
            </Container>
        );
    }
}

//make this component available to the app
export default Register;
