/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
    StackNavigator,
    NavigationActions
} from 'react-navigation';

//import screen
import LoginScreen from './screen/login';
import MainScreen from './screen/main';

export default class AppScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
        
    };
 componentWillMount(){
    this.goToMainScreen();
 }

 goToMainScreen(){
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Main'})
        ]
        })
    this.props.navigation.dispatch(resetAction)
 }
 goToLoginScreen(){
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Login'})
        ]
        })
    this.props.navigation.dispatch(resetAction)
 }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Workshop
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const workshop = StackNavigator(
    {
    App: { screen: AppScreen},
    Main: { screen: MainScreen },
    Login: { screen: LoginScreen },
    },{ 
        headerMode: 'screen' 
    } 
);

AppRegistry.registerComponent('worksop', () => workshop);