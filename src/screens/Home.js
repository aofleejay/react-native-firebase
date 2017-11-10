import React, { Component } from 'react'
import { Button, View } from 'react-native'
import firebase from 'react-native-firebase'
import { ADMOB_ID, SIMPLE_BANNER_UNIT_ID } from 'react-native-dotenv'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  }

  componentDidMount() {
    firebase.admob().initialize(ADMOB_ID)
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
    const Banner = firebase.admob.Banner
    return (
      <View>
        <Button
          title="Go to Jane's profile"
          onPress={() => this.navigateToProfileScreen()}
        />
        <Banner unitId={SIMPLE_BANNER_UNIT_ID}/>
      </View>
    )
  }
}

export default HomeScreen
