import React, { Component } from 'react'
import { Button } from 'react-native'
import firebase from 'react-native-firebase'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  }

  componentDidMount() {
    firebase.analytics().setCurrentScreen('Home')
  }

  navigateToProfileScreen() {
    firebase.analytics().logEvent('click_profile', {
      timestamp: new Date().toLocaleString(),
    })

    const { navigate } = this.props.navigation    
    navigate('Profile', { name: 'Jane' })
  }

  render() {
    
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => this.navigateToProfileScreen()}
      />
    )
  }
}

export default HomeScreen
