
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alret,
  Button
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

import {
  NavigationActions
} from 'react-navigation';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login Function',
    header: null,
    
  };
  callFromApi(){

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

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.goToMainScreen.bind(this)}
          title="Learn More"
          color="#fff"
          accessibilityLabel="Learn more about this purple button"
        />
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                this.goToMainScreen();
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => this.callFromApi()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00C752',
  },
});