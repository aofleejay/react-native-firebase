import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'react-native-firebase'

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  }

  componentDidMount() {
    firebase.analytics().setCurrentScreen('Profile')    
  }

  render() {
    const { name } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
  },
}

export default ProfileScreen
