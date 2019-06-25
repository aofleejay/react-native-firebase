import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'react-native-firebase'

const firebaseRemoteConfig = firebase.config()

export default class App extends Component {
  state = {
    greetingMessage: '',
  }

  componentDidMount() {
    firebaseRemoteConfig
      .fetch(0)
      .then(() => firebaseRemoteConfig.activateFetched())
      .then(activated => {
        if (!activated) console.log('Fetched data not activated')
        return firebaseRemoteConfig.getValue('greeting')
      })
      .then(greeting => {
        this.setState({ greetingMessage: greeting.val() })
      })
      .catch(error => console.log('err : ', error))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.greetingMessage}</Text>
      </View>
    )
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
})
