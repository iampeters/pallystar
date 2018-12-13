/**
 * Pallystar app built by Peters Chikezie
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {Platform, StatusBar, View, Text} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import { Root } from 'native-base'
import Home from "./src/components/Home";
import Login from './src/components/Login';
import Register from './src/components/Register';
import Recovery from './src/components/Recovery';


export default class App extends Component {
  
  render() {
    const { navigation } = this.props
    return (
       <Root>
          <StatusBar backgroundColor="##61821" barStyle="light-content"/>
          <AppNavigator screenProps={navigation} />
       </Root>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
      screen: Home,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          backgroundColor: '#f7f8fe',
        }
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          backgroundColor: '#f7f8fe',
        }
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          backgroundColor: '#f7f8fe',
        }
      }
    },
    Recovery: {
      screen: Recovery,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          backgroundColor: '#f7f8fe',
        }
      }
    },
})
