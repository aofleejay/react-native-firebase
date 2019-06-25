import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'react-native-firebase'

const REMOTE_CONFIG_CACHE_DURATION = 3600

const remoteConfig = firebase.config()
remoteConfig.setDefaults({
  greetingMessage: 'Sa wad de krub',
})

export default class App extends Component {
  state = {
    greetingMessage: '',
  }

  componentDidMount() {
    if (__DEV__) {
      remoteConfig.enableDeveloperMode()
    }

    remoteConfig
      .fetch(REMOTE_CONFIG_CACHE_DURATION)
      .then(() => remoteConfig.activateFetched())
      .then(activated => {
        if (!activated) console.log('Fetched data not activated')
        return remoteConfig.getValue('greeting_message')
      })
      .then(greetingMessage =>
        this.setState({ greetingMessage: greetingMessage.val() })
      )
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
})
